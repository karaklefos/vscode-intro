"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 glass-nav"
      >
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-3xl font-semibold font-serif">
            Kara Klefos
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-lg hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-lg hover:text-primary transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-lg hover:text-primary transition-colors duration-300">
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              className="w-6 h-0.5 bg-current origin-center"
            />
            <motion.span animate={{ opacity: isOpen ? 0 : 1 }} className="w-6 h-0.5 bg-current" />
            <motion.span
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              className="w-6 h-0.5 bg-current origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 right-0 bottom-0 w-full bg-background z-40 md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-semibold hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-semibold hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="text-4xl font-semibold hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </>
  )
}
