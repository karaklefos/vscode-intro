"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { projects } from "@/components/projects-grid";

export default function LifeAnewProject() {
  const projectData = projects.find((p) => p.href === "/projects/life-anew");

  return (
    <>
      <CustomCursor />
      <Navigation />

      <main className="pt-32 pb-20 relative bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-medium"
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-[0.95] tracking-tight">
              Life Anew Restorative Justice
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light text-pretty leading-relaxed">
              {projectData?.description}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20 rounded-3xl overflow-hidden glass-card"
          >
            <Image
              src="/img/life_anew_behance.png"
              alt="Life Anew Restorative Justice"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Challenge Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-semibold mb-8">
                The Challenge: Operational Inefficiency and Crisis Response
                Delay
              </h3>

              <ul className="space-y-6 mb-12">
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <span className="font-semibold">
                        Operational Overhead:
                      </span>{" "}
                      Staff relied on fragmented, non-digital processes, leading
                      to increased overhead and inconsistent service delivery.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <span className="font-semibold">
                        Critical Access Barrier:
                      </span>{" "}
                      Community members lacked a simple, digital pathway to
                      access time-sensitive resources (e.g., shelter, legal
                      aid).
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <span className="font-semibold">The Opportunity:</span>{" "}
                      Design a unified, interconnected mobile ecosystem to
                      empower staff efficiency and provide direct, real-time
                      community access.
                    </p>
                  </div>
                </li>
              </ul>

              <h3 className="text-3xl md:text-4xl font-semibold mb-6">
                The Goal: Maximize organizational efficiency and accelerate the
                delivery of essential services
              </h3>
              <ul className="space-y-4 mb-12">
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <p className="text-lg leading-relaxed">
                    By eliminating complex internal bureaucratic barriers and
                    providing direct resource access.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <p className="text-lg leading-relaxed">
                    Which ensures staff can focus on high-value casework and
                    community members receive critical support instantly,
                    without navigating outdated internal systems.
                  </p>
                </li>
              </ul>

              {/* Results - highlighted section */}
              <div className="bg-accent/10 rounded-2xl p-8 md:p-10 border border-accent/20">
                <h3 className="text-3xl md:text-4xl font-semibold mb-8">
                  The Results:
                </h3>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-accent text-2xl">✓</span>
                    <p className="text-lg leading-relaxed">
                      The platform's release led to a{" "}
                      <strong>
                        reduction of 60% in time spent by staff on resource
                        coordination and documentation,
                      </strong>{" "}
                      allowing teams to focus on direct client support.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent text-2xl">✓</span>
                    <p className="text-lg leading-relaxed">
                      Alongside a{" "}
                      <strong>50% decrease in onboarding time</strong> for new
                      staff due to the centralized, easy-to-navigate resource
                      hub.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent text-2xl">✓</span>
                    <p className="text-lg leading-relaxed">
                      Prior to the app, critical resource requests often took
                      days, or even weeks, due to reliance on contacting busy,
                      understaffed leads. The new platform has{" "}
                      <strong>
                        reduced this delivery time from weeks to moments.
                      </strong>
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-accent text-2xl">✓</span>
                    <p className="text-lg leading-relaxed">
                      <strong>The Case Example:</strong> In a high-stakes case
                      involving a victims' family, the new digital workflow
                      allowed the family to access immediate crisis resources
                      and documentation that previously took days, in some cases
                      weeks, of phone tag and bureaucratic delay, proving the
                      solution's ability to facilitate real-time restorative
                      action.
                    </p>
                  </li>
                </ul>
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
              src="/img/lifeanew_mockup_desk.png"
              alt="Life Anew Desk Mockup"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* System Mapping */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">
                System Mapping: Streamlining the Critical Path
              </h2>

              <div className="mb-10 rounded-2xl overflow-hidden">
                <Image
                  src="/img/lifeanew_userflow.png"
                  alt="Life Anew User Flow"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <span className="font-semibold">
                        Key Design Decisions:
                      </span>{" "}
                      The primary goal of this employee-focused flow was to
                      de-risk the resource delivery path for staff and minimize
                      steps to reach crisis resources.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <span className="font-semibold">Staff Flow Insight:</span>{" "}
                      I prioritized placing the most frequently accessed
                      resources within a single tap of the home screen to
                      drastically reduce cognitive load and search time.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Ideation & Sketches */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">
                Ideation & Early Concepts: Low Fidelity Sketches
              </h2>

              <div className="mb-10 rounded-2xl overflow-hidden">
                <Image
                  src="/img/lifeanew_sketch.png"
                  alt="Life Anew Sketches"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      I used quick sketches to test fundamental interaction
                      patterns, specifically for the dual-interface challenge.
                      This rapid prototyping allowed me to validate the
                      information architecture before committing to high
                      fidelity.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      Initial low-fidelity concepts featured team imagery at the
                      top of the employee Home screen. Testing quickly revealed
                      this obstructed immediate access to critical workflow
                      resources. I iterated to prioritize efficiency, pushing
                      non-essential visuals to the bottom to ensure
                      zero-friction access to staff tools.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Prototypes Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-semibold mb-12">
                Prototypes: iPhone & Tablet
              </h2>

              {/* Employee Screens */}
              <h4 className="text-2xl md:text-3xl font-medium mb-8 text-muted-foreground"></h4>
              <p className="text-muted-foreground italic">
                Scroll to view more →
              </p>

              <div className="mb-12 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent active:cursor-grabbing cursor-grab">
                <div className="flex gap-6 min-w-max">
                  {[
                    { name: "Login", Image: "/img/lifeanew_login.png" },
                    { name: "Sign Up", Image: "/img/lifeanew_signup.png" },
                    { name: "Home", Image: "/img/lifeanew_home.png" },
                    { name: "Calendar", Image: "/img/lifeanew_calendar.png" },
                    {
                      name: "Calendar Date",
                      Image: "/img/lifeanew_calendar_date.png",
                    },
                    { name: "Menu", Image: "/img/lifeanew_menu.png" },
                    {
                      name: "Menu Expanded",
                      Image: "/img/lifeanew_menu_expanded.png",
                    },
                    { name: "Messages", Image: "/img/lifeanew_messages.png" },
                    {
                      name: "Message Thread",
                      Image: "/img/lifeanew_message_thread.png",
                    },
                    {
                      name: "Restorative Circles",
                      Image: "/img/lifeanew_restorativecircles.png",
                    },
                    {
                      name: "Individual Curriculum",
                      Image: "/img/lifeanew_indivcurriculum.png",
                    },
                    { name: "Program", Image: "/img/lifeanew_program.png" },
                    { name: "Resources", Image: "/img/lifeanew_resources.png" },
                    { name: "Map", Image: "/img/lifeanew_map.png" },
                  ].map((screen, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card"
                    >
                      <Image
                        src={screen.Image}
                        alt={screen.Image}
                        width={256}
                        height={550}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Tablet Screens */}
              <div className="mb-12 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent active:cursor-grabbing cursor-grab">
                <div className="flex gap-6 min-w-max">
                  {[
                    {
                      name: "Login iPad",
                      Image: "/img/lifeanew_login_ipad.png",
                    },
                    { name: "Home iPad", Image: "/img/lifeanew_home_ipad.png" },
                    {
                      name: "Calendar iPad",
                      Image: "/img/lifeanew_calendar_ipad.png",
                    },
                    {
                      name: "Calendar Date iPad",
                      Image: "/img/lifeanew_calendar_date_ipad.png",
                    },
                    {
                      name: "Messages iPad",
                      Image: "/img/lifeanew_messages_ipad.png",
                    },
                    {
                      name: "Circles iPad",
                      Image: "/img/lifeanew_circles_ipad.png",
                    },
                    {
                      name: "Student Circles iPad",
                      Image: "/img/lifeanew_studentcircles_ipad.png",
                    },
                    {
                      name: "ATX Peace iPad",
                      Image: "/img/lifeanew_atxpeace_ipad.png",
                    },
                    {
                      name: "Resources iPad",
                      Image: "/img/lifeanew_resources_ipad.png",
                    },
                    { name: "Map iPad", Image: "/img/lifeanew_map_ipad.png" },
                  ].map((screen, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-96 rounded-2xl overflow-hidden glass-card"
                    >
                      <Image
                        src={screen.Image}
                        alt={`Life Anew ${screen.name}`}
                        width={384}
                        height={512}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8 mb-12">
                <p className="text-lg leading-relaxed mb-6">
                  The design is fully responsive and optimized for use across
                  both <strong className="underline">iPhone and Tablet</strong>{" "}
                  devices. This ensures staff maintain continuous, high-fidelity
                  access to crucial tools and data while performing tasks in the
                  field.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The employee Home screen is designed to be task-forward and
                  utility-focused.
                </p>

                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="text-primary text-2xl">•</span>
                    <div>
                      <p className="text-lg leading-relaxed">
                        <strong>Actionable Data:</strong> A dedicated calendar
                        and scheduling widget provides immediate visibility into
                        daily caseloads and upcoming events, serving as the
                        primary touchpoint.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary text-2xl">•</span>
                    <div>
                      <p className="text-lg leading-relaxed">
                        <strong>Geospatial Intelligence:</strong> A criticality
                        heat map visually guides staff toward high-need areas in
                        Austin, enabling proactive resource deployment and
                        strategic field prioritization.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary text-2xl">•</span>
                    <div>
                      <p className="text-lg leading-relaxed">
                        <strong>Training & Program Oversight:</strong> A
                        dedicated module provides staff with instant access to
                        their required training resources (e.g., how to conduct
                        a community circle to deal with emotions instead of
                        resorting to violence). This centralized management view
                        eliminates fragmented paper trails and ensures staff
                        compliance and preparedness for high-stakes
                        interventions.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary text-2xl">•</span>
                    <div>
                      <p className="text-lg leading-relaxed">
                        <strong>Unified Access:</strong> All organizational
                        resources are centralized and easily navigable via a
                        persistent menu, drastically reducing search time and
                        reliance on fragmented internal systems.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-primary text-2xl">•</span>
                    <div>
                      <p className="text-lg leading-relaxed">
                        <strong>Visual Design:</strong> Adheres to principles of
                        clean, minimal UI and cognitive efficiency. This ensures
                        the interface remains clutter-free and highly legible,
                        allowing staff to maintain maximum focus on task
                        completion during high-stakes, time-sensitive
                        interventions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Community Facing Screens */}
              <h4 className="text-2xl md:text-3xl font-medium mb-8 text-muted-foreground">
                Community Facing Screens{" "}
              </h4>
              <p className="text-muted-foreground italic">
                Scroll to view more →
              </p>

              <div className="mb-12 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent active:cursor-grabbing cursor-grab">
                <div className="flex gap-6 min-w-max">
                  {[
                    {
                      name: "Home External",
                      Image: "/img/lifeanew_home_external.png",
                    },
                    {
                      name: "Newsletter",
                      Image: "/img/lifeanew_newsletter.png",
                    },
                    {
                      name: "Program External",
                      Image: "/img/lifeanew_program_external.png",
                    },
                    {
                      name: "Sign Up External",
                      Image: "/img/lifeanew_signup_external.png",
                    },
                  ].map((screen, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-64 rounded-2xl overflow-hidden glass-card"
                    >
                      <Image
                        src={screen.Image}
                        alt={`Life Anew ${screen.name}`}
                        width={256}
                        height={550}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>Mission-Driven Hierarchy:</strong> The Home screen
                      prominently features a strategic donation CTA. This
                      placement aligns the design with the organization's core
                      nonprofit mission, prioritizing immediate fundraising
                      visibility without compromising resource access.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>Empowering Engagement:</strong> An interactive
                      community calendar is displayed on the Home screen,
                      providing immediate visibility into critical resource
                      events, educational workshops, and volunteer
                      opportunities. This encourages proactive community
                      participation and outreach.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>Accessible Program Enrollment:</strong> Instead of
                      internal management tools, the interface features a
                      streamlined Program Catalog. Users can easily view
                      detailed program descriptions, eligibility requirements,
                      and complete the sign-up process digitally, removing
                      reliance on staff mediation.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent text-2xl">•</span>
                  <div>
                    <p className="text-lg leading-relaxed">
                      <strong>Visual Design:</strong> Prioritizing simplicity
                      and trust, the overall aesthetic is designed to be highly
                      accessible and reassuring, using a clear hierarchy and
                      approachable language to build immediate user trust and
                      minimize cognitive burden for individuals seeking critical
                      support.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Conclusion */}
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

      {/* Footer */}
      <Footer />
    </>
  );
}
