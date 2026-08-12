import React from "react";
import { motion } from "framer-motion";
import { bubblesByDepth, particlesByDepth } from "../lib/oceanConfig";
import useReducedMotion from "../hooks/useReducedMotion";

/**
 * Camada de bolhas + partículas para uma seção específica.
 * depth: "surface" | "shallow" | "mid" | "deep" | "seafloor"
 */
export default function Bubbles({ depth = "shallow", className = "" }) {
  const prefersReduced = useReducedMotion();
  const bubbles = bubblesByDepth[depth] || [];
  const particles = particlesByDepth[depth] || [];

  // Com movimento reduzido: mantém só algumas bolhas estáticas e discretas,
  // sem animação contínua — preserva a estética sem o movimento.
  if (prefersReduced) {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
        {bubbles.slice(0, 4).map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              bottom: "10%",
              opacity: b.opacity * 0.6,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {bubbles.map((b, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute rounded-full bg-white/80 blur-[0.5px]"
          style={{ left: b.left, width: b.size, height: b.size, bottom: -40 }}
          animate={{ y: [-10, -520], opacity: [0, b.opacity, 0], x: [0, 8, -6, 0] }}
          transition={{ duration: b.duration, repeat: Infinity, delay: b.delay, ease: "easeInOut" }}
        />
      ))}
      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-white/60"
          style={{ left: p.left, width: p.size, height: p.size, bottom: -20 }}
          animate={{ y: [-10, -260], opacity: [0, 0.5, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
}
