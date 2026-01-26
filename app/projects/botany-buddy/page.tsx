"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import { Footer } from "@/components/footer"
import { projects } from "@/components/projects-grid"
import { ProjectNavigation } from "@/components/project-navigation";

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
    alt="Botany Buddy decorative background"
    width={1400}
    height={600}
    className="w-full h-auto"
    priority
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
  className="mb-20"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <div className="glass-card rounded-3xl p-8 md:p-12">
    <h2 className="text-4xl md:text-5xl font-semibold mb-4">Prototypes</h2>
    <h3 className="text-2xl font-semibold mb-6">iOS</h3>
    <p className="text-muted-foreground italic mb-12">Scroll to view more →</p>

    <div className="overflow-x-auto pb-10 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent snap-x snap-mandatory flex items-start">
      <div className="flex gap-6">
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
          <div key={index} className="flex-shrink-0 w-72 rounded-2xl overflow-hidden glass-card snap-center border border-white/10 shadow-xl">
            <Image
              src={screen.Image} // Matches your array key exactly
              alt={`iOS ${screen.name}`}
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
    <p className="text-muted-foreground italic mb-12">Scroll to view more →</p>

    {/* Scroll Container: Removed scrollbar-hide, added scrollbar-thin and items-start */}
    <div className="overflow-x-auto pb-10 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent snap-x snap-mandatory flex items-start active:cursor-grabbing cursor-grab">
      <div className="flex gap-6 items-start">
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
          <div 
            key={index} 
            /* Added h-fit to ensure the card doesn't show white space below shorter images */
            className="flex-shrink-0 w-64 md:w-72 h-fit rounded-2xl overflow-hidden glass-card snap-center border border-white/10 shadow-xl"
          >
            <Image
              /* FIXED: pointing to screen.Image instead of the placeholder URL */
              src={screen.Image}
              alt={`Botany Buddy Android ${screen.name}`}
              width={288}
              height={600}
              className="w-full h-auto pointer-events-none"
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
    <p className="text-lg text-muted-foreground mb-12 italic">Scroll to view more →</p>

    {/* Scroll Container: items-start prevents white space, scrollbar-thin adds the bar */}
    <div className="overflow-x-auto pb-10 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent snap-x snap-mandatory flex items-start active:cursor-grabbing cursor-grab">
      <div className="flex gap-6 items-start">
        {[
          { name: "Login", Image: "/img/botanybuddy_ios_login.jpg" },
          { name: "Home", Image: "/img/botanybuddy_ios_home.jpg" },
          { name: "Diagnosis", Image: "/img/botanybuddy_ios_diagnosis.jpg" },
          { name: "Camera", Image: "/img/botanybuddy_ios_camera.jpg" },
          { name: "Results", Image: "/img/botanybuddy_ios_results.jpg" },
          { name: "Identity Results", Image: "/img/botanybuddy_ios_identityresults.jpg" },
          { name: "Reminder", Image: "/img/botanybuddy_ios_reminder.jpg" },
          { name: "Calendar", Image: "/img/botanybuddy_ios_calendar.jpg" },
          { name: "Profile", Image: "/img/botanybuddy_ios_profile.jpg" },
        ].map((screen, index) => (
          <div 
            key={index} 
            /* Added h-fit to keep the card tight around the wireframe image */
            className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card bg-white snap-center border border-white/10 shadow-xl h-fit"
          >
            <Image
              /* Corrected to use screen.Image from your array */
              src={screen.Image}
              alt={`iOS ${screen.name} Wireframe`}
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
    <p className="text-lg text-muted-foreground mb-12 italic">Scroll to view more →</p>

    {/* Scroll Container: Removed scrollbar-hide, added scrollbar-thin and items-start */}
    <div className="overflow-x-auto pb-10 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent snap-x snap-mandatory flex items-start active:cursor-grabbing cursor-grab">
      <div className="flex gap-6 items-start">
        {[
          { name: "Login", Image: "/img/botanybuddy_android_login.jpg" },
          { name: "Home", Image: "/img/botanybuddy_android_home.jpg" },
          { name: "Diagnose", Image: "/img/botanybuddy_android_diagnose.jpg" },
          { name: "Camera", Image: "/img/botanybuddy_android_camera.jpg" },
          { name: "Plant Diagnosis", Image: "/img/botanybuddy_android_plantdiagnosis.jpg" },
          { name: "Identity", Image: "/img/botanybuddy_android_indentity.jpg" },
          { name: "Reminder", Image: "/img/botanybuddy_android_reminder.jpg" },
          { name: "Calendar", Image: "/img/botanybuddy_android_calendar.jpg" },
          { name: "Profile", Image: "/img/botanybuddy_android_profile.jpg" },
        ].map((screen, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card bg-white snap-center border border-white/10 shadow-xl h-fit"
          >
            <Image
              /* FIXED: pointing to screen.Image directly */
              src={screen.Image}
              alt={`Android ${screen.name} Wireframe`}
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
                      src="/img/botanybuddy_logo.png"
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

          {/* Conclusion Text Section - KEEP THIS */}
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
                  Developing Botany Buddy provided valuable insights into
                  designing for a specific user need: plant care. This project
                  highlighted the importance of combining practical tools, like
                  care reminders and visual diagnosis, with user-friendly
                  features such as plant identification. I learned how to create
                  an intuitive experience that empowers users to confidently
                  care for their plants, regardless of their experience level.
                </p>
                <p>
                  The app's impact lies in its potential to make plant care more
                  accessible and enjoyable, fostering a deeper connection
                  between users and their greenery. By addressing common pain
                  points, Botany Buddy simplifies a traditionally complex task.
                </p>
              </div>
            </div>
          </motion.section>

          {/* New Project Navigation - REPLACES OLD MOTION.DIV */}
          <ProjectNavigation currentHref="/projects/botany-buddy" />

        </div> {/* Closes container */}
      </main>
      <Footer />
    </>
  )
}
