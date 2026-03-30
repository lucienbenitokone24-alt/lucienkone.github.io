import { Instagram, Linkedin, Mail, Facebook, Music, Youtube } from 'lucide-react';

/**
 * Footer Component - Modernisme Géométrique Dynamique
 * Footer with social links and copyright information
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white">
      {/* Diagonal Top Edge */}
      <div
        className="h-16 bg-white"
        style={{
          clipPath: 'polygon(0 0, 100% 40%, 100% 100%, 0 100%)',
        }}
      ></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl">Portfolio</span>
            </div>
            <p className="text-blue-100">
              Créativité sans limites. Designs qui inspirent et captivent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#gallery" className="text-blue-100 hover:text-orange-400 transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-orange-400 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-orange-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-orange-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Suivez-moi</h3>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-800 rounded-lg hover:text-blue-600 hover:bg-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-800 rounded-lg hover:text-pink-500 hover:bg-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-800 rounded-lg hover:text-black hover:bg-white transition-colors"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-800 rounded-lg hover:text-red-600 hover:bg-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-800 rounded-lg hover:text-blue-700 hover:bg-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@portfolio.com"
                className="p-3 bg-blue-800 rounded-lg hover:bg-orange-500 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © {currentYear} Portfolio Infographe. Tous droits réservés.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-100 hover:text-orange-400 transition-colors text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="text-blue-100 hover:text-orange-400 transition-colors text-sm">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
