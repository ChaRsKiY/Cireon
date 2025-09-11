"use client"

import { Button } from "@/components/ui/button"

export default function LongScrollSections() {
  return (
    <div className="w-full">
      {/* Intro pin */}
      <section className="relative h-[160vh] grid place-items-center" data-pin>
        <div className="text-center max-w-2xl px-6" data-reveal>
          <h2 className="text-2xl md:text-4xl font-semibold">Built for motion and depth</h2>
          <p className="text-muted-foreground mt-3">
            Storytelling layout with pinned sections, parallax layers and expressive transitions powered by GSAP.
          </p>
        </div>
        <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden>
          <div className="absolute left-8 top-24 size-24 rounded-full bg-violet-600/20 blur-2xl" data-parallax-y />
          <div className="absolute right-16 bottom-24 size-32 rounded-full bg-cyan-500/20 blur-2xl" data-parallax-y />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-64 rounded-full bg-fuchsia-500/10 blur-3xl" data-parallax-y />
        </div>
      </section>

      {/* Features grid with subtle parallax */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["Performance", "Optimized rendering and lazy orchestration for smooth motion."],
            ["3D Ready", "Interactive scenes, lighting and reflections for depth."],
            ["Scroll Experiences", "Pinned narratives and parallax storytelling."],
            ["Design Systems", "Consistent components and themes across products."],
            ["AI Integrations", "Clever automation and user assistance."],
            ["Analytics & A/B", "Measurable outcomes and growth loops."],
          ].map(([title, desc], i) => (
            <div key={i} className="rounded-xl border bg-card p-6" data-reveal>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="rounded-2xl border p-10 md:p-16 bg-gradient-to-br from-violet-600/5 via-fuchsia-500/5 to-cyan-500/5" data-reveal>
          <h2 className="text-2xl md:text-3xl font-semibold">Let’s make something outstanding</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl">
            From fast MVPs to polished flagship experiences — we bring motion, 3D and engineering to your product.
          </p>
          <div className="mt-6">
            <Button asChild className="bg-violet-600 hover:bg-violet-600/90 text-white">
              <a href="#contact">Start a project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


