"use client"

import { motion } from "framer-motion"
import {
  BarChart3,
  Mail,
  CheckSquare,
  Sparkles,
  Zap,
  Webhook,
  FileText,
  Layout,
  Move,
  Palette,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const features = [
  {
    icon: BarChart3,
    title: "CRM & Finance",
    description: "Complete customer relationship management integrated with financial dashboards.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated campaigns, templates and analytics for your audience.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: CheckSquare,
    title: "Tasks & Projects",
    description: "Advanced task management with kanban, lists and timelines.",
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    icon: Sparkles,
    title: "AI Insights",
    description: "Smart analytics and predictions powered by advanced AI models.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  },
  {
    icon: Zap,
    title: "Automations",
    description: "Build complex workflows to automate your daily business routine.",
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Connect with any external service through reliable webhooks.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    icon: FileText,
    title: "Forms Builder",
    description: "Drag & drop form builder with instant deployment and data collection.",
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  {
    icon: Layout,
    title: "Drag & Drop",
    description: "Intuitive visual editor for building interfaces and layouts.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  },
  {
    icon: Palette,
    title: "Custom Design",
    description: "Full control over appearance with custom themes and branding.",
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  }
]

export default function RivallSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-sm border-primary/30 bg-primary/5 text-primary">
            Flagship Product
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
          >
            Rivall
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl"
          >
            The all-in-one platform for small and medium businesses.
            Combine CRM, Finance, Marketing and AI in one powerful ecosystem.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/5"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute inset-0 border border-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link href="/projects/rivall">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full group">
              Explore Rivall
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
