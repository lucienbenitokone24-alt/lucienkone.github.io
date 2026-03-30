import { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Order Section - Modernisme Géométrique Dynamique
 * Professional order form with service selection dropdown
 * Allows clients to request custom design services
 */

const SERVICES = [
  { id: 'birthday-poster', label: 'Affiches pour Anniversaire', price: '15,000 FCFA' },
  { id: 'wedding-poster', label: 'Affiches pour Mariage', price: '25,000 FCFA' },
  { id: 'event-poster', label: 'Affiches pour Événements', price: '20,000 FCFA' },
  { id: 'flyer-design', label: 'Design de Flyers', price: '10,000 FCFA' },
  { id: 'brochure-design', label: 'Design de Brochures', price: '30,000 FCFA' },
  { id: 'logo-design', label: 'Design de Logo', price: '40,000 FCFA' },
  { id: 'branding-package', label: 'Package Branding Complet', price: '100,000 FCFA' },
  { id: 'social-media', label: 'Design pour Réseaux Sociaux', price: '12,000 FCFA' },
  { id: 'custom', label: 'Projet Personnalisé', price: 'À discuter' },
];

export default function OrderSection() {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    service: '',
    description: '',
    deadline: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('Commande reçue ! Je vous contactera bientôt.');
      setSubmitted(true);
      setFormData({
        clientName: '',
        clientEmail: '',
        clientPhone: '',
        service: '',
        description: '',
        deadline: '',
        budget: '',
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      toast.error('Erreur lors de l\'envoi de la commande');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedService = SERVICES.find((s) => s.id === formData.service);

  return (
    <section id="order" className="py-24 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-blue-900/10 to-orange-500/10 px-4 py-2 rounded-full border border-blue-900/20">
            <ShoppingCart className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-blue-900">Passer une Commande</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Commandez Votre Design
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-700 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sélectionnez le service dont vous avez besoin et décrivez votre projet. Je vous recontacterai avec un devis détaillé.
          </p>
        </div>

        {/* Order Form */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Selection */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <label htmlFor="service" className="block text-lg font-bold text-blue-900 mb-4">
                Sélectionnez un Service *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white text-gray-900 font-medium transition-all duration-300 hover:border-blue-500"
              >
                <option value="">-- Choisissez un service --</option>
                {SERVICES.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.label} - {service.price}
                  </option>
                ))}
              </select>
              {selectedService && (
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-900/5 to-orange-500/5 rounded-lg border border-blue-900/20">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-blue-900">Service sélectionné :</span> {selectedService.label}
                  </p>
                  <p className="text-sm text-orange-600 font-semibold mt-1">
                    Tarif estimé : {selectedService.price}
                  </p>
                </div>
              )}
            </div>

            {/* Client Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <label htmlFor="clientName" className="block text-sm font-bold text-blue-900 mb-3">
                  Votre Nom *
                </label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="Votre nom complet"
                />
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <label htmlFor="clientEmail" className="block text-sm font-bold text-blue-900 mb-3">
                  Votre Email *
                </label>
                <input
                  type="email"
                  id="clientEmail"
                  name="clientEmail"
                  value={formData.clientEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Phone */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <label htmlFor="clientPhone" className="block text-sm font-bold text-blue-900 mb-3">
                  Votre Téléphone *
                </label>
                <input
                  type="tel"
                  id="clientPhone"
                  name="clientPhone"
                  value={formData.clientPhone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  placeholder="+225 05 56 08 47 50"
                />
              </div>

              {/* Deadline */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <label htmlFor="deadline" className="block text-sm font-bold text-blue-900 mb-3">
                  Date Limite Souhaitée
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Budget */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <label htmlFor="budget" className="block text-sm font-bold text-blue-900 mb-3">
                Budget (Optionnel)
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                placeholder="Ex: 50,000 FCFA"
              />
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <label htmlFor="description" className="block text-sm font-bold text-blue-900 mb-3">
                Description du Projet *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Décrivez votre projet en détail : idées, couleurs, style, références, etc."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting || !formData.service}
                className="flex-1 btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : submitted ? (
                  <>
                    <Check size={20} />
                    Commande Envoyée !
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    Passer la Commande
                  </>
                )}
              </button>
            </div>

            {/* Info Message */}
            <div className="p-4 bg-blue-900/5 border border-blue-900/20 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-blue-900">Note :</span> Après l'envoi de votre commande, je vous contactera dans les 24 heures pour discuter des détails et vous proposer un devis.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
