"use client";

import { useEffect, useState } from "react";

// The fallback links for Life Anew so that page doesn't break
const defaultNavItems = [
  { name: "Impact", href: "#impact" },
  { name: "Challenge", href: "#challenge" },
  { name: "Architecture", href: "#architecture" },
  { name: "Strategy", href: "#strategy" },
  { name: "The Solution", href: "#solution" },
];

// We now pass "items" as a prop to make this reusable across all case studies
export function ProjectSubNav({ items = defaultNavItems }: { items?: { name: string; href: string }[] }) {
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

    items.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-[64px] z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-start md:justify-center gap-8 h-14 overflow-x-auto no-scrollbar flex-nowrap">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-black whitespace-nowrap px-1 flex items-center h-full ${
                activeSection === item.href.replace("#", "")
                  ? "text-black border-b-2 border-black"
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