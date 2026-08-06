"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";
import { projects } from "@/components/projects-grid";
import { ProjectNavigation } from "@/components/project-navigation";
import { ProjectSubNav } from "@/components/project-sub-nav";

export default function PortfolioWebsiteProject() {
  const projectData = projects.find((p) => p.href === "/projects/ryan-up-in-here");

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className="relative bg-white">
        {/* 1. HEADER & METADATA SECTION */}
        <section id="overview" className="pt-32 pb-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12 font-medium group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                Back to Projects
              </Link>

              <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-[0.9]">
                Ryan Up In Here<br />
                <span className="text-muted-foreground/40">Portfolio</span>

              </h1>

              <div className="mt-6 flex justify-center md:justify-start">
                <Link
                  href="https://ryanupinhere.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-accent text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:opacity-95"
                >
                  Visit Shipped Website
                  <span aria-hidden>↗</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-8 border-y border-gray-100">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Role</p>
                  <p className="font-medium text-green-600">UX Designer & Developer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Timeline</p>
                  <p className="font-medium">2 Months (2026)</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Tools</p>
                  <p className="font-medium">Figma, Next.js, Tailwind</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Platform</p>
                  <p className="font-medium">Responsive Web App</p>
                </div>
              </div>

              <div className="max-w-3xl">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-pretty">
                  {projectData?.description || "A responsive portfolio website crafted for Austin-based game developer Ryan Myers, creator of Ryan Up In Here."}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STICKY NAV */}
        <ProjectSubNav
          items={[
            { name: "Overview", href: "#overview" },
            { name: "Goal", href: "#goal" },
            { name: "Desktop", href: "#desktop" },
            { name: "Mobile", href: "#mobile" },
            { name: "Impact", href: "#impact" },
          ]}
        />

        {/* HERO IMAGE */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/img/ryanupinhere_home.png"
                alt="Ryan Up In Here Hero"
                width={1400}
                height={900}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* 2. THE GOAL */}
        <section id="goal" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Goal</h2>
                <h3 className="text-3xl font-semibold leading-tight">
Building an accessible, high-energy gaming portfolio designed to scale              </h3>
              </div>

              <div className="md:col-span-8">
                <div className="space-y-12">
                  <p className="text-xl text-muted-foreground leading-relaxed">
The goal was to create a responsive portfolio that balances rich, cyberpunk visual storytelling with fast cross-device performance—ensuring high-contrast neon accents and dark grid layouts feel bold on widescreen displays while remaining clean, accessible, and uncluttered on mobile.                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold mb-2 text-black">A refined browsing experience</h4>
                      <p className="text-muted-foreground">Build a layout that scales cleanly from wide monitors to smartphone screens while preserving strong typography and hierarchy.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-black">High-fidelity presentation</h4>
                      <p className="text-muted-foreground">Create compelling visual sections that highlight backend and gaming projects through a minimal cyberpunk aesthetic that feels polished, intentional, and accessible on any screen size.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* 3. DESKTOP MOCKUP INTERSTITIAL */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            {/* Swapped to match the Hero structure for cohesive rounding and shadows */}
            <div className="rounded-3xl overflow-hidden shadow-xl inline-block w-full">
              <Image
                src="/img/ryanupinhere_games.png"
                alt="Desktop Games Page - Ryan Up In Here"
                width={1400}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* 4. DESKTOP */}
        <section id="desktop" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Desktop</h2>
              <h3 className="text-4xl md:text-4xl font-semibold tracking-tight">A widescreen, high-contrast desktop experience</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8">
                <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="relative w-full aspect-16/10 bg-slate-100 flex items-center justify-center">
                    <span className="text-muted-foreground text-lg">Content layout and grid exploration</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-black">Structured content flow</h4>
                  <p className="text-muted-foreground leading-relaxed">
The desktop layout acts as an immersive terminal for Ryan's backend architecture and video game environments. By pairing a dark grid background with vibrant neon accents, the aesthetic leans heavily into a fun, cyberpunk vibe while remaining strictly accessible. Generous whitespace and a consistent top header bar keep the interface minimalist and clean, allowing the high-contrast elements to pop naturally without overwhelming the user on larger screens.                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. MOBILE */}
        <section id="mobile" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-end">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Mobile</h2>
                <h3 className="text-4xl font-semibold tracking-tight">A fluid, fully responsive mobile web app</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Translating the cyberpunk aesthetic to mobile required precise spacing to keep the bold visuals from feeling cluttered. The dark grid and high-contrast neon accents scale down seamlessly, preserving clean whitespace, full accessibility, and a fluid web app feel on smaller screens.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-3xl overflow-hidden">
                <div className="relative w-full aspect-9/16 flex items-center justify-center">
                  <Image
                    src="/img/ryanupinhere_mobile_home.png"
                    alt="Mobile Home - Ryan Up In Here"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden">
                <div className="relative w-full aspect-9/16 flex items-center justify-center">
                  <Image
                    src="/img/ryanupinhere_mobile_games.png"
                    alt="Mobile Games Page - Ryan Up In Here"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden">
                <div className="relative w-full aspect-9/16 flex items-center justify-center">
                  <Image
                    src="/img/ryanupinhere_mobile_persistent.png"
                    alt="Mobile Persistent Illusion Page - Ryan Up In Here"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. IMPACT */}
        <section id="impact" className="py-24 bg-black text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h3 className="text-3xl font-bold mb-12">Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <p className="text-5xl font-bold text-blue-400 mb-2">100%</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Lighthouse Score</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-400 mb-2">0.7s</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Load Time (LCP)</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-400 mb-2">100%</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Best Practices</p>
              </div>
            </div>
          </div>
        </section>

        <ProjectNavigation currentHref="/projects/ryan-up-in-here" />
      </main>
    </>
  );
}
