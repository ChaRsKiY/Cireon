"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, ArrowLeft, Shield, Zap, Globe, Cpu, Layers, Lock, Timer, Database, Server, Smartphone, Cloud, Code } from "lucide-react"
import Link from "next/link"
import SpotlightCard from "@/components/SpotlightCard"

export default function RivallClient() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Hero animations
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

    return (
        <div ref={containerRef} className="relative bg-background min-h-screen selection:bg-primary/30">

            {/* 1. HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/20 z-10" />
                    {/* A sophisticated animated background grid or gradient */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                    <motion.div
                        style={{ y, opacity }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"
                    />
                </div>

                <div className="container mx-auto relative z-20 px-4 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-medium backdrop-blur-md"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                        Project Codename: RIVALL
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 uppercase"
                    >
                        Rivall<span className="text-primary">.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="max-w-2xl text-lg md:text-2xl text-muted-foreground mb-12"
                    >
                        The next generation ubiquitous platform. Redefining infrastructure, scale, and connectivity. Launching worldwide in Late 2026.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link
                            href="#vision"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors h-14 px-8 rounded-full font-medium text-lg"
                        >
                            Discover The Vision
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

            {/* 2. VISION AND SCALE */}
            <section id="vision" className="py-32 relative z-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Genesis of a New Era</h2>
                            <div className="h-1 w-20 bg-primary mb-8" />
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                                Project Rivall was conceived from a singular ambitious idea: What if we reimagined digital infrastructure from first principles? Our vision is an ecosystem that anticipates user needs, scaling dynamically across nodes while prioritizing absolute security and unprecedented lowest-latency interactions.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-semibold">Global Scale</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Currently in active development, Rivall's architecture distributes compute across a global mesh network. We are building the foundational layers that will support millions of concurrent operations by Q4 2026.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="space-y-4"
                            >
                                <h3 className="text-2xl font-semibold">Adaptive Intelligence</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Machine learning isn't just an add-on; it's the core routing mechanism. The system heals, optimizes, and evolves autonomously depending on traffic patterns and user behavior constraints.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. BENTO GRID OF MODULES */}
            <section className="py-32 bg-secondary/10 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Architecture Modules</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Dive deep into the sophisticated subsystems that power Rivall. Each module is being engineered for maximum resilience and extreme performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
                        {/* Massive block */}
                        <SpotlightCard className="md:col-span-2 md:row-span-2 group border-border bg-card p-8 flex flex-col rounded-3xl" spotlightColor="rgba(var(--primary), 0.05)">
                            <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-auto">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div className="mt-8 transition-transform duration-500 group-hover:-translate-y-2">
                                <h3 className="text-3xl font-bold mb-4 text-foreground">Enterprise Security Core</h3>
                                <p className="text-muted-foreground text-lg">
                                    Zero-trust architecture with quantum-resistant encryption protocols. Every packet is verified, every node authenticated. Security is absolute, not an afterthought.
                                </p>
                            </div>
                        </SpotlightCard>

                        <SpotlightCard className="md:col-span-1 border-border bg-card p-8 flex flex-col justify-end rounded-3xl group" spotlightColor="rgba(var(--primary), 0.05)">
                            <Zap className="w-8 h-8 text-yellow-500 mb-4 transition-transform duration-500 group-hover:scale-125" />
                            <h3 className="text-xl font-bold mb-2 text-foreground">Hyper-Speed Protocol</h3>
                            <p className="text-sm text-muted-foreground">Microsecond latency routing across terrestrial nodes.</p>
                        </SpotlightCard>

                        <SpotlightCard className="md:col-span-1 border-border bg-card p-8 flex flex-col justify-end rounded-3xl group" spotlightColor="rgba(var(--primary), 0.05)">
                            <Database className="w-8 h-8 text-blue-500 mb-4 transition-transform duration-500 group-hover:scale-125" />
                            <h3 className="text-xl font-bold mb-2 text-foreground">Immutable Data Lakes</h3>
                            <p className="text-sm text-muted-foreground">Distributed storage mimicking biological memory patterns.</p>
                        </SpotlightCard>

                        <SpotlightCard className="md:col-span-2 border-border bg-card p-8 flex flex-col justify-end rounded-3xl group" spotlightColor="rgba(var(--primary), 0.05)">
                            <Globe className="w-8 h-8 text-green-500 mb-4 transition-transform duration-500 group-hover:scale-125" />
                            <h3 className="text-xl font-bold mb-2 text-foreground">Global Edge Network</h3>
                            <p className="text-sm text-muted-foreground">
                                Operating in over 400 edge-compute locations simultaneously. The compute layer comes to the user, virtually eliminating geographic bottlenecks.
                            </p>
                        </SpotlightCard>
                        {/* Fluid Modularity 
                        <SpotlightCard className="md:col-span-1 lg:col-span-2 border-zinc-800 bg-zinc-900/50 p-8 flex flex-col justify-end rounded-3xl group" spotlightColor="rgba(255, 255, 255, 0.05)">
                            <Layers className="w-8 h-8 text-purple-500 mb-4 transition-transform duration-500 group-hover:scale-125" />
                            <h3 className="text-xl font-bold mb-2 text-white">Fluid Modularity</h3>
                            <p className="text-zinc-400 text-sm">
                                The system's modularity allows drop-in replacements for components at runtime, achieving true zero-downtime updates globally.
                            </p>
                        </SpotlightCard>
                        */}
                    </div>
                </div>
            </section>

            {/* 4. TECHNOLOGIES CAROUSEL PREVIEW (Using a marquee or grid) */}
            <section className="py-32 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
                        <h2 className="text-4xl font-bold">The Tech Pipeline</h2>
                        <p className="text-muted-foreground max-w-lg">
                            We are utilizing the absolute bleeding edge of modern development to assemble Rivall. Here is a glimpse into the anticipated stack.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            { name: "Rust", icon: Code },
                            { name: "Go Microservices", icon: Server },
                            { name: "PostgreSQL Nexus", icon: Database },
                            { name: "Global Edge", icon: Cloud },
                            { name: "Neural Networks", icon: Cpu },
                            { name: "Next-gen Client", icon: Smartphone },
                            { name: "WebAssembly", icon: Database },
                            { name: "Zero-Trust Mesh", icon: Lock },
                            { name: "Real-time sync", icon: Timer },
                            { name: "Hardware Accel", icon: Zap },
                            { name: "WebSockets", icon: Globe },
                            { name: "Auto-Scale Nodes", icon: Layers },
                        ].map((tech, i) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="flex flex-col items-center justify-center p-6 border border-border rounded-2xl bg-card hover:bg-accent transition-colors"
                            >
                                <tech.icon className="w-8 h-8 mb-4 text-primary" />
                                <span className="text-sm font-medium text-center">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. ROADMAP & COUNTDOWN CTA */}
            <section className="py-32 relative border-t border-border overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 pattern-dots pattern-primary/20 pattern-bg-background pattern-size-4 pattern-opacity-20" />

                <div className="container mx-auto relative px-4 z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto backdrop-blur-sm bg-background/50 p-12 rounded-3xl border border-border shadow-2xl"
                    >
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest">
                            Launch targeting
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                            Late 2026
                        </h2>

                        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                            We are currently in Phase II of private development. Rivall will reshape how digital businesses scale when we unveil it to the world.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
                            <div className="p-6 border border-border rounded-xl bg-background/80">
                                <div className="text-xs text-primary font-bold mb-2">PHASE I (Complete)</div>
                                <div className="font-semibold mb-1">Architecture Design</div>
                                <div className="text-sm text-muted-foreground">Whitepapers and core routing algorithms established.</div>
                            </div>
                            <div className="p-6 border border-border rounded-xl bg-primary/10 border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.1)] relative">
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
                                </div>
                                <div className="text-xs text-primary font-bold mb-2">PHASE II (Current)</div>
                                <div className="font-semibold mb-1">Core Implementation</div>
                                <div className="text-sm text-muted-foreground">Building the main modules and distributed systems infrastructure.</div>
                            </div>
                            <div className="p-6 border border-border rounded-xl bg-background/80 opacity-50">
                                <div className="text-xs text-primary font-bold mb-2">PHASE III (2026)</div>
                                <div className="font-semibold mb-1">Beta & Launch</div>
                                <div className="text-sm text-muted-foreground">Private beta testing followed by unrestricted global release.</div>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 h-16 shadow-lg px-10 rounded-full font-bold text-lg"
                        >
                            Get Notified About Rivall
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}
