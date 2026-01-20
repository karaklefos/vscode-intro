"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { Footer } from "@/components/footer"
import { projects } from "@/components/projects-grid"

export default function SavvyPigProject() {
  const projectData = projects.find((p) => p.title === "Savvy Pig")

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
              UX/UI Case Study | Responsive Web App
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
              src="/img/savvypig.jpg"
              alt="Savvy Pig Hero"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Objective Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">The Objective</h2>
              <p className="text-lg leading-relaxed">
                Savvy Pig is an intuitive financial saving app designed to empower users to take control of their
                finances. I created the concept, name, brand guidelines and overall design. By blending a professional
                tone with playful imagery, the app removes the intimidation of money management, simplifying expense
                tracking and savings goals to help users confidently achieve their milestones.
              </p>
            </div>
          </motion.section>

          {/* Mockups Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">Mockups</h2>
              <p className="text-lg text-muted-foreground mb-12 italic">Scroll to view more →</p>

              <div className="overflow-x-auto pb-10 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent snap-x snap-mandatory flex items-start">
                <div className="flex gap-6 items-start">
                  {[
                    { name: "Login", Image: "/img/savvypig_mockup_login.png" },
                    { name: "Sign Up", Image: "/img/savvypig_mockup_signup.png" },
                    { name: "Dashboard", Image: "/img/savvypig_mockup_dashboard.png" },
                    { name: "Menu", Image: "/img/savvypig_mockup_menu.png" },
                    { name: "Transactions", Image: "/img/savvypig_mockup_transactions.png" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-64 md:w-72 rounded-2xl overflow-hidden glass-card snap-center border border-white/10 shadow-xl h-fit">
                      <Image
                        src={screen.Image}
                        alt={`Savvy Pig ${screen.name}`}
                        width={288}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
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
              src="/img/savvypig_ombreheader.png"
              alt="Financial Background"
              width={1400}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Process & Users Can Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="glass-card rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-semibold mb-12">The Process</h2>
                <ul className="space-y-8">
                  <li>
                    <h3 className="text-2xl font-semibold mb-4">Concept</h3>
                    <p className="text-lg leading-relaxed">
                      I created SavvyPig by formulating a precise <strong>problem statement</strong> and conducting a{" "}
                      <strong>comprehensive competitor analysis,</strong> enabling me to determine the core features for
                      this responsive financial management application.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-2xl font-semibold mb-4">Logo and Brand Guidelines</h3>
                    <p className="text-lg leading-relaxed">
                      I crafted a professional yet welcoming <strong>brand identity</strong> for SavvyPig, utilizing
                      primary colors symbolizing trust and growth, and <strong>designing the logo</strong> for clear
                      legibility across various platforms.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-2xl font-semibold mb-4">Design</h3>
                    <p className="text-lg leading-relaxed">
                      I spearheaded the entire design phase, creating comprehensive{" "}
                      <strong>wireframes, interactive prototypes, and detailed mockups</strong> to build an accessible
                      and engaging financial management experience.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-2xl font-semibold mb-4">Test</h3>
                    <p className="text-lg leading-relaxed">
                      Through <strong>A/B testing and user testing</strong> I validated SavvyPig's design effectiveness,
                      gathering crucial feedback to ensure the financial management solution is intuitive and highly
                      user-friendly.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="glass-card rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-semibold mb-12">Users Can...</h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-accent text-xl">•</span>
                    <p className="text-lg leading-relaxed">
                      <strong>Track Expenses and Income:</strong> view detailed transaction history, as well as log
                      income within categories.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent text-xl">•</span>
                    <p className="text-lg leading-relaxed">
                      <strong>Set Savings Goals:</strong> define a goal name, amount and a target completion date.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent text-xl">•</span>
                    <p className="text-lg leading-relaxed">
                      <strong>Visualize Financial Data:</strong> access a dashboard displaying spending categories,
                      saving progress, and view trends in financial habits over time.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* User Flows */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">User Flows</h2>
              <div className="rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg">
                <Image
                  src="/img/savvypig_userflow.png"
                  alt="Savvy Pig User Flow"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-lg text-muted-foreground italic">
                The highlighted portion represents the flow of the design you are seeing in this case study.
              </p>
            </div>
          </motion.section>

          {/* Wireframes Low Fidelity */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">Wireframes</h2>
              <h3 className="text-2xl font-semibold mb-4">Low Fidelity</h3>
              <p className="text-lg text-muted-foreground mb-12 italic">Scroll to view more →</p>

              <div className="overflow-x-auto pb-10 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent snap-x snap-mandatory flex items-start">
                <div className="flex gap-6 items-start">
                  {[
                    { name: "Login", Image: "/img/savvypig_low_login.png" },
                    { name: "Sign Up", Image: "/img/savvypig_low_signup.png" },
                    { name: "Dashboard", Image: "/img/savvypig_low_dashboard.png" },
                    { name: "Transactions", Image: "/img/savvypig_low_transactions.png" },
                    { name: "Category", Image: "/img/savvypig_low_category.png" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card bg-white snap-center border border-white/10 shadow-xl h-fit">
                      <Image
                        src={screen.Image}
                        alt={`Savvy Pig Low ${screen.name}`}
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

          {/* Wireframes Mid Fidelity */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-4">Mid Fidelity</h3>
              <p className="text-lg text-muted-foreground mb-12 italic">Scroll to view more →</p>

              <div className="overflow-x-auto pb-10 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent snap-x snap-mandatory flex items-start">
                <div className="flex gap-6 items-start">
                  {[
                    { name: "Login", Image: "/img/savvypig_mid_login.png" },
                    { name: "Sign Up", Image: "/img/savvypig_mid_signup.png" },
                    { name: "Dashboard", Image: "/img/savvypig_mid_dashboard.png" },
                    { name: "Transactions", Image: "/img/savvypig_mid_transactions.png" },
                    { name: "Category", Image: "/img/savvypig_mid_category.png" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card bg-white snap-center border border-white/10 shadow-xl h-fit">
                      <Image
                        src={screen.Image}
                        alt={`Savvy Pig Mid ${screen.name}`}
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

          {/* Wireframes High Fidelity */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-4">High Fidelity</h3>
              <p className="text-lg text-muted-foreground mb-12 italic">Scroll to view more →</p>

              <div className="overflow-x-auto pb-10 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent snap-x snap-mandatory flex items-start">
                <div className="flex gap-6 items-start">
                  {[
                    { name: "Login", Image: "/img/savvypig_high_login.png" },
                    { name: "Sign Up", Image: "/img/savvypig_high_signup.png" },
                    { name: "Dashboard", Image: "/img/savvypig_high_dashboard.png" },
                    { name: "Transactions", Image: "/img/savvypig_high_transactions.png" },
                    { name: "Category", Image: "/img/savvypig_high_category.png" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card snap-center border border-white/10 shadow-xl h-fit">
                      <Image
                        src={screen.Image}
                        alt={`Savvy Pig High ${screen.name}`}
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
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">Style Guide</h2>

              <div className="space-y-12">
                <div>
                  <h4 className="text-2xl font-semibold mb-8">COLORS</h4>
                  <h5 className="text-xl font-semibold mb-6">Primary Colors</h5>
                  <div className="flex gap-6 mb-8">
                    {[
                      { name: "Mint", color: "#A8D5BA" },
                      { name: "Navy", color: "#0E3655" },
                    ].map((swatch) => (
                      <div key={swatch.name} className="flex flex-col items-center gap-3">
                        <div
                          className="w-32 h-32 rounded-2xl shadow-lg border border-gray-100"
                          style={{ backgroundColor: swatch.color }}
                        ></div>
                        <p className="font-medium">{swatch.name}</p>
                        <p className="text-sm text-muted-foreground">{swatch.color}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-12">
                    These colors convey a professional yet welcoming tone, symbolizing both trust and growth.
                  </p>

                  <h5 className="text-xl font-semibold mb-6">Secondary Colors</h5>
                  <div className="flex flex-wrap gap-6 mb-8">
                    {[
                      { name: "Red", color: "#E74C3C" },
                      { name: "Blue", color: "#3498DB" },
                      { name: "Green", color: "#2ECC71" },
                      { name: "Pink", color: "#E91E63" },
                      { name: "Yellow", color: "#F1C40F" },
                      { name: "Orange", color: "#FF9800" },
                    ].map((swatch) => (
                      <div key={swatch.name} className="flex flex-col items-center gap-3">
                        <div
                          className="w-24 h-24 rounded-2xl shadow-lg border border-gray-100"
                          style={{ backgroundColor: swatch.color }}
                        ></div>
                        <p className="font-medium">{swatch.name}</p>
                        <p className="text-sm text-muted-foreground">{swatch.color}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-8">LOGO</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      { name: "Full Logo", Image: "/img/savvypig_logo.png" },
                      { name: "Logotype", Image: "/img/savvypig_logotypeface.png" },
                      { name: "Logo Outline", Image: "/img/savvypig_logooutline.png" },
                    ].map((logo, index) => (
                      <div key={index} className="rounded-2xl overflow-hidden glass-card bg-white p-8 flex items-center justify-center border border-gray-100">
                        <Image
                          src={logo.Image}
                          alt={logo.name}
                          width={300}
                          height={200}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Desktop Mockups */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">Desktop Mockups</h2>
              <p className="text-lg text-muted-foreground mb-12 italic">Scroll to view more →</p>

              <div className="overflow-x-auto pb-10 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent snap-x snap-mandatory flex items-start">
                <div className="flex gap-6 items-start">
                  {[
                    { name: "Login", Image: "/img/savvypig_desktop_login.png" },
                    { name: "Sign Up", Image: "/img/savvypig_desktop_signup.png" },
                    { name: "Dashboard", Image: "/img/savvypig_desktop_dashboard.png" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-[600px] rounded-2xl overflow-hidden glass-card snap-center border border-white/10 shadow-xl h-fit">
                      <Image
                        src={screen.Image}
                        alt={`Savvy Pig Desktop ${screen.name}`}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
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
              <p className="text-lg leading-relaxed mb-6">
                The Savvy Pig project showcases my end-to-end design process, from conceptualization and
                branding to a user-friendly financial application.
              </p>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
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