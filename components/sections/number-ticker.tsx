"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

export default function NumberTicker({ value, duration = 1.2 }: { value: number; duration?: number }) {
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (latest) => Math.floor(latest).toLocaleString("en-US"))
  useEffect(() => {
    const controls = animate(mv, value, { duration, ease: "easeOut" })
    return controls.stop
  }, [mv, value, duration])
  return <motion.span>{rounded}</motion.span>
}
