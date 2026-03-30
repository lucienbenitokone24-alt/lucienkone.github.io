import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

/**
 * Gallery Component - Modernisme Géométrique Dynamique
 * Asymmetric grid gallery with hover effects and animations
 * Features scroll reveal animations and image overlays
 */

const GALLERY_IMAGES = [
  {
    id: 1,
    title: 'Branding Moderne',
    category: 'Branding',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663491872927/aqXpH9Cs4dAUkSsjvRHxob/gallery-1-RRxYfEQxBCn8Nqxehqg2Qi.webp',
    span: 'col-span-1 row-span-2',
  },
  {
    id: 2,
    title: 'Design Graphique',
    category: 'Illustration',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663491872927/aqXpH9Cs4dAUkSsjvRHxob/gallery-2-6Yih3ApV4xisKFTSwnthoT.webp',
    span: 'col-span-1',
  },
  {
    id: 3,
    title: 'Identité Visuelle',
    category: 'Identité',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663491872927/aqXpH9Cs4dAUkSsjvRHxob/gallery-3-FFiRMHnhA9xEAsbDmsMfTy.webp',
    span: 'col-span-1',
  },
  {
    id: 4,
    title: 'Design Créatif',
    category: 'Création',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663491872927/aqXpH9Cs4dAUkSsjvRHxob/gallery-1-RRxYfEQxBCn8Nqxehqg2Qi.webp',
    span: 'col-span-1',
  },
  {
    id: 5,
    title: 'Composition Abstraite',
    category: 'Art Digital',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663491872927/aqXpH9Cs4dAUkSsjvRHxob/gallery-2-6Yih3ApV4xisKFTSwnthoT.webp',
    span: 'col-span-2',
  },
  {
    id: 6,
    title: 'Géométrie Moderne',
    category: 'Design',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663491872927/aqXpH9Cs4dAUkSsjvRHxob/gallery-3-FFiRMHnhA9xEAsbDmsMfTy.webp',
    span: 'col-span-1',
  },
];

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems((prev) => Array.from(new Set([...prev, id])));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Galerie de Projets
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes créations les plus récentes et innovantes
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {GALLERY_IMAGES.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`${item.span} relative overflow-hidden rounded-lg group cursor-pointer scroll-reveal ${visibleItems.includes(item.id) ? 'visible' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-sm">
                <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">{item.title}</h3>
                <p className="text-orange-300 text-sm mb-4 font-semibold">{item.category}</p>
                <div className="flex items-center gap-2 text-white hover:text-orange-300 transition-colors cursor-pointer group/link">
                  <Eye size={18} className="group-hover/link:scale-125 transition-transform" />
                  <span className="font-semibold">Voir le projet</span>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
