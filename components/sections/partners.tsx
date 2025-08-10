"use client"

import { motion } from "framer-motion"

const partners = [
  "Acme Corp",
  "Globex",
  "Umbrella",
  "Initech",
  "Soylent",
  "Wonka",
  "Stark",
  "Wayne",
  "Hooli",
  "Massive Dynamic",
]

export default function Partners() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {partners.map((p, i) => (
        <motion.div
          key={p}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          className="rounded-xl border bg-card p-4 text-center text-sm text-muted-foreground"
        >
          {p}
        </motion.div>
      ))}
    </div>
  )
}
