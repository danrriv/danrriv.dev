"use client"

import { useState } from "react"

export default function AnimatedShapes() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-full h-64 sm:h-80 flex items-center justify-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fondo gradiente sutil */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl opacity-0 transition-opacity duration-500"
        style={{ opacity: isHovered ? 0.5 : 0 }}
      />

      {/* Círculo 1 - Superior izquierda */}
      <div
        className="absolute w-24 h-24 rounded-full bg-primary/20 blur-xl transition-all duration-700"
        style={{
          transform: isHovered ? "translate(-40px, -40px) scale(1.2)" : "translate(0, 0) scale(0.8)",
          opacity: isHovered ? 0.6 : 0.3,
        }}
      />

      {/* Cuadrado - Centro */}
      <div
        className="absolute w-20 h-20 rounded-lg bg-accent/20 blur-lg transition-all duration-700"
        style={{
          transform: isHovered ? "rotate(45deg) scale(1.3)" : "rotate(0deg) scale(0.9)",
          opacity: isHovered ? 0.5 : 0.2,
        }}
      />

      {/* Círculo 2 - Inferior derecha */}
      <div
        className="absolute w-32 h-32 rounded-full bg-primary/15 blur-2xl transition-all duration-700"
        style={{
          transform: isHovered ? "translate(50px, 50px) scale(1.1)" : "translate(0, 0) scale(0.7)",
          opacity: isHovered ? 0.4 : 0.15,
        }}
      />

      {/* Triángulo (usando CSS border trick) - Arriba derecha */}
      <div
        className="absolute w-0 h-0 transition-all duration-700"
        style={{
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: isHovered
            ? "35px solid rgba(var(--primary-rgb), 0.3)"
            : "20px solid rgba(var(--primary-rgb), 0.1)",
          transform: isHovered ? "translate(60px, -50px) scale(1.4)" : "translate(0, 0) scale(1)",
          filter: "blur(8px)",
        }}
      />

      {/* Texto central decorativo */}
      <div className="absolute z-10 text-center">
        <div
          className="text-3xl sm:text-4xl font-bold text-primary transition-all duration-700"
          style={{
            opacity: isHovered ? 1 : 0.3,
            transform: isHovered ? "scale(1)" : "scale(0.8)",
          }}
        >
          {"</>"}
        </div>
        <p
          className="text-xs sm:text-sm text-muted-foreground mt-2 transition-opacity duration-700"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          Hover to see magic
        </p>
      </div>
    </div>
  )
}
