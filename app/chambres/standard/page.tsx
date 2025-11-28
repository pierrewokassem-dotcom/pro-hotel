import Link from 'next/link';

export default function ChambreStandardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">🏨</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Chambre Standard</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Confort et élégance à prix abordable
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Image Gallery */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-8xl">
                🏨
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg flex items-center justify-center text-4xl">
                  🛏️
                </div>
                <div className="h-32 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg flex items-center justify-center text-4xl">
                  🚿
                </div>
                <div className="h-32 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg flex items-center justify-center text-4xl">
                  📺
                </div>
                <div className="h-32 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg flex items-center justify-center text-4xl">
                  🌆
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Description</h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Notre chambre standard offre un confort optimal pour votre séjour. Conçue avec soin, 
                  elle combine élégance et fonctionnalité pour vous offrir une expérience agréable.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Profitez d'une vue sur la ville depuis votre fenêtre, d'un espace de travail pratique 
                  et d'un environnement calme pour vous reposer après une journée bien remplie.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Idéale pour les voyageurs d'affaires comme pour les touristes, cette chambre répond 
                  à tous vos besoins essentiels avec style.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Équipements & Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">Équipements</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Lit double confortable (160cm)
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        TV écran plat 43" avec chaînes internationales
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Wi-Fi haut débit gratuit
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Bureau avec chaise ergonomique
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Coffre-fort
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Climatisation réglable
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">Salle de bain</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Salle de bain privée
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Douche à l'italienne
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Sèche-cheveux
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Articles de toilette de qualité
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Peignoirs et chaussons
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">20000 F CFA</div>
                  <div className="text-gray-500">par nuit</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Surface</span>
                    <span className="font-semibold">20 m²</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Capacité</span>
                    <span className="font-semibold">2 personnes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Vue</span>
                    <span className="font-semibold">Ville</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Étage</span>
                    <span className="font-semibold">2-5</span>
                  </div>
                </div>

                <Link
                  href="/#reservation"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center block"
                >
                  Réserver maintenant
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Informations</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Check-in : 15h00</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Check-out : 11h00</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Annulation gratuite jusqu'à 24h avant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Petit-déjeuner non inclus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/#chambres"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            ← Retour aux chambres
          </Link>
        </div>
      </section>
    </div>
  );
}

