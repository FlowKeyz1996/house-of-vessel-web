import HeroSection from "./components/secondary-components/HeroSection";
import Navbar from "./components/primary-components/Navbar";
import Footer from "./components/primary-components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* About Section */}
      <section className="min-h-screen bg-white">
        {/* Add your About component here */}
      </section>

      {/* Sermons */}
      <section className="min-h-screen bg-gray-50">
        {/* Sermons */}
      </section>

      {/* Ministries */}
      <section className="min-h-screen bg-white">
        {/* Ministries */}
      </section>

      {/* Gallery */}
      <section className="min-h-screen bg-gray-50">
        {/* Gallery */}
      </section>

      {/* Contact */}
      <section className="min-h-screen bg-white">
        {/* Contact */}
      </section>
      <Footer />
    </main>
  );
}