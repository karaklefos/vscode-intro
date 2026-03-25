"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Impact", href: "#impact" },
  { name: "Challenge", href: "#challenge" },
  { name: "Architecture", href: "#architecture" },
  { name: "Strategy", href: "#strategy" },
  { name: "The Solution", href: "#solution" },
];

export function ProjectSubNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-20 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 hidden md:block">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex gap-8 h-14 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-black ${
                activeSection === item.href.replace("#", "")
                  ? "text-black border-b-2 border-black h-full flex items-center"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}