"use client"

import { motion, type MotionValue, useTransform } from "framer-motion"
import Navigation from "./navigation"

interface HeroProps {
  scrollProgress: MotionValue<number>
}

export function Hero({ scrollProgress }: HeroProps) {
  const y = useTransform(scrollProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollProgress, [0, 0.5], [1, 0])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture">
      <Navigation />

      <motion.div style={{ y, opacity }} className="container mx-auto px-6 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] text-balance tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Product & UX/UI <span className="text-primary italic font-serif">Designer</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl leading-relaxed max-w-4xl text-secondary font-light mb-8 md:mb-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Blending empathy, data, and style to create user-centered websites and apps. Specializing in workflow
            optimization and human-centered design for internal and external tools and enterprise platforms. Drawing on
            my background in consumer strategy, I tackle complex challenges by implementing a rigorous, data-driven
            process: from deep user research and journey mapping to de-risking solutions through iterative mockups and
            prototyping.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Abstract Decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  )
}
