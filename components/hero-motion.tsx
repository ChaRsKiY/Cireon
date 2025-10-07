import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "./ui/badge"
import { useTheme } from "next-themes"
import { memo, lazy, Suspense } from "react"

const Beams = lazy(() => import("@/components/backgrounds/Beams"))

const BeamsBg = memo(() => (
  <Beams
    beamWidth={3}
    beamHeight={30}
    beamNumber={20}
    lightColor="hsl(var(--primary-hsl))"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={30}
  />
))

const BackgroundLoader = () => (
  <div className="absolute inset-0 bg-background" />
)

const HeroMotion = memo(() => {
  const { theme } = useTheme()
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Suspense fallback={<BackgroundLoader />}>
          {theme === "dark" ? <BeamsBg /> : null}
        </Suspense>
      </div>
      <div className="absolute h-full w-full flex items-center justify-center px-6 pointer-events-none">
        <motion.div 
          className="text-center max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="pointer-events-none space-y-8">
          <Badge variant="outline" size="lg">Digital Product Agency</Badge>
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Next‑level digital experiences
            </h1>
            <p className="mt-3 md:mt-4 text-muted-foreground">
              We combine design, motion and AI to build products people love — fast, stable and beautiful.
            </p>
          </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-10 pointer-events-auto">
            <Button asChild size="lg">
              <a href="#contact">Our services</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#portfolio">See work</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

HeroMotion.displayName = 'HeroMotion'

export default HeroMotion
