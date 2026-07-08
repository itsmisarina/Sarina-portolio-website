"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 origin-left bg-[linear-gradient(90deg,#22d3ee,#8b5cf6,#38bdf8)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
