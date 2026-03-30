import { ArrowDown } from 'lucide-react';

/**
 * Hero Section - Modernisme Géométrique Dynamique
 * Full-width hero with geometric background image and CTA
 * Features diagonal clip-path and scroll animation
 */

const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663491872927/aqXpH9Cs4dAUkSsjvRHxob/hero-banner-PsJwMDjaJpmawiLWWyTjHf.webp';

export default function HeroSection() {
  const scrollToGallery = () => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
      gallery.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-orange-600/50"></div>
      </div>

      {/* Geometric Accent Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-3xl">
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
            <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent drop-shadow-lg">Créativité</span>
            <span className="block bg-gradient-to-r from-orange-300 via-white to-orange-300 bg-clip-text text-transparent drop-shadow-lg">Sans Limites</span>
          </h1>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl text-white mb-8 font-light drop-shadow-xl backdrop-blur-sm bg-black/20 px-8 py-4 rounded-xl inline-block">
            Transformez vos idées en designs exceptionnels qui captivent et inspirent
          </p>
        </div>

        <div className="animate-slide-up flex gap-4 justify-center flex-wrap" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={scrollToGallery}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-1 active:translate-y-0 active:shadow-md relative overflow-hidden group"
          >
            <span className="relative z-10">Voir mes projets</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg transition-all duration-300 hover:bg-white hover:text-orange-600 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
          >
            Discutons
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={scrollToGallery}
          className="flex flex-col items-center gap-2 text-white hover:text-orange-400 transition-colors"
        >
          <span className="text-sm font-semibold">Découvrir</span>
          <ArrowDown size={24} />
        </button>
      </div>

      {/* Diagonal Bottom Edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-white"
        style={{
          clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
        }}
      ></div>
    </section>
  );
}
