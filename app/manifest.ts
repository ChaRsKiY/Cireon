import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cireon — Digital studio: Web, AI, Motion",
    short_name: "Cireon",
        description:
          "Modern studio: web, mobile, 3D/AR and AI integrations. Animations, performance and great UX.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0f",
    theme_color: "#7c3aed",
    categories: ["productivity", "business", "developer"],
    icons: [
      { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
