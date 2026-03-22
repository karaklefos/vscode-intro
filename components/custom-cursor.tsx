"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [isPointer, setIsPointer] = useState(false)

  const springConfig = { damping: 25, stiffness: 700 } // Snappier feel
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    // This listens for a custom "toggleCursor" event from your cards
    const handleToggle = (e: any) => setIsPointer(e.detail)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("toggleCursor", handleToggle)
    
    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("toggleCursor", handleToggle)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-primary pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isPointer ? 2.5 : 1,
        opacity: isPointer ? 0.6 : 1,
      }}
    />
  )
}