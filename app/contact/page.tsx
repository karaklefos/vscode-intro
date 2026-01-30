"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import Navigation from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xovgwyqw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setFormStatus("success")
        form.reset()
      } else {
        setFormStatus("error")
      }
    } catch (error) {
      setFormStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <CustomCursor />
      <Navigation />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100/70 via-background to-blue-50/60"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-purple-300/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-blue-300/30 via-indigo-200/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-400/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <main className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
          >
            <div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-balance leading-[0.9] tracking-tight">
                Let's Create
                <br />
                <span className="text-primary italic font-serif">Together</span>
              </h1>
            </div>
            <div className="lg:pb-8">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                Whether you have a project in mind, want to collaborate, or simply want to connect—I'm all ears. Let's
                turn ideas into extraordinary experiences.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full"></div>

                <h2 className="text-3xl md:text-5xl font-bold mb-10 relative z-10">Drop me a line</h2>

                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-6 rounded-2xl bg-green-50 border-2 border-green-200 text-green-800"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">✓</span>
                      <span className="font-semibold">Message sent! I'll get back to you soon.</span>
                    </div>
                  </motion.div>
                )}

                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-6 rounded-2xl bg-red-50 border-2 border-red-200 text-red-800"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">✕</span>
                      <span className="font-semibold">Oops! Something went wrong. Please try again.</span>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-lg font-bold mb-3 tracking-tight">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Jane Doe"
                        className="w-full px-6 py-5 rounded-2xl border-2 border-border bg-background/70 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-lg font-bold mb-3 tracking-tight">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="jane@example.com"
                        className="w-full px-6 py-5 rounded-2xl border-2 border-border bg-background/70 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-lg font-bold mb-3 tracking-tight">
                      Phone <span className="text-muted-foreground font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      className="w-full px-6 py-5 rounded-2xl border-2 border-border bg-background/70 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-lg font-bold mb-3 tracking-tight">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Project Inquiry"
                      className="w-full px-6 py-5 rounded-2xl border-2 border-border bg-background/70 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg font-bold mb-3 tracking-tight">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Tell me about your project, goals, timeline, and how I can help..."
                      className="w-full px-6 py-5 rounded-2xl border-2 border-border bg-background/70 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all resize-y font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-12 py-5 bg-primary text-primary-foreground rounded-2xl text-lg font-bold hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Quick Connect Card */}
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-full blur-2xl"></div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight relative z-10">Quick Connect</h3>
                <div className="space-y-4 relative z-10">
                  <a
                    href="https://www.linkedin.com/in/karaklefos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-foreground">LinkedIn</div>
                      <div className="text-sm text-muted-foreground">Professional network</div>
                    </div>
                  </a>

                  <a
                    href="https://www.behance.net/karaklefos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-accent/5 hover:bg-accent/10 transition-all hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Behance</div>
                      <div className="text-sm text-muted-foreground">Portfolio showcase</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Editorial Quote Card */}
              <div className="glass-card rounded-3xl p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="text-6xl text-primary/20 font-serif mb-4">"</div>
                <p className="text-xl font-light leading-relaxed mb-6 italic">
                  Great design is more than aesthetics, it's about creating meaningful connections between people and
                  products.
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>

              {/* Availability Badge */}
              <div className="glass-card rounded-3xl p-8 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-100 text-green-800 font-bold mb-4">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  Available for Projects
                </div>
                <p className="text-sm text-muted-foreground">Currently accepting new opportunities</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}