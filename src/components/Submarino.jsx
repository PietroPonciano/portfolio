import { motion } from "framer-motion";
import React from "react";
export default function UnderwaterROV() {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-[-20px] z-[2] block overflow-visible"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 0.58, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ opacity: { duration: 1.5, ease: "easeOut" }, y: { duration: 1.5, ease: "easeOut" } }}
    >
      {/* Container flutuante separado do entrance */}
      <motion.div
        className="relative h-24 w-56"
        animate={{ x: [-10, 0, 10, 0, -10], y: [0, -5, -2, 5, 0], rotate: [-0.8, 0.3, 0.8, -0.3, -0.8], }}
        transition={{
          x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {/* 
            FEIXE DE LUZ ESQUERDO
         */}
        <motion.div
          className="absolute left-[-250px] top-[30px] h-36 w-[280px] origin-right"
          style={{
            clipPath: "polygon(100% 38%, 100% 62%, 0 100%, 0 0)",
            background:
              "linear-gradient(to left, rgba(165,243,252,0.16), transparent)",
          }}
          animate={{ opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 
            FEIXE DE LUZ DIREITO
         */}
        <motion.div
          className="absolute right-[-250px] top-[30px] h-36 w-[280px] origin-left"
          style={{
            clipPath: "polygon(0 38%, 0 62%, 100% 100%, 100% 0)",
            background:
              "linear-gradient(to right, rgba(165,243,252,0.12), transparent)",
          }}
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* 
            CABO / ESTRUTURA SUPERIOR
         */}
        <div className="absolute left-1/2 top-[45%] h-8 w-14 -translate-x-1/2 rounded-t-xl border border-cyan-200/20 bg-[#082f49]/90" />
        {/* Antena */}
        <div className="absolute left-1/2 top-[-25px] h-3 w-px -translate-x-1/2 bg-cyan-200/20" />

        {/* 
            CORPO DO ROV
         */}
        <motion.div
          className="absolute left-1/2 top-[99%] h-16 w-40 -translate-x-1/2 -translate-y-1/2 rounded-[45%] border border-cyan-200/20 bg-[#082f49]/95 shadow-[0_0_45px_rgba(34,211,238,0.12)]"
        >
          {/* Janelas */}
          <div className="absolute left-8 top-5 h-4 w-4 rounded-full border border-cyan-100/20 bg-cyan-200/30 shadow-[0_0_12px_rgba(165,243,252,0.5)]" />
          <div className="absolute left-14 top-5 h-4 w-4 rounded-full border border-cyan-100/20 bg-cyan-200/20" />
          <div className="absolute left-20 top-5 h-4 w-4 rounded-full border border-cyan-100/20 bg-cyan-200/15" />

          {/* 
              FAROL ESQUERDO
           */}
          <motion.div
            className="absolute left-[-5px] top-[28px] h-3 w-3 rounded-full bg-cyan-100"
            animate={{
              opacity: [0.4, 1, 0.4],
              boxShadow: [
                "0 0 8px rgba(165,243,252,0.4)",
                "0 0 24px rgba(165,243,252,0.95)",
                "0 0 8px rgba(165,243,252,0.4)",
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* 
              FAROL DIREITO
           */}
          <motion.div
            className="absolute right-[-5px] top-[28px] h-3 w-3 rounded-full bg-cyan-100"
            animate={{
              opacity: [1, 0.4, 1],
              boxShadow: [
                "0 0 18px rgba(165,243,252,0.8)",
                "0 0 7px rgba(165,243,252,0.3)",
                "0 0 18px rgba(165,243,252,0.8)",
              ],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />

          {/* 
              PROPULSOR TRASEIRO — hélice sólida (3 pás + hub), não mais barras soltas
              (o design antigo de 4 barrinhas finas e semitransparentes girando
              lia visualmente como um spinner de "carregando", não como propulsor)
           */}
          <div className="absolute right-[-22px] top-1/2 h-9 w-9 -translate-y-1/2">
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            >
              {/* 3 pás em formato de losango, unidas ao centro, espaçadas 120° */}
              {[0, 120, 240].map((angle) => (
                <div
                  key={angle}
                  className="absolute left-1/2 top-1/2 h-4 w-2 origin-top rounded-b-full rounded-t-sm bg-cyan-200/70"
                  style={{
                    transform: `translate(-50%, 0) rotate(${angle}deg)`,
                  }}
                />
              ))}
              {/* Hub central sólido */}
              <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/90 shadow-[0_0_6px_rgba(165,243,252,0.8)]" />
            </motion.div>
          </div>

          {/* 
              LUZ DE STATUS
           */}
          <motion.div
            className="absolute bottom-4 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-200"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* 
            BOLHAS DO ROV — posicionamento corrigido
         */}
        {[0, 1, 2].map((bubble) => (
          <motion.div
            key={bubble}
            className="absolute rounded-full border border-cyan-100/20 bg-cyan-100/5"
            style={{
              right: `${35 + bubble * 8}px`,
              bottom: `${8 + bubble * 8}px`,
              width: `${4 + bubble * 2}px`,
              height: `${4 + bubble * 2}px`,
            }}
            animate={{
              y: [-5, -45],
              x: [0, bubble % 2 === 0 ? 10 : -8],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + bubble,
              repeat: Infinity,
              delay: bubble * 1.2,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
