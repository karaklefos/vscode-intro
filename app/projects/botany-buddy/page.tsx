"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { Footer } from "@/components/footer"
import { projects } from "@/components/projects-grid"

export default function BotanyBuddyProject() {
  const projectData = projects.find((p) => p.title === "Botany Buddy")

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 10H4M4 10L10 16M4 10L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Projects
            </Link>
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-balance">{projectData?.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6 text-pretty">
              {projectData?.description}
            </p>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light text-pretty">
              UI Case Study | Native App - iOS and Android
            </h2>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 rounded-3xl overflow-hidden glass-card"
          >
            <Image
              src="/img/botanybuddy.jpg"
              alt="Botany Buddy Hero"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Problem, Goal & Solution Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-semibold mb-8">The Problem</h3>
              <p className="text-lg leading-relaxed mb-12">
                <strong>Fragmentation of Diagnostic Information:</strong> Plant owners face a high-friction experience
                due to fragmented information, requiring them to use multiple tools (ID app, website, journal) to
                identify, track, and diagnose plant health issues.
              </p>

              <h3 className="text-3xl md:text-4xl font-semibold mb-8">The Goal</h3>
              <p className="text-lg leading-relaxed mb-12">
                To consolidate these functions into a single, reliable application, providing instant, accurate
                identification and integrated, data-driven health tracking. The solution was meticulously developed for
                platform parity across{" "}
                <strong>
                  both iOS and Android, utilizing their respective native design systems (e.g., Human Interface
                  Guidelines and Material Design)
                </strong>{" "}
                to ensure a seamless and compliant user experience on both operating systems.
              </p>

              <h3 className="text-3xl md:text-4xl font-semibold mb-8">The Solution</h3>
              <p className="text-lg leading-relaxed">
                I created a system that is fundamentally a diagnostic and information retrieval tool wrapped in a modern
                interface. The primary feature is the Camera Diagnostic Flow, allowing users to photograph a plant for
                identification and specific leaf damage for diagnosis and prescribed care tips.
              </p>
            </div>
          </motion.section>

          {/* Background Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 rounded-3xl overflow-hidden glass-card"
          >
            <Image
              src="/img/botanybuddy_leafbckgrnd.jpg"
              width={1400}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Research & Process */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">Research & Process</h2>

              <ul className="space-y-6 mb-12">
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>Methodology:</strong> Project foundation was built through thorough research, including
                      competitive analysis, to identify key user needs: plant identification, care reminders, and health
                      diagnosis.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>Dual-Platform Design:</strong> I paid special attention to platform parity, designing
                      separate, validated iterations for both iOS and Android to respect each operating system's unique
                      interaction patterns and visual conventions.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>Design & Validation:</strong> The process spanned from user flows and wireframes (for both
                      platforms) to the style guide and mockups. Effectiveness was ensured through A/B testing on key
                      features and comprehensive user testing.
                    </p>
                  </div>
                </li>
              </ul>

              <h3 className="text-3xl md:text-4xl font-semibold mb-8">Key Design Features</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-xl font-semibold mb-4">Primary Features:</p>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="text-accent text-xl">•</span>
                      <p className="text-lg leading-relaxed">
                        Identify plants by taking photos for instant species recognition.
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-accent text-xl">•</span>
                      <p className="text-lg leading-relaxed">
                        Track plant health and receive personalized care tips and automated routines (watering,
                        fertilizing).
                      </p>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-accent text-xl">•</span>
                      <p className="text-lg leading-relaxed">
                        Diagnose issues by taking photos of leaf damage for accurate prognosis.
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg leading-relaxed">
                    <strong>Technical Mitigation:</strong> I implemented guided camera instructions (copy helping
                    capture clear photos) within the diagnostic flow. This proactively mitigates the common constraint
                    of poor photo quality, which significantly improves data input and identification accuracy.
                  </p>
                </div>

                <div>
                  <p className="text-lg leading-relaxed">
                    <strong>Context of Use (Why a Native App):</strong> The native mobile app design ensures quick
                    camera access for identification, supports offline use for outdoor settings (gardens/wild plants),
                    and utilizes push notifications for timely care reminders.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Prototypes iOS Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">Prototypes</h2>
              <h3 className="text-2xl font-semibold mb-8">iOS</h3>
              <p className="text-lg text-muted-foreground mb-12 italic">(swipe to view more)</p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Splash", query: "ios splash screen plant app" },
                    { name: "Login", query: "ios login screen botanical" },
                    { name: "Home", query: "ios home plant collection" },
                    { name: "Camera", query: "ios camera interface plant identification" },
                    { name: "Photo Tips", query: "ios photo tips instructions" },
                    { name: "Try Again", query: "ios error message retry" },
                    { name: "Submit", query: "ios submission confirmation" },
                    { name: "Diagnosis", query: "ios plant diagnosis results" },
                    { name: "Description", query: "ios plant details description" },
                    { name: "Profile", query: "ios user profile settings" },
                    { name: "Loading", query: "ios loading screen botanical" },
                    { name: "Error", query: "ios error state message" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card">
                      <Image
                        src={`/.jpg?height=550&width=256&query=${screen.query}`}
                        alt={`Botany Buddy iOS ${screen.name}`}
                        width={256}
                        height={550}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Prototypes Android Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-8">Android</h3>
              <p className="text-lg text-muted-foreground mb-12 italic">(swipe to view more)</p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Splash", query: "android splash screen plant app material design" },
                    { name: "Login", query: "android login screen botanical" },
                    { name: "Home", query: "android home plant collection" },
                    { name: "Camera", query: "android camera interface plant identification" },
                    { name: "Submit", query: "android submission screen" },
                    { name: "Diagnosis", query: "android plant diagnosis results" },
                    { name: "Description", query: "android plant details info" },
                    { name: "Profile", query: "android user profile" },
                    { name: "Loading", query: "android loading screen" },
                    { name: "Error", query: "android error message" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card">
                      <Image
                        src={`/.jpg?height=550&width=256&query=${screen.query}`}
                        alt={`Botany Buddy Android ${screen.name}`}
                        width={256}
                        height={550}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Userflows */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">Userflows</h2>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/img/botanybuddy_userflow.png"
                  alt="Botany Buddy User Flow"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.section>

          {/* Wireframes iOS */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">Wireframes</h2>
              <h3 className="text-2xl font-semibold mb-8">iOS</h3>
              <p className="text-lg text-muted-foreground mb-12 italic">(swipe to view more)</p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Login", query: "ios wireframe login sketch" },
                    { name: "Home", query: "ios wireframe home layout" },
                    { name: "Diagnosis", query: "ios wireframe diagnosis screen" },
                    { name: "Camera", query: "ios wireframe camera interface" },
                    { name: "Results", query: "ios wireframe results page" },
                    { name: "Identity Results", query: "ios wireframe identification" },
                    { name: "Reminder", query: "ios wireframe reminder notification" },
                    { name: "Calendar", query: "ios wireframe calendar view" },
                    { name: "Profile", query: "ios wireframe profile settings" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card bg-white">
                      <Image
                        src={`/.jpg?height=550&width=256&query=${screen.query}`}
                        alt={`iOS ${screen.name} Wireframe`}
                        width={256}
                        height={550}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Wireframes Android */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-8">Android</h3>
              <p className="text-lg text-muted-foreground mb-12 italic">(swipe to view more)</p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Login", query: "android wireframe login sketch" },
                    { name: "Home", query: "android wireframe home layout" },
                    { name: "Diagnose", query: "android wireframe diagnose screen" },
                    { name: "Camera", query: "android wireframe camera interface" },
                    { name: "Plant Diagnosis", query: "android wireframe diagnosis results" },
                    { name: "Identity", query: "android wireframe identification" },
                    { name: "Reminder", query: "android wireframe reminder" },
                    { name: "Calendar", query: "android wireframe calendar" },
                    { name: "Profile", query: "android wireframe profile" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card bg-white">
                      <Image
                        src={`/.jpg?height=550&width=256&query=${screen.query}`}
                        alt={`Android ${screen.name} Wireframe`}
                        width={256}
                        height={550}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Style Guide */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">Style Guide</h2>

              <div className="space-y-12">
                <div>
                  <h4 className="text-2xl font-semibold mb-8">COLORS</h4>
                  <p className="text-lg text-muted-foreground mb-8 italic">(swipe to view more)</p>
                  <div className="flex flex-wrap gap-6">
                    {[
                      { name: "Light Green", color: "#A8D5BA" },
                      { name: "Medium Green", color: "#6DBE91" },
                      { name: "Dark Green", color: "#2D5F4A" },
                      { name: "Brick", color: "#B85450" },
                      { name: "Black", color: "#2C2C2C" },
                      { name: "White", color: "#FFFFFF" },
                    ].map((swatch) => (
                      <div key={swatch.name} className="flex flex-col items-center gap-3">
                        <div
                          className="w-24 h-24 rounded-2xl shadow-lg border-2 border-border"
                          style={{ backgroundColor: swatch.color }}
                        ></div>
                        <p className="text-sm font-medium text-center">{swatch.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-4">LOGO</h4>
                  <p className="text-lg mb-8">Typography: Figma Hand Regular pt 30</p>
                  <div className="bg-white rounded-2xl p-12 inline-block">
                    <Image
                      src="/.jpg?height=100&width=300&query=Botany Buddy logo handwritten botanical"
                      alt="Botany Buddy Logo"
                      width={300}
                      height={100}
                      className="h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">Conclusion</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Developing Botany Buddy provided valuable insights into designing for a specific user need: plant
                  care. This project highlighted the importance of combining practical tools, like care reminders and
                  visual diagnosis, with user-friendly features such as plant identification. I learned how to create an
                  intuitive experience that empowers users to confidently care for their plants, regardless of their
                  experience level.
                </p>
                <p>
                  The app's impact lies in its potential to make plant care more accessible and enjoyable, fostering a
                  deeper connection between users and their greenery. By addressing common pain points, Botany Buddy
                  simplifies a traditionally complex task.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 10H4M4 10L10 16M4 10L10 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to All Projects
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
