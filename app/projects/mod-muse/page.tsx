"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";
import { projects } from "@/components/projects-grid";
import { ProjectNavigation } from "@/components/project-navigation";
import { ProjectSubNav } from "@/components/project-sub-nav";

export default function ModMuseProject() {
  const projectData = projects.find((p) => p.title === "Mod Muse");

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className="bg-white">
        {/* 1. PROJECT HEADER */}
        <section className="pt-40 pb-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-black transition-colors mb-8"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 10H4M4 10L10 16M4 10L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Projects
            </Link>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black tracking-tight">
              {projectData?.title || "Mod Muse"}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl mx-auto">
              {projectData?.description}
            </p>
            <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-sm font-medium text-black">
              UX/UI Case Study | Native App - iOS
            </div>
          </div>
        </section>

        {/* 2. HERO IMAGE */}
        <section className="pb-12 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="w-full rounded-[2rem] overflow-hidden shadow-2xl relative aspect-[16/9]">
              <Image
                src="/img/modmuse1.jpg"
                alt="Mod Muse Hero"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Prototype Link */}
            <div className="mt-12 text-center">
              <a
                href="https://www.figma.com/proto/fX8pIyCpML8rImeha4pvnJ/Mod-Muse?node-id=278-2100&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=278%3A2100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-xl font-semibold text-accent hover:text-black transition-colors border-b-2 border-accent hover:border-black pb-1"
              >
                View the Interactive Prototype
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* SUB-NAVIGATION BAR */}
        <ProjectSubNav items={[
          { name: "Challenge", href: "#problem" },
          { name: "Strategy", href: "#vision" },
          { name: "Prototypes", href: "#prototypes" },
          { name: "Process", href: "#research" },
          { name: "Wireframes", href: "#wireframes" },
          { name: "Style Guide", href: "#style-guide" },
        ]} />

        {/* 3. PROBLEM & SOLUTION */}
        <section id="problem" className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Problem */}
              <div>
                <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">The Challenge</h2>
                <h3 className="text-3xl font-semibold mb-6 text-black">The Problem</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="text-accent text-xl mt-1">•</span>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Vintage shoppers often face fragmented, overwhelming online experiences lacking curation.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-accent text-xl mt-1">•</span>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Meanwhile, eco-conscious individuals need a seamless platform to buy and sell unique, secondhand pieces sustainably.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">The Answer</h2>
                <h3 className="text-3xl font-semibold mb-6 text-black">The Solution</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="text-accent text-xl mt-1">•</span>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Mod Muse, a vintage fashion app inspired by the 1960s Mod aesthetic, offering a visually engaging, curated marketplace with seamless buy and sell functionality.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-accent text-xl mt-1">•</span>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Created a niche, emotionally resonant shopping experience that successfully bridges the gap between nostalgic design and modern usability, driving sustainability through a streamlined, dual-sided platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. OBJECTIVE & VISION */}
        <section id="vision" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Core Strategy</h2>
              <h3 className="text-4xl font-semibold mb-6 text-black">The Objective & Vision</h3>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-xl font-bold mb-3 text-black">The Objective:</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide a seamless and visually engaging user experience for buying and selling vintage pieces, inspired by the timeless appeal of the 1960s Mod aesthetic, while actively promoting sustainability through secondhand fashion.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-3 text-black">The Vision:</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the premier destination for fashion enthusiasts and eco-conscious individuals seeking unique, curated vintage clothing.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 5. DESK MOCKUP INTERSTITIAL */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] shadow-sm">
                <Image
                  src="/img/modmuse3.jpg"
                  alt="Mod Muse Workspace"
                  width={1400}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. PROTOTYPES (HORIZONTAL GALLERY) */}
        <section id="prototypes" className="py-24 bg-white overflow-x-hidden">
          <div className="container mx-auto px-6 max-w-6xl mb-12">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Interface Design</h2>
                <h3 className="text-4xl font-semibold text-black">Prototypes</h3>
              </div>
              <p className="text-sm font-medium text-muted-foreground italic hidden md:block">
                Swipe to explore →
              </p>
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-12 cursor-grab active:cursor-grabbing snap-x snap-mandatory no-scrollbar">
            <div className="flex gap-6 px-[5%] md:px-[10%] min-w-max">
              {[
                { name: "Login", Image: "/img/modmuse_login.png" },
                { name: "Home", Image: "/img/modmuse_home.png" },
                { name: "Reviews", Image: "/img/modmuse_reviews.png" },
                { name: "Profile", Image: "/img/modmuse_profile.png" },
                { name: "Item", Image: "/img/modmuse_item.png" },
                { name: "Add Item", Image: "/img/modmuse_additem.png" },
                { name: "Checkout", Image: "/img/modmuse_checkout.png" },
              ].map((screen, index) => (
                <div key={index} className="flex-none w-[280px] md:w-[320px] snap-center">
                  <div className="rounded-[2.5rem] p-3 bg-gray-900 shadow-xl border-[6px] border-gray-800 aspect-[9/19] relative overflow-hidden">
                    <Image
                      src={screen.Image}
                      alt={`Mod Muse ${screen.name}`}
                      fill
                      className="object-cover rounded-[1.8rem]"
                    />
                  </div>
                  <p className="mt-4 text-center text-sm font-semibold text-black tracking-tight uppercase">
                    {screen.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. RESEARCH & DISCOVERY */}
        <section id="research" className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">The Process</h2>
            <h3 className="text-4xl font-semibold mb-12 text-black">Research & Discovery</h3>

            <div className="space-y-12">
              <div>
                <h4 className="text-xl font-bold mb-3 text-black">Methodology:</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The project was informed by a combination of <strong className="text-black">user interviews, surveys, and competitive analysis,</strong> ensuring the design was grounded in real user needs and market gaps.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 text-black">Process Steps:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      <strong className="text-black block mb-2">Define</strong>
                      Independently conceived and defined Mod Muse's core purpose as a vintage fashion app promoting reuse and a unique aesthetic.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      <strong className="text-black block mb-2">Research</strong>
                      Gained understanding of user fashion habits, preferences for vintage clothing, and pain points in sustainable shopping.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      <strong className="text-black block mb-2">Design</strong>
                      Translated insights into intuitive solutions through information architecture, wireframing, and interactive prototyping.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      <strong className="text-black block mb-2">Test</strong>
                      Conducted usability testing to evaluate the design's effectiveness and identify key areas for iteration to ensure a seamless and engaging experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. USERFLOW & WIREFRAMES */}
        <section id="wireframes" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-24">
              <h3 className="text-3xl font-semibold mb-8 text-black text-center">Userflow</h3>
              <div className="rounded-[2rem] overflow-hidden shadow-md border border-gray-100 bg-gray-50 p-4">
                <Image
                  src="/img/modmuse_userflow.png"
                  alt="Mod Muse User Flow"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-8 text-black text-center">Low Fidelity Wireframes</h3>
              <div className="rounded-[2rem] overflow-hidden shadow-md border border-gray-100 bg-gray-50 p-4">
                <Image
                  src="/img/modmuse_low_fidelity_wireframes.png"
                  alt="Mod Muse Low Fidelity Wireframes"
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9. STYLE GUIDE */}
        <section id="style-guide" className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Visual Identity</h2>
              <h3 className="text-4xl font-semibold text-black">Style Guide</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Colors */}
              <div>
                <h4 className="text-sm font-bold tracking-widest text-black mb-6 uppercase">Colors</h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: "Blue", Image: "/img/modmuse_blue.png" },
                    { name: "Purple", Image: "/img/modmuse_purple.png" },
                    { name: "Yellow", Image: "/img/modmuse_yellow.png" },
                    { name: "White", Image: "/img/modmuse_white.png" },
                    { name: "Black", Image: "/img/modmuse_black.png" },
                  ].map((color, index) => (
                    <div key={index} className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full overflow-hidden shadow-sm border border-gray-200 mb-3">
                        <Image
                          src={color.Image}
                          alt={`Mod Muse ${color.name}`}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <p className="text-center text-xs font-medium text-muted-foreground uppercase">{color.name}</p>
                    </div>
                  ))}
                </div>

                {/* Typography inside the same column */}
                <div className="mt-16">
                  <h4 className="text-sm font-bold tracking-widest text-black mb-6 uppercase">Typography</h4>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Headings</p>
                      <p className="text-2xl font-bold text-black font-montserrat">Montserrat Bold / SemiBold</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Body</p>
                      <p className="text-xl text-black font-montserrat">Montserrat Regular</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logo & Rules */}
              <div>
                <h4 className="text-sm font-bold tracking-widest text-black mb-6 uppercase">Logo & Usage</h4>
                <div className="bg-white rounded-[2rem] p-12 flex justify-center mb-8 shadow-sm border border-gray-100">
                  <Image
                    src="/img/modmuse_logo.png"
                    alt="Mod Muse Logo"
                    width={300}
                    height={120}
                    className="w-auto h-auto"
                  />
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                  <h5 className="text-sm font-bold text-black mb-4 uppercase tracking-widest">The logo must:</h5>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <span className="text-accent">•</span>
                      <p className="text-sm font-medium text-muted-foreground">Be in all caps</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">•</span>
                      <p className="text-sm font-medium text-muted-foreground">Have a 1px stroke in the color #FFFFFF</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">•</span>
                      <p className="text-sm font-medium text-muted-foreground">Have an inner shadow</p>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">•</span>
                      <p className="text-sm font-medium text-muted-foreground">Remain the color #0074D9</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. STRATEGIC IMPACT & CONCLUSION */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            {/* Impact */}
            <div className="mb-20">
              <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Results</h2>
              <h3 className="text-4xl font-semibold mb-8 text-black">Strategic Impact</h3>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <span className="text-accent text-2xl mt-1">•</span>
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      <strong className="text-black">Balancing Nostalgia and Usability -</strong> A core learning was the importance of balancing a nostalgia-driven design (the Mod aesthetic) with modern usability standards. The final design proves that an emotional connection can be created without compromising seamless navigation and intuitive interactions.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent text-2xl mt-1">•</span>
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      <strong className="text-black">Brand Identity Development -</strong> Gained valuable experience in ensuring that every design choice—from typography to color schemes—aligned with the Mod aesthetic and enhanced the overall brand experience.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent text-2xl mt-1">•</span>
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      <strong className="text-black">Functional Focus -</strong> The project reinforced the significance of seamless navigation and intuitive interactions to create an enjoyable shopping and selling experience tailored to lovers of vintage fashion.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent text-2xl mt-1">•</span>
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      <strong className="text-black">Moving Forward (Future Vision) -</strong> Future iterations would focus on exploring enhanced personalization features, advanced search capabilities, and community-driven elements to increase user engagement.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Conclusion Wrapper */}
            <div className="bg-black text-white rounded-[2rem] p-10 md:p-16 text-center">
              <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
              <p className="text-lg leading-relaxed text-gray-300 mb-6 max-w-2xl mx-auto">
                Mod Muse successfully demonstrates how a vintage-inspired aesthetic can be combined with modern UX principles to create a seamless, engaging platform for sustainable fashion. This case study underscores the importance of user research, iterative design, and a commitment to brand consistency.
              </p>
              <p className="text-lg leading-relaxed text-gray-300 max-w-2xl mx-auto">
                The final product provides a thoughtfully curated marketplace that resonates emotionally with users while maintaining intuitive navigation and functionality, setting a strong foundation for future growth in the vintage fashion space.
              </p>
            </div>
          </div>
        </section>

        <ProjectNavigation currentHref="/projects/mod-muse" />
      </main>

    </>
  );
}