"use client"

import { motion } from "framer-motion"
import { Banknote, ShoppingBag, GraduationCap, Building2, Rocket } from "lucide-react"

const icons = [Banknote, ShoppingBag, GraduationCap, Building2, Rocket]
const items = ["Fintech", "E‑commerce", "EdTech", "Enterprise", "Startups"]

export default function Industries() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((name, i) => {
        const Icon = icons[i % icons.length]
        return (
          <motion.div
            key={i}
            className="rounded-xl border bg-card p-5 flex items-start gap-3"
          >
            <Icon className="size-5 text-primary mt-0.5" />
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-muted-foreground">Polished UI, high CWV and secure architecture.</p>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
