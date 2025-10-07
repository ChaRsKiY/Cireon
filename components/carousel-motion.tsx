"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const items = [
  {
    title: "AI Dashboard",
    description: "Realtime analytics with generative insights.",
    href: "/portfolio",
    color: "from-primary/20 to-primary/20",
    image: "/ai-dashboard-ui.png",
  },
  {
    title: "Commerce",
    description: "Interactive catalog and configurators.",
    href: "/portfolio",
    color: "from-primary/20 to-primary/20",
    image: "/3d-commerce-ui.png",
  },
  {
    title: "Fintech App",
    description: "High performance and reliability.",
    href: "/portfolio",
    color: "from-primary/20 to-primary/20",
    image: "/placeholder-ut8eo.png",
  },
  {
    title: "Creative Studio",
    description: "Parallax and cinematic transitions.",
    href: "/portfolio",
    color: "from-primary/20 to-primary/20",
    image: "/creative-studio-website.png",
  },
]

export default function CarouselMotion() {
  return (
    <div className="relative">
      <div className="overflow-x-auto overflow-y-hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-5 snap-x snap-mandatory px-1">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-[320px] sm:min-w-[380px] lg:min-w-[420px] snap-center"
            >
              <Link href={it.href} className="group block">
                <div className="relative rounded-2xl border bg-card overflow-hidden shadow-sm">
                  <div className={`absolute inset-0 bg-gradient-to-br ${it.color}`} aria-hidden="true" />
                  <img
                    src={it.image || "/placeholder.svg?height=220&width=420&query=project+cover"}
                    alt={it.title}
                    className="h-52 w-full object-cover"
                  />
                  <div className="relative p-4">
                    <p className="font-semibold">{it.title}</p>
                    <p className="text-sm text-muted-foreground">{it.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
