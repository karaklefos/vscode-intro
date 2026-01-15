"use client"

import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Hero } from "@/components/hero"
import { ProjectsGrid } from "@/components/projects-grid"
import { CustomCursor } from "@/components/custom-cursor"
import { Footer } from "@/components/footer"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <>
      <CustomCursor />
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-200/60 via-blue-100/50 to-indigo-200/40"></div>
        <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-20 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div ref={containerRef} className="relative">
        <Hero scrollProgress={scrollYProgress} />
        <ProjectsGrid />
      </div>
      <Footer />
    </>
  )
}
