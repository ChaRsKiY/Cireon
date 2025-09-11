"use client"

import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import { getGsap } from "@/lib/gsap"

const Hero3D = dynamic(() => import("./hero-3d"), { ssr: false })

export default function HeroMotion() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const headingRef = useRef<HTMLHeadingElement | null>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      mx.set(x)
      my.set(y)
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [mx, my])

  const glow1 = useMotionTemplate`radial-gradient(650px 350px at ${useTransform(mx, (v) => (v + 1) * 50)}% ${useTransform(
    my,
    (v) => (v + 1) * 50,
  )}%, rgba(124,58,237,0.22), transparent 70%)`
  const glow2 = useMotionTemplate`radial-gradient(500px 300px at 80% 20%, rgba(219,39,119,0.16), transparent 70%)`
  const glow3 = useMotionTemplate`radial-gradient(700px 400px at 20% 80%, rgba(6,182,212,0.16), transparent 70%)`

  useEffect(() => {
    const { gsap } = getGsap()
    if (!gsap) return
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 24, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, ease: "power3.out", delay: 0.1 },
      )
    }
  }, [])

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      <motion.div aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: glow1 }} />
      <motion.div aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: glow2 }} />
      <motion.div aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: glow3 }} />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"
        aria-hidden="true"
      />

      <div className="relative h-full flex items-center justify-center px-6">
        <motion.div className="text-center max-w-3xl">
          <div className="flex justify-center pb-6">
            <p className="text-sm md:text-base text-muted-foreground tracking-widest uppercase border-[1.5px] border-input rounded-full py-2 px-12">💻 cireon.dev</p>
          </div>
          <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent" data-reveal>
            Next‑level digital experiences
          </h1>
          <p className="mt-3 md:mt-4 text-muted-foreground">
            We combine design, motion and AI to build products people love — fast, stable and beautiful.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Button asChild className="bg-violet-600 hover:bg-violet-600/90 text-white">
              <a href="#contact">Our services</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#portfolio">See work</a>
            </Button>
          </div>
        </motion.div>
      </div>
      <Hero3D />
    </section>
  )
}
