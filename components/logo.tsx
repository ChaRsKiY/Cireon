"use client"

import { useTheme } from "next-themes";
import Image from "next/image";

const Logo = () => {
    const { theme } = useTheme()
    return (
        <div className="h-full">
            <Image src={theme === "dark" ? "/logo_white.png" : "/logo_black.png"} width={300} height={300} alt="Logo" className="h-full w-fit duration-150 group-hover:rotate-45 group-hover:scale-110" />
        </div>
    )
}

export default Logo;