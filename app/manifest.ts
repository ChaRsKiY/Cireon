import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cireon",
    short_name: "Cireon",
    description:
      "Современная студия: веб, мобильные, 3D/AR и AI‑интеграции. Анимации, производительность и отличный UX.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0f",
    theme_color: "#7c3aed",
    icons: [
      { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  }
}
