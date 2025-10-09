import Link from "next/link"
import { notFound } from "next/navigation"
import { getProjectBySlug, getProjects } from "@/lib/projects"
import ProjectGallery from "@/app/projects/[slug]/project-gallery"

type Params = { params: { slug: string } }

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Params) {
  const project = getProjectBySlug((await params).slug)
  if (!project) return {}
  return {
    title: `${project.title} | Cireon Projects`,
    description: project.subtitle || project.description?.slice(0, 160),
    openGraph: {
      images: project.coverImage ? [{ url: project.coverImage }] : [],
    },
  }
}

export default async function ProjectPage({ params }: Params) {
  const project = getProjectBySlug((await params).slug)
  if (!project) return notFound()

  return (
    <main className="container mx-auto px-4 pb-24 pt-32">
      <div className="mb-8">
        <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">← All projects</Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
          {project.subtitle ? (
            <p className="text-muted-foreground mb-6">{project.subtitle}</p>
          ) : null}

          <ProjectGallery 
            coverImage={project.coverImage}
            gallery={project.gallery || []}
            title={project.title}
          />

          <section className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>
          </section>

          {project.outcomes?.length ? (
            <section className="mt-8 space-y-3">
              <h2 className="text-xl font-semibold">Results</h2>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {project.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside className="lg:col-span-1">
          <div className="rounded-2xl border border-border p-5 sticky top-28">
            {project.year ? (
              <div className="text-sm text-muted-foreground mb-3">Year: {project.year}</div>
            ) : null}
            {project.role ? (
              <div className="mb-5">
                <div className="text-sm font-medium mb-1">Role</div>
                <div className="text-muted-foreground">{project.role}</div>
              </div>
            ) : null}

            {project.responsibilities?.length ? (
              <div className="mb-5">
                <div className="text-sm font-medium mb-1">Responsibilities</div>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {project.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mb-5">
              <div className="text-sm font-medium mb-2">Technologies</div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-accent text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.links?.length ? (
              <div className="flex flex-col gap-2">
                {project.links.map((l) => (
                  <Link
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    className="text-sm underline underline-offset-4 hover:text-primary"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </aside>
      </div>
    </main>
  )
}


