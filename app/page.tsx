"use client"

import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import PageTransition from "@/components/page-transition"
import AnimatedSection from "@/components/animated-section"
import HeroMotion from "@/components/hero-motion"
import ScrambleText from "@/components/ScrambledText"
import Industries from "@/components/sections/industries"
import FAQ from "@/components/sections/faq"
import Earth3D from "@/components/earth-3d"
import ContactForm from "@/components/contact-form"
import Chatbot from "@/components/chatbot"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Brain, Code2, Smartphone, Palette, Workflow, CuboidIcon as Cube } from "lucide-react"
import { useMemo, useState } from "react"
import CurvedLoop from "@/components/CurvedLoop"
import SpotlightCard from "@/components/SpotlightCard"
import { motion } from "framer-motion"
import CountUp from "@/components/CountUp"
import TiltedCard from "@/components/TiltedCard"

const services = [
  { title: "Web development", icon: Code2, desc: "Next.js apps with strong UI, SEO and CWV." },
  { title: "Mobile apps", icon: Smartphone, desc: "Cross‑platform with native feel." },
  { title: "UI/UX design", icon: Palette, desc: "Research, prototypes and design systems." },
  { title: "AI/ML integrations", icon: Brain, desc: "Generative AI, chatbots and automation." },
  { title: "Motion design", icon: Cube, desc: "Creative transitions and micro‑interactions." },
  { title: "Automation", icon: Workflow, desc: "Integrations, pipelines, internal tools." },
]

const detailedServices = [
  {
    title: "Web Products on Next.js",
    points: ["App Router", "SSR/SSG/ISR", "Animations & 3D", "Core Web Vitals Optimization"],
    img: "/nextjs-webapp-ui.png",
  },
  {
    title: "Mobile Applications",
    points: ["Cross-platform", "High Performance", "Native Feel"],
    img: "/mobile-app-ui.png",
  },
  {
    title: "AI/ML Integrations",
    points: ["Chatbots", "Content Generation", "Recommendation Systems"],
    img: "/ai-integration.png",
  },
  {
    title: "3D and AR",
    points: ["Configurators", "Interactive Scenes", "WebAR"],
    img: "/threejs-webgl-3d.png",
  },
]

const works = [
  { 
    id: 1, 
    title: "Kids Only", 
    tag: ["Web"], 
    image: "/kids-only-app.png",
    description: "Newsletter subscription platform with full admin panel and advanced email template editor"
  },
  { 
    id: 2, 
    title: "Goldlagerhaus", 
    tag: ["Web"], 
    image: "/goldlagerhaus-site.png",
    description: "Corporate website for Goldlagerhaus company with modern design and e-commerce features",
    link: "https://goldlagerhaus.com"
  },
  { 
    id: 3, 
    title: "Cireon Studio", 
    tag: ["Web", "AI", "3D"], 
    image: "/cireon-studio.png",
    description: "Digital studio landing page with modern design, animations and contact form integration"
  },
  { 
    id: 4, 
    title: "CNotes", 
    tag: ["Web", "Mobile"], 
    image: "/cnotes-app.png",
    description: "Web application for hairdressing salon with appointment booking and financial management system"
  },
]

const tags = ["All", "Web", "Mobile", "3D", "AI"] as const

export default function HomePage() {
  const [activeTag, setActiveTag] = useState<(typeof tags)[number]>("All")
  const filteredWorks = useMemo(() => works.filter((w) => (activeTag === "All" ? true : w.tag.includes(activeTag))), [activeTag])

  return (
    <>
      <SiteHeader />
      <PageTransition>
        <HeroMotion />

        <Chatbot />

        {/* Hero Section with Animated Text */}
        <AnimatedSection>
          <div className="px-4 py-20 text-center w-full flex justify-center items-center flex-col">
              <CurvedLoop marqueeText="We help tech and business grow" className="w-full" />

               <ScrambleText radius={100}
                 duration={1.2}
                 speed={0.5}
                 scrambleChars={".:."} className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                >
                  Thoughtful design, solid architecture and expressive motion. Products that engage and perform.
               </ScrambleText>
          </div>
        </AnimatedSection>

        {/* Services Grid with Modern Cards */}
        <AnimatedSection>
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground text-lg">What we do best</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <SpotlightCard className="custom-spotlight-card group" spotlightColor="var(--primary-alpha)">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Code2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Web Development</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Next.js applications with modern UI, SEO optimization and excellent Core Web Vitals
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" size="md">Next.js</Badge>
                      <Badge variant="secondary" size="md">React</Badge>
                      <Badge variant="secondary" size="md">TypeScript</Badge>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              
              <SpotlightCard className="custom-spotlight-card group" spotlightColor="var(--primary-alpha)">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Smartphone className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Mobile Apps</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Cross-platform mobile applications with native feel and high performance
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" size="md">React Native</Badge>
                      <Badge variant="secondary" size="md">Flutter</Badge>
                      <Badge variant="secondary" size="md">iOS/Android</Badge>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              
              <SpotlightCard className="custom-spotlight-card group" spotlightColor="var(--primary-alpha)">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Brain className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">AI Integration</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    AI integration, chatbots, generative content and business process automation
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" size="md">OpenAI</Badge>
                      <Badge variant="secondary" size="md">Machine Learning</Badge>
                      <Badge variant="secondary" size="md">Automation</Badge>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              
              <SpotlightCard className="custom-spotlight-card group" spotlightColor="var(--primary-alpha)">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Palette className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">UI/UX Design</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    User research, prototyping and design system creation
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" size="md">Figma</Badge>
                      <Badge variant="secondary" size="md">Prototyping</Badge>
                      <Badge variant="secondary" size="md">Design Systems</Badge>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              
              <SpotlightCard className="custom-spotlight-card group" spotlightColor="var(--primary-alpha)">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Cube className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">3D & Motion</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Creative transitions, micro-interactions and 3D elements for web
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" size="md">Three.js</Badge>
                      <Badge variant="secondary" size="md">Framer Motion</Badge>
                      <Badge variant="secondary" size="md">WebGL</Badge>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
              
              <SpotlightCard className="custom-spotlight-card group" spotlightColor="var(--primary-alpha)">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Workflow className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Automation</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Integrations, pipelines and internal tools for workflow optimization
                  </p>
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" size="md">APIs</Badge>
                      <Badge variant="secondary" size="md">Pipelines</Badge>
                      <Badge variant="secondary" size="md">DevOps</Badge>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection>
          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">By the numbers</h2>
              <p className="text-muted-foreground text-lg">Our focus is long-term value — measurable growth and satisfied clients</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <CountUp to={10} onStart={() => {}} onEnd={() => {}} />
                  <span className="text-2xl">+</span>
                </div>
                <p className="text-muted-foreground">Projects Delivered</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <CountUp to={98} onStart={() => {}} onEnd={() => {}} />
                  <span className="text-2xl">%</span>
                </div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <CountUp to={5} onStart={() => {}} onEnd={() => {}} />
                  <span className="text-2xl">+</span>
                </div>
                <p className="text-muted-foreground">Years Experience</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  <CountUp to={24} onStart={() => {}} onEnd={() => {}} />
                  <span className="text-2xl">h</span>
                </div>
                <p className="text-muted-foreground">Average Response Time</p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 md:p-16"
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to build something amazing?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and create something extraordinary together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                  <a href="#contact">Start a project</a>
                </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                    <a href="#contact">Schedule a call</a>
                </Button>
              </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Portfolio Section */}
        <AnimatedSection>
          <div id="portfolio" className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our work</h2>
              <p className="text-muted-foreground text-lg">Select a category to see relevant projects</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {tags.map((t) => (
                <Button key={t} onClick={() => setActiveTag(t)} variant={activeTag === t ? "default" : "outline"} size="lg">
                  {t}
                </Button>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredWorks.map((w, index) => (
                <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="overflow-hidden rounded-2xl border bg-card group-hover:shadow-xl transition-all duration-300 group-hover:border-primary/50">
                  <div className="relative overflow-hidden">
                    <img
                      src={w.image || "/placeholder.svg"}
                      alt={w.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex flex-wrap gap-2">
                        {w.tag.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 border-t border-border group-hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{w.title}</h3>
                      {w.link && (
                        <Link 
                          href={w.link} 
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-1"
                          >
                            View project
                            <span className="text-sm">→</span>
                          </motion.div>
                        </Link>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{w.description}</p>
                  </div>
                </div>
              </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Industries</h3>
            <Industries />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">FAQ</h3>
            <FAQ />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="contact" className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold">Contacts</h1>
                <p className="text-muted-foreground mt-3">
                  Fill out the form — we'll respond within 1‑2 business days. Or write to me@cireon.dev
                </p>
                <div className="mt-6 space-y-2 text-sm">
                  <p>
                    <span className="text-muted-foreground">Contact person:</span> Maksym Tovkai
                  </p>
                  <p>
                    <span className="text-muted-foreground">Email:</span> <a href="mailto:me@cireon.dev">me@cireon.dev</a>
                  </p>
                  <p>
                    <span className="text-muted-foreground">Telegram:</span> <a href="https://t.me/ChaRsKiY_09">@ChaRsKiY_09</a>
                  </p>
                </div>
                <div className="mt-6">
                  <Earth3D />
                </div>
              </div>
              <div className="rounded-xl border bg-card p-6 h-full flex flex-col">
                <h2 className="font-medium mb-2">Write to us</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </AnimatedSection>

        <SiteFooter />
      </PageTransition>
    </>
  )
}
