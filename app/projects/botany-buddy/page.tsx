"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";
import { projects } from "@/components/projects-grid";
import { ProjectNavigation } from "@/components/project-navigation";
import { ProjectSubNav } from "@/components/project-sub-nav";

export default function BotanyBuddyProject() {
  const projectData = projects.find((p) => p.title === "Botany Buddy");

  // State initialization for the interactive OS toggle
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className="relative bg-white">
        {/* 1. IMPACT & METRICS SECTION */}
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
                Botany Buddy <br />
                <span className="text-muted-foreground/40">Native Plant Care</span>
              </h1>

              {/* Metadata Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-8 border-y border-gray-100">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Role</p>
                  <p className="font-medium">UI/UX Designer</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Timeline</p>
                  <p className="font-medium">2025</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Platform</p>
                  <p className="font-medium">iOS & Android (Native)</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Focus</p>
                  <p className="font-medium text-green-600">Platform Parity</p>
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
          { name: "Process", href: "#process" },
          { name: "iOS Prototype", href: "#ios" },
          { name: "Android Prototype", href: "#android" },
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
                src="/img/botanybuddy.jpg"
                alt="Botany Buddy Native App"
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
                  Fragmentation of Diagnostic Information
                </h3>
              </div>

              <div className="md:col-span-8">
                <div className="space-y-12">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Plant owners face a high-friction experience due to fragmented information, requiring them to use multiple tools (ID app, website, journal) to identify, track, and diagnose plant health issues.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold mb-2 text-black">The Solution</h4>
                      <p className="text-muted-foreground">I created a system that is fundamentally a diagnostic and information retrieval tool wrapped in a modern interface, centered on a Camera Diagnostic Flow.</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2 text-black">The Goal</h4>
                      <p className="text-muted-foreground">To consolidate functions into a single application, providing instant, accurate identification and integrated, data-driven health tracking with platform parity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. INTERSTITIAL IMAGE */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/img/botanybuddy_leafbckgrnd.jpg"
                alt="Botany Buddy Environment"
                width={1400}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* 4. RESEARCH & PROCESS */}
        <section id="process" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Research & Process</h2>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Designing for Dual-Platform.</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8">
                <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white p-4 mb-8">
                  <Image
                    src="/img/botanybuddy_userflow.png"
                    alt="Botany Buddy User Flow"
                    width={1200}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100">
                        <h4 className="font-bold mb-4 text-black uppercase tracking-widest text-xs">Primary Features</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li>• Identify plants via species recognition.</li>
                            <li>• Personalized care tips and automated routines.</li>
                            <li>• Diagnose issues via leaf damage prognosis.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100">
                        <h4 className="font-bold mb-4 text-black uppercase tracking-widest text-xs">Technical Mitigation</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Implemented guided camera instructions to proactively mitigate poor photo quality, significantly improving identification accuracy.
                        </p>
                    </div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-black">Methodology</h4>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Project foundation was built through thorough research, identifying key user needs: identification, care reminders, and health diagnosis. I paid special attention to platform parity, designing validated iterations for both iOS and Android.
                  </p>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <p className="text-sm font-medium">Native Human Interface Guidelines (iOS).</p>
                    </div>
                    <div className="flex gap-3">
                        <span className="text-accent font-bold">•</span>
                        <p className="text-sm font-medium">Material Design Visual Conventions (Android).</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. iOS PROTOTYPE GALLERY */}
        <section id="ios" className="py-24 bg-white overflow-x-hidden">
          <div className="container mx-auto px-6 max-w-6xl mb-12">
            <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Prototypes</h2>
            <h3 className="text-4xl font-semibold mb-6 text-black">iOS Native Experience</h3>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed italic">
              Scroll to view more →
            </p>
          </div>

          <div className="w-full overflow-x-auto pb-12 cursor-grab active:cursor-grabbing snap-x snap-mandatory no-scrollbar">
            <div className="flex gap-6 px-[5%] md:px-[10%] min-w-max">
              {[
                { name: "Splash", Image: "/img/botanybuddy_ios_mockup_splash.png" },
                { name: "Login", Image: "/img/botanybuddy_ios_mockup_login.png" },
                { name: "Home", Image: "/img/botanybuddy_ios_mockup_home.png" },
                { name: "Camera", Image: "/img/botanybuddy_ios_mockup_camera.png" },
                { name: "Photo Tips", Image: "/img/botanybuddy_ios_phototips.jpg" },
                { name: "Try Again", Image: "/img/botanybuddy_ios_tryagain.png" },
                { name: "Submit", Image: "/img/botanybuddy_ios_mockup_submit.png" },
                { name: "Diagnosis", Image: "/img/botanybuddy_ios_mockup_diagnosis.png" },
                { name: "Description", Image: "/img/botanybuddy_ios_mockup_description.png" },
                { name: "Profile", Image: "/img/botanybuddy_ios_mockup_profile.png" },
                { name: "Loading", Image: "/img/botanybuddy_ios_mockup_loading.png" },
                { name: "Error", Image: "/img/botanybuddy_ios_mockup_error.png" },
              ].map((screen, index) => (
                <div key={index} className="flex-none w-[260px] md:w-[280px] snap-center">
                  <div className="rounded-[2.5rem] p-3 bg-gray-900 shadow-xl border-[6px] border-gray-800 aspect-[9/19] relative overflow-hidden">
                    <Image
                      src={screen.Image}
                      alt={`iOS • ${screen.name}`}
                      fill
                      className="object-cover rounded-[1.8rem]"
                    />
                  </div>
                  <p className="mt-4 text-center text-[10px] font-bold text-muted-foreground tracking-widest uppercase">
                    iOS • {screen.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. ANDROID PROTOTYPE GALLERY */}
        <section id="android" className="py-24 bg-gray-50 overflow-x-hidden">
          <div className="container mx-auto px-6 max-w-6xl mb-12">
            <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Prototypes</h2>
            <h3 className="text-4xl font-semibold mb-6 text-black">Android Material Design</h3>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed italic">
              Scroll to view more →
            </p>
          </div>

          <div className="w-full overflow-x-auto pb-12 cursor-grab active:cursor-grabbing snap-x snap-mandatory no-scrollbar">
            <div className="flex gap-6 px-[5%] md:px-[10%] min-w-max">
              {[
                { name: "Splash", Image: "/img/botanybuddy_android_mockup_splash.png" },
                { name: "Login", Image: "/img/botanybuddy_android_mockup_login.png" },
                { name: "Home", Image: "/img/botanybuddy_android_mockup_home.png" },
                { name: "Camera", Image: "/img/botanybuddy_android_mockup_camera.png" },
                { name: "Submit", Image: "/img/botanybuddy_android_mockup_submit.png" },
                { name: "Diagnosis", Image: "/img/botanybuddy_android_mockup_diagnosis.png" },
                { name: "Description", Image: "/img/botanybuddy_android_mockup_description.png" },
                { name: "Profile", Image: "/img/botanybuddy_android_mockup_profile.png" },
                { name: "Loading", Image: "/img/botanybuddy_android_mockup_loading.png" },
                { name: "Error", Image: "/img/botanybuddy_android_mockup_error.png" },
              ].map((screen, index) => (
                <div key={index} className="flex-none w-[260px] md:w-[280px] snap-center">
                  <div className="rounded-[2.5rem] p-3 bg-gray-800 shadow-xl border-[6px] border-gray-700 aspect-[9/19] relative overflow-hidden">
                    <Image
                      src={screen.Image}
                      alt={`Android • ${screen.name}`}
                      fill
                      className="object-cover rounded-[1.8rem]"
                    />
                  </div>
                  <p className="mt-4 text-center text-[10px] font-bold text-muted-foreground tracking-widest uppercase">
                    Android • {screen.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. WIREFRAMES: INTERACTIVE OS SWITCHER */}
        <section id="visuals" className="py-24 bg-white border-t border-gray-50">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-sm uppercase tracking-widest text-green-600 font-bold mb-4">Structure</h2>
              <h3 className="text-4xl md:text-5xl font-semibold mb-10">Low to Mid-Fidelity Wireframing</h3>
              
              {/* THE TOGGLE UI */}
              <div className="inline-flex p-1 bg-gray-100 rounded-2xl mb-8">
                <button 
                  onClick={() => setPlatform('ios')}
                  className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${platform === 'ios' ? 'bg-white text-black shadow-sm' : 'text-muted-foreground hover:text-black'}`}
                >
                  iOS
                </button>
                <button 
                  onClick={() => setPlatform('android')}
                  className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${platform === 'android' ? 'bg-white text-black shadow-sm' : 'text-muted-foreground hover:text-black'}`}
                >
                  Android
                </button>
              </div>
            </div>

            {/* THE GALLERY STAGE */}
            <div className="relative min-h-[500px]">
              <motion.div
                key={platform}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="overflow-x-auto pb-12 no-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory">
                  <div className="flex gap-6 px-4">
                    {(platform === 'ios' ? [
                      { name: "Login", src: "/img/botanybuddy_ios_login.jpg" },
                      { name: "Home", src: "/img/botanybuddy_ios_home.jpg" },
                      { name: "Diagnosis", src: "/img/botanybuddy_ios_diagnosis.jpg" },
                      { name: "Camera", src: "/img/botanybuddy_ios_camera.jpg" },
                      { name: "Results", src: "/img/botanybuddy_ios_results.jpg" },
                      { name: "Identity Results", src: "/img/botanybuddy_ios_identityresults.jpg" },
                      { name: "Reminder", src: "/img/botanybuddy_ios_reminder.jpg" },
                      { name: "Calendar", src: "/img/botanybuddy_ios_calendar.jpg" },
                      { name: "Profile", src: "/img/botanybuddy_ios_profile.jpg" },
                    ] : [
                      { name: "Login", src: "/img/botanybuddy_android_login.jpg" },
                      { name: "Home", src: "/img/botanybuddy_android_home.jpg" },
                      { name: "Diagnose", src: "/img/botanybuddy_android_diagnose.jpg" },
                      { name: "Camera", src: "/img/botanybuddy_android_camera.jpg" },
                      { name: "Plant Diagnosis", src: "/img/botanybuddy_android_plantdiagnosis.jpg" },
                      { name: "Identity", src: "/img/botanybuddy_android_indentity.jpg" },
                      { name: "Reminder", src: "/img/botanybuddy_android_reminder.jpg" },
                      { name: "Calendar", src: "/img/botanybuddy_android_calendar.jpg" },
                      { name: "Profile", src: "/img/botanybuddy_android_profile.jpg" },
                    ]).map((screen, i) => (
                      <div key={i} className="flex-none w-64 snap-center group">
                        <div className="bg-gray-50 rounded-[2rem] p-4 border border-gray-100 shadow-sm transition-transform group-hover:-translate-y-2">
                          <Image 
                            src={screen.src} 
                            alt={`${platform} • ${screen.name}`} 
                            width={256} 
                            height={550} 
                            className="w-full h-auto rounded-2xl shadow-sm" 
                          />
                        </div>
                        <p className="mt-4 text-center text-[10px] uppercase tracking-widest font-bold text-muted-foreground">
                          {screen.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 8. VISUAL IDENTITY: STYLE GUIDE */}
        <section id="style-guide" className="py-24 bg-gray-50 overflow-hidden">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Visual Identity</h2>
            <h3 className="text-4xl font-semibold mb-12 text-black">Style Guide & System</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-12 rounded-[2rem] border border-gray-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">Primary Palette</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "Light Green", color: "#A8D5BA" },
                      { name: "Medium Green", color: "#6DBE91" },
                      { name: "Dark Green", color: "#2D5F4A" },
                      { name: "Brick", color: "#B85450" },
                      { name: "Black", color: "#2C2C2C" },
                      { name: "White", color: "#FFFFFF" },
                    ].map((swatch) => (
                      <div key={swatch.name} className="flex flex-col items-center gap-2">
                        <div className="w-full aspect-square rounded-2xl shadow-inner border border-gray-100" style={{ backgroundColor: swatch.color }}></div>
                        <span className="text-[9px] uppercase font-bold text-muted-foreground">{swatch.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-50">
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Logo Typography</h4>
                  <p className="text-xl font-medium mb-4">Figma Hand Regular pt 30</p>
                  <Image src="/img/botanybuddy_logo.png" alt="Botany Buddy Logo" width={250} height={80} className="h-auto" />
                </div>
              </div>

              <div className="bg-white p-12 rounded-[2rem] border border-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-8">Design Context</h4>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The native mobile app design ensures quick camera access for identification, supports offline use for outdoor settings, and utilizes push notifications for timely care reminders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. THE IMPACT / CONCLUSION */}
        <section id="conclusion" className="py-24 bg-black text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
             <h2 className="text-sm uppercase tracking-widest text-accent font-bold mb-4">Conclusion</h2>
             <h3 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Fostering Green Connections.</h3>
             <div className="space-y-8 text-left text-gray-400 text-lg leading-relaxed">
                <p>
                    Developing Botany Buddy provided valuable insights into designing for a specific user need: plant care. This project highlighted the importance of combining practical tools, like care reminders and visual diagnosis, with user-friendly features such as plant identification. I learned how to create an intuitive experience that empowers users to confidently care for their plants, regardless of their experience level.
                </p>
                <p>
                    The app&apos;s impact lies in its potential to make plant care more accessible and enjoyable, fostering a deeper connection between users and their greenery. By addressing common pain points, Botany Buddy simplifies a traditionally complex task.
                </p>
             </div>
          </div>
        </section>

        <ProjectNavigation currentHref="/projects/botany-buddy" />
      </main>
    </>
  );
}