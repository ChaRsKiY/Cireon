import { Metadata } from "next"
import RivallClient from "./rivall-client"

export const metadata: Metadata = {
    title: "Rivall | Cireon Projects",
    description: "The next generation platform launching late 2026. A massive, innovative project by Cireon."
}

export default function RivallPage() {
    return <RivallClient />
}
