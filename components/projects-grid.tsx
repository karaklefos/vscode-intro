"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const SHAPES = [
  {
    id: "shape-0",
    base: "M0.2,0.15 C0.5,0.05 0.8,0.1 0.9,0.35 C1,0.6 1,0.85 0.8,0.95 C0.6,1.05 0.3,1 0.1,0.8 C-0.05,0.6 0,0.35 0.2,0.15",
    hover: "M0.1,0.2 C0.4,0.1 0.7,0.15 0.95,0.3 C1.1,0.5 1,0.8 0.8,0.95 C0.6,1.1 0.3,1.05 0.1,0.85 C-0.1,0.6 0.05,0.4 0.1,0.2"
  },
  {
    id: "shape-1",
    base: "M0.25,0.1 C0.6,0 0.9,0.05 0.95,0.3 C1,0.55 0.95,0.8 0.8,0.95 C0.65,1.1 0.3,1 0.15,0.85 C0,0.7 0.05,0.3 0.25,0.1",
    hover: "M0.15,0.2 C0.5,0.05 0.85,0.1 0.95,0.35 C1.1,0.6 1,0.85 0.8,0.95 C0.6,1.05 0.3,1 0.1,0.8 C-0.05,0.6 0,0.4 0.15,0.2"
  },
  {
    id: "shape-2",
    base: "M0.2,0.1 C0.5,0 0.85,0.05 0.95,0.3 C1.05,0.55 1,0.8 0.8,0.95 C0.6,1.1 0.2,1.05 0.1,0.85 C0,0.65 0.05,0.3 0.2,0.1",
    hover: "M0.1,0.2 C0.4,0.05 0.75,0.1 0.95,0.35 C1.1,0.6 1,0.85 0.8,0.95 C0.6,1.05 0.3,1.1 0.1,0.9 C-0.1,0.7 0.05,0.45 0.1,0.2"
  },
  {
    id: "shape-3",
    base: "M0.3,0.05 C0.6,0.05 0.9,0.1 0.95,0.35 C1,0.6 0.95,0.85 0.75,0.95 C0.5,1.05 0.2,1.05 0.1,0.85 C0,0.65 0.05,0.3 0.3,0.05",
    hover: "M0.2,0.1 C0.5,0 0.9,0.05 1,0.3 C1.1,0.6 1,0.9 0.8,1 C0.5,1.1 0.1,1 0,0.8 C-0.1,0.6 0.1,0.3 0.2,0.1"
  }
]

export const projects = [
  { 
    title: "Life Anew Restorative Justice", 
    image: "/img/lifeanew_title.png", 
    href: "/projects/life-anew", 
    description: "I led the design and development of a dual-platform mobile system for Life Anew—an internal enterprise app and a connected Community app." 
  },
  { 
    title: "Mod Muse", 
    image: "/img/modmuse_title.jpg", 
    href: "/projects/mod-muse", 
    description: "A vintage fashion marketplace inspired by the bold style of the 1960s Mod era, designed as an end-to-end marketplace experience." 
  },
  { 
    title: "ReciFree", 
    image: "/img/recifree_title.png", 
    href: "/projects/recifree", 
    description: "A recipe app designed for users with allergens and dietary needs, focusing on approachable and empowering UI." 
  },
  { 
    title: "Botany Buddy", 
    image: "/img/botanybuddy_title.png", 
    href: "/projects/botany-buddy", 
    description: "A plant care app that helps users track routines and diagnose issues, aligned with modern iOS and Android guidelines." 
  },
]

export function ProjectsGrid() {
  return (
    <section className="py-24 md:py-32 relative bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-6xl md:text-8xl font-semibold mb-20 md:mb-32 text-center"
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Designs
        </motion.h2>

        <div className="flex flex-col gap-y-24 md:grid md:grid-cols-12 md:gap-x-12 md:gap-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const shape = SHAPES[index % SHAPES.length]
  const isEven = index % 2 !== 0

  return (
    <div 
      className={`w-full col-span-12 md:grid md:grid-cols-2 md:items-center md:gap-x-12 ${isEven ? "md:mt-32" : ""}`}
      onMouseEnter={() => { 
        setIsHovered(true); 
        window.dispatchEvent(new CustomEvent("toggleCursor", { detail: true })) 
      }}
      onMouseLeave={() => { 
        setIsHovered(false); 
        window.dispatchEvent(new CustomEvent("toggleCursor", { detail: false })) 
      }}
    >
      <motion.a
        href={project.href}
        className={`group relative block w-full aspect-square md:cursor-none ${isEven ? 'md:order-2' : 'md:order-1'}`}
      >
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id={shape.id} clipPathUnits="objectBoundingBox">
              <motion.path
                animate={isHovered ? {
                  d: [shape.base, shape.hover, shape.base],
                } : {
                  d: shape.base
                }}
                transition={{ 
                  duration: isHovered ? 4 : 1, 
                  repeat: isHovered ? Infinity : 0, 
                  ease: "easeInOut" 
                }}
              />
            </clipPath>
          </defs>
        </svg>

        <div 
          className="relative w-full h-full transition-transform duration-700 md:group-hover:scale-[1.03]"
          style={{ clipPath: `url(#${shape.id})` }}
        >
          <Image 
            src={project.image || "/placeholder.svg"} 
            alt={project.title} 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-all brightness-[0.95] md:brightness-100 duration-700" 
            priority={index < 2}
          />
        </div>
      </motion.a>

      <motion.div
        className={`flex flex-col gap-y-4 pt-10 md:pt-0 ${isEven ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'}`}
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-5xl font-serif text-foreground leading-tight">{project.title}</h3>
        <p className={`text-muted-foreground text-sm md:text-lg leading-relaxed max-w-[90%] md:max-w-xl ${isEven ? 'md:ml-auto' : ''}`}>
          {project.description}
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 text-primary font-medium ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
          <span>Explore Design</span>
          <motion.div animate={{ x: isHovered ? 5 : 0 }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}