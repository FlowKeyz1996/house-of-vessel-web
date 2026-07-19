"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#6b1b9a]/5 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#FFA600]/5 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          {/* Decorative Box */}
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[32px] bg-[#6b1b9a]/10" />

          <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/about-header.jpg"
              alt="House of Vessels"
              width={700}
              height={800}
              className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="rounded-full bg-[#6b1b9a]/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#6b1b9a]">
            About Us
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Raising Vessels of Honour for God&apos;s Kingdom
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            House of Vessels is a Christ-centred ministry devoted to revealing
            Jesus Christ through the uncompromised teaching of God&apos;s Word,
            passionate worship, fervent prayer, and the transforming ministry of
            the Holy Spirit.
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            We are passionate about raising believers who know Christ deeply,
            walk in His purpose, and impact families, communities, nations, and
            generations with the Gospel.
          </p>

          {/* Stats */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            <div>
              <h3 className="text-4xl font-bold text-[#6b1b9a]">100%</h3>
              <p className="mt-2 text-gray-600">Christ Centred</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#FFA600]">Word</h3>
              <p className="mt-2 text-gray-600">Prayer & Worship</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#6b1b9a]">
                Kingdom
              </h3>
              <p className="mt-2 text-gray-600">Impact</p>
            </div>
          </div>

          {/* Button */}
          <Link
            href="/about"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[#6b1b9a] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#55157A]"
          >
            Learn More About Us

            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;