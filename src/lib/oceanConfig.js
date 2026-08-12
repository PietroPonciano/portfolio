/**
 * Configurações estáticas para os elementos decorativos do ambiente aquático.
 *
 * IMPORTANTE: valores fixos, gerados uma única vez "à mão" — nunca com
 * Math.random() dentro de um componente. Isso garante um resultado visual
 * estável entre renders (sem "pulos" de posição a cada atualização de estado).
 */

// Três tamanhos de partícula, como pedido no briefing:
// pequenas (poeira/plâncton), médias (bolhas) e grandes (bolhas raras).
export const SIZE = {
  tiny: [2, 3, 4],
  small: [6, 8, 10],
  medium: [14, 18, 22],
  large: [28, 34, 40],
};

// Bolhas por zona de profundidade — quantidade e tamanho crescem
// discretamente conforme a profundidade aumenta, luminosidade cai.
export const bubblesByDepth = {
  surface: [
    { left: "8%", size: 6, duration: 9, delay: 0, opacity: 0.5 },
    { left: "22%", size: 4, duration: 11, delay: 2.4, opacity: 0.4 },
    { left: "63%", size: 8, duration: 8, delay: 1.1, opacity: 0.45 },
    { left: "81%", size: 5, duration: 10, delay: 3.6, opacity: 0.4 },
  ],
  shallow: [
    { left: "6%", size: 6, duration: 9, delay: 0.5, opacity: 0.45 },
    { left: "18%", size: 10, duration: 10.5, delay: 2.8, opacity: 0.4 },
    { left: "34%", size: 4, duration: 8, delay: 1.6, opacity: 0.35 },
    { left: "58%", size: 7, duration: 11, delay: 4.2, opacity: 0.4 },
    { left: "77%", size: 5, duration: 9.5, delay: 0.9, opacity: 0.35 },
    { left: "90%", size: 9, duration: 10, delay: 3.1, opacity: 0.4 },
  ],
  mid: [
    { left: "4%", size: 10, duration: 10, delay: 0.2, opacity: 0.4 },
    { left: "15%", size: 6, duration: 8.5, delay: 2.1, opacity: 0.35 },
    { left: "27%", size: 14, duration: 12, delay: 4.4, opacity: 0.4 },
    { left: "41%", size: 5, duration: 9, delay: 1.3, opacity: 0.3 },
    { left: "55%", size: 9, duration: 10.5, delay: 3.7, opacity: 0.35 },
    { left: "68%", size: 18, duration: 13, delay: 0.8, opacity: 0.4 },
    { left: "83%", size: 6, duration: 9.5, delay: 2.9, opacity: 0.3 },
    { left: "94%", size: 11, duration: 11, delay: 5.1, opacity: 0.35 },
  ],
  deep: [
    { left: "5%", size: 12, duration: 11, delay: 0.6, opacity: 0.3 },
    { left: "19%", size: 22, duration: 14, delay: 3.2, opacity: 0.3 },
    { left: "31%", size: 6, duration: 9, delay: 1.9, opacity: 0.25 },
    { left: "47%", size: 9, duration: 10, delay: 4.6, opacity: 0.28 },
    { left: "60%", size: 16, duration: 12.5, delay: 0.4, opacity: 0.3 },
    { left: "74%", size: 7, duration: 9.5, delay: 2.6, opacity: 0.25 },
    { left: "88%", size: 20, duration: 13.5, delay: 5.4, opacity: 0.28 },
  ],
  seafloor: [
    { left: "10%", size: 8, duration: 12, delay: 0.3, opacity: 0.2 },
    { left: "26%", size: 14, duration: 14, delay: 3.8, opacity: 0.22 },
    { left: "44%", size: 5, duration: 10, delay: 1.5, opacity: 0.18 },
    { left: "65%", size: 10, duration: 13, delay: 5.0, opacity: 0.2 },
    { left: "82%", size: 6, duration: 11, delay: 2.2, opacity: 0.18 },
  ],
};

// Partículas finas ("plâncton") — mais discretas, presentes em maior número
export const particlesByDepth = {
  surface: [
    { left: "12%", size: 2, duration: 10, delay: 0 },
    { left: "48%", size: 3, duration: 12, delay: 2.5 },
    { left: "72%", size: 2, duration: 9, delay: 4.1 },
  ],
  shallow: [
    { left: "9%", size: 3, duration: 11, delay: 0.4 },
    { left: "23%", size: 2, duration: 9, delay: 2.2 },
    { left: "39%", size: 3, duration: 13, delay: 4.8 },
    { left: "61%", size: 2, duration: 10, delay: 1.7 },
    { left: "84%", size: 3, duration: 12, delay: 3.3 },
  ],
  mid: [
    { left: "7%", size: 3, duration: 12, delay: 0.9 },
    { left: "21%", size: 4, duration: 10, delay: 3.5 },
    { left: "36%", size: 2, duration: 14, delay: 1.2 },
    { left: "52%", size: 3, duration: 11, delay: 5.0 },
    { left: "69%", size: 4, duration: 13, delay: 2.6 },
    { left: "91%", size: 2, duration: 9, delay: 4.4 },
  ],
  deep: [
    { left: "5%", size: 3, duration: 13, delay: 0.6 },
    { left: "18%", size: 2, duration: 11, delay: 3.0 },
    { left: "33%", size: 4, duration: 15, delay: 5.5 },
    { left: "58%", size: 3, duration: 12, delay: 1.8 },
    { left: "79%", size: 2, duration: 10, delay: 4.0 },
  ],
  seafloor: [
    { left: "14%", size: 2, duration: 14, delay: 1.0 },
    { left: "40%", size: 3, duration: 12, delay: 3.9 },
    { left: "70%", size: 2, duration: 16, delay: 2.4 },
  ],
};

// Algas por seção — quantidade, escala e opacidade seguem o briefing:
// discretas na superfície, maiores e mais escuras no fundo.
export const seaweedByDepth = {
  hero: [{ left: "3%", scale: 0.55, opacity: 0.35, side: "left" }],
  about: [
    { left: "1%", scale: 0.7, opacity: 0.4, side: "left" },
    { left: "94%", scale: 0.6, opacity: 0.35, side: "right" },
  ],
  experience: [
    { left: "0%", scale: 0.9, opacity: 0.5, side: "left" },
    { left: "90%", scale: 0.8, opacity: 0.45, side: "right" },
    { left: "45%", scale: 0.5, opacity: 0.3, side: "left" },
  ],
  projects: [
    { left: "-2%", scale: 1.2, opacity: 0.55, side: "left" },
    { left: "92%", scale: 1.35, opacity: 0.5, side: "right" },
    { left: "22%", scale: 0.7, opacity: 0.35, side: "left" },
    { left: "70%", scale: 0.85, opacity: 0.4, side: "right" },
  ],
  contact: [
    { left: "-3%", scale: 1.5, opacity: 0.65, side: "left" },
    { left: "88%", scale: 1.6, opacity: 0.6, side: "right" },
    { left: "38%", scale: 1.0, opacity: 0.45, side: "left" },
  ],
};
