import Link from 'next/link';

export default function SuitePresidentiellePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">🏰</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Suite Présidentielle</h1>
          <p className="text-xl md:text-2xl text-amber-100">
            L'ultime expérience de luxe et d'élégance
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Image Gallery */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-64 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-lg flex items-center justify-center text-8xl">
                🏰
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-lg flex items-center justify-center text-4xl">
                  🛋️
                </div>
                <div className="h-32 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-lg flex items-center justify-center text-4xl">
                  🛁
                </div>
                <div className="h-32 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-lg flex items-center justify-center text-4xl">
                  🌴
                </div>
                <div className="h-32 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-lg flex items-center justify-center text-4xl">
                  🍾
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
                  La Suite Présidentielle représente l'apogée du luxe et du raffinement. Cette suite 
                  exceptionnelle s'étend sur plus de 80 m² et comprend un salon séparé, une chambre 
                  spacieuse et une terrasse privée avec vue imprenable.
                </p>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Conçue pour les clients les plus exigeants, cette suite offre un service personnalisé, 
                  un jacuzzi privé, et tous les équipements de dernière génération. Le salon peut 
                  accueillir des réunions privées ou des moments de détente en famille.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Profitez d'un service en chambre 24h/24, d'un accès privilégié au spa, et d'une 
                  expérience hôtelière inégalée qui fera de votre séjour un moment inoubliable.
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
                        Lit king-size premium (200cm)
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Salon séparé avec canapé et TV
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        TV écran plat 65" avec home cinéma
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Wi-Fi haut débit illimité
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Bar privé avec sélection premium
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Terrasse privée avec mobilier design
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Bureau exécutif avec équipement
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Système audio haut de gamme
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-800">Salle de bain & Spa</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Salle de bain de luxe
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Jacuzzi privé sur la terrasse
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Douche à jets multiples
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Articles de toilette de luxe
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Peignoirs et chaussons premium
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Sauna privé (sur demande)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Services Exclusifs</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">⭐</span>
                    Service en chambre 24h/24
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">⭐</span>
                    Concierge personnel dédié
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">⭐</span>
                    Accès privilégié au spa et restaurant
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">⭐</span>
                    Petit-déjeuner servi en chambre
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">⭐</span>
                    Service de pressing gratuit
                  </li>
                  <li className="flex items-center">
                    <span className="text-amber-500 mr-2">⭐</span>
                    Transfert aéroport en limousine
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-amber-600 mb-2">249€</div>
                  <div className="text-gray-500">par nuit</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Surface</span>
                    <span className="font-semibold">80 m²</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Capacité</span>
                    <span className="font-semibold">4 personnes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Vue</span>
                    <span className="font-semibold">Panoramique</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Étage</span>
                    <span className="font-semibold">11-15</span>
                  </div>
                </div>

                <Link
                  href="/#reservation"
                  className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition text-center block"
                >
                  Réserver maintenant
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Informations</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Check-in : 14h00 (prioritaire)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Check-out : 12h00 (flexible)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Annulation gratuite jusqu'à 72h avant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Petit-déjeuner inclus + service en chambre</span>
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

