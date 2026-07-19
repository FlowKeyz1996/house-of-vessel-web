"use client";

import { motion } from "framer-motion";

interface AnimatedLogoProps {
  size?: number;
}

export default function AnimatedLogo({
  size = 420,
}: AnimatedLogoProps) {
  // Base design width
  const scale = size / 420;

  return (
    <div
      className="relative"
      style={{
        width: size,
      }}
    >
      {/* Logo */}
      <motion.img
        src="/hov-logo.jpeg"
        alt="House of Vessels"
        className="w-full"
        animate={{
          rotate: [0, -3, -3, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.3, 0.7, 1],
        }}
        style={{
          transformOrigin: "58% 33%",
        }}
      />

      {/* Oil Stream */}
      <motion.div
        className="absolute rounded-full bg-white"
        style={{
          width: 6 * scale,
          left: 126 * scale,
          top: 214 * scale,
        }}
        animate={{
          height: [0, 80 * scale, 80 * scale, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Drop delay={0} left={118 * scale} top={290 * scale} scale={scale} />
      <Drop delay={0.3} left={162 * scale} top={290 * scale} scale={scale} />
      <Drop delay={0.6} left={146 * scale} top={290 * scale} scale={scale} />

      {/* Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          opacity: [0.15, 0.45, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        style={{
          boxShadow: `0 0 ${40 * scale}px rgba(255,255,255,.35)`,
        }}
      />
    </div>
  );
}

interface DropProps {
  delay: number;
  left: number;
  top: number;
  scale: number;
}

function Drop({ delay, left, top, scale }: DropProps) {
  return (
    <motion.div
      className="absolute rotate-45 rounded-full bg-white"
      style={{
        left,
        top,
        width: 12 * scale,
        height: 12 * scale,
      }}
      animate={{
        y: [0, 45 * scale],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 1,
        delay,
        repeat: Infinity,
        repeatDelay: 4,
      }}
    />
  );
}