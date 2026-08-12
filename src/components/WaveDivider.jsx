import React from "react";
import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";

const PATHS = {
  a: "M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32V96H0Z",
  b: "M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V96H0Z",
  c: "M0,48L48,56C96,64,192,80,288,74.7C384,69,480,43,576,37.3C672,32,768,48,864,58.7C960,69,1056,75,1152,69.3C1248,64,1344,48,1392,40L1440,32V96H0Z",
};

export default function WaveDivider({ variant = "a", flip = false, opacity = 0.12, dark = false }) {
  const prefersReduced = useReducedMotion();
  const d = PATHS[variant] || PATHS.a;
  const fillFinal = dark ? `rgba(0,10,20,${opacity})` : `rgba(255,255,255,${opacity})`;

  // Classes para controlar o "achatamento" e a posição do SVG
  // No mobile: h-[130%] e -translate-y-3 cortam o topo vazio e sobem a onda.
  // No sm (desktop): voltam para o comportamento normal (h-full e translate-y-0).
  const svgClasses = "w-full h-[130%] -translate-y-2 sm:h-full sm:translate-y-0";

  return (
    <div
      // Mantive h-8 no mobile para a onda ser mais contida (descer menos)
      className={`pointer-events-none absolute left-0 right-0 z-10 h-8 overflow-hidden sm:h-24 ${
        flip ? "top-0 -scale-y-100" : "bottom-0"
      }`}
      aria-hidden="true"
    >
      {prefersReduced ? (
        <svg 
          viewBox="0 0 1440 96" 
          preserveAspectRatio="none" 
          className={svgClasses}
        >
          <path d={d} fill={fillFinal} />
        </svg>
      ) : (
        <motion.svg
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          className={svgClasses}
          initial={{ x: "0%" }}
          animate={{ x: ["0%", "-2%", "0%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d={d} fill={fillFinal} />
        </motion.svg>
      )}
    </div>
  );
}