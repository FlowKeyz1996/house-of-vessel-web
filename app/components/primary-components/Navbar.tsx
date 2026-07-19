"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import AnimatedLogo from "../AnimatedLogo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Sermons", href: "/sermons" },
  { name: "Ministries", href: "/ministries" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5">
      <div
        className={`w-full max-w-7xl rounded-2xl border transition-all duration-500 ${
  scrolled
    ? "border-white/10 bg-[#12071d]/90 backdrop-blur-2xl shadow-2xl shadow-black/30"
    : "border-white/20 bg-white/10 backdrop-blur-xl"
}`}
      >
        <div className="flex h-20 items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <AnimatedLogo size={70} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "bg-white/20 text-[#FFA600] backdrop-blur-md"
                      : "text-white hover:bg-white/10 hover:text-[#FFA600]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Give Button */}
          <Link
            href="/give"
            className="hidden rounded-full border border-white/30 bg-white/10 px-8 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-white/20 lg:block"
          >
            Give
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-white/30 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20 lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            open ? "max-h-125 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-3 px-6">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 transition ${
                    active
                      ? "bg-white/20 text-[#FFA600]"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/give"
              className="mt-2 rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-center font-semibold text-white backdrop-blur-md"
            >
              Give
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}