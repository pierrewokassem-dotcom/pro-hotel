import Link from 'next/link';

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">🍽️</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Restaurant Gastronomique</h1>
          <p className="text-xl md:text-2xl text-orange-100">
            Une expérience culinaire exceptionnelle
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Restaurant</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Découvrez notre restaurant gastronomique dirigé par un chef étoilé. Nous proposons une cuisine raffinée 
              mettant en valeur les meilleurs produits locaux et de saison. Chaque plat est une œuvre d'art culinaire 
              préparée avec passion et créativité.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Notre menu évolue au fil des saisons pour vous offrir une expérience unique à chaque visite. 
              Que ce soit pour un déjeuner d'affaires, un dîner romantique ou une célébration spéciale, 
              notre équipe est là pour rendre votre moment inoubliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Horaires</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Petit-déjeuner</span>
                  <span className="font-semibold">7h00 - 11h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Déjeuner</span>
                  <span className="font-semibold">12h00 - 15h00</span>
                </li>
                <li className="flex justify-between">
                  <span>Dîner</span>
                  <span className="font-semibold">19h00 - 23h00</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Spécialités</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Cuisine française moderne
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Menu végétarien disponible
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Carte des vins sélectionnée
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Options sans gluten
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Réservation</h3>
            <p className="text-gray-600 mb-6">
              Pour réserver une table, contactez-nous directement ou utilisez notre formulaire de réservation en ligne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#reservation"
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition text-center"
              >
                Réserver une table
              </Link>
              <a
                href="tel:+33123456789"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition text-center"
              >
                Appeler : +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            href="/#services"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Retour aux services
          </Link>
        </div>
      </section>
    </div>
  );
}

