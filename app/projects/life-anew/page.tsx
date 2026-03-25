"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { projects } from "@/components/projects-grid";
import { ProjectNavigation } from "@/components/project-navigation";
import { ProjectSubNav } from "@/components/project-sub-nav";

export default function LifeAnewProject() {
  const projectData = projects.find((p) => p.href === "/projects/life-anew");

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className="relative bg-white">
        {/* 1. IMPACT & METRICS SECTION */}
        <section id="impact" className="pt-32 pb-16">
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
                Life Anew <br />
                <span className="text-muted-foreground/40">Restorative Justice</span>
              </h1>

              {/* Metadata Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-8 border-y border-gray-100">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Role</p>
                  <p className="font-medium">Product Designer & Developer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Timeline</p>
                  <p className="font-medium">6 Months (2025)</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Tools</p>
                  <p className="font-medium">Figma, Next.js, v0</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Impact</p>
                  <p className="font-medium text-green-600">60% Efficiency Gain</p>
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
        <ProjectSubNav />

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
                src="/img/life_anew_behance.png"
                alt="Life Anew Restorative Justice"
                width={1400}
                height={800}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* 2. THE CHALLENGE */}
        <section id="challenge" className="py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">The Challenge</h2>
                <h3 className="text-3xl font-semibold leading-tight">
                  Operational Inefficiency & Crisis Response Delay
                </h3>
              </div>

              <div className="md:col-span-8">
                <div className="space-y-12">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Staff relied on fragmented, non-digital processes, leading to increased overhead and inconsistent service delivery. Community members lacked a simple pathway to access time-sensitive resources.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold mb-2 text-black">Critical Barrier</h4>
                      <p className="text-muted-foreground">The reliance on busy, understaffed leads meant resource requests took weeks instead of moments.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-black">The Opportunity</h4>
                      <p className="text-muted-foreground">Design a unified mobile ecosystem to empower staff efficiency and provide direct community access.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MOCKUP INTERSTITIAL */}
        <section className="bg-gray-50 py-24">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <Image
              src="/img/lifeanew_mockup_desk.png"
              alt="Life Anew Desk Mockup"
              width={1400}
              height={800}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </section>

        {/* 4. THE CRITICAL PATH */}
        <section id="architecture" className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">The Critical Path</h2>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Streamlining internal logic.</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8">
                <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
                  <Image
                    src="/img/lifeanew_userflow.png"
                    alt="Life Anew User Flow"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-black">De-risking the Flow</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    The primary goal for staff was to minimize the steps to reach crisis resources. I prioritized placing high-frequency tools within a single tap of the home screen to reduce cognitive load during high-stress field work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. ITERATIVE STRATEGY */}
        <section id="strategy" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-end">
              <div>
                <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Iterative Strategy</h2>
                <h3 className="text-4xl font-semibold tracking-tight">Concept Validation</h3>
              </div>
              <p className="text-lg text-muted-foreground">
                Rapid sketching allowed for the validation of information architecture before committing to high-fidelity components.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-md">
                <Image
                  src="/img/lifeanew_sketch.png"
                  alt="Life Anew Sketches"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white p-8 rounded-3xl flex flex-col justify-center border border-gray-100">
                <h4 className="font-bold mb-4 text-black">The Pivot</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Initial concepts featured team imagery at the top. Testing revealed this obstructed immediate access. I iterated to push non-essential visuals to the bottom, ensuring zero-friction access to staff tools.
                </p>
              </div>
            </div>
          </div>
        </section>

       {/* 6. THE FINAL SOLUTION: STAFF IPHONE GALLERY */}
        <section id="solution" className="py-24 bg-white overflow-x-hidden">
          <div className="container mx-auto px-6 max-w-6xl mb-12">
            <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">The Final Solution</h2>
            <h3 className="text-4xl font-semibold mb-6 text-black">Staff Mobile Ecosystem</h3>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
              To empower staff in the field, I designed a high-utility mobile interface that prioritizes 
              zero-friction access to resource coordination.
            </p>
          </div>

          <div className="w-full overflow-x-auto pb-12 cursor-grab active:cursor-grabbing snap-x snap-mandatory no-scrollbar">
            <div className="flex gap-6 px-[5%] md:px-[10%] min-w-max">
              {[
                { src: "/img/lifeanew_final_1.png", label: "Staff Home" },
                { src: "/img/lifeanew_final_2.png", label: "Resource Directory" },
                { src: "/img/lifeanew_iphone_staff.png", label: "Circle Modalities" },
                { src: "/img/lifeanew_mockup_1.png", label: "Facilitation Guide" },
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

        {/* 7. STAFF IPAD: THE COMMAND CENTER */}
        <section className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h3 className="text-3xl font-bold mb-6 text-black">Administrative HQ</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  While the iPhone handles the field, the iPad version provides the high-density data 
                  needed for team leads to oversee entire sectors.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <p className="text-sm font-medium">Real-time team analytics and resource heatmaps.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <p className="text-sm font-medium">Batch processing for crisis documentation.</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 flex justify-center">
                <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-[2.5rem] bg-gray-900 p-3 shadow-2xl border-[6px] border-gray-800">
                  <div className="w-full h-full overflow-hidden rounded-[1.8rem] bg-white relative">
                    <Image
                      src="/img/lifeanew_ipad_staff.png"
                      alt="Staff iPad View"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. COMMUNITY FACING APP */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl text-center">
            <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Direct Impact</h2>
            <h3 className="text-4xl font-semibold mb-6 text-black">The Community Access Portal</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-16">
              Designed specifically to reduce the psychological barrier to seeking help, providing a clean, 
              supportive interface for families in crisis.
            </p>
            <div className="flex justify-center">
              <div className="w-[280px] md:w-[320px] rounded-[2.5rem] p-3 bg-gray-900 shadow-2xl border-[6px] border-gray-800 aspect-[9/19] relative overflow-hidden">
                <Image
                  src="/img/lifeanew_home_external.png"
                  alt="Community Member App"
                  fill
                  className="object-cover rounded-[1.8rem]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9. THE IMPACT */}
        <section id="impact-metrics" className="py-24 bg-black text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
             <h3 className="text-3xl font-bold mb-12">The Resulting Change</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                  <p className="text-5xl font-bold text-accent mb-2">60%</p>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Efficiency Gain</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-accent mb-2">Weeks</p>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">To Moments</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-accent mb-2">50%</p>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Onboarding Speed</p>
                </div>
             </div>
          </div>
        </section>

        <ProjectNavigation currentHref="/projects/life-anew" />
      </main>
      <Footer />
    </>
  );
}