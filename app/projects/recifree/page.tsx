"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { projects } from "@/components/projects-grid";

export default function ReciFreeProject() {
  const projectData = projects.find((p) => p.title === "ReciFree");

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
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-balance">
              {projectData?.title}
            </h1>
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
              src="/img/recifree.jpg"
              alt="ReciFree Hero"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Problem & Goal Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-semibold mb-8">
                The Problem - Managing food allergies & restrictions
              </h3>
              <ul className="space-y-6 mb-12">
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      Managing food allergies (affecting around 32 million
                      Americans) presents a significant challenge in meal
                      preparation, as existing recipe apps fail to consistently
                      provide clear, easy-to-see allergen indicators. Users are
                      often forced to manually check ingredients, leading to
                      frustration and wasted time.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      Users with dietary restrictions struggle to find reliable
                      recipes due to cluttered interfaces, blog filler, and
                      inconsistent, non-prominent allergen indicators.
                    </p>
                  </div>
                </li>
              </ul>

              <h3 className="text-3xl md:text-4xl font-semibold mb-8">
                The Goal
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                To create a responsive web app (mobile/desktop) that prioritizes
                safety, efficiency, and clarity, enabling users to:
              </p>
              <ul className="space-y-6 mb-12">
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      Easily identify which recipes are free from specific
                      allergens.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      Save recipes and automatically generate an ingredient
                      shopping list.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      View personalized recipe recommendations with their
                      allergies top of mind.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      Have fun when searching for recipes through an inviting,
                      trustworthy design.
                    </p>
                  </div>
                </li>
              </ul>

              <h3 className="text-3xl md:text-4xl font-semibold mb-8">
                The Solution
              </h3>
              <p className="text-lg leading-relaxed">
                A responsive MVP web app focused on a clean, task-forward
                interface.{" "}
                <span className="underline font-semibold">
                  The core innovation is the prominent 'Not Included' Indicator,
                  which provides users with instant, verified assurance of
                  safety by clearly displaying their excluded allergens with a
                  strike-through icon.
                </span>
              </p>
            </div>
          </motion.section>

          {/* Responsive Design Examples */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                Responsive Design Examples
              </h2>
              <p className="text-lg text-muted-foreground mb-12 italic">
                (swipe to view more)
              </p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Sign In", query: "login screen recipe app" },
                    {
                      name: "Onboarding",
                      query: "allergen selection onboarding",
                    },
                    { name: "Home", query: "recipe feed homepage" },
                    {
                      name: "Filters",
                      query: "filter options dietary restrictions",
                    },
                    { name: "Menu", query: "navigation menu app" },
                    { name: "Recipe", query: "recipe detail view ingredients" },
                    {
                      name: "Saved Recipes",
                      query: "saved recipes collection",
                    },
                  ].map((screen, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-80 rounded-2xl overflow-hidden glass-card"
                    >
                      <Image
                        src={`/.jpg?height=600&width=320&query=${screen.query}`}
                        alt={`ReciFree ${screen.name}`}
                        width={320}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* User Research & Synthesis */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">
                User Research & Synthesis
              </h2>

              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-2xl font-semibold mb-6">
                    Methodology & Users
                  </h4>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <span className="text-primary text-xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Who:</strong> Users with established dietary
                          restrictions or food allergies actively seeking
                          recipes that cater to their specific needs.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary text-xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>When/Where:</strong> Users browse for recipe
                          inspiration at home (after work/before dinner) and
                          utilize the app while grocery shopping (after
                          work/weekends).
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary text-xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Why:</strong> Users will be able to
                          effortlessly discover new recipes that meet their
                          specific allergen and dietary restrictions, with clear
                          indicators showing which recipes avoid particular
                          allergens. Additionally, the app offers a convenient
                          grocery shopping list feature.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-6">
                    Key Research Insights
                  </h4>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <span className="text-accent text-xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Clutter vs. Clarity:</strong> All users cited
                          a preference for clean, clear interfaces and felt that
                          most current recipe sites are too cluttered and
                          visually busy ("look the same").
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-accent text-xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Efficiency over Narrative:</strong> Every user
                          expressed a desire to go straight to the recipe and
                          ingredients and explicitly do not want to read the
                          blogger's story behind the dish.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-accent text-xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Search Behavior:</strong> While most users
                          currently rely on broad searches (e.g., Google), they
                          are actively seeking a more efficient, allergen-first
                          filtering mechanism.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-accent text-xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Core Feature Value:</strong> The most
                          important features identified were appealing photos, a
                          clean interface, easy recipe saving, and an integrated
                          shopping list.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Image Break */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 rounded-3xl overflow-hidden glass-card"
          >
            <Image
              src="/img/recifree_bellpepper.jpg"
              alt="Fresh Bell Peppers"
              width={1400}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Design Hypothesis & Core Features */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">
                Design Hypothesis & Core Features
              </h2>

              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-semibold mb-4">Hypothesis</h4>
                  <p className="text-lg leading-relaxed">
                    With prominent allergen indicators, easy recipe saving, and
                    personalized recommendations, users with dietary
                    restrictions can efficiently plan and prepare healthy meals
                    that meet their needs and reduce preparation anxiety.
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-6">
                    Core MVP Features
                  </h4>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <span className="text-primary text-2xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Core Innovation:</strong> The{" "}
                          <span className="underline">
                            'Not Included' Indicator
                          </span>{" "}
                          - The system begins with a clear, icon-driven
                          onboarding process to capture the user's exact
                          excluded ingredients. The core feature is the
                          prominent, inverse indicator: instead of requiring the
                          user to search for what is present, the recipe clearly
                          displays icons with a strike-through for the user's
                          specific allergens, providing instant, verified
                          assurance of safety and drastically lowering cognitive
                          load.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary text-2xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Allergen-First Filtering:</strong> Users can
                          effortlessly select categories and filters aligning
                          with their dietary preferences to ensure safe
                          browsing.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary text-2xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Personalized Recommendations:</strong> Recipe
                          suggestions are tailored based on the user's specific
                          allergy profile.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary text-2xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Recipe Management:</strong> Users can save
                          recipes to revisit and add necessary ingredients
                          directly to a centralized, convenient grocery list.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-primary text-2xl">•</span>
                      <div>
                        <p className="text-lg leading-relaxed">
                          <strong>Task-Forward UI:</strong> The design bypasses
                          the common "blog feel" by pushing the recipe and
                          ingredients to the immediate foreground of the user
                          experience.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Prototypes */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                Prototypes
              </h2>
              <p className="text-lg text-muted-foreground mb-12 italic">
                (swipe to view more)
              </p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Login", Image: "/img/recifree_mockup_login.png" },
                    {
                      name: "Sign Up",
                      Image: "/img/recifree_mockup_signup.png",
                    },
                    {
                      name: "Allergen Info",
                      Image: "/img/recifree_mockup_allergeninfo.png",
                    },
                    { name: "Home", Image: "/img/recifree_mockup_home.png" },
                    {
                      name: "Recipe",
                      Image: "/img/recifree_mockup_recipe.png",
                    },
                    {
                      name: "Filter",
                      Image: "/img/recifree_mockup_filter.png",
                    },
                  ].map((screen, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card snap-center"
                    >
                      <Image
                        src={screen.Image}
                        alt={`Mod Muse ${screen.name}`}
                        width={256}
                        height={550}
                        className="w-full h-auto pointer-events-none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* User Flow */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">
                User Flow
              </h2>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/img/recifree_userflow.png"
                  alt="ReciFree User Flow"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.section>

          {/* Wireframes */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                Wireframes
              </h2>
              <h3 className="text-2xl font-semibold mb-8">
                Low to Mid Fidelity
              </h3>
              <p className="text-lg text-muted-foreground mb-12 italic">
                (swipe to view more)
              </p>

              <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                <div className="flex gap-6 min-w-max">
                  {[
                    {
                      name: "Low Fidelity Home",
                      query: "wireframe sketch home screen",
                    },
                    {
                      name: "Low Fidelity Cart",
                      query: "wireframe shopping cart",
                    },
                    {
                      name: "Mid Fidelity Home",
                      query: "mid fidelity wireframe home",
                    },
                    {
                      name: "Mid Fidelity Cart",
                      query: "mid fidelity cart design",
                    },
                  ].map((screen, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-80 rounded-2xl overflow-hidden glass-card bg-white"
                    >
                      <Image
                        src={`/.jpg?height=600&width=320&query=${screen.query}`}
                        alt={screen.name}
                        width={320}
                        height={600}
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
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">
                Style Guide
              </h2>

              <div className="space-y-12">
                <div>
                  <h4 className="text-2xl font-semibold mb-8">COLORS</h4>
                  <div className="flex flex-wrap gap-6">
                    {[
                      { name: "Red", color: "#E74C3C" },
                      { name: "Orange", color: "#E67E22" },
                      { name: "Green", color: "#27AE60" },
                      { name: "White", color: "#FFFFFF" },
                      { name: "Black", color: "#2C3E50" },
                    ].map((swatch) => (
                      <div
                        key={swatch.name}
                        className="flex flex-col items-center gap-3"
                      >
                        <div
                          className="w-24 h-24 rounded-2xl shadow-lg border-2 border-border"
                          style={{ backgroundColor: swatch.color }}
                        ></div>
                        <p className="text-sm font-medium">{swatch.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-8">LOGO</h4>
                  <div className="bg-white rounded-2xl p-12 inline-block">
                    <Image
                      src="/img/recifree_logo.png"
                      alt="ReciFree Logo"
                      width={300}
                      height={100}
                      className="h-auto"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-8">
                    ICONS & DIETARY ICONS
                  </h4>
                  <div className="bg-white rounded-2xl p-12">
                    <Image
                      src="/img/recifree_icons.png"
                      alt="ReciFree Icons"
                      width={800}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white rounded-2xl p-12">
                    <Image
                      src="/img/recifree_dietaryicons.png"
                      alt="ReciFree Icons"
                      width={800}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-semibold mb-4">TYPOGRAPHY</h4>
                  <p className="text-lg mb-8 underline">Lexend Deca</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Tablet Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 rounded-3xl overflow-hidden glass-card"
          >
            <Image
              src="/img/recifree_tablet.png"
              alt="ReciFree Tablet Mockup"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Conclusion */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-8">
                Conclusion
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  ReciFree emerged from my own frustrations navigating the world
                  of food allergies and the noticeable gap in recipe resources
                  that truly prioritize allergen awareness. To ensure the app
                  effectively addressed the needs of this community, I conducted
                  user research to understand common pain points and identify
                  crucial missing features in existing platforms. This insight
                  directly informed the development of ReciFree's core
                  functionalities, including prominent allergen indicators and
                  personalized recommendations.
                </p>
                <p>
                  The app's fun and inviting logo and overall design were
                  crafted by me to create a welcoming and trustworthy experience
                  for users seeking safe and delicious recipes. Moving forward,
                  I'm eager to explore features like enhanced personalization
                  based on specific allergy profiles and community-driven recipe
                  sharing to further enhance the app's value and create a
                  supportive cooking experience for everyone.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Back to All Projects button */}
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
  );
}
