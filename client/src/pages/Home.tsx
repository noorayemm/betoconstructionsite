import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page - Beto Construction Website
 * 
 * Design Philosophy: Minimalist Teknoloji + Metalik Prestij
 * - Dark theme with metallic accents
 * - Glassmorphic components
 * - Smooth scroll animations
 * - Professional typography (Satoshi + Inter)
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-black/95">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Projects Section */}
        <Projects />

        {/* About Section */}
        <About />

        {/* Reviews Section */}
        <Reviews />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
