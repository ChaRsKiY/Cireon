"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] grid place-items-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          404
        </motion.h1>
        <motion.p
          className="mt-3 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          This page could not be found. It may have been moved or deleted.
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-accent">
            Go home
          </Link>
        </motion.div>
        <motion.div
          className="mt-10 mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-cyan-500/30 blur-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </div>
  )
}


