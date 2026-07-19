"use client";

import { motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <div className="relative w-[420px]">
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
        className="absolute w-[6px] rounded-full bg-white"
        style={{
          left: 126,
          top: 214,
        }}
        animate={{
          height: [0, 80, 80, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Droplet 1 */}
      <Drop delay={0} left={118} />

      {/* Droplet 2 */}
      <Drop delay={0.3} left={162} />

      {/* Droplet 3 */}
      <Drop delay={0.6} left={146} />

      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{
          opacity: [0.15, 0.45, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        style={{
          boxShadow: "0 0 40px rgba(255,255,255,.35)",
        }}
      />
    </div>
  );
}

interface DropProps {
  delay: number;
  left: number;
}

function Drop({ delay, left }: DropProps) {
  return (
    <motion.div
      className="absolute h-3 w-3 rotate-45 rounded-full bg-white"
      style={{
        left,
        top: 290,
      }}
      animate={{
        y: [0, 45],
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