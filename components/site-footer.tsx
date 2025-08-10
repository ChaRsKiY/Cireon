import Link from "next/link"
import { FaCode } from "react-icons/fa"

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-md bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white">
              <FaCode className="size-4" />
            </div>
            <span className="text-lg font-semibold">Cireon</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Cireon builds modern web and mobile products with high‑quality motion and AI integrations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <p className="text-sm font-medium">Navigation</p>
            <ul className="text-sm text-muted-foreground grid gap-1">
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium">Social</p>
            <ul className="text-sm text-muted-foreground grid gap-1">
              <li>
                <a href="https://github.com" className="hover:underline" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:underline" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:me@cireon.dev" className="hover:underline">
                  me@cireon.dev
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:text-right text-sm text-muted-foreground">
          © {new Date().getFullYear()} Cireon. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
