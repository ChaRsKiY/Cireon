"use client"

import NumberTicker from "./number-ticker"
import { motion } from "framer-motion"

export default function Stats() {
  const items = [
    { value: 8, label: "launches / year", suffix: "+" },
    { value: 98, label: "CWV score", suffix: "%" },
    { value: 12, label: "clients", suffix: "+" },
    { value: 2, label: "countries", suffix: "" },
  ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="rounded-xl border bg-card p-5 text-center"
        >
          <p className="text-3xl font-semibold tabular-nums">
            <NumberTicker value={it.value} />
            {it.suffix}
          </p>
          <p className="text-xs text-muted-foreground mt-1">{it.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
