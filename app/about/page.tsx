import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, BookOpen, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}

      <section className="relative flex h-[75vh] items-center justify-center overflow-hidden">
        <Image
          src="/about-header.jpg"
          alt="House of Vessels About Header"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-[#6b1b9a]/45 via-black/45 to-black/85" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.35em] text-[#FFA600] backdrop-blur-md">
            About Our Ministry
          </span>

          <h1 className="mt-8 text-5xl font-extrabold text-white md:text-7xl">
            House of Vessels
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/90">
            Raising vessels of honour through the transforming power of
            God&apos;s Word, fervent prayer, passionate worship, and the
            ministry of the Holy Spirit.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3 text-white/80">
            <Link href="/" className="hover:text-[#FFA600]">
              Home
            </Link>

            <span>/</span>

            <span className="text-[#FFA600]">About</span>
          </div>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}

      <section className="py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="font-semibold uppercase tracking-[0.3em] text-[#6b1b9a]">
              Our Story
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Raising Vessels for God&apos;s Kingdom
            </h2>

            <p className="mt-8 leading-8 text-gray-600">
              House of Vessels is a Christ-centred ministry devoted to revealing
              Jesus Christ through the uncompromised teaching of God&apos;s
              Word, passionate worship, fervent prayer, and the transforming
              ministry of the Holy Spirit.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Our heart is to disciple believers, develop spiritual maturity,
              equip kingdom leaders, and raise men and women who will impact
              their generation with the Gospel of Jesus Christ.
            </p>

            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#6b1b9a] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#53157A]"
            >
              Become Part of Our Family
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Right */}

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-4xl bg-[#6b1b9a]/10" />

            <div className="relative overflow-hidden rounded-4xl shadow-2xl">
              <Image
                src="/about-header.jpg"
                alt="House of Vessels"
                width={700}
                height={700}
                className="h-150 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SCRIPTURE ================= */}

      <section className="bg-[#0B0B0F] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Our Foundation Scripture
          </h2>

          <blockquote className="mx-auto mt-10 max-w-4xl text-2xl font-semibold leading-relaxed text-white/90 italic">
            &ldquo;In a great house there are not only vessels of gold and of
            silver, but also of wood and of earth; and some to honour, and some
            to dishonour. If a man therefore purge himself from these, he shall
            be a vessel unto honour, sanctified, and meet for the Master&apos;s
            use, and prepared unto every good work.&rdquo;
          </blockquote>

          <p className="mt-8 text-lg font-semibold text-[#FFA600]">
            2 Timothy 2:20–21 (KJV)
          </p>
        </div>
      </section>

      {/* ================= VALUES ================= */}

      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.3em] text-[#6b1b9a]">
              What We Believe
            </span>

            <h2 className="mt-5 text-5xl font-bold text-gray-900">
              Our Mission & Vision
            </h2>

            <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
              Everything we do is centred on Jesus Christ and His commission to
              make disciples of all nations.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-10 shadow transition-all duration-300 hover:-translate-y-3 hover:shadow-xl cursor-pointer">
              <BookOpen
                size={48}
                className="text-[#6b1b9a]"
              />

              <h3 className="mt-6 text-2xl font-bold text-[#6b1b9a]">
               Our mission 
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
               Going into systems of the world, infiltrating them with the person and the principles of the holy spirit.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow transition-all duration-300 hover:-translate-y-3 hover:shadow-xl cursor-pointer">
              <Heart
                size={48}
                className="text-[#FFA600]"
              />

              <h3 className="mt-6 text-2xl font-bold text-[#FFA600]">
                Our Vision 
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
               Bringing God&apos;s people back to God&apos;s original plan and purpose for their Lives.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-10 shadow transition-all duration-300 hover:-translate-y-3 hover:shadow-xl cursor-pointer">
              <Users
                size={48}
                className="text-[#6b1b9a]"
              />

              <h3 className="mt-6 text-2xl font-bold text-[#6b1b9a]">
                our Core Values
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
               Love, Intimacy, Excellence, Righteousness, Integrity, Honor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="relative overflow-hidden bg-[#0B0B0F] py-28 text-white">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#6b1b9a]/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#FFA600]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-bold">
            There Is a Place for You
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/80">
            Whether you&apos;re searching for a church family, longing to grow
            deeper in your walk with Christ, or looking for a place to serve,
            we welcome you with open hearts.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            Plan Your Visit

            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}