import React from 'react';
import Sand from "./Sand"; 

export default function Footer() {
  return (
    <footer className="relative bg-[#001a33] text-white">
      {/* Sand fica na parte superior do footer */}
      <Sand />

      {/* Conteúdo do footer */}
      <div className="relative z-10 py-6 text-center bg-[#cbbd93]">
        <p>© 2026 Pietro Ponciano. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
