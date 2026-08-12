import React from "react";
import Stone from "/images/stone.png"; // caminho da sua pedra

export default function RiverBackground() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* SVG do fundo do rio */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full h-auto"
      >
        <path
          fill="#cbbd93"
          fillOpacity="1"
          d="M0,288L48,277.3C96,267,192,245,288,224C384,203,480,181,576,192C672,203,768,245,864,250.7C960,256,1056,224,1152,218.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      {/* Exemplo de pedras */}
      <img
        src={Stone}
        alt="Pedra"
        className="absolute bottom-0 left-10 w-16"
      />
      <img
        src={Stone}
        alt="Pedra"
        className="absolute bottom-0 left-48 w-24"
      />
      <img
        src={Stone}
        alt="Pedra"
        className="absolute bottom-0 right-20 w-20"
      />
    </div>
  );
}
