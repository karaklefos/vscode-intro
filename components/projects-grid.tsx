"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Organic "River Stone" shapes: perfectly rounded, no flat edges.
const SHAPES = [
  {
    id: "shape-0",
    base: "M.5,0 C.8,0 1,.2 1,.5 C1,.8 .8,1 .5,1 C.2,1 0,.8 0,.5 C0,.2 .2,0 .5,0",
    hover: "M.5,0.05 C.9,0.05 1.05,0.3 0.95,0.6 C0.85,0.9 0.7,0.95 0.5,0.95 C0.2,0.95 0.05,0.8 0.05,0.5 C0.05,0.2 0.2,0.05 .5,0.05"
  },
  {
    id: "shape-1",
    base: "M.5,0 C.9,0 1,.3 1,.5 C1,.7 .9,1 .5,1 C.1,1 0,.7 0,.5 C0,.3 .1,0 .5,0",
    hover: "M.5,0.1 C0.8,0.1 0.95,0.2 0.95,0.5 C0.95,0.8 0.8,0.9 0.5,0.9 C0.2,0.9 0.05,0.8 0.05,0.5 C0.05,0.2 0.2,0.1 .5,0.1"
  },
  {
    id: "shape-2",
    base: "M.5,0.05 C.8,0.05 0.95,0.2 0.95,0.5 C0.95,0.8 0.8,0.95 0.5,0.95 C0.2,0.95 0.05,0.8 0.05,0.5 C0.05,0.2 0.2,0.05 .5,0.05",
    hover: "M.5,0 C.9,0 1,.2 1,.5 C1,.8 .8,1 .5,1 C.2,1 0,.8 0,.5 C0,.2 .2,0 .5,0"
  },
  {
    id: "shape-3",
    base: "M.5,0 C.85,0 0.95,0.2 0.95,0.5 C0.95,0.8 0.85,1 0.5,1 C0.15,1 0.05,0.8 0.05,0.5 C0.05,0.2 0.15,0 .5,0",
    hover: "M.5,0.05 C0.8,0.05 1,0.2 1,0.5 C1,0.8 0.8,0.95 0.5,0.95 C0.2,0.95 0,0.8 0,0.5 C0,0.2 0.2,0.05 .5,0.05"
  }
]

export const projects = [
  { 
    title: "Life Anew Restorative Justice", 
    image: "/img/lifeanew_title.png", 
    href: "/projects/life-anew", 
    description: "Designed a unified mobile application for Life Anew featuring role-based dashboards: a robust management suite for employees and an accessible resource portal for community members." 
  },
  { 
    title: "Mod Muse", 
    image: "/img/modmuse_title.jpg", 
    href: "/projects/mod-muse", 
    description: "Leveraging my background in fashion merchandising, I designed Mod Muse, a curated vintage fashion app. I led the visual identity and UX strategy to create an authentic marketplace experience that celebrates 1960s 'Vibe' through a contemporary digital lens." 
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
      {/* 1. Image Section wrapped in Link */}
      <Link
        href={project.href}
        className={`group relative block w-full aspect-square md:cursor-none ${isEven ? 'md:order-2' : 'md:order-1'}`}
      >
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id={shape.id} clipPathUnits="objectBoundingBox">
              <motion.path
                animate={{
                  d: [shape.base, shape.hover, shape.base],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </clipPath>
          </defs>
        </svg>

        <div 
          className="relative w-full h-full transition-transform duration-1000 md:group-hover:scale-[1.04]"
          style={{ clipPath: `url(#${shape.id})` }}
        >
          <Image 
            src={project.image || "/placeholder.svg"} 
            alt={project.title} 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-all brightness-[0.9] md:brightness-100 duration-1000" 
            priority={index < 2}
          />
        </div>
      </Link>

      {/* 2. Typography Section */}
      <motion.div
        className={`flex flex-col gap-y-4 pt-10 md:pt-0 ${isEven ? 'md:order-1 md:text-right' : 'md:order-2 md:text-left'}`}
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <Link href={project.href} className="group/text">
          <h3 className="text-3xl md:text-5xl font-serif text-foreground leading-tight group-hover/text:text-primary transition-colors duration-300">
            {project.title}
          </h3>
        </Link>
        
        <p className={`text-muted-foreground text-sm md:text-lg leading-relaxed max-w-[90%] md:max-w-xl ${isEven ? 'md:ml-auto' : ''}`}>
          {project.description}
        </p>

        <Link 
          href={project.href}
          className={`mt-4 inline-flex items-center gap-2 text-primary font-medium group/link ${isEven ? 'md:justify-end' : 'md:justify-start'}`}
        >
          <span className="group-hover/link:underline underline-offset-4 decoration-1">Explore Design</span>
          <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ type: "spring", stiffness: 300 }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  )
}