"use client"

import { useEffect } from "react"
import { getGsap } from "@/lib/gsap"

type ScrollOrchestratorProps = {
  selectors?: {
    reveal?: string
    parallaxY?: string
    pin?: string
  }
}

export default function ScrollOrchestrator({
  selectors = {
    reveal: "[data-reveal]",
    parallaxY: "[data-parallax-y]",
    pin: "[data-pin]",
  },
}: ScrollOrchestratorProps) {
  useEffect(() => {
    const { gsap, ScrollTrigger } = getGsap()
    if (!gsap || !ScrollTrigger) return

    const mm = gsap.matchMedia()

    // Reveal on scroll
    const revealTargets = gsap.utils.toArray<HTMLElement>(selectors.reveal!)
    const revealTweens = revealTargets.map((el) =>
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      ),
    )

    // Parallax elements move subtly on scroll
    const parallaxTargets = gsap.utils.toArray<HTMLElement>(selectors.parallaxY!)
    const parallaxTweens = parallaxTargets.map((el) =>
      gsap.to(el, {
        yPercent: gsap.utils.random(-12, 12),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }),
    )

    // Pin blocks for storytelling
    const pinTargets = gsap.utils.toArray<HTMLElement>(selectors.pin!)
    const pinTriggers = pinTargets.map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top top+=80",
        end: "+=120%",
        pin: true,
        pinSpacing: true,
      }),
    )

    return () => {
      revealTweens.forEach((t) => t.kill())
      parallaxTweens.forEach((t) => t.kill())
      pinTriggers.forEach((t) => t.kill())
      mm.kill()
    }
  }, [selectors])

  return null
}


