import React from "react";
import { motion } from "framer-motion";
import Bubbles from "./Bubbles";
import SeaweedField from "./SeaweedField";
import WaveDivider from "./WaveDivider";

export default function About() {
  const highlights = [
    {
      number: "01",
      title: "Full-Stack",
      text: "React • Node.js • APIs",
    },
    {
      number: "02",
      title: "Arquitetura",
      text: "APIs REST • Banco de dados • Autenticação",
    },
    {
      number: "03",
      title: "Experiência prática",
      text: "Projetos próprios envolvendo SaaS, pagamentos, integrações e interfaces React.",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-28 overflow-hidden">
      <Bubbles depth="shallow" />
      <SeaweedField section="about" />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 max-w-4xl text-center">
        <motion.h3
          className="text-4xl font-extrabold text-sky-900 mb-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre mim
        </motion.h3>

        <motion.p
          className="text-sky-800 text-xl font-medium mb-6 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Construo experiências digitais do backend à interface.
        </motion.p>

        <motion.p
          className="text-sky-900/80 text-lg leading-relaxed mb-14 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Sou desenvolvedor Full-Stack e gosto de transformar ideias em produtos
          digitais funcionais. Atuo com React no frontend e Node.js no backend,
          construindo APIs, modelando bancos de dados e cuidando da arquitetura
          de ponta a ponta — sempre buscando código limpo e interfaces intuitivas.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/50"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            >
              <span className="block text-sm font-bold text-sky-500 mb-2">{item.number}</span>
              <h4 className="font-semibold text-sky-900 mb-2">{item.title}</h4>
              <p className="text-sm text-sky-800/80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <WaveDivider variant="b" opacity={0.18} />
    </section>
  );
}
