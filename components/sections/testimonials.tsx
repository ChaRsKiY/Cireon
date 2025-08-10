"use client"

import { motion } from "framer-motion"

const items = [
  { name: "Irene K.", role: "COO, Acme", quote: "Cireon shipped our MVP fast and helped close the round." },
  { name: "Michael S.", role: "CTO, Globex", quote: "Great CWV and a stable platform." },
]

export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {items.map((it, i) => (
        <motion.blockquote
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl border bg-card p-6"
        >
          <p className="text-sm text-muted-foreground">“{it.quote}”</p>
          <footer className="mt-3 text-sm">
            <span className="font-medium">{it.name}</span> · <span className="text-muted-foreground">{it.role}</span>
          </footer>
        </motion.blockquote>
      ))}
    </div>
  )
}
