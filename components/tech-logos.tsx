"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

const tech = [
  { name: "Next.js", icon: "/nextjs-logo.png" },
  { name: "Node.js", icon: "/nodejs-logo.png" },
  { name: "React", icon: "/react-logo.png" },
  { name: "TypeScript", icon: "/typescript-logo.png" },
  { name: "Tailwind CSS", icon: "/tailwind-logo.png" },
  { name: "Framer Motion", icon: "/framer-logo.png" },
  { name: "Vercel", icon: "/vercel-logo.png" },
  { name: "Three.js", icon: "/threejs-logo.png" },
  { name: "GraphQL", icon: "/graphql-logo.png" },
  { name: "PostgreSQL", icon: "/postgresql-logo.png" },
  { name: "Docker", icon: "/docker-logo.png" },
  { name: "Prisma", icon: "/prisma-logo.png" },
  { name: "Cloudflare", icon: "/cloudflare-logo.png" },
  { name: "Supabase", icon: "/supabase-logo.png" },
  { name: "Stripe", icon: "/stripe-logo.png" },
  { name: "OpenAI API", icon: "/openai-logo.png" },
  { name: "Zod", icon: "/zod-logo.png" },
  { name: "ASP.NET Core", icon: "/dotnet-logo.png" },
  { name: "C#", icon: "/csharp-logo.png" },
  { name: "SQL Server", icon: "/sqlserver-logo.png" }
]

export default function TechLogos() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const handleImageError = (name: string) => {
    setImageErrors(prev => ({ ...prev, [name]: true }))
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
      {tech.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 16 }}
          className="group"
        >
          <div className="rounded-xl border bg-card p-4 shadow-sm flex items-center gap-4 h-24">
            <Image
              src={imageErrors[item.name] ? "/placeholder-logo.png" : item.icon}
              alt={item.name}
              width={48}
              height={48}
              className="rounded-md flex-shrink-0"
              onError={() => handleImageError(item.name)}
            />
            <div className="min-w-0 flex-1">
              <p className="font-medium truncate">{item.name}</p>
              <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors truncate">
                {item.name.includes("API") || item.name.includes("GraphQL") ? "Integrations" : "Core stack"}
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="col-span-full text-center text-sm text-muted-foreground">And more...</div>
    </div>
  )
}
