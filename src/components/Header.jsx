import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <h1 className="text-2xl font-bold text-deepWater">Pietro Ponciano</h1>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6 text-deepWater font-medium">
          <a href="#hero" className="hover:text-water">Início</a>
          <a href="#experience" className="hover:text-water">Experiência</a>
          <a href="#projects" className="hover:text-water">Projetos</a>
          <a href="#contact" className="hover:text-water">Contato</a>
        </nav>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-deepWater transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-deepWater my-1 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-deepWater transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-md flex flex-col items-center justify-center space-y-10 text-deepWater font-medium z-40"
          >
            <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-water text-2xl">Início</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-water text-2xl">Experiência</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-water text-2xl">Projetos</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-water text-2xl">Contato</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
