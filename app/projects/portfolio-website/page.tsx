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
  const projectData = projects.find((p) => p.href === "/projects/portfolio-website");

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

              <h1 className="text-5xl md:text-8xl font-bold mb-10 tracking-tight leading-[0.9]">
                Portfolio Website <br />
                <span className="text-muted-foreground/40">Modern Desktop Presentation</span>
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-8 border-y border-gray-100">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Role</p>
                  <p className="font-medium">Product & Visual Designer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Timeline</p>
                  <p className="font-medium">4 Months (2026)</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Tools</p>
                  <p className="font-medium">Figma, Next.js, Tailwind</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Focus</p>
                  <p className="font-medium text-blue-600">Desktop-first UX</p>
                </div>
              </div>

              <div className="max-w-3xl">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-pretty">
                  {projectData?.description || "A responsive portfolio website crafted for desktop-first audiences, highlighting visual hierarchy, content clarity, and polished interaction states across wide screens."}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STICKY NAV */}
        <ProjectSubNav
          items={[
            { name: "Overview", href: "#overview" },
            { name: "The Challenge", href: "#challenge" },
            { name: "Research", href: "#research" },
            { name: "Solution", href: "#solution" },
            { name: "Visuals", href: "#visuals" },
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
                src="/img/portfolio_intro.jpg"
                alt="Portfolio Website Hero"
                width={1400}
                height={900}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* 2. THE CHALLENGE */}
        <section id="challenge" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">The Challenge</h2>
                <h3 className="text-3xl font-semibold leading-tight">
                  Creating a polished desktop portfolio with clarity at scale
                </h3>
              </div>

              <div className="md:col-span-8">
                <div className="space-y-12">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    The main challenge was balancing rich visual storytelling with fast desktop performance, making sure the portfolio felt sophisticated without overwhelming the user on large canvas screens.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold mb-2 text-black">A refined browsing experience</h4>
                      <p className="text-muted-foreground">Build a layout that scales cleanly from wide monitors to smaller tablets while preserving strong typography and hierarchy.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-black">High-fidelity presentation</h4>
                      <p className="text-muted-foreground">Create compelling visual sections that feel intentional, clear, and polished on desktop screens.</p>
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
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
              <div className="relative w-full aspect-16/10 bg-slate-200 flex items-center justify-center">
                <span className="text-muted-foreground text-lg">Desktop browser mockup placeholder</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. RESEARCH HIGHLIGHTS */}
        <section id="research" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Research Highlights</h2>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Desktop-first content strategy</h3>
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
                    Prioritized user scanning with clear sectional breaks, readable headline hierarchy, and generous spacing for desktop readers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SOLUTION */}
        <section id="solution" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-end">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">The Solution</h2>
                <h3 className="text-4xl font-semibold tracking-tight">A polished, desktop-first portfolio experience</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                The website uses clean cards, wide imagery, and a modular system designed to showcase work elegantly on larger screens.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100">
                <div className="relative w-full aspect-4/3 bg-slate-200 flex items-center justify-center">
                  <span className="text-muted-foreground">Homepage interface</span>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100">
                <div className="relative w-full aspect-4/3 bg-slate-200 flex items-center justify-center">
                  <span className="text-muted-foreground">Project detail view</span>
                </div>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-md bg-white border border-gray-100">
                <div className="relative w-full aspect-4/3 bg-slate-200 flex items-center justify-center">
                  <span className="text-muted-foreground">Case study preview section</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. VISUALS */}
        <section id="visuals" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Visual Presentation</h2>
            <h3 className="text-4xl font-semibold mb-6 text-black">Desktop web imagery with refined spacing</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-16">
              Visual mockups lean into browser aspect ratios while preserving the same motion and polish as the broader site.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-slate-200 aspect-16/10 flex items-center justify-center">
                <span className="text-muted-foreground">Landing page presentation</span>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-slate-200 aspect-16/10 flex items-center justify-center">
                <span className="text-muted-foreground">Content section preview</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. IMPACT */}
        <section id="impact" className="py-24 bg-black text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h3 className="text-3xl font-bold mb-12">The Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <p className="text-5xl font-bold text-blue-400 mb-2">+30%</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Desktop Engagement</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-400 mb-2">2.5s</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Load Time</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-blue-400 mb-2">Stable</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Visual Hierarchy</p>
              </div>
            </div>
          </div>
        </section>

        <ProjectNavigation currentHref="/projects/portfolio-website" />
      </main>
    </>
  );
}
