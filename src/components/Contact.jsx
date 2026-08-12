import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  // animação de flutuação
  const floatTransition = {
    y: [0, -10, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 bg-[#001a33] text-white"
    >
      <div className="relative container mx-auto px-8 text-center z-10">
        <h3 className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg">
          Vamos nos conectar
        </h3>
        <p className="text-sky-100 mb-12 max-w-xl mx-auto">
          Estou aberto a novos projetos, colaborações ou oportunidades. Sinta-se à vontade para me contatar através do e-mail, LinkedIn ou GitHub.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Email */}
          <motion.a
            href="mailto:pietro.ponciano2023@gmail.com"
            className="flex items-center gap-3 px-6 py-3 rounded-full font-semibold shadow-lg
              bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500
              hover:from-cyan-400 hover:via-sky-500 hover:to-sky-600
              transform hover:scale-105"
            animate={floatTransition}
          >
            <EnvelopeIcon className="w-6 h-6" />
            Email
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/pietro-gonçalves-ponciano-596a58304"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full font-semibold shadow-lg
              bg-gradient-to-r from-blue-500 via-sky-600 to-cyan-500
              hover:from-cyan-400 hover:via-blue-500 hover:to-sky-600
              transform hover:scale-105"
            animate={{
              y: [0, -12, 0],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <FaLinkedin className="w-6 h-6" />
            LinkedIn
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/PietroPonciano"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full font-semibold shadow-lg
              bg-gradient-to-r from-gray-700 via-gray-800 to-sky-700
              hover:from-sky-600 hover:via-gray-700 hover:to-cyan-500
              transform hover:scale-105"
            animate={{
              y: [0, -8, 0],
              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <FaGithub className="w-6 h-6" />
            GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}
