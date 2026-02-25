"use client"

import { motion } from "framer-motion"
import {
    ShoppingCart,
    Palette,
    CreditCard,
    Globe,
    Smartphone,
    LayoutDashboard,
    ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const features = [
    {
        icon: ShoppingCart,
        title: "E-commerce Engine",
        description: "Full-featured online store handling artwork inventory, pricing, and variants.",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        icon: CreditCard,
        title: "Stripe Integration",
        description: "Seamless and secure global payment processing optimized for high-value transactions.",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10"
    },
    {
        icon: LayoutDashboard,
        title: "Custom Admin Panel",
        description: "Bespoke CMS allowing the gallery to manage artists, exhibitions, and orders effortlessly.",
        color: "text-amber-500",
        bg: "bg-amber-500/10"
    },
    {
        icon: Palette,
        title: "Premium Aesthetics",
        description: "Two distinct, highly polished themes designed to let the art take center stage.",
        color: "text-rose-500",
        bg: "bg-rose-500/10"
    },
    {
        icon: Globe,
        title: "Internationalization",
        description: "Configured with i18next for multi-language support targeting global collectors.",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        icon: Smartphone,
        title: "Responsive Design",
        description: "Flawless viewing experience from ultra-wide desktops to mobile devices.",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
]

export default function GalerieSlanskySection() {
    return (
        <section className="relative overflow-hidden py-24 bg-gradient-to-b from-secondary/20 to-background">
            <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.2))] -z-10" />

            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <Badge variant="outline" className="px-4 py-1 text-sm border-emerald-500/30 bg-emerald-500/5 text-emerald-500">
                        Featured Platform
                    </Badge>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-6xl font-serif italic tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80"
                    >
                        Galerie Slansky
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-muted-foreground max-w-2xl"
                    >
                        A high-end digital exhibition space and comprehensive e-commerce platform built for the Markus Slansky contemporary art gallery.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="group relative p-6 bg-card border border-border/50 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/5"
                        >
                            <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>

                            <div className="absolute inset-0 border border-emerald-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <Link href="/projects/gallery-slansky">
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full group border-border hover:bg-emerald-500/10 hover:text-emerald-500 hover:border-emerald-500/50 transition-all hover:ring-emerald-500/50">
                            View Case Study
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
