import React from "react";
import { motion } from "framer-motion";
import seaweedImg from "../assets/seaweed.png";
import { seaweedByDepth } from "../lib/oceanConfig";
import useReducedMotion from "../hooks/useReducedMotion";

/**
 * Algas pertencentes ao AMBIENTE da seção — não a cards individuais.
 * Ficam atrás do conteúdo (z-0), não recebem interação (pointer-events: none)
 * e variam de escala/opacidade/balanço conforme a profundidade.
 *
 * section: chave de src/lib/oceanConfig.js -> seaweedByDepth
 */
export default function SeaweedField({ section, className = "" }) {
  const prefersReduced = useReducedMotion();
  const items = seaweedByDepth[section] || [];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`} aria-hidden="true">
      {items.map((item, i) => {
        const flipX = item.side === "right" ? -1 : 1;
        const baseStyle = {
          left: item.left,
          bottom: 0,
          opacity: item.opacity,
          transformOrigin: "bottom",
          width: "10rem",
        };

        if (prefersReduced) {
          return (
            <img
              key={i}
              src={seaweedImg}
              alt=""
              className="absolute"
              style={{ ...baseStyle, transform: `scaleX(${flipX}) scale(${item.scale})` }}
            />
          );
        }

        return (
          <motion.img
            key={i}
            src={seaweedImg}
            alt=""
            className="absolute"
            style={baseStyle}
            animate={{ rotate: [0, 2, -1, 1, 0], scale: item.scale, scaleX: flipX }}
            transition={{
              rotate: {
                duration: 6 + i * 0.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              },
            }}
          />
        );
      })}
    </div>
  );
}
