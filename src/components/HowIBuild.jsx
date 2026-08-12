import React, { useMemo } from "react";
import { motion } from "framer-motion";
import SeaweedImage from "./SeaweedImage";

const steps = [
  {
    number: "01",
    title: "Entendo",
    description:
      "Antes de escrever código, procuro entender o problema, os objetivos e para quem a solução está sendo construída.",
    detail: "PROBLEMA • CONTEXTO • OBJETIVO",
  },
  {
    number: "02",
    title: "Estruturo",
    description:
      "Organizo a solução, defino a arquitetura e penso em como cada parte da aplicação deve se conectar.",
    detail: "ARQUITETURA • FLUXO • ESTRUTURA",
  },
  {
    number: "03",
    title: "Desenvolvo",
    description:
      "Transformo a estrutura em uma aplicação funcional, buscando código organizado, interfaces consistentes e boas experiências.",
    detail: "CÓDIGO • INTERFACE • INTEGRAÇÃO",
  },
  {
    number: "04",
    title: "Aprimoro",
    description:
      "Depois de funcionar, continuo observando, testando e refinando para tornar o produto mais rápido, claro e confiável.",
    detail: "TESTES • PERFORMANCE • EVOLUÇÃO",
  },
];

export default function HowIBuild() {
  // =========================================================
  // BOLHAS
  // =========================================================

  const bubbles = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, index) => ({
        left: `${Math.random() * 100}%`,
        size: 6 + Math.random() * 16,
        duration: 8 + Math.random() * 5,
        delay: Math.random() * 7,
        drift: index % 2 === 0 ? 15 : -15,
      })),
    []
  );

  // =========================================================
  // PARTÍCULAS
  // =========================================================

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, index) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 2 + Math.random() * 3,
        duration: 4 + Math.random() * 5,
        delay: Math.random() * 6,
      })),
    []
  );

  // =========================================================
  // FEIXES DE LUZ
  // =========================================================

  const lights = useMemo(
    () =>
      Array.from({ length: 3 }).map((_, index) => ({
        left: `${10 + Math.random() * 80}%`,
        size: 180 + Math.random() * 140,
        duration: 7 + Math.random() * 4,
        delay: index * 1.5,
      })),
    []
  );

  return (
    <section
      id="como-eu-construo"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#075985]
        via-[#064e73]
        to-[#043b5c]
        px-4
        py-24
        text-white
        sm:py-32
      "
    >
      {/* =========================================================
          PROFUNDIDADE / FEIXES DE LUZ
      ========================================================== */}

      {lights.map((light, index) => (
        <motion.div
          key={`light-${index}`}
          className="
            pointer-events-none
            absolute
            top-[-100px]
            rounded-full
            bg-cyan-200/10
            blur-3xl
          "
          style={{
            left: light.left,
            width: light.size,
            height: light.size * 2.5,
          }}
          animate={{
            y: [0, 30, 0],
            opacity: [0.08, 0.2, 0.08],
            scaleX: [1, 1.08, 1],
          }}
          transition={{
            duration: light.duration,
            repeat: Infinity,
            delay: light.delay,
            ease: "easeInOut",
          }}
        />
      ))}

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
            border-white/10
            bg-white/10
            blur-[1px]
          "
          style={{
            left: bubble.left,
            bottom: "-30px",
            width: bubble.size,
            height: bubble.size,
          }}
          animate={{
            y: [-10, -800],
            x: [0, bubble.drift, 0],
            opacity: [0, 0.35, 0],
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
          PARTÍCULAS
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
            y: [0, -12, 0],
            x: [0, index % 2 === 0 ? 6 : -6, 0],
            opacity: [0.05, 0.3, 0.05],
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

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <SeaweedImage
          style={{
            left: "-10px",
            bottom: "-5px",
            opacity: 0.55,
            transform: "scale(0.9)",
          }}
        />

        <SeaweedImage
          style={{
            left: "18%",
            bottom: "-8px",
            opacity: 0.3,
            transform: "scale(0.55)",
          }}
        />

        <SeaweedImage
          style={{
            right: "16%",
            bottom: "-8px",
            opacity: 0.35,
            transform: "scaleX(-1) scale(0.65)",
          }}
        />

        <SeaweedImage
          style={{
            right: "-10px",
            bottom: "-5px",
            opacity: 0.6,
            transform: "scaleX(-1) scale(1)",
          }}
        />

        <div className="hidden sm:block">
          <SeaweedImage
            style={{
              left: "-25px",
              top: "45%",
              opacity: 0.18,
              transform: "scale(0.45)",
            }}
          />

          <SeaweedImage
            style={{
              right: "-25px",
              top: "58%",
              opacity: 0.18,
              transform: "scaleX(-1) scale(0.5)",
            }}
          />
        </div>
      </div>

      {/* =========================================================
          CONTEÚDO
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* =======================================================
            CABEÇALHO
        ======================================================== */}

        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <p
            className="
              mb-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-cyan-100/60
            "
          >
            Como eu construo
          </p>

          <h2
            className="
              text-4xl
              font-extrabold
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            Da ideia ao{" "}
            <span className="text-cyan-100">
              produto.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-base
              leading-7
              text-sky-100/70
              sm:text-lg
            "
          >
            Cada projeto começa com uma pergunta e evolui através de
            decisões conscientes, código e melhoria contínua.
          </p>
        </motion.div>

        {/* =======================================================
            TIMELINE
        ======================================================== */}

        <div className="relative mx-auto mt-20 max-w-4xl">

          {/* =====================================================
              LINHA CENTRAL
          ====================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-cyan-200/30
              to-transparent
              md:block
            "
          />

          {/* Linha brilhante animada */}

          <motion.div
            className="
              absolute
              left-1/2
              top-0
              hidden
              h-24
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-cyan-200
              to-transparent
              md:block
            "
            animate={{
              y: ["0%", "900%"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* =====================================================
              MOBILE LINE
          ====================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-5
              top-0
              w-px
              bg-gradient-to-b
              from-transparent
              via-cyan-200/20
              to-transparent
              md:hidden
            "
          />

          {/* =====================================================
              STEPS
          ====================================================== */}

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{
                    opacity: 0,
                    x: isLeft ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                >
                  {/* =============================================
                      PONTO CENTRAL
                  ============================================== */}

                  <div
                    className="
                      absolute
                      left-5
                      top-8
                      z-20
                      h-3
                      w-3
                      -translate-x-1/2
                      rounded-full
                      border
                      border-cyan-100/60
                      bg-cyan-200
                      shadow-[0_0_18px_rgba(165,243,252,0.7)]
                      md:left-1/2
                    "
                  />

                  {/* =============================================
                      CONTEÚDO
                  ============================================== */}

                  <div
                    className={`
                      pl-12
                      md:w-[calc(50%-42px)]
                      md:pl-0
                      ${
                        isLeft
                          ? "md:mr-auto md:text-right"
                          : "md:ml-auto md:text-left"
                      }
                    `}
                  >
                    <div
                      className={`
                        group
                        relative
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.06]
                        p-6
                        backdrop-blur-md
                        transition-all
                        duration-500
                        hover:border-cyan-200/20
                        hover:bg-white/[0.09]
                        ${
                          isLeft
                            ? "md:pr-8"
                            : "md:pl-8"
                        }
                      `}
                    >
                      {/* =========================================
                          IDENTIFICAÇÃO
                      ========================================== */}

                      <div
                        className={`
                          flex
                          items-center
                          gap-3
                          ${
                            isLeft
                              ? "md:justify-end"
                              : "md:justify-start"
                          }
                        `}
                      >
                        <span
                          className="
                            text-xs
                            font-semibold
                            tracking-[0.3em]
                            text-cyan-200/50
                          "
                        >
                          ETAPA
                        </span>

                        <span
                          className="
                            text-3xl
                            font-black
                            text-white/15
                          "
                        >
                          {step.number}
                        </span>
                      </div>

                      {/* =========================================
                          TÍTULO
                      ========================================== */}

                      <h3
                        className="
                          mt-2
                          text-3xl
                          font-bold
                          text-white
                        "
                      >
                        {step.title}
                      </h3>

                      {/* =========================================
                          DESCRIÇÃO
                      ========================================== */}

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-6
                          text-sky-100/65
                        "
                      >
                        {step.description}
                      </p>

                      {/* =========================================
                          DETALHE TÉCNICO
                      ========================================== */}

                      <div
                        className={`
                          mt-5
                          text-[10px]
                          font-semibold
                          tracking-[0.18em]
                          text-cyan-200/40
                          ${
                            isLeft
                              ? "md:text-right"
                              : "md:text-left"
                          }
                        `}
                      >
                        {step.detail}
                      </div>

                      {/* =========================================
                          BRILHO
                      ========================================== */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-8
                          -top-8
                          h-24
                          w-24
                          rounded-full
                          bg-cyan-300/10
                          blur-3xl
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-100
                        "
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =======================================================
            FINAL
        ======================================================== */}

        <motion.div
          className="mx-auto mt-24 max-w-xl text-center"
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
            duration: 0.8,
          }}
        >
          <div
            className="
              mx-auto
              mb-5
              h-px
              w-20
              bg-gradient-to-r
              from-transparent
              via-cyan-200/40
              to-transparent
            "
          />

          <p className="text-sm leading-6 text-sky-100/50">
            O processo não termina quando o código funciona.
            É a partir daí que começa a próxima etapa de evolução.
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
          from-[#043b5c]
          to-transparent
        "
      />
    </section>
  );
}
