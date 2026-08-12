import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SwimmingDuck() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5"
      initial={{ x: -150 }}
      animate={
        isMobile
          ? { x: 0 }
          : { x: [-150, 300, -150] }
      }
      transition={
        isMobile
          ? {}
          : {
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }
      }
    >
      <motion.img
        src="/images/duck.png"
        alt="Pato nadando"
        className="w-16 sm:w-18 md:w-20 lg:w-20 drop-shadow-xl"
        initial={{
          y: 20,
          rotate: 0,
          scaleX: 1,
        }}
        animate={
          isMobile
            ? {
                y: [10, 20, 10],
                rotate: [0, 4, -4, 0],
                scaleX: 1,
              }
            : {
                y: [20, 5, 20],
                rotate: [0, 5, -5, 0],
                scaleX: [1, 1, -1, -1],
              }
        }
        transition={
          isMobile
            ? {
                y: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                },
                rotate: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                },
              }
            : {
                y: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                },
                rotate: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                },
                scaleX: {
                  repeat: Infinity,
                  duration: 12,
                  ease: "linear",
                  times: [0, 0.5, 0.5, 1],
                },
              }
        }
      />
    </motion.div>
  );
}
