"use client"

import AnimatedSection from "@/components/animated-section"
import HeroMotion from "@/components/hero-motion"
import ScrambleText from "@/components/ScrambledText"
import Industries from "@/components/sections/industries"
import FAQ from "@/components/sections/faq"
import Earth3D from "@/components/earth-3d"
import ContactForm from "@/components/contact-form"
import RivallSection from "@/components/sections/rivall-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Brain, Code2, Smartphone, Palette, Workflow, CuboidIcon as Cube } from "lucide-react"
import { useMemo, useState } from "react"
import CurvedLoop from "@/components/CurvedLoop"
import SpotlightCard from "@/components/SpotlightCard"
import { motion } from "framer-motion"
import CountUp from "@/components/CountUp"
import Image from "next/image"
import { getProjects } from "@/lib/projects"

const tags = ["All", "Web", "Mobile", "3D", "AI"] as const

export default function HomePage() {
  const [activeTag, setActiveTag] = useState<(typeof tags)[number]>("All")
  const projects = getProjects()

  // Create tag mapping for projects
  const getProjectTags = (project: any) => {
    const tags: string[] = ["Web"]
    if (project.techStack.includes("React Native") || project.techStack.includes("Mobile")) {
      tags.push("Mobile")
    }
    if (project.techStack.includes("Three.js") || project.techStack.includes("3D")) {
      tags.push("3D")
    }
    if (project.techStack.includes("OpenAI") || project.techStack.includes("AI")) {
      tags.push("AI")
    }
    return tags
  }

  const filteredWorks = useMemo(() =>
    projects.filter((project) => {
      if (activeTag === "All") return true
      const projectTags = getProjectTags(project)
      return projectTags.includes(activeTag)
    }), [activeTag, projects])

  return (
    <>
      <main role="main">
        <HeroMotion />

        {/* Hero Section with Animated Text */}
        <AnimatedSection>
          <section className="px-4 py-20 text-center w-full flex justify-center items-center flex-col" aria-labelledby="hero-heading">
            <CurvedLoop marqueeText="We help tech and business grow" className="w-full" />

            <ScrambleText radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars={".:."} className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              Thoughtful design, solid architecture and expressive motion. Products that engage and perform.
            </ScrambleText>
          </section>
        </AnimatedSection>

        {/* Rivall Flagship Section */}
        <AnimatedSection>
          <RivallSection />
        </AnimatedSection>

        {/* Services Grid with Modern Cards */}
        <AnimatedSection>
          <section id="services" className="container mx-auto px-4 py-16" aria-labelledby="services-heading">
            <div className="text-center mb-16">
              <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground text-lg">What we do best</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <SpotlightCard className="custom-spotlight-card group" spotlightColor="var(--primary-alpha)">
                <div className="p-6 h-full flex flex-col">
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
                <div className="p-6 h-full flex flex-col">
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
                <div className="p-6 h-full flex flex-col">
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
                <div className="p-6 h-full flex flex-col">
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
                <div className="p-6 h-full flex flex-col">
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
                <div className="p-6 h-full flex flex-col">
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
          </section>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection>
          <section id="stats" className="container mx-auto px-4 py-20" aria-labelledby="stats-heading">
            <div className="text-center mb-16">
              <h2 id="stats-heading" className="text-3xl md:text-4xl font-bold mb-4">By the numbers</h2>
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
                  <CountUp to={10} onStart={() => { }} onEnd={() => { }} />
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
                  <CountUp to={98} onStart={() => { }} onEnd={() => { }} />
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
                  <CountUp to={5} onStart={() => { }} onEnd={() => { }} />
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
                  <CountUp to={24} onStart={() => { }} onEnd={() => { }} />
                  <span className="text-2xl">h</span>
                </div>
                <p className="text-muted-foreground">Average Response Time</p>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <section className="container mx-auto px-4 py-20" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-12 md:p-16"
              >
                <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold mb-6">
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
          </section>
        </AnimatedSection>

        {/* Portfolio Section */}
        <AnimatedSection>
          <section id="portfolio" className="container mx-auto px-4 py-20" aria-labelledby="portfolio-heading">
            <div className="text-center mb-16">
              <h2 id="portfolio-heading" className="text-3xl md:text-4xl font-bold mb-4">Our work</h2>
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
              {filteredWorks.map((project, index) => {
                const projectTags = getProjectTags(project)
                return (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="overflow-hidden rounded-2xl border bg-card group-hover:shadow-xl transition-all duration-300 group-hover:border-primary/50">
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.coverImage || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={400}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex flex-wrap gap-2">
                            {projectTags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="p-6 border-t border-border group-hover:border-primary/50 transition-colors">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                          <Link
                            href={`/projects/${project.slug}`}
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
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{project.subtitle || project.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="industries-section-heading">
            <h3 id="industries-section-heading" className="text-xl md:text-2xl font-semibold mb-6">Industries</h3>
            <Industries />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="faq-section-heading">
            <h3 id="faq-section-heading" className="text-xl md:text-2xl font-semibold mb-6">FAQ</h3>
            <FAQ />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="contact" className="container mx-auto px-4 py-12 md:py-16" aria-labelledby="contact-section-heading">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h1 id="contact-section-heading" className="text-3xl md:text-4xl font-semibold">Contact Us</h1>
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
                <h2 className="font-medium mb-2">Send us a message</h2>
                <ContactForm />
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
    </>
  )
}
