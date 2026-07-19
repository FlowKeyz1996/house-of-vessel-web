"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedLogo from "./components/AnimatedLogo";

const slides = [
  "/background-img4.jpg",
  "/background-img2.jpeg",
  "/background-img3.jpg",
  "/background-img.jpeg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${slides[current]})`,
          }}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
          }}
          transition={{
            duration: 1.5,
            ease: "linear"
          }}
        />
      </AnimatePresence>

      {/* Purple Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#6b1b9a",
          opacity: 0.2, // Increase to 0.3 if you want more purple
        }}
      />

      {/* Black Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.15), rgba(0,0,0,.45), rgba(0,0,0,.75))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex max-w-5xl flex-col items-center px-6 text-center">
        {/* <AnimatedLogo /> */}

        <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.4em] text-white backdrop-blur-md">
          Welcome Home
        </span>

        <h1 className="mt-8 text-5xl font-extrabold text-white md:text-6xl lg:text-7xl">
          House of Vessels
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#ffa600]">
          Raising vessels of honour through the transforming power of God's
          Word, the ministry of the Holy Spirit, fervent prayer, and a life of
          worship.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-white px-8 py-4 font-semibold text-[#6b1b9a] transition hover:scale-105">
            Join Us
          </button>

          <button className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:scale-105 hover:bg-white/20">
            Watch Sermons
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-white"
                : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 h-48 w-full"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />
    </main>
  );
}