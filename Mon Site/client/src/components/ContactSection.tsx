import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, Music, Youtube } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Contact Section - Modernisme Géométrique Dynamique
 * Contact form with social links and contact information
 */

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Message envoyé avec succès!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@portfolio.com',
      href: 'mailto:contact@portfolio.com',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+225 05 56 08 47 50',
      href: 'tel:+2250556084750',
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Abidjan, Côte d\'Ivoire',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com',
      color: 'hover:text-blue-600',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com',
      color: 'hover:text-pink-500',
    },
    {
      icon: Music,
      label: 'TikTok',
      href: 'https://tiktok.com',
      color: 'hover:text-black',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com',
      color: 'hover:text-red-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:text-blue-700',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Parlons de votre projet
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Vous avez un projet en tête ? Contactez-moi pour discuter de comment je peux vous aider
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 hover:shadow-lg hover:border-orange-300 transition-all duration-300 scroll-reveal hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">{info.label}</h3>
                    <p className="text-gray-700 font-medium">{info.value}</p>
                  </div>
                </a>
              );
            })}

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-blue-900 mb-4">Suivez-moi</h3>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-gray-200 rounded-lg text-gray-700 transition-all duration-300 ${link.color} hover:bg-gray-300`}
                      aria-label={link.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-6 scroll-reveal"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-blue-900 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-blue-400"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-blue-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-blue-400"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-blue-900 mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all hover:border-blue-400"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-blue-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none hover:border-blue-400"
                placeholder="Décrivez votre projet..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 active:translate-y-0 active:shadow-md disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <span className="relative z-10">{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
