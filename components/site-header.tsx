"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import ModeToggle from "./mode-toggle"
import Logo from "./logo"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [menuKey, setMenuKey] = useState(0)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", selector: "body" },
        { id: "services", selector: "#services" },
        { id: "portfolio", selector: "#portfolio" },
        { id: "about", selector: "#about" },
        { id: "contact", selector: "#contact" },
      ]

      const scrollPosition = window.scrollY + 200 
      const documentHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight

      let currentSection = "home"

      if (scrollPosition + windowHeight >= documentHeight - 100) {
        currentSection = "contact"
      } else {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i]
          const element = document.querySelector(section.selector)
          if (element) {
            const rect = element.getBoundingClientRect()
            const elementTop = rect.top + window.scrollY
            
            if (scrollPosition >= elementTop) {
              currentSection = section.id
              break
            }
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return activeSection === "home"
    return activeSection === href.replace("#", "")
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center mt-6 max-sm:mt-5 max-sm:m-5 flex-col">
      <header className="w-4/5 max-lg:w-6/7 max-sm:w-full backdrop-blur supports-[backdrop-filter]:bg-background/30 border border-border rounded-full">
        <div className="flex h-16 items-center justify-between p-4">
          <Link href="/" className="flex items-center gap-3 h-full group">
            <Logo />
            <span className="text-lg font-semibold">Cireon</span>
          </Link>

          <nav className="hidden md:flex items-center gap-2 max-lg:gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "max-lg:px-2 px-4 py-2 text-sm rounded-full transition-colors hover:text-primary hover:bg-accent",
                  isActive(l.href) ? "font-medium" : "text-muted-foreground",
                )}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button asChild className="hidden md:inline-flex duration-300 ease-in-out delay-100 text-primary-foreground">
              <Link href="#contact">Contact</Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={() => {
                setOpen((v) => !v)
                setMenuKey(prev => prev + 1)
              }}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <motion.div
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </motion.div>
            </Button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div 
            key={menuKey}
            className="md:hidden backdrop-blur supports-[backdrop-filter]:bg-background/30 w-4/5 max-sm:w-full max-sm:m-3 rounded-3xl mt-4 border border-border overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.22, 1, 0.36, 1],
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          >
            <motion.div 
              className="container p-3 grid gap-2 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
            >
              {links.map((l, index) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: 0.15 + index * 0.05,
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Link
                    href={l.href}
                    className={cn(
                      "block px-4 py-2 text-sm rounded-full transition-colors hover:text-primary hover:bg-accent",
                      isActive(l.href) ? "bg-accent text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.15 + links.length * 0.05,
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <Button asChild className="bg-primary hover:bg-primary/90 w-full ring-0 ring-offset-0 text-primary-foreground hover:ring-2 hover:ring-offset-2 hover:ring-primary">
                  <Link href="#contact">Contact</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
