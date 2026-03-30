import { Palette, Zap, Target } from 'lucide-react';

/**
 * About Section - Modernisme Géométrique Dynamique
 * Presents designer profile with key strengths and expertise
 */

export default function AboutSection() {
  const strengths = [
    {
      icon: Palette,
      title: 'Design Créatif',
      description: 'Création de designs innovants et captivants qui reflètent votre identité unique',
    },
    {
      icon: Zap,
      title: 'Exécution Rapide',
      description: 'Livraison efficace de projets de haute qualité dans les délais impartis',
    },
    {
      icon: Target,
      title: 'Stratégie Visuelle',
      description: 'Approche stratégique pour maximiser l\'impact de votre communication visuelle',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              À propos de moi
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mb-6"></div>
            <p className="text-gray-700 text-lg mb-4 leading-relaxed">
              Je suis <span className="font-bold text-blue-900">KONE LUCIEN</span>, infographiste créatif basé à Abidjan, Côte d'Ivoire. Avec une solide expérience dans la création de designs visuels exceptionnels, j'ai eu le privilège de travailler avec de nombreuses entreprises et particuliers pour transformer leurs idées en réalité visuelle captivante.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Spécialisé dans le branding, l'illustration numérique et la conception graphique, mon approche combine créativité, stratégie et technologie. Chaque projet est une opportunité de créer des visuels qui marquent, inspirent et génèrent des résultats concrets pour mes clients.
            </p>
            <button className="btn-primary">
              Télécharger mon CV
            </button>
          </div>

          {/* Right Content - Strengths */}
          <div className="space-y-6">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg border-l-4 border-orange-500 shadow-md hover-lift scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">
                        {strength.title}
                      </h3>
                      <p className="text-gray-600">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
