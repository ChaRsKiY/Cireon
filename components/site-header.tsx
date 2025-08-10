"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import ModeToggle from "./mode-toggle"
import { FaCode } from "react-icons/fa"

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

      const scrollPosition = window.scrollY + 200 // Offset from top
      const documentHeight = document.documentElement.scrollHeight
      const windowHeight = window.innerHeight

      let currentSection = "home"

      // Special check for contact section (if we're near the bottom)
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        currentSection = "contact"
      } else {
        // Regular section detection
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
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return activeSection === "home"
    return activeSection === href.replace("#", "")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-7 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white">
            <FaCode className="size-4" />
          </div>
          <span className="text-lg font-semibold">Cireon</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "px-3 py-2 text-sm rounded-md transition-colors hover:text-foreground hover:bg-accent",
                isActive(l.href) ? "text-foreground font-medium bg-accent" : "text-muted-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild className="hidden sm:inline-flex bg-violet-600 hover:bg-violet-600/90 text-white">
            <Link href="#contact">Contact</Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden bg-transparent"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background/95">
          <div className="container px-4 py-3 grid gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "px-2 py-2 rounded-md transition-colors hover:bg-accent",
                  isActive(l.href) ? "bg-accent text-foreground" : "text-muted-foreground",
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="bg-violet-600 hover:bg-violet-600/90 text-white">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
