"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectGalleryProps {
  coverImage: string
  gallery: string[]
  title: string
}

export default function ProjectGallery({ coverImage, gallery, title }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-6">
      {/* Main Image Display */}
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-border bg-muted">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={gallery[selectedImage]}
              alt={`${title} - Image ${selectedImage + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={selectedImage === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Gallery */}
      {gallery.length > 1 && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {gallery.map((src, index) => (
            <motion.button
              key={src}
              onClick={() => setSelectedImage(index)}
              className={`relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                selectedImage === index
                  ? "border-primary shadow-lg shadow-primary/20"
                  : "border-border hover:border-primary/50"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Image
                src={src}
                alt={`${title} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
              
              {/* Overlay for selected image */}
              {selectedImage === index && (
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
              
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-200"
                whileHover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              />
            </motion.button>
          ))}
        </div>
      )}
    </div>
  )
}
