"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, memo } from "react"

const NumberTicker = memo(({ value, duration = 1.2 }: { value: number; duration?: number }) => {
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (latest) => Math.floor(latest).toLocaleString("en-US"))
  
  useEffect(() => {
    const controls = animate(mv, value, { 
      duration, 
      ease: "easeOut",
      type: "tween"
    })
    return controls.stop
  }, [mv, value, duration])
  
  return (
    <motion.span 
      style={{ willChange: "transform" }}
    >
      {rounded}
    </motion.span>
  )
})

NumberTicker.displayName = 'NumberTicker'

export default NumberTicker
