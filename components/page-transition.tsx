"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import type { PropsWithChildren } from "react"

export default function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
        exit={{ opacity: 0, y: -12, transition: { duration: 0.35 } }}
        className="min-h-[100dvh] pt-16"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  )
}
