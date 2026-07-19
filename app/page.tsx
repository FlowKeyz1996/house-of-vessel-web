import HeroSection from "./components/secondary-components/HeroSection";
import Navbar from "./components/primary-components/Navbar";
import Footer from "./components/primary-components/Footer";
import AboutUsSection from "./components/secondary-components/AboutUsSection";

export default function Home() {
  return (
    <main>
      
      <HeroSection />

     
      <section className="min-h-screen bg-white">
      
        <AboutUsSection/>
        
      </section>

      
      {/* <section className="min-h-screen bg-gray-50">
       
      </section>

     
      <section className="min-h-screen bg-white">
     
      </section>

      
      <section className="min-h-screen bg-gray-50">
     
      </section>

      
      <section className="min-h-screen bg-white">
        
      </section> */}
    
    </main>
  );
}