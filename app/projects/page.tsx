import Image from "next/image"
import Link from "next/link"
import { getProjects } from "@/lib/projects"

export const metadata = {
  title: "Projects | Cireon",
  description: "Projects and case studies: descriptions, tech stack and results",
}

export default function ProjectsPage() {
  const items = getProjects()

  return (
      <main className="container mx-auto px-4 pb-24 pt-32">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Projects</h1>
      <p className="text-muted-foreground mb-10 max-w-2xl">
        Collection of implemented projects: details, technologies, contribution and results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow bg-card"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={p.coverImage}
                alt={p.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                priority={false}
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
              {p.subtitle ? (
                <p className="text-sm text-muted-foreground line-clamp-2">{p.subtitle}</p>
              ) : null}
              <div className="mt-3 flex flex-wrap gap-2">
                {p.techStack.slice(0, 4).map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-accent text-muted-foreground">
                    {t}
                  </span>
                ))}
                {p.techStack.length > 4 ? (
                  <span className="text-xs px-2 py-1 rounded-full bg-accent text-muted-foreground">+{p.techStack.length - 4}</span>
                ) : null}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}


