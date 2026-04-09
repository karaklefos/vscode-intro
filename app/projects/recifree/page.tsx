"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";
import { projects } from "@/components/projects-grid";
import { ProjectNavigation } from "@/components/project-navigation";
import { ProjectSubNav } from "@/components/project-sub-nav";

export default function ReciFreeProject() {
  const projectData = projects.find((p) => p.title === "ReciFree");

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
                ReciFree <br />
                <span className="text-muted-foreground/40">Allergy-Aware Cooking</span>
              </h1>

              {/* Metadata Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-8 border-y border-gray-100">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Role</p>
                  <p className="font-medium">Product Designer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Timeline</p>
                  <p className="font-medium">3 Months (2025)</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Platform</p>
                  <p className="font-medium">Responsive Web</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Focus</p>
                  <p className="font-medium text-red-500">Accessibility & Safety</p>
                </div>
              </div>

              <div className="max-w-3xl">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-pretty">
                  {projectData?.description}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STICKY NAV */}
        <ProjectSubNav items={[
          { name: "The Challenge", href: "#challenge" },
          { name: "Research", href: "#research" },
          { name: "Solution", href: "#solution" },
          { name: "Architecture", href: "#architecture" },
          { name: "Visuals", href: "#visuals" },
          { name: "Conclusion", href: "#conclusion" },
        ]} />

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
                src="/img/recifree.jpg"
                alt="ReciFree Dashboard"
                width={1400}
                height={800}
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
                  Managing food allergies & restrictions
                </h3>
              </div>

              <div className="md:col-span-8">
                <div className="space-y-12">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Managing food allergies (affecting around 32 million Americans) presents a significant challenge in meal preparation, as existing recipe apps fail to consistently provide clear, easy-to-see allergen indicators. Users are often forced to manually check ingredients, leading to frustration and wasted time.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold mb-2 text-black">The Barrier</h4>
                      <p className="text-muted-foreground">Users with dietary restrictions struggle to find reliable recipes due to cluttered interfaces, blog filler, and inconsistent, non-prominent allergen indicators.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-black">The Goal</h4>
                      <p className="text-muted-foreground">To create a responsive web app that prioritizes safety, efficiency, and clarity, enabling users to easily identify recipes free from specific allergens.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. RESPONSIVE INTERSTITIAL */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-6 max-w-6xl">
             <div className="mb-12">
                <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Adaptability</h2>
                <h3 className="text-4xl font-semibold mb-2">Responsive Design Examples</h3>
                <p className="text-muted-foreground italic">Scroll to view more →</p>
             </div>
             
             <div className="overflow-x-auto pb-10 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory flex items-start active:cursor-grabbing cursor-grab">
                <div className="flex gap-8 w-full items-start">
                    {[
                    { name: "Sign In", Image: "/img/recifree_responsive_login.png" },
                    { name: "Sign Up", Image: "/img/recifree_responsive_signup.png" },
                    { name: "Onboarding", Image: "/img/recifree_responsive_allergen.png" },
                    ].map((screen, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full md:max-w-4xl mx-auto h-fit rounded-3xl overflow-hidden glass-card snap-center border border-white/10 shadow-2xl"
                    >
                        <Image
                        src={screen.Image}
                        alt={`ReciFree ${screen.name}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto pointer-events-none"
                        />
                    </div>
                    ))}
                </div>
             </div>
          </div>
        </section>

        {/* 4. USER RESEARCH & SYNTHESIS */}
        <section id="research" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">User Research</h2>
                <h3 className="text-3xl font-semibold leading-tight">
                  Methodology & Key Insights
                </h3>
              </div>

              <div className="md:col-span-8">
                <div className="space-y-12">
                  <div className="grid grid-cols-1 gap-8">
                    <div>
                      <h4 className="font-bold mb-2 text-black underline uppercase tracking-tighter">Who & Why</h4>
                      <p className="text-muted-foreground leading-relaxed">Users with established dietary restrictions or food allergies actively seeking recipes that cater to their specific needs. They browse for inspiration at home and utilize the app while grocery shopping on weekends.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                        <div>
                            <h4 className="font-bold mb-2 text-black">Clutter vs. Clarity</h4>
                            <p className="text-muted-foreground text-sm">All users cited a preference for clean, clear interfaces and felt that most current recipe sites are too cluttered and visually busy.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-2 text-black">Efficiency First</h4>
                            <p className="text-muted-foreground text-sm">Every user expressed a desire to go straight to the ingredients and explicitly do not want to read the blogger&apos;s story.</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DESIGN STRATEGY (HYPOTHESIS/MVP) */}
        <section id="strategy" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Design Strategy</h2>
                <h3 className="text-4xl font-semibold tracking-tight">The 'Not Included' Indicator</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                With prominent allergen indicators and personalized recommendations, users can efficiently plan and prepare healthy meals and reduce preparation anxiety.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-md">
                <Image
                  src="/img/recifree_bellpepper.jpg"
                  alt="Fresh Ingredients"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
              <div className="bg-white p-8 rounded-3xl flex flex-col justify-center border border-gray-100">
                <h4 className="font-bold mb-4 text-black">Core Innovation</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Instead of requiring the user to search for what is present, the recipe clearly displays icons with a strike-through for the user&apos;s specific allergens, providing instant, verified assurance of safety.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FINAL SOLUTION: PROTOTYPE GALLERY */}
        <section id="solution" className="py-24 bg-white overflow-x-hidden">
          <div className="container mx-auto px-6 max-w-6xl mb-12">
            <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">The Final Solution</h2>
            <h3 className="text-4xl font-semibold mb-6 text-black">Mobile MVP Experience</h3>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              A task-forward UI that pushes recipe details to the foreground, bypassing the common &quot;blog feel&quot; to prioritize safety and speed.
            </p>
          </div>

          <div className="w-full overflow-x-auto pb-12 cursor-grab active:cursor-grabbing snap-x snap-mandatory no-scrollbar">
            <div className="flex gap-6 px-[5%] md:px-[10%] min-w-max">
              {[
                { src: "/img/recifree_mockup_login.png", label: "Secure Login" },
                { src: "/img/recifree_mockup_signup.png", label: "User Onboarding" },
                { src: "/img/recifree_mockup_allergeninfo.png", label: "Allergen Setup" },
                { src: "/img/recifree_mockup_home.png", label: "Safe Discovery" },
                { src: "/img/recifree_mockup_recipe.png", label: "Recipe Details" },
                { src: "/img/recifree_mockup_filter.png", label: "Advanced Filtering" },
              ].map((screen, index) => (
                <div key={index} className="flex-none w-[280px] md:w-[320px] snap-center">
                  <div className="rounded-[2.5rem] p-3 bg-gray-900 shadow-xl border-[6px] border-gray-800 aspect-[9/19] relative overflow-hidden">
                    <Image
                      src={screen.src}
                      alt={screen.label}
                      fill
                      className="object-cover rounded-[1.8rem]"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm font-semibold text-black tracking-tight uppercase">
                    {screen.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. ARCHITECTURE: USER FLOW & WIREFRAMES */}
        <section id="architecture" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Architecture</h2>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Streamlining Safety Logic.</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8">
                <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white p-4">
                  <Image
                    src="/img/recifree_userflow.png"
                    alt="ReciFree User Flow"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <Image src="/img/recifree_lowfidelity_home.png" alt="Lo-Fi Home" width={400} height={800} className="rounded-2xl border border-gray-100 shadow-sm w-full" />
                    <Image src="/img/recifree_midfidelity_home.png" alt="Mid-Fi Home" width={400} height={800} className="rounded-2xl border border-gray-100 shadow-sm w-full" />
                </div>
              </div>
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-black">Iterative Prototyping</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Rapid sketching and wireframing allowed for the validation of the information architecture. The goal was to ensure the ingredient shopping list and allergen indicators were never more than two taps away.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <p className="text-sm font-medium">Verified onboarding flow for allergen capture.</p>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <p className="text-sm font-medium">Task-forward recipe interface development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. VISUAL IDENTITY: STYLE GUIDE */}
        <section id="visuals" className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Visual Identity</h2>
            <h3 className="text-4xl font-semibold mb-12 text-black">Branding & System</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="bg-gray-50 p-12 rounded-[2rem] border border-gray-100 flex flex-col justify-between">
                    <div>
                        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">Typography & Colors</h4>
                        <p className="text-3xl font-medium underline mb-12">Lexend Deca</p>
                        <div className="flex flex-wrap gap-4">
                            {[
                            { name: "Red", color: "#E74C3C" },
                            { name: "Orange", color: "#E67E22" },
                            { name: "Green", color: "#27AE60" },
                            { name: "Black", color: "#2C3E50" },
                            ].map((swatch) => (
                                <div key={swatch.name} className="flex flex-col items-center gap-2">
                                    <div className="w-16 h-16 rounded-full shadow-inner" style={{ backgroundColor: swatch.color }}></div>
                                    <span className="text-[10px] uppercase font-bold text-muted-foreground">{swatch.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16">
                         <Image src="/img/recifree_logo.png" alt="ReciFree Logo" width={250} height={80} className="h-auto" />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Iconography System</h4>
                        <Image src="/img/recifree_icons.png" alt="System Icons" width={500} height={200} className="w-full h-auto" />
                    </div>
                    <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                        <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Dietary Icons</h4>
                        <Image src="/img/recifree_dietaryicons.png" alt="Dietary Icons" width={500} height={200} className="w-full h-auto" />
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* 9. TABLET INTERSTITIAL */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h3 className="text-3xl font-bold mb-6 text-black">Responsive Ecosystem</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  While mobile serves the immediate grocery store need, the tablet experience focuses on the kitchen—providing a large, high-readability layout for active cooking environments.
                </p>
              </div>
              <div className="lg:col-span-7 flex justify-center">
                <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200">
                    <Image
                      src="/img/recifree_tablet.png"
                      alt="ReciFree Tablet View"
                      width={1000}
                      height={700}
                      className="w-full h-auto"
                    />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. THE IMPACT / CONCLUSION */}
        <section id="conclusion" className="py-24 bg-black text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
             <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Conclusion</h2>
             <h3 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Safely Discovering Flavor.</h3>
             <div className="space-y-8 text-left text-gray-400 text-lg leading-relaxed">
                <p>
                    ReciFree emerged from my own frustrations navigating the world of food allergies and the noticeable gap in recipe resources that truly prioritize allergen awareness. To ensure the app effectively addressed the needs of this community, I conducted user research to understand common pain points and identify crucial missing features in existing platforms. This insight directly informed the development of ReciFree&apos;s core functionalities, including prominent allergen indicators and personalized recommendations.
                </p>
                <p>
                    The app&apos;s fun and inviting logo and overall design were crafted by me to create a welcoming and trustworthy experience for users seeking safe and delicious recipes. Moving forward, I&apos;m eager to explore features like enhanced personalization based on specific allergy profiles and community-driven recipe sharing to further enhance the app&apos;s value and create a supportive cooking experience for everyone.
                </p>
             </div>
          </div>
        </section>

        <ProjectNavigation currentHref="/projects/recifree" />
      </main>
    </>
  );
}