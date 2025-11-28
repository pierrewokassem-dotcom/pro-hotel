'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Room = {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  slug: string;
};

const ROOMS: Room[] = [
  {
    id: '1',
    name: 'Chambre Standard',
    description: 'Chambre confortable avec vue sur la ville',
    price: 20000,
    features: ['Lit double', 'Wi-Fi gratuit', 'TV écran plat', 'Salle de bain privée'],
    image: '🏨',
    slug: 'standard'
  },
  {
    id: '2',
    name: 'Chambre Deluxe',
    description: 'Chambre spacieuse avec balcon et vue panoramique',
    price: 40000,
    features: ['Lit king-size', 'Balcon privé', 'Mini-bar', 'Bain à remous'],
    image: '🏩',
    slug: 'deluxe'
  },
  {
    id: '3',
    name: 'Suite Présidentielle',
    description: 'Suite de luxe avec salon séparé et terrasse',
    price: 80000,
    features: ['Suite complète', 'Terrasse privée', 'Service en chambre', 'Jacuzzi'],
    image: '🏰',
    slug: 'suite-presidentielle'
  },
];

const SERVICES = [
  { icon: '🍽️', title: 'Restaurant', description: 'Cuisine gastronomique avec chef étoilé', slug: 'restaurant' },
  { icon: '🏊', title: 'Piscine', description: 'Piscine extérieure chauffée toute l\'année', slug: 'piscine' },
  { icon: '💆', title: 'Spa & Bien-être', description: 'Centre de bien-être avec massages et soins', slug: 'spa' },
  { icon: '🏋️', title: 'Salle de sport', description: 'Équipements modernes et cours collectifs', slug: 'salle-de-sport' },
  { icon: '🚗', title: 'Parking', description: 'Parking sécurisé gratuit pour tous les clients', slug: 'parking' },
  { icon: '✈️', title: 'Navette aéroport', description: 'Service de navette gratuit vers l\'aéroport', slug: 'navette-aeroport' },
];

const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=800&fit=crop',
    alt: 'Hall d\'entrée de l\'hôtel',
    title: 'Hall d\'entrée'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=800&fit=crop',
    alt: 'Chambre de luxe',
    title: 'Chambre Deluxe'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=800&fit=crop',
    alt: 'Restaurant gastronomique',
    title: 'Restaurant'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=800&fit=crop',
    alt: 'Piscine extérieure',
    title: 'Piscine'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=800&fit=crop',
    alt: 'Spa et bien-être',
    title: 'Spa'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=800&fit=crop',
    alt: 'Salle de sport',
    title: 'Salle de sport'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=800&fit=crop',
    alt: 'Suite présidentielle',
    title: 'Suite Présidentielle'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=800&fit=crop',
    alt: 'Vue panoramique depuis la terrasse',
    title: 'Terrasse'
  },
];

export default function HomePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name || !email || !checkIn || !checkOut || !roomType) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    const payload = {
      name,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      roomType,
    };

    setLoading(true);
    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess('Demande de réservation envoyée avec succès ! Nous vous contacterons sous peu pour confirmer.');
      setName(''); setEmail(''); setPhone(''); setCheckIn(''); setCheckOut(''); setGuests(1); setRoomType('');
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-24 px-4 min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&h=1080&fit=crop"
            alt="Hôtel de luxe"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Bienvenue à ProHotel
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 drop-shadow-md">
            Votre séjour de rêve commence ici
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#reservation"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
            >
              Réserver maintenant
            </Link>
            <a
              href="https://www.google.com/maps/search/?api=1&query=123+Avenue+de+l'Hôtel+75001+Paris+France"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition shadow-lg border-2 border-white/20 flex items-center gap-2"
            >
              <span>📍</span>
              <span>Nous localiser</span>
            </a>
          </div>
        </div>
      </section>

      {/* Chambres Section */}
      <section id="chambres" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Nos Chambres</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez notre sélection de chambres et suites conçues pour votre confort et votre bien-être
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROOMS.map(room => (
              <Link
                key={room.id}
                href={`/chambres/{room.slug}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  {room.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <ul className="space-y-2 mb-4">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-6">
                    <span className="text-3xl font-bold text-blue-600">{room.price}F CFA</span>
                    <span className="text-sm text-gray-500">/ nuit</span>
                  </div>
                  <p className="text-sm text-blue-600 mt-4 font-medium group-hover:underline">
                    Voir les détails →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Nos Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Profitez de nos services premium pour un séjour inoubliable
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <Link
                key={idx}
                href={`/services/${service.slug}`}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition text-center cursor-pointer group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <p className="text-sm text-blue-600 mt-3 font-medium">En savoir plus →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section id="galerie" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Galerie</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Découvrez les espaces de notre hôtel
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_IMAGES.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.id)}
                className="aspect-square relative rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer group shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:brightness-110 transition"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition text-sm font-semibold">
                    {image.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
                aria-label="Fermer"
              >
                ×
              </button>
              <div className="relative w-full h-full">
                <Image
                  src={GALLERY_IMAGES.find(img => img.id === selectedImage)?.src || ''}
                  alt={GALLERY_IMAGES.find(img => img.id === selectedImage)?.alt || ''}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full rounded-lg"
                  sizes="100vw"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
                <p className="text-center font-semibold">
                  {GALLERY_IMAGES.find(img => img.id === selectedImage)?.title}
                </p>
              </div>
              
              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === selectedImage);
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : GALLERY_IMAGES.length - 1;
                  setSelectedImage(GALLERY_IMAGES[prevIndex].id);
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Image précédente"
              >
                ‹
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = GALLERY_IMAGES.findIndex(img => img.id === selectedImage);
                  const nextIndex = currentIndex < GALLERY_IMAGES.length - 1 ? currentIndex + 1 : 0;
                  setSelectedImage(GALLERY_IMAGES[nextIndex].id);
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300 transition bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
                aria-label="Image suivante"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Réservation Section */}
      <section id="reservation" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Réservez votre séjour</h2>
          <p className="text-center text-gray-600 mb-12">
            Remplissez le formulaire ci-dessous et nous vous contacterons pour confirmer votre réservation
          </p>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de personnes *
                </label>
                <input
                  type="number"
                  min="1"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date d'arrivée *
                </label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de départ *
                </label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type de chambre *
                </label>
                <select
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  required
                >
                  <option value="">Sélectionnez un type de chambre</option>
                  {ROOMS.map(room => (
                    <option key={room.id} value={room.id}>
                      {room.name} - {room.price}€/nuit
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Envoi en cours...' : 'Envoyer la demande de réservation'}
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Contactez-nous</h2>
          <p className="text-center text-gray-600 mb-12">
            Nous sommes là pour répondre à toutes vos questions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Adresse</h3>
              <p className="text-gray-600 mb-4">123 Avenue de l'Hôtel<br />Lomé,Togo</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Avenue+de+l'Hôtel+75001+Paris+France"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                Ouvrir dans Google Maps
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">Téléphone</h3>
              <p className="text-gray-600">+228 71 67 97 33</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow text-center">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contact@prohotel.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
