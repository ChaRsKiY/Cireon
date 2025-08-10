import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getOpenAI, systemPrompt } from '@/lib/openai'
import { checkRateLimit } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  const { message, sessionId } = await request.json()
  if (!message || typeof message !== 'string') {
    return new Response('Message is required', { status: 400 })
  }

  // Rate limit
  const rate = await checkRateLimit(request)
  if (!rate.success) return new Response('Too many requests', { status: 429 })

  // Ensure session
  let sessionIdStr = sessionId as string | undefined
  if (!sessionIdStr) {
    const session = await prisma.chatSession.create({ data: {} })
    sessionIdStr = session.id
  }

  // Persist user message
  await prisma.chatMessage.create({ data: { role: 'user', content: message, sessionId: sessionIdStr } })

  const openai = getOpenAI()

  // Build history
  const history = await prisma.chatMessage.findMany({
    where: { sessionId: sessionIdStr },
    orderBy: { createdAt: 'asc' },
    take: 20,
  })

  const messages = [
    { role: 'system' as const, content: systemPrompt },
    ...history.map((m) => ({ role: m.role as 'user' | 'assistant' | 'system', content: m.content })),
  ]

  let leadCreated = false
  let leadAlreadyExists = false
  const stream = new ReadableStream<string>({
    async start(controller) {
      let full = ''
      try {
        const completion = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages,
          temperature: 0.4,
          max_tokens: 350,
          stream: true,
        })

        for await (const part of completion) {
          const token = part.choices?.[0]?.delta?.content || ''
          if (token) {
            full += token
            controller.enqueue(token)
          }
        }
      } catch (err) {
        controller.error(err)
      } finally {
        controller.close()
        // Persist assistant message
        if (full.trim()) {
          await prisma.chatMessage.create({ data: { role: 'assistant', content: full, sessionId: sessionIdStr! } })
        }

        // Second pass: allow function/tool call to create lead if intent & data are sufficient
        try {
          const toolCheck = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: systemPrompt },
              ...(
                await prisma.chatMessage.findMany({
                  where: { sessionId: sessionIdStr! },
                  orderBy: { createdAt: 'asc' },
                  take: 30,
                })
              ).map((m) => ({ role: m.role as 'user' | 'assistant' | 'system', content: m.content })),
            ],
            temperature: 0,
            max_tokens: 150,
            tools: [
              {
                type: 'function',
                function: {
                  name: 'lead_create',
                  description: 'Create a contact lead when user wants to start a project or request contact',
                  parameters: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      email: { type: 'string' },
                      company: { type: 'string' },
                      brief: { type: 'string' },
                      budget: { type: 'string' },
                      timeline: { type: 'string' },
                      confirm: { type: 'boolean', description: 'User explicitly confirmed sending the lead' },
                    },
                    required: [],
                  },
                },
              },
            ],
          })

          const tc = toolCheck.choices[0]
          const tool = tc.message.tool_calls?.[0]
          if (tool && tool.type === 'function' && tool.function.name === 'lead_create') {
            const args = JSON.parse(tool.function.arguments ?? '{}')
            // Check if a lead already exists for this session
            const existing = await prisma.contactLead.findFirst({ where: { sessionId: sessionIdStr! } })
            leadAlreadyExists = Boolean(existing)

            if (!existing && args.confirm === true && args.email && (args.brief || args.message)) {
              await prisma.contactLead.create({
                data: {
                  name: args.name || 'Unknown',
                  email: args.email,
                  company: args.company || null,
                  brief: args.brief || args.message,
                  budget: args.budget || null,
                  timeline: args.timeline || null,
                  source: 'chatbot',
                  sessionId: sessionIdStr!,
                },
              })
              leadCreated = true
            }
          }
        } catch {}
      }
    },
  })

  return new Response(stream as unknown as BodyInit, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'x-session-id': sessionIdStr,
      ...(leadCreated ? { 'x-lead-created': '1' } : {}),
      ...(leadAlreadyExists ? { 'x-lead-exists': '1' } : {}),
    },
  })
}


