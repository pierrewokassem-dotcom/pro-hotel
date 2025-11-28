import Link from 'next/link';

export default function PiscinePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">🏊</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Piscine</h1>
          <p className="text-xl md:text-2xl text-cyan-100">
            Détente et rafraîchissement toute l'année
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Piscine</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Profitez de notre magnifique piscine extérieure chauffée, accessible toute l'année. 
              Que vous souhaitiez faire quelques longueurs pour rester en forme ou simplement vous détendre 
              au bord de l'eau, notre piscine est l'endroit idéal.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Entourée d'un espace verdoyant avec des transats et des parasols, la piscine offre un cadre 
              paisible pour se ressourcer. Un bar de piscine est également disponible pour vous servir 
              des boissons fraîches et des snacks légers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Caractéristiques</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Piscine chauffée (28°C)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Dimensions : 25m x 12m
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Accès 24h/24 pour les clients
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Transats et parasols gratuits
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Bar de piscine
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Règles & Sécurité</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Douche obligatoire avant l'accès à la piscine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Surveillance assurée de 8h à 22h</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Accès interdit aux enfants non accompagnés</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Serviettes disponibles à la réception</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Informations</h3>
            <p className="text-gray-600 mb-4">
              La piscine est accessible gratuitement à tous les clients de l'hôtel. 
              Pour toute question ou réservation d'espace pour un événement privé, contactez la réception.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition text-center"
              >
                Nous contacter
              </Link>
              <Link
                href="/#reservation"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition text-center"
              >
                Réserver une chambre
              </Link>
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

