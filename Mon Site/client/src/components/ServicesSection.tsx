import { Layers, Image, Pen, Smartphone } from 'lucide-react';

/**
 * Services Section - Modernisme Géométrique Dynamique
 * Showcases main services with icons and descriptions
 */

export default function ServicesSection() {
  const services = [
    {
      icon: Layers,
      title: 'Branding & Identité',
      description: 'Création d\'identités visuelles complètes et cohérentes pour votre marque',
      features: ['Logo Design', 'Charte Graphique', 'Guideline Marque'],
    },
    {
      icon: Image,
      title: 'Illustration Numérique',
      description: 'Illustrations originales et personnalisées pour tous vos besoins',
      features: ['Art Digital', 'Character Design', 'Concept Art'],
    },
    {
      icon: Pen,
      title: 'Design Graphique',
      description: 'Designs graphiques impactants pour vos supports de communication',
      features: ['Affiches', 'Flyers', 'Brochures'],
    },
    {
      icon: Smartphone,
      title: 'Design UI/UX',
      description: 'Interfaces utilisateur modernes et ergonomiques',
      features: ['Web Design', 'App Design', 'Prototype'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Mes Services
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Une gamme complète de services de design pour répondre à tous vos besoins créatifs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 hover-lift scroll-reveal relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-blue-700 to-orange-500 rounded-lg group-hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
