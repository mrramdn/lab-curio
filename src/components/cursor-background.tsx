"use client"

import { useEffect, useState } from "react"

export function CursorBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let animationFrame: number
    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }

      animationFrame = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 animated-bg"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            hsl(var(--primary) / 0.3) 0%, 
            hsl(var(--secondary) / 0.2) 25%, 
            transparent 70%)`
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
    </div>
  )
}
