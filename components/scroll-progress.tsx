"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-16 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 z-50"
      aria-hidden="true"
    />
  )
}
