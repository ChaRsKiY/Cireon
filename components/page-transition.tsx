"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import type { PropsWithChildren } from "react"
import { useState, useEffect } from "react"
import Image from "next/image"

function LoadingScreen() {
  const { theme } = useTheme()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.5, 1.2, 1, 1.5, 0],
          opacity: [0, 1, 1, 1, 0],
          rotate: [0, 0, 0, 360, 720]
        }}
        transition={{
          duration: 1.5,
          times: [0, 0.3, 0.6, 0.8, 1],
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <Image 
          src={theme === "dark" ? "/logo_white.png" : "/logo_black.png"} 
          width={200} 
          height={200} 
          alt="Cireon Logo" 
          className="w-32 h-32 md:w-48 md:h-48"
          priority
        />
      </motion.div>
    </motion.div>
  )
}

export default function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (pathname) {
      setIsTransitioning(true)
      setIsLoading(true)

      const minTimer = setTimeout(() => {
        setIsLoading(false)
      }, 1000)

      const checkContentLoaded = () => {
        const images = document.querySelectorAll('img')
        console.log(images)
        const imagePromises = Array.from(images).map(img => {
          if (img.complete) return Promise.resolve()
          return new Promise(resolve => {
            img.onload = resolve
            img.onerror = resolve
          })
        })

        const fontPromise = document.fonts ? document.fonts.ready : Promise.resolve()

        Promise.all([...imagePromises, fontPromise]).then(() => {
          setTimeout(() => {
            setIsTransitioning(false)
          }, 100)
        })
      }

      const contentTimer = setTimeout(checkContentLoaded, 100)

      return () => {
        clearTimeout(minTimer)
        clearTimeout(contentTimer)
      }
    }
  }, [pathname])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {/* Фон, который исчезает от краев к центру */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-40 bg-background"
            initial={{ 
              clipPath: "circle(150% at 50% 50%)"
            }}
            animate={{ 
              clipPath: "circle(0% at 50% 50%)",
              transition: { 
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1] 
              }
            }}
            exit={{ 
              opacity: 0,
              transition: { 
                duration: 0.3
              }
            }}
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { 
              duration: 0.6, 
              delay: 0,
              ease: [0.22, 1, 0.36, 1] 
            }
          }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.3 }
          }}
          className="min-h-[100dvh]"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  )
}
