"use client"

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { X, MessageSquare } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Logo from './logo'

type ChatItem = { role: 'user' | 'assistant'; content: string }

export default function Chatbot() {
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [items, setItems] = useState<ChatItem[]>([])
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<{ w: number; h: number }>({ w: 600, h: 520 })
  const resizingRef = useRef(false)

  useEffect(() => {
    if (open) listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [items, open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const send = async () => {
    if (!value.trim()) return
    const text = value.trim()
    setItems((prev) => [...prev, { role: 'user', content: text }])
    setValue('')
    setLoading(true)
    try {
      // Stream tokens
      const res = await fetch('/api/chat/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, sessionId }),
      })

      const sid = res.headers.get('x-session-id')
      if (sid) setSessionId(sid)

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let acc = ''
      // Push placeholder assistant bubble
      setItems((prev) => [...prev, { role: 'assistant', content: '' }])

      while (reader) {
        const { value: chunk, done } = await reader.read()
        if (done) break
        acc += decoder.decode(chunk, { stream: true })
        // Live update last assistant message
        setItems((prev) => {
          const copy = [...prev]
          const lastIndex = copy.length - 1
          if (lastIndex >= 0 && copy[lastIndex].role === 'assistant') {
            copy[lastIndex] = { role: 'assistant', content: acc }
          }
          return copy
        })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Toggle button */}
      {!open && (
        <Button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-50 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg w-14 h-14"
          size="icon"
          aria-label="Open Cireon AI chat"
        >
          <MessageSquare className="size-6" />
        </Button>
      )}

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="cireon-chat"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-4 right-4 z-50 rounded-3xl border bg-card shadow-xl flex flex-col"
            style={{
              width: Math.min(size.w, typeof window !== 'undefined' ? window.innerWidth * 0.92 : size.w),
              height: Math.min(size.h, typeof window !== 'undefined' ? window.innerHeight * 0.8 : size.h),
            }}
            role="dialog"
            aria-label="Cireon AI chat"
          >
            <div className="p-3 border-b flex items-center justify-between">
              <div className="flex items-center gap-2 h-5 justify-center">
                <Logo />
                <div className="font-bold">Cireon AI</div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close chat">
                <X className="size-4" />
              </Button>
            </div>

            <div ref={listRef} className="p-4 flex-1 overflow-y-auto space-y-2">
              {items.length === 0 && (
                <div className="text-xs text-muted-foreground">
                  Ask about Cireon services, process or start a project.
                </div>
              )}
              {items.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    'text-sm p-3 rounded-md max-w-[85%]',
                    m.role === 'user' ? 'ml-auto bg-primary text-primary-foreground' : 'bg-muted',
                  )}
                >
                  {m.role === 'user' ? (
                    m.content
                  ) : (
                    <div className="prose prose-sm max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-em:text-foreground prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground prose-code:text-foreground prose-pre:text-foreground prose-blockquote:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                          ul: ({ children }) => <ul className="mb-2 last:mb-0 pl-4 space-y-1">{children}</ul>,
                          ol: ({ children }) => <ol className="mb-2 last:mb-0 pl-4 space-y-1">{children}</ol>,
                          li: ({ children }) => <li className="text-sm">{children}</li>,
                          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                          em: ({ children }) => <em className="italic">{children}</em>,
                          code: ({ children }) => <code className="bg-muted-foreground/10 px-1 py-0.5 rounded text-xs font-mono">{children}</code>,
                          pre: ({ children }) => <pre className="bg-muted-foreground/10 p-2 rounded text-xs font-mono overflow-x-auto mb-2">{children}</pre>,
                          blockquote: ({ children }) => <blockquote className="border-l-2 border-muted-foreground/20 pl-3 italic mb-2">{children}</blockquote>,
                          a: ({ href, children }) => <a href={href} className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">{children}</a>,
                          h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-base font-bold mb-2">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-sm font-bold mb-1">{children}</h3>,
                        }}
                      >
                        {m.content}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              ))}
              {loading && <div className="text-xs text-muted-foreground">Thinking…</div>}
            </div>

            <div className="p-3 border-t flex gap-2">
              <Input
                placeholder="Type your message…"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
              />
              <Button onClick={send} disabled={loading || !value.trim()}>
                Send
              </Button>
            </div>

            {/* Resize handle (top-left corner, outside) */}
            <div
              onMouseDown={(e) => {
                e.preventDefault()
                resizingRef.current = true
                const startX = e.clientX
                const startY = e.clientY
                const startW = size.w
                const startH = size.h
                const onMove = (ev: MouseEvent) => {
                  if (!resizingRef.current) return
                  const deltaX = ev.clientX - startX
                  const deltaY = ev.clientY - startY
                  // Top-left handle: invert deltas so pulling left/up increases size
                  const nextW = Math.max(360, startW - deltaX)
                  const nextH = Math.max(420, startH - deltaY)
                  setSize({ w: nextW, h: nextH })
                }
                const onUp = () => {
                  resizingRef.current = false
                  window.removeEventListener('mousemove', onMove)
                  window.removeEventListener('mouseup', onUp)
                }
                window.addEventListener('mousemove', onMove)
                window.addEventListener('mouseup', onUp)
              }}
              className="absolute -top-2 -left-2 w-9 h-9 cursor-nw-resize group"
              aria-label="Resize chat"
              title="Resize"
            >
              {/* Single curved line (SVG arc following the corner radius) */}
              <svg
                className="absolute inset-0 pointer-events-none text-muted-foreground/40 group-hover:text-muted-foreground/60 transition-colors duration-200"
                viewBox="0 0 30 30"
                fill="none"
              >
                {/* Arc from top-right to bottom-left (quarter circle) */}
                <path d="M 24 0 A 24 24 0 0 0 0 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


