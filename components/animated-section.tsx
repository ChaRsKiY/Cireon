"use client"

import { motion } from "framer-motion"
import type { PropsWithChildren } from "react"
import { memo } from "react"

const AnimatedSection = memo(({ children }: PropsWithChildren) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ 
        delay: 0.2, 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        type: "tween"
      }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.section>
  )
})

AnimatedSection.displayName = 'AnimatedSection'

export default AnimatedSection
