"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export const projects = [
  {
    title: "Life Anew Restorative Justice",
    description:
      "I led the design and development of a dual-platform mobile system for Life Anew—an internal enterprise app and a connected Community app. The internal tool centralizes employee training, program details, and service resources, while the external app connects community members to essential needs like shelter, food, and documentation. Focused on creating a seamless, high-efficiency interface to reduce training time and accelerate service delivery.",
    image: "/img/life_anew_behance.png",
    href: "/projects/life-anew",
  },
  {
    title: "Mod Muse",
    description:
      "Mod Muse is a vintage fashion marketplace inspired by the bold style of the 1960s Mod era. I designed an end-to-end experience in Figma, from concept to prototype, that streamlines shopping for curated vintage pieces, validating design decisions through user testing to ensure a smooth, stylish experience.",
    image: "/img/modmuse1.jpg",
    href: "/projects/mod-muse",
  },
  {
    title: "ReciFree",
    description:
      "ReciFree is a recipe app designed for users with allergens, dietary needs and/or preferences, making it easy to filter ingredients, save recipes, and plan meals without the guesswork. I focused on creating an experience that feels both approachable and empowering, with an emphasis on usability and inclusion - shaped by real user feedback and competitive insights.",
    image: "/img/recifree.jpg",
    href: "/projects/recifree",
  },
  {
    title: "Botany Buddy",
    description:
      "Botany Buddy is a plant care app that helps users track routines, diagnose issues, and get personalized tips for healthy, thriving plants. I led the design from concept to high-fidelity prototype in Figma, grounded in user research and aligned with iOS and Android guidelines to ensure a seamless, platform-optimized experience.",
    image: "/img/botanybuddy.jpg",
    href: "/projects/botany-buddy",
  },
  {
    title: "Savvy Pig",
    description:
      "Savvy Pig is a financial savings app that makes money management approachable by blending a professional tone with playful design. I crafted the brand identity, logo, and app experience from the ground up, refining wireframes and prototypes while continuously using user and A/B testing to create an intuitive interface that motivates smarter saving.",
    image: "/img/savvypig.jpg",
    href: "/projects/savvy-pig",
  },
]

export function ProjectsGrid() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-semibold mb-20 text-balance pt-0 md:pt-0"
        >
          Designs
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Abstract decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  // Varying sizes for bento grid
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
      className={`project-card group relative overflow-hidden rounded-3xl glass-card cursor-none ${gridClass}`}
    >
      <div className="absolute inset-0">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>

      <div className="relative h-full flex flex-col justify-end p-8 z-10">
        <motion.h3
          className="text-3xl md:text-4xl font-semibold mb-4 text-balance"
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          className="text-base md:text-lg leading-relaxed text-muted-foreground line-clamp-3"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3 }}
          className="mt-6 inline-flex items-center gap-2 text-primary font-medium"
        >
          Read More
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
