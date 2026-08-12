import React from "react";
import { motion } from "framer-motion";
import SwimmingDuck from "./SwimmingDuck";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-sky-100 via-sky-200 to-white px-4 text-center"
    >
      {/* Conteúdo principal */}
      <div className="relative z-20 flex w-full flex-col items-center pb-40 sm:pb-44">
        {/* Foto */}
        <div className="relative mb-7 h-36 w-36 sm:h-40 sm:w-40">
          <motion.img
            src="/images/profile.jpg"
            alt="Pietro Ponciano"
            className="relative z-10 h-full w-full rounded-full border-4 border-white object-cover shadow-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />

          {/* Halo aquático */}
          <motion.div
            className="absolute inset-0 -z-10 rounded-full bg-sky-400 opacity-30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Saudação */}
        <motion.p
          className="mb-3 text-sm font-medium tracking-wide text-sky-600"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Desenvolvedor Full Stack
        </motion.p>

        {/* Título */}
        <motion.h1
          className="max-w-3xl text-4xl font-extrabold tracking-tight text-sky-800 sm:text-5xl lg:text-6xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Olá, eu sou o Pietro.
        </motion.h1>

        {/* Subtítulo */}
        <motion.h2
          className="mt-4 max-w-2xl text-xl font-semibold leading-relaxed text-sky-700 sm:text-2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
        >
          Transformo ideias em produtos digitais modernos e funcionais.
        </motion.h2>

        {/* Descrição */}
        <motion.p
          className="mt-4 max-w-xl px-2 text-base leading-7 text-gray-600 sm:text-lg"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          Construo interfaces com React e aplicações completas com Node.js,
          unindo experiência do usuário, design e engenharia para criar
          soluções funcionais e fáceis de evoluir.
        </motion.p>

        {/* Tecnologias */}
        <motion.div
          className="mt-5 flex flex-wrap justify-center gap-2 text-xs font-medium text-sky-700 sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <span className="rounded-full bg-white/70 px-3 py-1.5 shadow-sm">
            React
          </span>

          <span className="rounded-full bg-white/70 px-3 py-1.5 shadow-sm">
            Node.js
          </span>

          <span className="rounded-full bg-white/70 px-3 py-1.5 shadow-sm">
            JavaScript
          </span>

          <span className="rounded-full bg-white/70 px-3 py-1.5 shadow-sm">
            PostgreSQL
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-7 flex flex-col gap-3 sm:flex-row"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <a
            href="#projetos"
            className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-1 hover:bg-sky-700 hover:shadow-lg"
          >
            Ver meus projetos
          </a>

          <a
            href="#contato"
            className="rounded-full border border-sky-300 bg-white/60 px-6 py-3 text-sm font-semibold text-sky-700 transition-all hover:-translate-y-1 hover:bg-white"
          >
            Vamos conversar
          </a>
        </motion.div>
      </div>

      {/* Onda inferior */}
      <motion.svg
        className="absolute bottom-0 left-0 w-full "
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ y: 50 }}
        animate={{ y: [50, 0, 50] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <path
          fill="#00b4d8"
          d="M0,224L48,192C96,160,192,96,288,85.3C384,75,480,117,576,138.7C672,160,768,160,864,165.3C960,171,1056,181,1152,197.3C1248,213,1344,235,1392,245.3L1440,256V320H0Z"
        />
      </motion.svg>

      {/* Pato */}
      <SwimmingDuck />
    </section>
  );
}

