import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SwimmingDuck() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
<motion.div
  className="absolute bottom-[10px] lg:bottom-[150px]" // mobile e md = 10px, lg+ = 150px
  initial={{ x: -150 }}
  animate={isMobile ? { x: 0 } : { x: [-150, 300, -150] }}
  transition={isMobile ? {} : { repeat: Infinity, duration: 12, ease: "linear" }}
>
  <motion.img
    src="/images/duck.png"
    alt="Pato nadando"
    className="w-20 drop-shadow-xl"
    initial={{ y: 50, rotate: 0, scaleX: 1 }}
    animate={
      isMobile
        ? { y: [50, 10, 50], rotate: [0, 5, -5, 0], scaleX: 1 } // mobile/tablet
        : { y: [50, 10, 50], rotate: [0, 5, -5, 0], scaleX: [1, 1, -1, -1] } // desktop
    }
    transition={
      isMobile
        ? {
            y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
          }
        : {
            y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            scaleX: { repeat: Infinity, duration: 12, ease: "linear", times: [0, 0.5, 0.5, 1] },
          }
    }
  />
</motion.div>


  );
}
