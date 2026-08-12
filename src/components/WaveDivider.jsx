import React from "react";
import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";

/**
 * Divisor decorativo entre seções — não pinta um bloco de cor sólida
 * (o gradiente contínuo já cuida da cor), apenas sugere o movimento da
 * água na fronteira entre duas "profundidades".
 *
 * variant muda levemente a forma/amplitude para que as seções não usem
 * exatamente a mesma onda.
 */
const PATHS = {
  a: "M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32V96H0Z",
  b: "M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V96H0Z",
  c: "M0,48L48,56C96,64,192,80,288,74.7C384,69,480,43,576,37.3C672,32,768,48,864,58.7C960,69,1056,75,1152,69.3C1248,64,1344,48,1392,40L1440,32V96H0Z",
};

export default function WaveDivider({ variant = "a", flip = false, opacity = 0.12, dark = false }) {
  const prefersReduced = useReducedMotion();
  const d = PATHS[variant] || PATHS.a;
  const fillFinal = dark ? `rgba(0,10,20,${opacity})` : `rgba(255,255,255,${opacity})`;

  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 h-16 sm:h-24 overflow-hidden ${
        flip ? "top-0 -scale-y-100" : "bottom-0"
      }`}
      aria-hidden="true"
    >
      {prefersReduced ? (
        <svg viewBox="0 0 1440 96" preserveAspectRatio="none" className="w-full h-full">
          <path d={d} fill={fillFinal} />
        </svg>
      ) : (
        <motion.svg
          viewBox="0 0 1440 96"
          preserveAspectRatio="none"
          className="w-full h-full"
          initial={{ x: 0 }}
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d={d} fill={fillFinal} />
        </motion.svg>
      )}
    </div>
  );
}
