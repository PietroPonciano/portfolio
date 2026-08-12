import React from "react";
import { motion } from "framer-motion";
import seaweed from "../assets/seaweed.png";

export default function SeaweedImage({ style }) {
  return (
    <motion.img
      src={seaweed}
      alt="Seaweed"
      className="absolute bottom-0 w-16 sm:w-20 md:w-24 opacity-70"
      style={style}
      initial={{ y: 20 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
