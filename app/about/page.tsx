"use client";

import { motion } from "framer-motion";
import { CustomCursor } from "@/components/custom-cursor";
import Navigation from "@/components/navigation";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import Image from "next/image";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navigation />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100/70 via-background to-blue-50/60"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-300/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-blue-300/30 via-indigo-200/20 to-transparent"></div>
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <main className="min-h-screen pt-32 pb-20 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-balance leading-[0.9] tracking-tight">
              About <span className="text-primary italic font-serif">Me</span>
            </h1>
          </motion.div>

          {/* Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-3xl grain-texture">
                <img
                  src="/img/joey.nm.jpg"
                  alt="Kara Klefos Profile"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col justify-center space-y-6"
            >
              <p className="text-xl md:text-2xl leading-relaxed text-secondary">
                I'm Kara, a Product & UX/UI Designer in Austin, Texas!
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My career began in fashion merchandising and bridal management.
                This wasn't just about aesthetics; it was about empathy and
                business logic. I spent years predicting trends, managing teams,
                and learning how to translate a client's vague needs into a
                perfect, tangible result. At Second Summer Bride, I realized
                that a better website layout could directly drive business
                growth, leading to a 25% increase in inquiries.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                At Stitch Fix, I found the
                link between my styling intuition and technical products. I
                began providing qualitative feedback directly to engineering
                teams to improve recommendation algorithms. This evolved into
                work with Appen, where I analyzed AI data quality to help refine
                machine learning models. This experience gave me a data-first
                mindset - I understand how the "engine" under the hood affects
                the user's experience.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I eventually moved from influencing products to building them,
                earning certificates in UI Design and Frontend Development. My
                first major shipped project was for Life Anew Restorative
                Justice, where I served as the Lead Product Designer. I designed
                a dual-sided platform that solved a massive organizational gap,
                turning resource-access workflows that used to take weeks into a
                process that takes minutes.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm at my best when I am combining my creative eye with my
                analytical brain. Whether I am "vibe coding" a responsive site
                for a local business or architecting a complex internal tool, my
                goal is to create products that are as functional as they are
                beautiful.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Outside of work, I'm usually with my dog, Joey, out in nature,
                or indulging my passion for fashion - whether it's sewing or
                styling an outfit!
              </p>

              <div className="pt-6">
                <a
                  href="/KaraKlefos_Resume.pdf"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  Open My Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-10"
            >
              <h3 className="text-3xl font-semibold mb-8">Relevant Skills</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  User Research & Testing: Usability Testing, A/B Testing, User Flows, Journey Mapping.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Strategy: Trend Forecasting, Competitive Analysis, Persona Development, Data Synthesis.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Content: Copywriting, Information Architecture.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Systems: Design Systems, Visual Identity (Brand Guidelines), Accessibility (WCAG).
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Execution: Wireframing, Prototyping, Responsive Design, Visual Design.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Development: Front-end Coding (HTML5 / CSS3 / JavaScript), Website Creation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  AI: Prompt Engineering, AI-Assisted Design, Research Synthesis.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-card rounded-3xl p-10"
            >
              <h3 className="text-3xl font-semibold mb-8">Tools</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Wireframing/Prototyping Tools: Figma, Sketch
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Visualization Tools: Canva, Draw.io
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Editing Tools: Adobe Illustrator, Adobe Lightroom, Adobe
                  Photoshop
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Coding tools: Git, GitHub, Visual Studio Code, Webstorm,
                  Pycharm, Codepen
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  User Research: Survey Monkey, Google Forms, Zoom, Skype
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Usability Testing Tools: Lyssna
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
