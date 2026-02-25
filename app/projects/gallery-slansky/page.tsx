import { Metadata } from "next"
import GallerySlanskyClient from "./gallery-slansky-client"

export const metadata: Metadata = {
    title: "Galerie Slansky | Cireon Projects",
    description: "E-commerce digital platform for Markus Slansky art gallery. Built by Cireon."
}

export default function GallerySlanskyPage() {
    return <GallerySlanskyClient />
}
