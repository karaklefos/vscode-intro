"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// This array acts as your "Source of Truth" for the project order
const projects = [
  { title: "Life Anew Restorative Justice", href: "/projects/life-anew", image: "/img/lifeanew_title.jpg" },
  { title: "Mod Muse", href: "/projects/mod-muse", image: "/img/modmuse_title.jpg" },
  { title: "ReciFree", href: "/projects/recifree", image: "/img/recifree_title.png" },
  { title: "Botany Buddy", href: "/projects/botany-buddy", image: "/img/botanybuddy_title.png" },
  { title: "Savvy Pig", href: "/projects/savvy-pig", image: "/img/savvypig_title.png" },
];

export function ProjectNavigation({ currentHref }: { currentHref: string }) {
  const currentIndex = projects.findIndex((p) => p.href === currentHref);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-between gap-12 mt-32 pt-12 border-t border-foreground/10"
    >
      {/* Back Link */}
      <Link
        href="/"
        className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors order-2 md:order-1"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:-translate-x-1">
          <path d="M16 10H4M4 10L10 16M4 10L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        All Projects
      </Link>

      {/* Next Project Link with Thumbnail */}
      <Link
        href={nextProject.href}
        className="group flex items-center gap-6 text-right order-1 md:order-2"
      >
        <div>
          <span className="block text-sm text-muted-foreground uppercase tracking-widest mb-2">Next Project</span>
          <div className="flex items-center gap-3 text-2xl md:text-4xl font-semibold group-hover:text-primary transition-colors">
            {nextProject.title}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-2 hidden md:block">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* The Thumbnail */}
        <div className="relative w-20 h-20 md:w-32 md:h-24 overflow-hidden rounded-xl border border-foreground/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2 shadow-lg">
          <Image 
            src={nextProject.image} 
            alt={nextProject.title} 
            fill 
            className="object-cover"
          />
        </div>
      </Link>
    </motion.div>
  );
}