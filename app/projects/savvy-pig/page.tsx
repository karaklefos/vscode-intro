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
              src="/.jpg?height=800&width=1400&query=financial savings app mobile interface piggy bank"
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
              <p className="text-lg text-muted-foreground mb-12 italic">(Scroll to view more)</p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Login", query: "financial app login screen mint navy" },
                    { name: "Sign Up", query: "financial app signup screen" },
                    { name: "Dashboard", query: "financial dashboard savings goals" },
                    { name: "Menu", query: "app menu navigation financial" },
                    { name: "Transactions", query: "transaction list expense tracking" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card">
                      <Image
                        src={`/.jpg?height=550&width=256&query=${screen.query}`}
                        alt={`Savvy Pig ${screen.name}`}
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

          {/* Background Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 rounded-3xl overflow-hidden glass-card"
          >
            <Image
              src="/.jpg?height=600&width=1400&query=abstract financial growth savings money management"
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
              <div className="rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/.jpg?height=600&width=1200&query=user flow diagram financial app journey"
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
              <p className="text-lg text-muted-foreground mb-12 italic">(Scroll to view more)</p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Login", query: "low fidelity wireframe login sketch" },
                    { name: "Sign Up", query: "low fidelity wireframe signup" },
                    { name: "Dashboard", query: "low fidelity wireframe dashboard" },
                    { name: "Transactions", query: "low fidelity wireframe transactions" },
                    { name: "Category", query: "low fidelity wireframe category" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card bg-white">
                      <Image
                        src={`/.jpg?height=550&width=256&query=${screen.query}`}
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
              <p className="text-lg text-muted-foreground mb-12 italic">(Scroll to view more)</p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Login", query: "mid fidelity wireframe login" },
                    { name: "Sign Up", query: "mid fidelity wireframe signup" },
                    { name: "Dashboard", query: "mid fidelity wireframe dashboard" },
                    { name: "Transactions", query: "mid fidelity wireframe transactions" },
                    { name: "Category", query: "mid fidelity wireframe category" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card bg-white">
                      <Image
                        src={`/.jpg?height=550&width=256&query=${screen.query}`}
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
              <p className="text-lg text-muted-foreground mb-12 italic">(Scroll to view more)</p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Login", query: "high fidelity mockup login mint navy" },
                    { name: "Sign Up", query: "high fidelity mockup signup" },
                    { name: "Dashboard", query: "high fidelity mockup dashboard" },
                    { name: "Transactions", query: "high fidelity mockup transactions" },
                    { name: "Category", query: "high fidelity mockup category" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card">
                      <Image
                        src={`/.jpg?height=550&width=256&query=${screen.query}`}
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

          {/* Divider Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 rounded-3xl overflow-hidden glass-card"
          >
            <Image
              src="/.jpg?height=400&width=1400&query=abstract mint to navy gradient ombre financial"
              alt="Ombre Header"
              width={1400}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>

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
                          className="w-32 h-32 rounded-2xl shadow-lg"
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
                          className="w-24 h-24 rounded-2xl shadow-lg"
                          style={{ backgroundColor: swatch.color }}
                        ></div>
                        <p className="font-medium">{swatch.name}</p>
                        <p className="text-sm text-muted-foreground">{swatch.color}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed">
                    These bold shades are used for illustrations like graphs and charts, ensuring accessibility.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-8">LOGO</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      { name: "Full Logo", query: "savvy pig logo piggy bank mint" },
                      { name: "Logotype", query: "savvy pig text logo typography" },
                      { name: "Logo Outline", query: "savvy pig outline icon" },
                    ].map((logo, index) => (
                      <div key={index} className="rounded-2xl overflow-hidden glass-card bg-white p-8">
                        <Image
                          src={`/.jpg?height=200&width=300&query=${logo.query}`}
                          alt={logo.name}
                          width={300}
                          height={200}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    The logotype and Logo Outline designs ensures legibility and maintains brand recognition in smaller
                    spaces, such as app icons, navigation bars, and footers.
                  </p>
                  <h5 className="text-xl font-semibold mb-4">LOGO TYPOGRAPHY</h5>
                  <p className="text-lg leading-relaxed">
                    Nunito ExtraBold - the logotype must remain as is due to special kerning. It also must remain in
                    #0E3655.
                  </p>
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
              <p className="text-lg text-muted-foreground mb-12 italic">(Scroll to view more)</p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Login", query: "desktop financial app login mint navy" },
                    { name: "Sign Up", query: "desktop financial app signup" },
                    { name: "Dashboard", query: "desktop financial dashboard savings" },
                  ].map((screen, index) => (
                    <div key={index} className="flex-shrink-0 w-[600px] rounded-2xl overflow-hidden glass-card">
                      <Image
                        src={`/.jpg?height=400&width=600&query=${screen.query}`}
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
                The Savvy Pig project showcases my end-to-end design process, from the initial conceptualization and
                branding – including the development of the name and logo – through to the creation of a user-friendly
                and effective financial application.
              </p>
              <p className="text-lg leading-relaxed">
                Recognizing the intimidation often associated with personal finance, the core objective was to design an
                intuitive experience centered around clear expense tracking, motivating goal-setting features, and
                easily understandable data visualization. By carefully blending a professional aesthetic with playful
                visual elements, Savvy Pig aims to demystify money management and empower users, regardless of their
                financial literacy, to confidently take control of their financial journey and achieve their savings
                milestones. This case study reflects my commitment to creating accessible, engaging, and impactful
                digital solutions that address real user needs and foster positive outcomes.
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
