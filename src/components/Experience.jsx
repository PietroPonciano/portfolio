import React, { useMemo } from "react";
import { motion } from "framer-motion";

import SeaweedImage from "./SeaweedImage";
import UnderwaterROV from "./Submarino";
import renderSkills from "./Skills.jsx"
/*
|--------------------------------------------------------------------------
| SKILLS
|--------------------------------------------------------------------------
*/

const skills = {
  frontend: [
    { name: "HTML", level: "Experiente" },
    { name: "CSS", level: "Experiente" },
    { name: "JavaScript", level: "Experiente" },
    { name: "Bootstrap", level: "Experiente" },
    { name: "Tailwind", level: "Experiente" },
    { name: "ReactJS", level: "Experiente" },
    { name: "UI/UX", level: "Experiente" },
  ],

  backend: [
    { name: "NodeJS", level: "Experiente" },
    { name: "PostgreSQL", level: "Experiente" },
    { name: "MySQL", level: "Experiente" },
    { name: "SQL Server", level: "Experiente" },
    { name: "Python", level: "Experiente" },
  ],
};

/*
|--------------------------------------------------------------------------
| ALGAS
|--------------------------------------------------------------------------
*/

const seaweeds = [
  {
    left: "-10px",
    bottom: "-10px",
    scale: 1.3,
    opacity: 0.75,
  },
  {
    left: "10%",
    bottom: "-5px",
    scale: 0.65,
    opacity: 0.4,
  },
  {
    left: "24%",
    bottom: "-8px",
    scale: 0.85,
    opacity: 0.5,
  },
  {
    left: "39%",
    bottom: "-5px",
    scale: 0.55,
    opacity: 0.35,
  },
  {
    right: "31%",
    bottom: "-8px",
    scale: 0.7,
    opacity: 0.4,
    flip: true,
  },
  {
    right: "16%",
    bottom: "-5px",
    scale: 0.95,
    opacity: 0.6,
    flip: true,
  },
  {
    right: "-10px",
    bottom: "-10px",
    scale: 1.3,
    opacity: 0.75,
    flip: true,
  },

  // Algas laterais
  {
    left: "-20px",
    top: "42%",
    scale: 0.55,
    opacity: 0.25,
  },
  {
    right: "-20px",
    top: "52%",
    scale: 0.6,
    opacity: 0.25,
    flip: true,
  },
];



/*
|--------------------------------------------------------------------------
| COMPONENTE PRINCIPAL
|--------------------------------------------------------------------------
*/

export default function Experience() {
  /*
  |--------------------------------------------------------------------------
  | BOLHAS
  |--------------------------------------------------------------------------
  */

  const bubbles = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, index) => ({
        left: `${4 + Math.random() * 92}%`,
        delay: Math.random() * 7,
        duration: 8 + Math.random() * 5,
        size: 6 + Math.random() * 16,
        drift: index % 2 === 0 ? 16 : -16,
      })),
    []
  );

  /*
  |--------------------------------------------------------------------------
  | PLANCTON
  |--------------------------------------------------------------------------
  */

  const particles = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, index) => ({
        left: `${Math.random() * 100}%`,
        top: `${15 + Math.random() * 80}%`,
        delay: Math.random() * 8,
        duration: 5 + Math.random() * 5,
        size: 2 + Math.random() * 3,
        drift: index % 2 === 0 ? 8 : -8,
      })),
    []
  );


  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#043b5c]
        via-[#034b70]
        to-[#023047]
        px-4
        py-24
        text-white
        sm:py-28
      "
    >


      {/* =========================================================
          ROV SUBMARINO
      ========================================================== */}

      <UnderwaterROV />

      {/* =========================================================
          BOLHAS
      ========================================================== */}

      {bubbles.map((bubble, index) => (
        <motion.div
          key={`bubble-${index}`}
          className="
            pointer-events-none
            absolute
            rounded-full
            border
            border-white/20
            bg-white/[0.08]
            blur-[0.5px]
          "
          style={{
            left: bubble.left,
            bottom: "-30px",
            width: bubble.size,
            height: bubble.size,
          }}
          animate={{
            y: [-10, -850],
            x: [0, bubble.drift, 0],
            opacity: [0, 0.5, 0],
            scale: [0.8, 1, 1.15],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =========================================================
          PLANCTON
      ========================================================== */}

      {particles.map((particle, index) => (
        <motion.div
          key={`particle-${index}`}
          className="
            pointer-events-none
            absolute
            rounded-full
            bg-cyan-100/20
          "
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, particle.drift, 0],
            opacity: [0.05, 0.35, 0.05],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =========================================================
          ALGAS
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[3]
          overflow-hidden
        "
      >
        {seaweeds.map((seaweed, index) => (
          <motion.div
            key={`seaweed-${index}`}
            className="absolute"
            style={{
              left: seaweed.left,
              right: seaweed.right,
              top: seaweed.top,
              bottom: seaweed.bottom,
            }}
            animate={{
              y: [0, -6, 0],
              rotate: [-1, 1, -1],
            }}
            transition={{
              y: {
                duration: 4 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              },
              rotate: {
                duration: 5 + index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              },
            }}
          >
            <SeaweedImage
              style={{
                position: "relative",
                left: 0,
                bottom: 0,
                width: `${6 * seaweed.scale}rem`,
                opacity: seaweed.opacity,
                transform: seaweed.flip
                  ? "scaleX(-1)"
                  : "scaleX(1)",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* =========================================================
          CONTEÚDO
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =======================================================
            CABEÇALHO
        ======================================================== */}

        <motion.div
          className="relative mx-auto max-w-2xl text-center"
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
            Experiência
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            As ferramentas que uso{" "}
            <span className="text-cyan-200">
              para construir.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-sky-200/80 sm:text-lg">
            Tecnologias que fazem parte da minha rotina para
            transformar ideias em interfaces, APIs e aplicações
            completas.
          </p>
        </motion.div>

        {/* =======================================================
            CARDS
        ======================================================== */}

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* =====================================================
              FRONTEND
          ====================================================== */}

          <motion.div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.07]
              p-7
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              backdrop-blur-md
            "
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            whileHover={{
              y: -5,
            }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/60">
                  01
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  Frontend Development
                </h3>
              </div>

              <motion.div
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-cyan-200
                  shadow-[0_0_18px_rgba(165,243,252,0.8)]
                "
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {renderSkills(skills.frontend)}
          </motion.div>

          {/* =====================================================
              BACKEND
          ====================================================== */}

          <motion.div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.07]
              p-7
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
              backdrop-blur-md
            "
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: 0.12,
              duration: 0.7,
              ease: "easeOut",
            }}
            whileHover={{
              y: -5,
            }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/60">
                  02
                </p>

                <h3 className="mt-1 text-2xl font-bold text-white">
                  Backend Development
                </h3>
              </div>

              <motion.div
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-cyan-200
                  shadow-[0_0_18px_rgba(165,243,252,0.8)]
                "
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              />
            </div>

            {renderSkills(skills.backend)}
          </motion.div>
        </div>

        {/* =======================================================
            FRASE FINAL
        ======================================================== */}

        <motion.div
          className="mx-auto mt-14 max-w-2xl text-center"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
        >
          <p className="text-sm leading-6 text-sky-200/60">
            Ferramentas são apenas parte do processo. O mais
            importante é saber quando e por que utilizá-las.
          </p>
        </motion.div>
      </div>

      {/* =========================================================
          TRANSIÇÃO INFERIOR
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-32
          w-full
          bg-gradient-to-t
          from-[#023047]
          to-transparent
        "
      />
    </section>
  );
}
