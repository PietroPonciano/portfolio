import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SeaweedImage from "./SeaweedImage";

const projects = [
{
  id: 1,
  number: "01",
  title: "Vida Equilibrada",
  category: "Web & Mobile",
  shortDesc:
    "Aplicação de gestão financeira pessoal desenvolvida para transformar o controle de gastos em uma experiência simples, visual e acessível.",
  description:
    "O Vida Equilibrada é uma plataforma de gestão financeira pessoal com dashboard, controle de receitas e despesas, gráficos e relatórios. O projeto também possui uma aplicação mobile, com uma API própria responsável pela comunicação entre as diferentes interfaces.",
  technologies: [
    "React",
    "React Native",
    "Node.js",
    "Express",
    "Sequelize",
    "PostgreSQL",
    "JavaScript",
    "Expo",
  ],
  features: [
    "Dashboard financeiro",
    "Controle de receitas e despesas",
    "Gráficos e indicadores",
    "Relatórios financeiros",
    "Aplicação web e mobile",
    "API REST",
  ],
  image: "/images/vidaEquilibrada.jpeg",
  link: "https://vida-equilibrada.pietroponciano.com",
},

{
  id: 2,
  number: "02",
  title: "E-comercio",
  category: "Full Stack",
  shortDesc:
    "Plataforma de comércio eletrônico desenvolvida para explorar o fluxo completo de produtos, carrinho e pedidos.",
  description:
    "Uma aplicação de comércio eletrônico com foco nos principais fluxos de uma plataforma de vendas. O projeto conta com gerenciamento de produtos, carrinho de compras, processamento de pedidos e painel administrativo para gerenciamento da loja.",
  technologies: [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "Sequelize",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  features: [
    "Catálogo de produtos",
    "Carrinho de compras",
    "Gerenciamento de pedidos",
    "Cadastro e edição de produtos",
    "Painel administrativo",
    "API REST",
  ],
  image: "/images/indice.jpeg",
  link: "https://github.com/PietroPonciano/e-comercio",
},

{
  id: 3,
  number: "03",
  title: "OrderFlow",
  category: "SaaS & Automação",
  shortDesc:
    "Plataforma para automatizar pedidos pelo WhatsApp e centralizar produtos, clientes e pedidos em um painel administrativo.",
  description:
    "O OrderFlow é uma plataforma SaaS desenvolvida para automatizar o processo de pedidos através da WhatsApp Cloud API. O sistema utiliza um fluxo conversacional baseado em estados para conduzir o cliente desde a escolha dos produtos até a confirmação do pedido, enquanto o painel administrativo permite acompanhar pedidos, produtos, clientes e métricas da operação.",
  technologies: [
    "React",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "Sequelize",
    "PostgreSQL",
    "WhatsApp Cloud API",
    "JWT",
  ],
  features: [
    "Automação de pedidos pelo WhatsApp",
    "Fluxo conversacional por estados",
    "Painel administrativo",
    "Gestão de produtos e categorias",
    "Acompanhamento de pedidos",
    "Autenticação com JWT",
    "Integração com WhatsApp Cloud API",
  ],
  image: "/images/orderflow.jpeg",
  link: "https://github.com/PietroPonciano/orderflow",
},

{
  id: 4,
  number: "04",
  title: "API Bootstrap",
  category: "Backend & Developer Tools",
  shortDesc:
    "Aplicação desktop criada para acelerar a criação e configuração inicial de projetos backend em Node.js.",
  description:
    "O API Bootstrap é uma ferramenta desktop desenvolvida para automatizar o processo de criação de APIs Node.js. A aplicação permite iniciar novos projetos a partir de templates pré-configurados, reduzindo tarefas repetitivas de configuração e proporcionando uma estrutura inicial organizada para o desenvolvimento.",
  technologies: [
    "Electron",
    "React",
    "JavaScript",
    "Node.js",
    "Express",
  ],
  features: [
    "Criação automatizada de projetos",
    "Templates de API",
    "Configuração inicial automática",
    "Estrutura de projeto padronizada",
    "Interface desktop",
    "Automação de tarefas repetitivas",
  ],
  image: "/images/api-bootstrap.png",
  link: "https://github.com/PietroPonciano/api-bootstrap",
},

];

const seaweeds = [
  {
    left: "-20px",
    bottom: "-10px",
    scale: 1.4,
    opacity: 0.7,
  },
  {
    left: "12%",
    bottom: "-12px",
    scale: 0.7,
    opacity: 0.35,
  },
  {
    left: "27%",
    bottom: "-10px",
    scale: 0.9,
    opacity: 0.45,
  },
  {
    right: "27%",
    bottom: "-10px",
    scale: 0.65,
    opacity: 0.35,
    flip: true,
  },
  {
    right: "12%",
    bottom: "-12px",
    scale: 0.85,
    opacity: 0.45,
    flip: true,
  },
  {
    right: "-20px",
    bottom: "-10px",
    scale: 1.4,
    opacity: 0.7,
    flip: true,
  },
];

export default function Projects() {
  const [modalData, setModalData] = useState(null);

  /*
   * ============================================================
   * ELEMENTOS DO OCEANO
   * ============================================================
   */

  const bubbles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, index) => ({
        left: `${4 + Math.random() * 92}%`,
        delay: Math.random() * 8,
        duration: 9 + Math.random() * 5,
        size: 5 + Math.random() * 15,
        drift: index % 2 === 0 ? 18 : -18,
      })),
    []
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 35 }).map((_, index) => ({
        left: `${Math.random() * 100}%`,
        top: `${15 + Math.random() * 75}%`,
        delay: Math.random() * 7,
        duration: 5 + Math.random() * 5,
        size: 1.5 + Math.random() * 3,
        drift: index % 2 === 0 ? 7 : -7,
      })),
    []
  );

  const lights = useMemo(
    () =>
      Array.from({ length: 3 }).map((_, index) => ({
        left: `${15 + Math.random() * 70}%`,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        width: 180 + Math.random() * 180,
      })),
    []
  );

  /*
   * ============================================================
   * RENDER
   * ============================================================
   */

  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#023047]
        via-[#022f4a]
        to-[#001a33]
        px-4
        py-24
        text-white
        sm:py-28
      "
    >
      {/* ========================================================
          PROFUNDIDADE
      ======================================================== */}



      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(14,116,144,0.12),transparent_35%)]" />

      {/* ========================================================
          FEIXES DE LUZ
      ======================================================== */}

      {lights.map((light, index) => (
        <motion.div
          key={`light-${index}`}
          className="
            pointer-events-none
            absolute
            rounded-full
            bg-cyan-200/[0.05]
            blur-3xl
          "
          style={{
            left: light.left,
            top: "-100px",
            width: light.width,
            height: light.width * 2.2,
          }}
          animate={{
            y: [0, 35, 0],
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: light.duration,
            repeat: Infinity,
            delay: light.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ========================================================
          BOLHAS
      ======================================================== */}

      {bubbles.map((bubble, index) => (
        <motion.div
          key={`bubble-${index}`}
          className="
            pointer-events-none
            absolute
            rounded-full
            border
            border-white/15
            bg-white/[0.04]
          "
          style={{
            left: bubble.left,
            bottom: "-40px",
            width: bubble.size,
            height: bubble.size,
          }}
          animate={{
            y: [-10, -850],
            x: [0, bubble.drift, 0],
            opacity: [0, 0.45, 0],
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

      {/* ========================================================
          PLANCTON
      ======================================================== */}

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
            x: [0, particle.drift, 0],
            y: [0, -15, 0],
            opacity: [0.03, 0.25, 0.03],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ========================================================
          ALGAS
      ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
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
              bottom: seaweed.bottom,
              opacity: seaweed.opacity,
            }}
            animate={{
              y: [0, -7, 0],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 4 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
          >
            <SeaweedImage
              style={{
                position: "relative",
                left: 0,
                bottom: 0,
                width: `${5.5 * seaweed.scale}rem`,
                opacity: seaweed.opacity,
                transform: seaweed.flip
                  ? "scaleX(-1)"
                  : "scaleX(1)",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* ========================================================
          CONTEÚDO
      ======================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ======================================================
            CABEÇALHO
        ====================================================== */}

        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200/65">
            Projetos
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            O que já{" "}
            <span className="text-cyan-200">
              construí.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-sky-200/75 sm:text-lg">
            Alguns dos projetos que fazem parte da minha jornada,
            explorando diferentes problemas, tecnologias e formas de
            construir experiências digitais.
          </p>
        </motion.div>

        {/* ======================================================
            LINHA DE EXPLORAÇÃO
        ====================================================== */}

        <div className="relative mt-16">
          {/* Linha central decorativa */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-cyan-200/15
              to-transparent
              md:block
            "
          />

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => {
              const isRight = index % 2 !== 0;

              return (
                <motion.article
                  key={project.id}
                  className={`
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.055]
                    shadow-[0_25px_80px_rgba(0,0,0,0.18)]
                    backdrop-blur-md
                    ${
                      isRight
                        ? "md:translate-y-16"
                        : ""
                    }
                  `}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: isRight ? 64 : 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: isRight ? 58 : -6,
                  }}
                >
                  {/* Luz interna */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-cyan-300/[0.08]
                      blur-3xl
                      transition-all
                      duration-700
                      group-hover:bg-cyan-200/[0.14]
                    "
                  />

                  {/* ==================================================
                      IMAGEM
                  ================================================== */}

                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-60
                        w-full
                        object-cover
                        opacity-75
                        transition-all
                        duration-700
                        group-hover:scale-[1.04]
                        group-hover:opacity-100
                      "
                    />

                    {/* Overlay */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#022f4a]
                        via-transparent
                        to-transparent
                      "
                    />

                    {/* Número */}

                    <div
                      className="
                        absolute
                        left-5
                        top-5
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/15
                        bg-[#023e5f]/70
                        text-xs
                        font-bold
                        text-cyan-100
                        backdrop-blur-md
                      "
                    >
                      {project.number}
                    </div>

                    
                  </div>

                  {/* ==================================================
                      CONTEÚDO
                  ================================================== */}

                  <div className="relative p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/55">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-sky-200/70">
                      {project.shortDesc}
                    </p>

                    {/* Tecnologias */}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies
                        .slice(0, 4)
                        .map((technology) => (
                          <span
                            key={technology}
                            className="
                              rounded-full
                              border
                              border-white/10
                              bg-white/[0.06]
                              px-3
                              py-1.5
                              text-[11px]
                              font-medium
                              text-cyan-50/80
                            "
                          >
                            {technology}
                          </span>
                        ))}

                      {project.technologies.length > 4 && (
                        <span
                          className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-3
                            py-1.5
                            text-[11px]
                            text-sky-200/50
                          "
                        >
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Ação */}

                    <button
                      onClick={() => setModalData(project)}
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-cyan-200
                        transition-all
                        duration-300
                        hover:gap-3
                        hover:text-cyan-100
                      "
                    >
                      Explorar projeto

                      <span>→</span>
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ======================================================
            FRASE FINAL
        ====================================================== */}

        <motion.div
          className="mx-auto mt-28 max-w-2xl text-center"
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
            duration: 0.7,
          }}
        >
          <div className="mx-auto mb-5 h-px w-16 bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />

          <p className="text-sm leading-6 text-sky-200/55">
            Cada projeto representa uma parte diferente da minha
            evolução como desenvolvedor.
          </p>
        </motion.div>
      </div>

      {/* ========================================================
          MODAL
      ======================================================== */}

      <AnimatePresence>
        {modalData && (
          <motion.div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-[#00101f]/80
              p-4
              backdrop-blur-md
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalData(null)}
          >
            <motion.div
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-2xl
                overflow-y-auto
                rounded-3xl
                border
                border-white/10
                bg-[#022b44]
                shadow-[0_30px_100px_rgba(0,0,0,0.45)]
              "
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* Imagem */}

              <div className="relative h-56 overflow-hidden">
                <img
                  src={modalData.image}
                  alt={modalData.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#022b44] to-transparent" />

                {/* Fechar */}

                <button
                  onClick={() => setModalData(null)}
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-black/20
                    text-lg
                    text-white/80
                    backdrop-blur-md
                    transition
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  ×
                </button>
              </div>

              {/* Conteúdo */}

              <div className="px-6 pb-7 sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/55">
                  {modalData.category}
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white">
                  {modalData.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-sky-100/70">
                  {modalData.description}
                </p>

                {/* Funcionalidades */}

                <div className="mt-7">
                  <h4 className="text-sm font-semibold text-white">
                    O que foi construído
                  </h4>

                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {modalData.features.map((feature) => (
                      <div
                        key={feature}
                        className="
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.05]
                          px-4
                          py-3
                          text-sm
                          text-sky-100/70
                        "
                      >
                        <span className="mr-2 text-cyan-200">
                          •
                        </span>

                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tecnologias */}

                <div className="mt-7">
                  <h4 className="text-sm font-semibold text-white">
                    Tecnologias
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {modalData.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="
                            rounded-full
                            border
                            border-cyan-200/10
                            bg-cyan-200/[0.06]
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            text-cyan-100/80
                          "
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Link */}

                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-cyan-200/15
                    bg-cyan-200/[0.08]
                    px-5
                    py-3
                    text-sm
                    font-semibold
                    text-cyan-100
                    transition-all
                    duration-300
                    hover:bg-cyan-200/[0.14]
                  "
                >
                  Acessar projeto

                  <span>↗</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          TRANSIÇÃO INFERIOR
      ======================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-32
          w-full
          bg-gradient-to-t
          from-[#001a33]
          to-transparent
        "
      />
    </section>
  );
}