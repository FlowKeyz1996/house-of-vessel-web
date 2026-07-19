import Link from "next/link";
import {
  Heart,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Sermons", href: "/sermons" },
  { name: "Ministries", href: "/ministries" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0B0B0F] text-white">
      {/* Purple Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#6b1b9a]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#FFA600]/10 blur-[140px]" />

      {/* Top Border */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#6b1b9a] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Ministry Info */}
          <div>
            <h2 className="text-3xl font-bold">
              House of <span className="text-[#FFA600]">Vessels</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Raising vessels of honour through the transforming power of
              God&apos;s Word, the ministry of the Holy Spirit, fervent prayer,
              and a life of worship.
            </p>

            <Link
              href="/give"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              <Heart size={18} />
              Support the Ministry
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#FFA600]">
              Quick Links
            </h3>

            <div className="space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-3 text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-[#FFA600]"
                >
                  <ChevronRight size={18} />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#FFA600]">
              Contact Us
            </h3>

            <div className="space-y-6 text-gray-300">
              <div className="flex items-start gap-4">
                <MapPin
                  className="mt-1 shrink-0 text-[#FFA600]"
                  size={20}
                />
                <span>
                  Your Ministry Address
                  <br />
                  City, State, Country
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-[#FFA600]" size={20} />
                <span>+234 xxx xxx xxxx</span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-[#FFA600]" size={20} />
                <span>info@houseofvessels.org</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-[#FFA600]">
              Connect With Us
            </h3>

            <p className="mb-8 text-gray-400">
              Follow us for sermons, live services, ministry updates and
              inspiring messages.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Link
                href="#"
                className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#25D366]"
              >
                <FaWhatsapp size={22} />
                WhatsApp
              </Link>

              <Link
                href="#"
                className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#229ED9]"
              >
                <FaTelegramPlane size={22} />
                Telegram
              </Link>

              <Link
                href="#"
                className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2]"
              >
                <FaFacebookF size={20} />
                Facebook
              </Link>

              <Link
                href="#"
                className="flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-linear-to-r hover:from-pink-500 hover:to-orange-400"
              >
                <FaInstagram size={20} />
                Instagram
              </Link>

              <Link
                href="#"
                className="col-span-2 flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
              >
                <FaYoutube size={22} />
                YouTube
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 text-center text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} House of Vessels. All Rights Reserved.
          </p>

          <p>Developed with ❤️ by Sanni Emmanuel Iko-ojo(flowkeyzDeveloper)</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-[#FFA600]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-[#FFA600]"
            >
              Terms of Service
            </Link>

            <Link
              href="/give"
              className="transition hover:text-[#FFA600]"
            >
              Give Online
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;