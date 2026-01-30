"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export const projects = [
  {
    title: "Life Anew Restorative Justice",
    description:
      "I led the design and development of a dual-platform mobile system for Life Anew—an internal enterprise app and a connected Community app. The internal tool centralizes employee training, program details, and service resources, while the external app connects community members to essential needs like shelter, food, and documentation.",
    image: "/img/lifeanew_title.png",
    href: "/projects/life-anew",
  },
  {
    title: "Mod Muse",
    description:
      "Mod Muse is a vintage fashion marketplace inspired by the bold style of the 1960s Mod era. I designed an end-to-end experience in Figma, from concept to prototype, that streamlines shopping for curated vintage pieces.",
    image: "/img/modmuse_title.jpg",
    href: "/projects/mod-muse",
  },
  {
    title: "ReciFree",
    description:
      "ReciFree is a recipe app designed for users with allergens, dietary needs and preferences. I focused on creating an experience that feels both approachable and empowering, shaped by real user feedback and competitive insights.",
    image: "/img/recifree_title.png",
    href: "/projects/recifree",
  },
  {
    title: "Botany Buddy",
    description:
      "Botany Buddy is a plant care app that helps users track routines and diagnose issues. I led the design from concept to high-fidelity prototype in Figma, aligned with iOS and Android guidelines.",
    image: "/img/botanybuddy_title.png",
    href: "/projects/botany-buddy",
  },
  {
    title: "Savvy Pig",
    description:
      "Savvy Pig is a financial savings app that blends a professional tone with playful design. I crafted the brand identity and app experience, using A/B testing to create an intuitive interface.",
    image: "/img/savvypig_title.png",
    href: "/projects/savvy-pig",
  },
]

export function ProjectsGrid() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-semibold mb-12 md:mb-20 text-balance"
        >
          Designs
        </motion.h2>

        {/* Bento Grid: Changed mobile to auto-height so text isn't cramped */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:auto-rows-[400px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Abstract decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  // Varying sizes for bento grid on desktop
  const gridClass = index === 0 ? "md:col-span-2 md:row-span-2" : index === 2 ? "lg:col-span-2" : ""

  return (
    <motion.a
      href={project.href}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`project-card group relative overflow-hidden rounded-3xl glass-card flex flex-col min-h-[350px] md:min-h-full ${gridClass}`}
    >
      {/* Background Image & Gradient */}
      <div className="absolute inset-0">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 md:group-hover:scale-105"
        />
        {/* Mobile: darker gradient for constant readability | Desktop: smoother gradient that shifts on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 md:from-background md:via-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 md:p-8 z-10">
        <motion.h3
          className="text-2xl md:text-4xl font-semibold mb-3 md:mb-4 text-balance text-white md:text-foreground"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>

        {/* Description: Visible on mobile, Animate-in on Desktop */}
        <div className="overflow-hidden">
          <motion.p
            className="text-sm md:text-lg leading-relaxed text-white/90 md:text-muted-foreground line-clamp-3 md:line-clamp-4"
            initial={false}
            animate={{
              opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : (isHovered ? 1 : 0),
              height: typeof window !== 'undefined' && window.innerWidth < 768 ? "auto" : (isHovered ? "auto" : 0),
            }}
            transition={{ duration: 0.3 }}
          >
            {project.description}
          </motion.p>
        </div>

        {/* CTA: Always visible on mobile, Slides up on Desktop */}
        <motion.div
          initial={false}
          animate={{
            opacity: typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : (isHovered ? 1 : 0),
            y: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : (isHovered ? 0 : 20),
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="mt-4 md:mt-6 inline-flex items-center gap-2 text-primary font-medium"
        >
          <span className="text-sm md:text-base">Read More</span>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 10H16M16 10L10 4M16 10L10 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  )
}
