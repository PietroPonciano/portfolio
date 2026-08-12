import React, { useMemo } from "react";
import { motion } from "framer-motion";
import SeaweedImage from "./SeaweedImage";

const seaweeds = [
  {
    left: "0%",
    bottom: "0%",
    scale: 1.1,
    opacity: 0.8,
  },
  {
    left: "12%",
    bottom: "3%",
    scale: 0.6,
    opacity: 0.45,
  },
  {
    left: "24%",
    bottom: "0%",
    scale: 0.8,
    opacity: 0.55,
  },
  {
    left: "38%",
    bottom: "2%",
    scale: 0.5,
    opacity: 0.4,
  },
  {
    right: "30%",
    bottom: "0%",
    scale: 0.7,
    opacity: 0.5,
    flip: true,
  },
  {
    right: "17%",
    bottom: "2%",
    scale: 1,
    opacity: 0.7,
    flip: true,
  },
  {
    right: "3%",
    bottom: "0%",
    scale: 1.15,
    opacity: 0.8,
    flip: true,
  },
  {
    left: "-15px",
    top: "38%",
    scale: 0.5,
    opacity: 0.3,
  },
  {
    right: "-15px",
    top: "45%",
    scale: 0.55,
    opacity: 0.3,
    flip: true,
  },
];

const services = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "INTERFACE SYSTEM",
    description:
      "Transformo ideias e layouts em interfaces modernas, responsivas e agradáveis de usar.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],

    // Baú 1:
    // Madeira clara, extremamente desbotada e rachadura central.
    crate: {
      rotation: -1.4,
      wood: "#655b4b",
      darkWood: "#40392f",
      metal: "#57534b",
      moss: "#42534a",
      plankLines: ["24%", "49%", "73%"],
      cracks: [
        {
          left: "24%",
          top: "15%",
          height: "92px",
          rotate: 7,
        },
        {
          left: "25%",
          top: "40%",
          height: "36px",
          rotate: -14,
        },
        {
          left: "68%",
          top: "63%",
          height: "65px",
          rotate: 9,
        },
      ],
      stains: [
        {
          left: "8%",
          top: "18%",
          width: 100,
          height: 55,
          rotate: -12,
        },
        {
          right: "7%",
          bottom: "12%",
          width: 75,
          height: 90,
          rotate: 15,
        },
      ],
      mossPositions: ["left", "bottom-right"],
    },
  },

  {
    number: "02",
    title: "Backend",
    subtitle: "CORE SYSTEM",
    description:
      "Construo APIs e regras de negócio para transformar interfaces em aplicações completas.",
    technologies: ["Node.js", "Express", "REST API", "JWT"],

    // Baú 2:
    // Muito mais escuro, ferrugem pesada e tampa deformada.
    crate: {
      rotation: 0.7,
      wood: "#484039",
      darkWood: "#27231f",
      metal: "#494640",
      moss: "#30443c",
      plankLines: ["18%", "42%", "68%", "87%"],
      cracks: [
        {
          left: "76%",
          top: "12%",
          height: "75px",
          rotate: -9,
        },
        {
          left: "61%",
          top: "47%",
          height: "105px",
          rotate: 17,
        },
        {
          left: "17%",
          top: "68%",
          height: "35px",
          rotate: -20,
        },
      ],
      stains: [
        {
          left: "2%",
          top: "43%",
          width: 130,
          height: 65,
          rotate: 8,
        },
        {
          right: "3%",
          bottom: "5%",
          width: 110,
          height: 70,
          rotate: -20,
        },
        {
          left: "35%",
          top: "4%",
          width: 60,
          height: 80,
          rotate: 20,
        },
      ],
      mossPositions: ["top-right", "bottom-left"],
    },
  },

  {
    number: "03",
    title: "Dados & Integrações",
    subtitle: "DATA SYSTEM",
    description:
      "Estruturo dados e conecto diferentes partes da aplicação para manter tudo organizado e funcional.",
    technologies: ["PostgreSQL", "MySQL", "Sequelize", "SQL"],

    // Baú 3:
    // Mais destruído fisicamente, tábuas tortas e vegetação marinha.
    crate: {
      rotation: 1.8,
      wood: "#5a5144",
      darkWood: "#302a23",
      metal: "#4d4a43",
      moss: "#344b40",
      plankLines: ["29%", "56%", "81%"],
      cracks: [
        {
          left: "13%",
          top: "12%",
          height: "120px",
          rotate: -11,
        },
        {
          left: "47%",
          top: "27%",
          height: "45px",
          rotate: 19,
        },
        {
          left: "79%",
          top: "55%",
          height: "82px",
          rotate: -15,
        },
        {
          left: "31%",
          top: "75%",
          height: "30px",
          rotate: 8,
        },
      ],
      stains: [
        {
          left: "17%",
          top: "4%",
          width: 80,
          height: 110,
          rotate: 5,
        },
        {
          right: "14%",
          top: "31%",
          width: 95,
          height: 50,
          rotate: -10,
        },
      ],
      mossPositions: ["left-bottom", "right-middle", "top-left"],
    },
  },
];

export default function WhatIDo() {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        left: `${Math.random() * 96}%`,
        delay: Math.random() * 6,
        duration: 7 + Math.random() * 4,
        size: 7 + Math.random() * 18,
      })),
    []
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 8,
        duration: 5 + Math.random() * 5,
        size: 2 + Math.random() * 4,
      })),
    []
  );

  const lights = useMemo(
    () =>
      Array.from({ length: 3 }).map((_, i) => ({
        left: `${15 + Math.random() * 70}%`,
        delay: Math.random() * 5,
        duration: 6 + Math.random() * 4,
        size: 250 + Math.random() * 100,
      })),
    []
  );

  return (
    <section
      id="o-que-faco"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#00b4d8]
        via-[#0582b8]
        to-[#075985]
        px-4
        py-24
        text-white
        sm:py-28
      "
    >
      {/* =========================================================
          LUZES DA SUPERFÍCIE
      ========================================================== */}

      {lights.map((light, index) => (
        <motion.div
          key={`light-${index}`}
          className="
            pointer-events-none
            absolute
            rounded-full
            bg-white/10
            blur-3xl
          "
          style={{
            left: light.left,
            top: -120,
            width: light.size,
            height: light.size,
          }}
          animate={{
            y: [0, 30, 0],
            opacity: [0.06, 0.14, 0.06],
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
            border-white/15
            bg-white/10
          "
          style={{
            left: bubble.left,
            bottom: -40,
            width: bubble.size,
            height: bubble.size,
          }}
          animate={{
            y: [-20, -700],
            x: [0, index % 2 === 0 ? 18 : -18, 0],
            opacity: [0, 0.35, 0],
            scale: [0.8, 1, 1.1],
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
            bg-white/15
          "
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, index % 2 === 0 ? 8 : -8, 0],
            opacity: [0.03, 0.2, 0.03],
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
          ALGAS DO FUNDO
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[2]">
        {seaweeds.map((seaweed, index) => (
          <SeaweedImage
            key={`seaweed-${index}`}
            style={{
              left: seaweed.left,
              right: seaweed.right,
              top: seaweed.top,
              bottom: seaweed.bottom,
              opacity: seaweed.opacity,
              transform: `${
                seaweed.flip ? "scaleX(-1) " : ""
              }scale(${seaweed.scale})`,
            }}
          />
        ))}
      </div>

      {/* =========================================================
          CONTEÚDO
      ========================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =========================================================
            CABEÇALHO
        ========================================================== */}

        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
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
              text-cyan-100/75
            "
          >
            O que eu faço
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
            Transformo ideias em{" "}
            <span className="text-cyan-100">
              experiências digitais.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              text-base
              leading-7
              text-sky-100/85
              sm:text-lg
            "
          >
            Trabalho em diferentes partes de uma aplicação, do primeiro
            elemento da interface até a estrutura que faz tudo funcionar
            por trás dela.
          </p>
        </motion.div>

        {/* =========================================================
            BAÚS
        ========================================================== */}

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {services.map((service, index) => {
            const crate = service.crate;

            return (
              <motion.article
                key={service.number}
                className="relative"
                initial={{
                  opacity: 0,
                  y: 50,
                  rotate: crate.rotation,
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
                  delay: index * 0.15,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                animate={{
                  y: [0, -3, 0],
                }}
                whileHover={{
                  y: -8,
                  rotate: crate.rotation * 1.4,
                }}
              >
                {/* =================================================
                    SOMBRA DO OBJETO
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-7
                    left-[5%]
                    h-12
                    w-[90%]
                    rounded-full
                    bg-[#001d2b]/55
                    blur-xl
                  "
                />

                {/* =================================================
                    CORPO DO BAÚ
                ================================================== */}

                <div
                  className="
                    group
                    relative
                    min-h-[405px]
                    overflow-hidden
                    rounded-[4px]
                    border
                    border-black/30
                    shadow-[0_20px_45px_rgba(0,20,25,0.5)]
                  "
                  style={{
                    backgroundColor: crate.wood,
                  }}
                >
                  {/* =================================================
                      CAMADAS IRREGULARES DE MADEIRA
                  ================================================== */}

                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `
                        linear-gradient(
                          97deg,
                          ${crate.darkWood}aa 0%,
                          transparent 11%,
                          ${crate.darkWood}55 21%,
                          transparent 35%,
                          ${crate.darkWood}44 49%,
                          transparent 63%,
                          ${crate.darkWood}66 82%,
                          transparent 94%
                        ),
                        linear-gradient(
                          180deg,
                          rgba(255,255,255,.04),
                          transparent 28%,
                          rgba(0,0,0,.3)
                        )
                      `,
                    }}
                  />

                  {/* =================================================
                      TÁBUAS
                  ================================================== */}

                  {crate.plankLines.map((position, plankIndex) => (
                    <div
                      key={plankIndex}
                      className="pointer-events-none absolute left-[-5%] w-[110%]"
                      style={{
                        top: position,
                        height: plankIndex % 2 === 0 ? 3 : 2,
                        transform: `rotate(${
                          plankIndex % 2 === 0 ? -0.35 : 0.25
                        }deg)`,
                        backgroundColor: `${crate.darkWood}99`,
                      }}
                    />
                  ))}

                  {/* =================================================
                      MANCHAS DE UMIDADE
                  ================================================== */}

                  {crate.stains.map((stain, stainIndex) => (
                    <div
                      key={stainIndex}
                      className="
                        pointer-events-none
                        absolute
                        rounded-full
                        blur-xl
                      "
                      style={{
                        left: stain.left,
                        right: stain.right,
                        top: stain.top,
                        bottom: stain.bottom,
                        width: stain.width,
                        height: stain.height,
                        transform: `rotate(${stain.rotate}deg)`,
                        background:
                          stainIndex % 2 === 0
                            ? "rgba(27,31,28,.28)"
                            : "rgba(178,164,135,.10)",
                      }}
                    />
                  ))}

                  {/* =================================================
                      RACHADURAS
                  ================================================== */}

                  {crate.cracks.map((crack, crackIndex) => (
                    <React.Fragment key={crackIndex}>
                      <div
                        className="
                          pointer-events-none
                          absolute
                          w-[2px]
                        "
                        style={{
                          left: crack.left,
                          top: crack.top,
                          height: crack.height,
                          transform: `rotate(${crack.rotate}deg)`,
                          background: `linear-gradient(
                            to bottom,
                            transparent,
                            ${crate.darkWood},
                            rgba(15,12,9,.7),
                            transparent
                          )`,
                        }}
                      />

                      {crackIndex % 2 === 0 && (
                        <div
                          className="
                            pointer-events-none
                            absolute
                            w-[1px]
                            opacity-70
                          "
                          style={{
                            left: `calc(${crack.left} + 3px)`,
                            top: `calc(${crack.top} + 18px)`,
                            height: `${Math.max(
                              18,
                              parseInt(crack.height) * 0.35
                            )}px`,
                            transform: `rotate(${crack.rotate - 16}deg)`,
                            backgroundColor: crate.darkWood,
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}

                  {/* =================================================
                      FERRO LATERAL ESQUERDO
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-3%]
                      left-[7%]
                      top-[-2%]
                      w-[11px]
                      border-x
                      bg-black/20
                    "
                    style={{
                      borderColor: `${crate.metal}cc`,
                    }}
                  />

                  {/* =================================================
                      FERRO LATERAL DIREITO
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-[-4%]
                      right-[8%]
                      top-[1%]
                      w-[9px]
                      border-x
                      bg-black/25
                    "
                    style={{
                      borderColor: `${crate.metal}aa`,
                    }}
                  />

                  {/* =================================================
                      TAMPA DESGASTADA
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -top-[5px]
                      left-[-3%]
                      h-[40px]
                      w-[106%]
                      border
                      shadow-[0_7px_12px_rgba(0,0,0,.4)]
                    "
                    style={{
                      backgroundColor: crate.darkWood,
                      borderColor: `${crate.metal}99`,
                      transform:
                        index === 0
                          ? "rotate(-0.8deg)"
                          : index === 1
                          ? "rotate(1.7deg)"
                          : "rotate(-1.5deg)",
                    }}
                  >
                    {/* Tábuas da tampa */}

                    <div
                      className="
                        absolute
                        left-[8%]
                        top-[12px]
                        h-[3px]
                        w-[84%]
                        bg-black/35
                      "
                    />

                    <div
                      className="
                        absolute
                        left-[17%]
                        top-[26px]
                        h-[2px]
                        w-[66%]
                        bg-black/25
                      "
                    />
                  </div>

                  {/* =================================================
                      FERRAGEM CENTRAL
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-1/2
                      top-[-1px]
                      z-20
                      h-[48px]
                      w-[27px]
                      -translate-x-1/2
                      border-x
                      border-b
                      bg-black/25
                    "
                    style={{
                      borderColor: `${crate.metal}`,
                    }}
                  >
                    <div
                      className="
                        absolute
                        left-1/2
                        top-[22px]
                        h-[7px]
                        w-[7px]
                        -translate-x-1/2
                        rounded-full
                        border
                        bg-[#25231f]
                      "
                      style={{
                        borderColor: `${crate.metal}`,
                      }}
                    />
                  </div>

                  {/* =================================================
                      PREGOS IRREGULARES
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-[3%]
                      top-[8%]
                      h-[6px]
                      w-[6px]
                      rounded-full
                      bg-[#282622]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-[4%]
                      top-[31%]
                      h-[7px]
                      w-[7px]
                      rounded-full
                      border
                      border-[#777064]/60
                      bg-[#262522]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-[15%]
                      bottom-[15%]
                      h-[6px]
                      w-[6px]
                      rounded-full
                      border
                      border-[#71695e]/50
                      bg-[#272521]
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-[14%]
                      bottom-[27%]
                      h-[5px]
                      w-[5px]
                      rounded-full
                      bg-[#292724]
                    "
                  />

                  {/* =================================================
                      LIMO INDIVIDUAL
                  ================================================== */}

                  {crate.mossPositions.includes("left") && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-[-3px]
                        left-0
                        h-20
                        w-10
                        rounded-tr-full
                        bg-[#30483e]/60
                        blur-[1px]
                      "
                    />
                  )}

                  {crate.mossPositions.includes("bottom-right") && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        right-3
                        h-24
                        w-12
                        rounded-tl-full
                        bg-[#2f493f]/60
                        blur-[1px]
                      "
                    />
                  )}

                  {crate.mossPositions.includes("top-right") && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        right-0
                        top-0
                        h-16
                        w-12
                        rounded-bl-full
                        bg-[#30463e]/55
                        blur-[2px]
                      "
                    />
                  )}

                  {crate.mossPositions.includes("bottom-left") && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-2
                        h-14
                        w-16
                        rounded-tr-full
                        bg-[#2c463c]/65
                        blur-[1px]
                      "
                    />
                  )}

                  {crate.mossPositions.includes("right-middle") && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        right-0
                        top-[47%]
                        h-24
                        w-9
                        rounded-l-full
                        bg-[#30483e]/55
                        blur-[2px]
                      "
                    />
                  )}

                  {crate.mossPositions.includes("top-left") && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        left-1
                        top-0
                        h-12
                        w-20
                        rounded-br-full
                        bg-[#354b42]/50
                        blur-[2px]
                      "
                    />
                  )}

                  {/* =================================================
                      VEGETAÇÃO PRESA
                  ================================================== */}

                  {index === 2 && (
                    <>
                      <div
                        className="
                          pointer-events-none
                          absolute
                          bottom-0
                          left-[4%]
                          h-24
                          w-[3px]
                          rotate-[-13deg]
                          rounded-full
                          bg-[#29443a]/80
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          bottom-0
                          left-[7%]
                          h-16
                          w-[3px]
                          rotate-[10deg]
                          rounded-full
                          bg-[#355148]/70
                        "
                      />

                      <div
                        className="
                          pointer-events-none
                          absolute
                          right-[12%]
                          bottom-0
                          h-20
                          w-[3px]
                          rotate-[18deg]
                          rounded-full
                          bg-[#2e493e]/75
                        "
                      />
                    </>
                  )}

                  {/* =================================================
                      ÁREA INTERNA ESCURA
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-b
                      from-transparent
                      via-transparent
                      to-black/25
                    "
                  />

                  {/* =================================================
                      CONTEÚDO
                  ================================================== */}

                  <div className="relative z-10 p-7 pt-[76px]">
                    <span
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#d4c4a7]/45
                      "
                    >
                      {service.subtitle}
                    </span>

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-bold
                        tracking-tight
                        text-[#e0d2ba]
                      "
                    >
                      {service.title}
                    </h3>

                    <div
                      className="
                        mt-4
                        h-px
                        w-14
                        bg-[#c0ae91]/20
                      "
                    />

                    <p
                      className="
                        mt-5
                        min-h-[84px]
                        text-sm
                        leading-6
                        text-[#cfc1aa]/70
                      "
                    >
                      {service.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-[2px]
                            border
                            border-[#b0a087]/20
                            bg-black/20
                            px-3
                            py-1.5
                            text-xs
                            text-[#cfc1aa]/75
                          "
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      DESGASTE NAS BORDAS
                  ================================================== */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-0
                      h-full
                      w-[7px]
                      bg-gradient-to-b
                      from-black/35
                      via-transparent
                      to-black/45
                    "
                  />

                  <div
                    className="
                      pointer-events-none
                      absolute
                      right-0
                      top-0
                      h-full
                      w-[8px]
                      bg-gradient-to-b
                      from-black/25
                      via-transparent
                      to-black/50
                    "
                  />

                  {/* =================================================
                      PEQUENAS BOLHAS
                  ================================================== */}

                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      right-[-5px]
                      bottom-[25%]
                      h-2
                      w-2
                      rounded-full
                      border
                      border-white/15
                      bg-white/10
                    "
                    animate={{
                      y: [0, -25, 0],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      delay: index * 0.6,
                    }}
                  />

                  <motion.div
                    className="
                      pointer-events-none
                      absolute
                      left-[-4px]
                      bottom-[32%]
                      h-1
                      w-1
                      rounded-full
                      bg-white/15
                    "
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 0.25, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.8,
                    }}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =========================================================
            FRASE FINAL
        ========================================================== */}

        <motion.div
          className="mx-auto mt-16 max-w-2xl text-center"
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
            delay: 0.3,
            duration: 0.7,
          }}
        >
          <p className="text-sm leading-6 text-sky-100/70">
            Mais do que escolher tecnologias, gosto de entender o problema e
            encontrar uma forma simples de transformá-lo em produto.
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
          h-24
          w-full
          bg-gradient-to-t
          from-[#075985]
          to-transparent
        "
      />
    </section>
  );
}