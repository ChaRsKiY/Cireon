import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ScrollProgress from "@/components/scroll-progress"
import PageTransition from "@/components/page-transition"
import AnimatedSection from "@/components/animated-section"
import HeroMotion from "@/components/hero-motion"
import TechLogos from "@/components/tech-logos"
import Stats from "@/components/sections/stats"
import Industries from "@/components/sections/industries"
import FAQ from "@/components/sections/faq"
import WorldMap from "@/components/world-map"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Brain, Code2, Smartphone, Palette, Workflow, CuboidIcon as Cube } from "lucide-react"

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

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <ScrollProgress />
      <PageTransition>
        <HeroMotion />

        <AnimatedSection>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-semibold">We help tech and business grow</h2>
              <p className="mt-3 text-muted-foreground">
                Thoughtful design, solid architecture and expressive motion. Products that engage and perform.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <Button asChild className="bg-violet-600 hover:bg-violet-600/90 text-white">
                  <a href="#contact">Start a project</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#contact">Contact us</a>
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="services" className="container mx-auto px-4 py-12 md:py-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">What we do</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <Link key={i} href="/services" className="group">
                  <div
                    className="relative overflow-hidden rounded-xl border bg-card p-5 shadow-sm transition 
                    hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/0 via-violet-500/0 to-cyan-500/0 group-hover:from-fuchsia-500/5 group-hover:via-violet-500/5 group-hover:to-cyan-500/5 transition" />
                    <s.icon className="size-6 text-violet-600 mb-3" />
                    <p className="font-medium">{s.title}</p>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">How we work</h3>
            <ol className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                ["Analysis", "Goals and audience."],
                ["Design", "Prototypes and visual language."],
                ["Development", "Frontend, server and data."],
                ["Testing", "Unit, integration and UX."],
                ["Launch", "Release and analytics."],
                ["Growth", "Optimization and A/B."],
              ].map((step, i) => (
                <li key={i} className="relative rounded-xl border bg-card p-4">
                  <div className="absolute -top-3 -left-3 size-8 rounded-full bg-violet-600 text-white text-sm grid place-items-center">
                    {i + 1}
                  </div>
                  <p className="font-medium">{step[0]}</p>
                  <p className="text-xs text-muted-foreground mt-1">{step[1]}</p>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Our tech</h3>
            <TechLogos />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="portfolio" className="container mx-auto px-4 py-12 md:py-16">
            <div className="flex items-end justify-between mb-6">
              <h3 className="text-xl md:text-2xl font-semibold">Demo projects</h3>
              <Link href="/portfolio" className="text-sm text-violet-600 hover:underline">
                View all
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Numbers and results</h3>
            <Stats />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Industries</h3>
            <Industries />
          </div>
        </AnimatedSection>

        {/* <AnimatedSection>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Testimonials</h3>
            <Testimonials />
          </div>
        </AnimatedSection> */}

        <AnimatedSection>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">FAQ</h3>
            <FAQ />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="about" className="container mx-auto px-4 py-12 md:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl md:text-3xl font-semibold">About us</h2>
              <p className="text-muted-foreground mt-3">
                Cireon — studio where design meets engineering. We create digital experiences with a focus on
                speed, stability and aesthetics.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src="/cireon-studio.png"
                alt="Early snapshot of cireon.dev website"
                className="rounded-xl border object-cover w-full h-72"
              />
              <div className="rounded-xl border p-6 bg-card">
                <h2 className="font-medium mb-2">Philosophy</h2>
                <p className="text-sm text-muted-foreground">
                  Our approach is meaning, simplicity and expressiveness. We design intuitive interfaces and enhance them
                  with animations and 3D elements when it increases the product value.
                </p>
                <ul className="mt-4 text-sm grid gap-2 list-disc pl-5">
                  <li>Partnership and transparency</li>
                  <li>Reliable architecture and DX</li>
                  <li>Measureability and experiments</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">Detailed services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {detailedServices.map((s, i) => (
                <div key={i} className="overflow-hidden rounded-xl border bg-card">
                  <img src={s.img || "/placeholder.svg"} alt={s.title} className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <h3 className="font-medium">{s.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.points.map((p, j) => (
                        <Badge key={j} variant="secondary">
                          {p}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div id="contact" className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold">Contacts</h1>
                <p className="text-muted-foreground mt-3">
                  Fill out the form — we'll respond within 1‑2 business days. Or write to hello@cireon.dev
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
                  <WorldMap />
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
