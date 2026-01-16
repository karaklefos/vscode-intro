"use client"

import { motion } from "framer-motion"
import { CustomCursor } from "@/components/custom-cursor"
import Navigation from "@/components/navigation"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import Image from "next/image"
import { Footer } from "@/components/footer"

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
     style={{ width: '100%', height: 'auto' }} 
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
                I've always been fascinated by the 'why' behind user experiences, and equally by the power of beautiful,
                intentional design. A lifelong lover of fashion and style, I earned my B.S. in Fashion Merchandising and
                have spent years immersed in creating and styling. My instinct for understanding people, whether it's
                dissecting consumer insights or seeking genuine feedback, pairs naturally with my passion for aesthetics
                and storytelling.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                My background, spanning trend forecasting, management, and digital strategy, established my expertise in
                understanding and influencing user behavior at scale. I bring a highly consumer-savvy perspective to
                complex design challenges, specializing in workflow optimization for internal tools and enterprise
                platforms. I apply this unique foundation, particularly the algorithmic insights gained from my work at
                Stitch Fix, to drive human-centered feedback and influence algorithm accuracy.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                In my Product & UX/UI design work, I implement a rigorous, data-driven process, specializing in user
                research, journey mapping, wireframing, and prototyping. I'm proficient in Figma, Sketch, and Adobe
                Creative Suite, and I leverage expertise in prompt engineering for research synthesis to ensure
                high-quality, efficient design outcomes. I'm passionate about creating digital products that are as
                intuitive as they are beautiful!
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Outside of work, I'm usually with my dog, Joey, out in nature, or indulging my passion for fashion -
                whether it's sewing or styling an outfit!
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
                  User Research
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Competitive Analysis
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  User Flows
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Wireframing
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Prototyping
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Persona Development
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Logo Creation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Brand Guidelines
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Visual Design
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Responsive Design
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  A/B Testing
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  User Testing
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Collaborative Teamwork
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Website Creation
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  Front-end coding: HTML/CSS/Javascript
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
                  Editing Tools: Adobe Illustrator, Adobe Lightroom, Adobe Photoshop
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Coding tools: Git, GitHub, Visual Studio Code, Webstorm, Pycharm, Codepen
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
  )
}