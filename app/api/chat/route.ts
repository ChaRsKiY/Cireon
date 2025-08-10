import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getOpenAI, systemPrompt } from '@/lib/openai'

type ToolCall = {
  type: 'lead.create'
  payload: {
    name?: string
    email?: string
    company?: string
    brief?: string
    budget?: string
    timeline?: string
  }
}

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json()
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Ensure session
    let sessionIdStr = sessionId as string | undefined
    if (!sessionIdStr) {
      const session = await prisma.chatSession.create({ data: {} })
      sessionIdStr = session.id
    }

    // Persist user message
    await prisma.chatMessage.create({ data: { role: 'user', content: message, sessionId: sessionIdStr } })

    const openai = getOpenAI()

    // Build context from last messages
    const history = await prisma.chatMessage.findMany({
      where: { sessionId: sessionIdStr },
      orderBy: { createdAt: 'asc' },
      take: 20,
    })

    const messages = [
      { role: 'system' as const, content: systemPrompt },
      ...history.map((m) => ({ role: m.role as 'user' | 'assistant' | 'system', content: m.content })),
    ]

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.4,
      max_tokens: 350,
      tools: [
        {
          type: 'function',
          function: {
            name: 'lead_create',
            description: 'Create a contact lead when user wants to start a project or request contact',
            parameters: {
              type: 'object',
              properties: {
                name: { type: 'string', description: 'Full name' },
                email: { type: 'string', description: 'Email address' },
                company: { type: 'string' },
                brief: { type: 'string', description: 'Project brief / message' },
                budget: { type: 'string' },
                timeline: { type: 'string' },
              },
              required: [],
            },
          },
        },
      ],
    })

    const choice = completion.choices[0]
    let assistantText = choice.message.content || ''

    // Handle tool call (function call)
    if (choice.message.tool_calls && choice.message.tool_calls.length > 0) {
      const call = choice.message.tool_calls[0]
      if (call.function?.name === 'lead_create') {
        const args = JSON.parse(call.function.arguments || '{}')
        // Validate minimally; ask follow-ups if missing key fields
        if (!args.email || !args.brief) {
          assistantText = 'To submit your request I need your email and a short brief. Could you provide them?'
        } else {
          await prisma.contactLead.create({
            data: {
              name: args.name || 'Unknown',
              email: args.email,
              company: args.company || null,
              brief: args.brief,
              budget: args.budget || null,
              timeline: args.timeline || null,
              source: 'chatbot',
              sessionId: sessionIdStr,
            },
          })
          assistantText = 'Thanks! I’m submitting your request now. Our team will contact you shortly.'
        }
      }
    }

    // Persist assistant message
    await prisma.chatMessage.create({ data: { role: 'assistant', content: assistantText, sessionId: sessionIdStr } })

    return NextResponse.json({ sessionId: sessionIdStr, message: assistantText })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}


