"use client"

import { motion } from "framer-motion"

type Marker = { left: string; top: string; label: string }
const markers: Marker[] = [
  { left: "50%", top: "36%", label: "Vienna" },
]

export default function WorldMap() {
  return (
    <div className="w-full h-[420px] rounded-xl overflow-hidden border bg-muted/30 relative">
      <img
        src="/images/world-map.png"
        alt="World Map"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />
      {markers.map((m, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: m.left, top: m.top }}
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 12 }}
        >
          <div className="relative">
            <span className="block size-3 rounded-full bg-primary ring-2 ring-white/80 dark:ring-black/50 relative">
              <span className="absolute w-12 inset-0 left-0 top-0 rounded-full bg-primary/30 animate-ping aspect-square" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-1 text-xs px-2 py-1 rounded bg-background/80 border shadow-sm">{m.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
