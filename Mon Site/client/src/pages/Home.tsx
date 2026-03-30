import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Gallery from '@/components/Gallery';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import OrderSection from '@/components/OrderSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Home Page - Portfolio Infographe Premium
 * Main page with all portfolio sections
 * Design: Modernisme Géométrique Dynamique
 */

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <Gallery />
      <AboutSection />
      <ServicesSection />
      <OrderSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
