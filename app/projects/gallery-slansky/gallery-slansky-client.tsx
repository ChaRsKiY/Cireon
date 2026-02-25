"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, ArrowRight, Paintbrush, Database, CreditCard, LayoutTemplate, Settings, Code, ShoppingCart, Globe, Zap, LucideIcon, Server } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SpotlightCard from "@/components/SpotlightCard"

export default function GallerySlanskyClient() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Hero animations
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

    return (
        <div ref={containerRef} className="relative bg-background min-h-screen selection:bg-emerald-500/30">

            {/* 1. HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/20 z-10" />
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                    <motion.div
                        style={{ y, opacity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px]"
                    />
                </div>

                <div className="container relative z-20 px-4 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium backdrop-blur-md"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Project Codename: Max Art
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-9xl font-serif italic tracking-tighter mb-6 text-foreground"
                    >
                        Galerie Slansky
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="max-w-3xl text-lg md:text-2xl text-muted-foreground mb-12 font-light"
                    >
                        A bespoke e-commerce experience and digital exhibition space seamlessly blending contemporary art with cutting-edge web technology.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link
                            href="#creation"
                            className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white hover:bg-emerald-500 transition-colors h-14 px-8 rounded-full font-medium text-lg"
                        >
                            The Creation Path
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors h-14 px-8 rounded-full font-medium text-lg"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            All Projects
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. OVERVIEW & GALLERY GRID */}
            <section className="py-32 relative z-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 text-emerald-500 font-semibold tracking-wider uppercase text-sm">
                                <Paintbrush className="w-4 h-4" />
                                The Canvas
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Art Meets <br /><span className="font-serif italic text-muted-foreground">E-commerce</span></h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                The objective was to create an online presence for Markus Slansky that felt as premium and curated as a physical gallery walk-through, while securely handling high-ticket transactions globally.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
                                <div>
                                    <div className="text-sm text-emerald-500 mb-1 font-bold">Role</div>
                                    <div className="font-medium">Fully Developed by Cireon</div>
                                </div>
                                <div>
                                    <div className="text-sm text-emerald-500 mb-1 font-bold">Timeline</div>
                                    <div className="font-medium">2025</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[600px] w-full"
                        >
                            {/* Floating image 1: Top Right */}
                            <motion.div
                                className="absolute top-0 right-0 w-[80%] aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl z-10"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            >
                                <Image
                                    src="/gallery-slansky.png"
                                    alt="Gallery Slansky UI"
                                    fill
                                    className="object-cover object-top"
                                />
                            </motion.div>

                            {/* Floating image 2: Bottom Left */}
                            <motion.div
                                className="absolute bottom-10 left-0 w-[75%] aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl z-20"
                                animate={{ y: [0, 15, 0] }}
                                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                            >
                                <Image
                                    src="/gallery-slansky-shop.png"
                                    alt="Gallery Slansky Shop"
                                    fill
                                    className="object-cover object-top"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. PATH OF CREATION (TIMELINE) */}
            <section id="creation" className="py-32 bg-stone-50 dark:bg-zinc-950 border-y border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Path of Creation</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Building a bespoke digital gallery required a meticulously phased approach, from initial architecture to final polishing.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-500/30 before:to-transparent">
                        {/* Step 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white z-10">
                                1
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-2xl border border-border shadow-md"
                            >
                                <h3 className="font-bold text-xl mb-2 text-foreground">Architecture & Design</h3>
                                <p className="text-muted-foreground">Drafting the database schema, choosing the optimal tech stack, and wireframing a minimalist layout that elevates the artwork rather than distracting from it.</p>
                            </motion.div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-emerald-500 font-bold z-10">
                                2
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-2xl border border-border shadow-md"
                            >
                                <h3 className="font-bold text-xl mb-2 text-foreground">Next.js Development</h3>
                                <p className="text-muted-foreground">Building the core interactive components, optimizing image rendering for large-scale artwork photography, and implementing responsive, performant client-side routing.</p>
                            </motion.div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-emerald-500 bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-emerald-500 font-bold z-10">
                                3
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-2xl border border-border shadow-md"
                            >
                                <h3 className="font-bold text-xl mb-2 text-foreground">Stripe & CMS Integration</h3>
                                <p className="text-muted-foreground">Securing payment flows via Stripe for high-value purchases alongside developing a bespoke Admin Panel to manage inventory, sales, and analytics.</p>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. FEATURES BENTO GRID */}
            <section className="py-32 bg-background relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Functional Elegance</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Behind the minimalist aesthetic lies a powerful, robust application designed to automate gallery management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] max-w-6xl mx-auto">

                        <SpotlightCard className="md:col-span-2 relative overflow-hidden flex flex-col justify-end p-8 rounded-3xl border border-border bg-card group" spotlightColor="rgba(16, 185, 129, 0.1)">
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                <ShoppingCart className="w-32 h-32 text-emerald-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">E-commerce Flow</h3>
                            <p className="text-muted-foreground relative z-10 max-w-md">
                                End-to-end shopping cart functionality synced beautifully with Stripe. Secure, fast, and optimized for conversions.
                            </p>
                        </SpotlightCard>

                        <SpotlightCard className="md:col-span-1 relative overflow-hidden flex flex-col justify-end p-8 rounded-3xl border border-border bg-card" spotlightColor="rgba(16, 185, 129, 0.1)">
                            <Globe className="w-10 h-10 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Multilingual</h3>
                            <p className="text-sm text-muted-foreground">
                                i18next powers a flawless multi-language system to attract international buyers.
                            </p>
                        </SpotlightCard>

                        <SpotlightCard className="md:col-span-1 relative overflow-hidden flex flex-col justify-end p-8 rounded-3xl border border-border bg-card" spotlightColor="rgba(16, 185, 129, 0.1)">
                            <Settings className="w-10 h-10 text-emerald-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
                            <p className="text-sm text-muted-foreground">
                                In-house CMS tailored to inventory tracking and order fulfillment.
                            </p>
                        </SpotlightCard>

                        <SpotlightCard className="md:col-span-2 relative overflow-hidden p-0 rounded-3xl border border-border bg-card group" spotlightColor="rgba(16, 185, 129, 0.1)">
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/gallery-slansky-poster.png"
                                    alt="Gallery Slansky Poster"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-overlay"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-8 z-10">
                                <h3 className="text-2xl font-bold mb-2">Immersive Display</h3>
                                <p className="text-muted-foreground max-w-md">
                                    Large-format image rendering utilizing Next.js Image Optimization to maintain lightning-fast load times.
                                </p>
                            </div>
                        </SpotlightCard>

                    </div>
                </div>
            </section>

            {/* 5. TECHNOLOGIES CAROUSEL */}
            <section className="py-24 bg-secondary/10 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">The Canvas Blueprint</h2>
                        <p className="text-muted-foreground">The specific stack orchestrated to support this platform.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                        {[
                            { name: "Next.js", icon: LayoutTemplate },
                            { name: "TypeScript", icon: Code },
                            { name: "Stripe", icon: CreditCard },
                            { name: "Prisma", icon: Database },
                            { name: "MongoDB", icon: Server },
                            { name: "TailwindCSS", icon: Paintbrush },
                            { name: "i18next", icon: Globe },
                            { name: "Framer Motion", icon: Zap },
                        ].map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col items-center justify-center p-6 border border-border rounded-2xl bg-card hover:bg-accent transition-colors"
                            >
                                <tech.icon className="w-8 h-8 mb-4 text-emerald-500" />
                                <span className="text-sm font-medium text-center text-foreground">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. OUTRO CTA */}
            <section className="py-32 relative text-center border-t border-border">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to elevate your art gallery?</h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Cireon builds high-conversion, visually stunning platforms for the creative and luxury industries.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-foreground text-background hover:opacity-90 transition-opacity h-16 px-10 rounded-full font-bold text-lg"
                        >
                            Start Your Project
                        </Link>
                        <a
                            href="https://galerieslansky.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-transparent text-foreground border border-border hover:bg-muted transition-colors h-16 px-10 rounded-full font-bold text-lg"
                        >
                            Visit Website
                        </a>
                    </div>
                </div>
            </section>

        </div>
    )
}
