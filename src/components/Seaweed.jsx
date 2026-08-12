import React from "react";
import { motion } from "framer-motion";

/**
 * Componente de alga marinha (Seaweed) bonito e orgânico com animações fluidas.
 * Usa Framer Motion e SVG paths para um movimento subaquático realista.
 */
export default function Seaweed({ style }) {
  // Duração base para a animação de balanço principal
  const baseDuration = 6;

  return (
    <motion.div
      style={style}
      className="absolute bottom-0 pointer-events-none"
      // Animação 1: Balanço de todo o grupo (simulando a corrente)
      animate={{
        y: [0, -10, 0], // Sobe e desce suavemente
        rotate: [-3, 3, -3], // Balança para a esquerda e direita
      }}
      transition={{
        duration: baseDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width="100" // Um pouco mais largo para as folhas
        height="200"
        viewBox="0 0 100 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80" // Opacidade para o brilho suave
      >
        {/* Definição do Gradiente */}
        <defs>
          <linearGradient id="seaweed-grad" x1="0" y1="0" x2="0" y2="200">
            {/* Cores solicitadas: neon, oceano, escuro */}
            <stop offset="0%" stopColor="#00ffb3" />
            <stop offset="60%" stopColor="#00cc88" />
            <stop offset="100%" stopColor="#006644" />
          </linearGradient>
        </defs>

        {/* --- CAMINHOS DAS ALGAS --- */}

        {/* Tronco principal: mais curvo e com animação mais complexa */}
        <motion.path
          d="M50 200 C45 150 60 140 55 80 C50 30 60 10 50 0"
          stroke="url(#seaweed-grad)"
          strokeWidth="12"
          strokeLinecap="round"
          // Animação 2: Flexão do tronco (independente)
          animate={{
            d: [
              "M50 200 C45 150 60 140 55 80 C50 30 60 10 50 0", // Posição 1
              "M50 200 C50 150 55 140 58 80 C53 30 55 10 50 0", // Posição 2 (flexão direita)
              "M50 200 C40 150 65 140 52 80 C47 30 65 10 50 0", // Posição 3 (flexão esquerda)
              "M50 200 C50 150 55 140 58 80 C53 30 55 10 50 0", // De volta à Posição 2
              "M50 200 C45 150 60 140 55 80 C50 30 60 10 50 0", // De volta à Posição 1
            ],
          }}
          transition={{
            duration: baseDuration + 1, // 7s (duração diferente)
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Folha 1 (Esquerda) */}
        <motion.path
          d="M44 160 C20 140 30 100 38 80"
          stroke="url(#seaweed-grad)"
          strokeWidth="8"
          strokeLinecap="round"
          // Animação 3: Flexão da folha 1
          animate={{
            d: [
              "M44 160 C20 140 30 100 38 80",
              "M44 160 C25 142 33 102 39 80",
              "M44 160 C20 140 30 100 38 80",
            ],
          }}
          transition={{
            duration: baseDuration - 1, // 5s
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Folha 2 (Direita) */}
        <motion.path
          d="M56 130 C80 110 70 70 62 50"
          stroke="url(#seaweed-grad)"
          strokeWidth="8"
          strokeLinecap="round"
          // Animação 4: Flexão da folha 2
          animate={{
            d: [
              "M56 130 C80 110 70 70 62 50",
              "M56 130 C75 108 65 68 61 50",
              "M56 130 C80 110 70 70 62 50",
            ],
          }}
          transition={{
            duration: baseDuration + 0.5, // 6.5s
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Folha 3 (Esquerda, menor e mais alta) */}
        <motion.path
          d="M47 90 C35 80 40 50 42 40"
          stroke="url(#seaweed-grad)"
          strokeWidth="6" // Mais fina
          strokeLinecap="round"
          // Animação 5: Flexão da folha 3
          animate={{
            d: [
              "M47 90 C35 80 40 50 42 40",
              "M47 90 C38 82 42 52 43 40",
              "M47 90 C32 78 38 48 41 40",
              "M47 90 C38 82 42 52 43 40",
              "M47 90 C35 80 40 50 42 40",
            ],
          }}
          transition={{
            duration: baseDuration - 0.5, // 5.5s
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );
}