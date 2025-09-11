"use client"

import type { GSAP } from "gsap"
import type { ScrollTriggerStatic } from "gsap/ScrollTrigger"

let gsapInstance: GSAP | null = null
let ScrollTriggerInstance: ScrollTriggerStatic | null = null
let isRegistered = false

export function getGsap() {
  if (typeof window === "undefined") {
    return { gsap: null as unknown as GSAP, ScrollTrigger: null as unknown as ScrollTriggerStatic }
  }
  if (!gsapInstance) {
    // Lazy import on client
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    gsapInstance = (require("gsap").gsap || require("gsap")) as GSAP
  }
  if (!ScrollTriggerInstance) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    ScrollTriggerInstance = require("gsap/ScrollTrigger").ScrollTrigger
  }
  if (!isRegistered && gsapInstance && ScrollTriggerInstance) {
    // @ts-expect-error types from gsap are slightly loose for plugin registration
    gsapInstance.registerPlugin(ScrollTriggerInstance)
    isRegistered = true
  }
  return { gsap: gsapInstance!, ScrollTrigger: ScrollTriggerInstance! }
}

export function killAllScrollTriggers() {
  if (typeof window === "undefined") return
  const { ScrollTrigger } = getGsap()
  ScrollTrigger.getAll().forEach((st) => st.kill())
}


