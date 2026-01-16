"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { Footer } from "@/components/footer"
import { projects } from "@/components/projects-grid"

export default function ModMuseProject() {
  const projectData = projects.find((p) => p.title === "Mod Muse")

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
              UX/UI Case Study | Native App - iOS
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
              src="/img/modmuse1.jpg"
              alt="Mod Muse Hero"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Prototype Link */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
          >
            <a
              href="https://www.figma.com/proto/fX8pIyCpML8rImeha4pvnJ/Mod-Muse?node-id=278-2100&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=278%3A2100"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold text-primary underline hover:text-primary-dark transition-colors"
            >
              View the Interactive Prototype
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          {/* Problem & Solution Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-semibold mb-8">The Problem</h3>
              <ul className="space-y-6 mb-12">
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      Vintage shoppers often face fragmented, overwhelming online experiences lacking curation.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      Meanwhile, eco-conscious individuals need a seamless platform to buy and sell unique, secondhand
                      pieces sustainably.
                    </p>
                  </div>
                </li>
              </ul>

              <h3 className="text-3xl md:text-4xl font-semibold mb-8">The Solution</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      Mod Muse, a vintage fashion app inspired by the 1960s Mod aesthetic, offering a visually engaging,
                      curated marketplace with seamless buy and sell functionality.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      Created a niche, emotionally resonant shopping experience that successfully bridges the gap
                      between nostalgic design and modern usability, driving sustainability through a streamlined,
                      dual-sided platform.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Objective & Vision Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">The Objective & Vision</h2>

              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-semibold mb-4">The Objective:</h4>
                  <p className="text-lg leading-relaxed">
                    To provide a seamless and visually engaging user experience for buying and selling vintage pieces,
                    inspired by the timeless appeal of the 1960s Mod aesthetic, while actively promoting sustainability
                    through secondhand fashion.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-4">The Vision:</h4>
                  <p className="text-lg leading-relaxed">
                    To be the premier destination for fashion enthusiasts and eco-conscious individuals seeking unique,
                    curated vintage clothing.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-4">The Context (Who, What, When, Why):</h4>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="text-primary text-xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Users -</strong> Fashion enthusiasts and eco-conscious individuals who appreciate
                          vintage clothing and want a dedicated platform for unique pieces.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary text-xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Usage -</strong> Used primarily at home for browsing, but also ideal when shopping in
                          person when users can't find specific pieces they need.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary text-xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Value Proposition -</strong> Intuitive design, curated selection, a visually engaging
                          interface inspired by the Mod aesthetic, and a seamless platform for both buying and selling.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Mockup Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 rounded-3xl overflow-hidden glass-card"
          >
            <Image
              src="/img/modmuse3.jpg"
              alt="Mod Muse Workspace"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Prototypes Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">Prototypes</h2>
              <p className="text-lg text-muted-foreground mb-12 italic">(swipe to view more)</p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Home", Image: "/img/modmuse_home.png" },
                    { name: "Reviews", Image: "/img/modmuse_reviews.png" },
                    { name: "Profile", Image: "/img/modmuse_profile.png" },
                    { name: "Item", Image: "/img/modmuse_item.png" },
                    { name: "Add Item", Image: "/img/modmuse_additem.png" },
                    { name: "Checkout", Image: "/img/modmuse_checkout.png" },
                  ].map((screen, index) => (
  <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card">
    <Image
      src={screen.Image} 
      alt={`Mod Muse ${screen.name}`}
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

          {/* Research & Discovery Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">Research & Discovery</h2>

              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-semibold mb-4">Methodology:</h4>
                  <p className="text-lg leading-relaxed">
                    The project was informed by a combination of{" "}
                    <strong>user interviews, surveys, and competitive analysis,</strong> ensuring the design was
                    grounded in real user needs and market gaps.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-6">Process Steps:</h4>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <span className="text-accent text-2xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Define -</strong> Independently conceived and defined Mod Muse's core purpose as a
                          vintage fashion app promoting reuse and a unique aesthetic.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-accent text-2xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Research -</strong> Gained understanding of user fashion habits, preferences for
                          vintage clothing, and pain points in sustainable shopping.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-accent text-2xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Design -</strong> Translated insights into intuitive solutions through information
                          architecture, wireframing, and interactive prototyping.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-accent text-2xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Test -</strong> Conducted usability testing to evaluate the design's effectiveness and
                          identify key areas for iteration to ensure a seamless and engaging experience.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Strategic Impact Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-semibold mb-8">Strategic Impact:</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>Balancing Nostalgia and Usability -</strong> A core learning was the importance of
                      balancing a nostalgia-driven design (the Mod aesthetic) with modern usability standards. The final
                      design proves that an emotional connection can be created without compromising seamless navigation
                      and intuitive interactions.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>Brand Identity Development -</strong> Gained valuable experience in ensuring that every
                      design choice—from typography to color schemes—aligned with the Mod aesthetic and enhanced the
                      overall brand experience.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>Functional Focus -</strong> The project reinforced the significance of seamless navigation
                      and intuitive interactions to create an enjoyable shopping and selling experience tailored to
                      lovers of vintage fashion.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>Moving Forward (Future Vision) -</strong> Future iterations would focus on exploring
                      enhanced personalization features, advanced search capabilities, and community-driven elements to
                      increase user engagement.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Userflow Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">Userflow</h2>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/img/modmuse_userflow.png"
                  alt="Mod Muse User Flow"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.section>

          {/* Low Fidelity Wireframes */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">Low Fidelity Wireframes</h2>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/img/modmuse_low_fidelity_wireframes.png"
                  alt="Mod Muse Low Fidelity Wireframes"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.section>

          {/* Style Guide Section */}
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
                  <div className="flex flex-wrap gap-6">
                    {[
                      { name: "Blue", color: "#0074D9", query: "blue color swatch" },
                      { name: "Purple", color: "#B10DC9", query: "purple color swatch" },
                      { name: "Yellow", color: "#FFDC00", query: "yellow color swatch" },
                      { name: "White", color: "#FFFFFF", query: "white color swatch" },
                      { name: "Black", color: "#111111", query: "black color swatch" },
                    ].map((color, index) => (
                      <div key={index} className="flex-shrink-0">
                        <Image
                          src={`/.jpg?height=120&width=120&query=${color.query}`}
                          alt={`Mod Muse ${color.name}`}
                          width={120}
                          height={120}
                          className="rounded-lg"
                        />
                        <p className="text-center mt-2 text-sm">{color.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-6">LOGO</h4>
                  <div className="bg-primary/10 rounded-2xl p-12 flex justify-center mb-8">
                    <Image
                      src="/.jpg?height=120&width=300&query=mod+muse+logo+bold+text"
                      alt="Mod Muse Logo"
                      width={300}
                      height={120}
                      className="w-auto h-auto"
                    />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold mb-4 underline">The logo must:</h5>
                    <ul className="space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary">•</span>
                        <p className="text-lg">Be in all caps</p>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary">•</span>
                        <p className="text-lg">Have a 1 stroke in the color #FFFFFF</p>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary">•</span>
                        <p className="text-lg">Have an inner shadow</p>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary">•</span>
                        <p className="text-lg">Remain the color #0074D9</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-4">HEADINGS</h4>
                  <p className="text-lg mb-6">Montserrat Bold or SemiBold</p>
                  <h4 className="text-2xl font-semibold mb-4">BODY</h4>
                  <p className="text-lg">Montserrat Regular</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Conclusion Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">Conclusion</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Mod Muse successfully demonstrates how a vintage-inspired aesthetic can be combined with modern UX
                principles to create a seamless, engaging platform for sustainable fashion. This case study underscores
                the importance of user research, iterative design, and a commitment to brand consistency.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The final product provides a thoughtfully curated marketplace that resonates emotionally with users
                while maintaining intuitive navigation and functionality, setting a strong foundation for future growth
                in the vintage fashion space.
              </p>
            </div>
          </motion.section>

          {/* Back to All Projects button */}
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
      {/* Footer component */}
      <Footer />
    </>
  )
}
