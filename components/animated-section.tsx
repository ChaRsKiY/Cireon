"use client"

import { motion } from "framer-motion"
import type { PropsWithChildren } from "react"

export default function AnimatedSection({ children }: PropsWithChildren) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}
