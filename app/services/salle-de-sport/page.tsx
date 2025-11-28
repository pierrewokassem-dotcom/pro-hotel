import Link from 'next/link';

export default function SalleDeSportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">🏋️</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Salle de Sport</h1>
          <p className="text-xl md:text-2xl text-red-100">
            Gardez la forme pendant votre séjour
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Salle de Sport</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Maintenez votre routine d'entraînement dans notre salle de sport moderne et entièrement équipée. 
              Ouverte 24h/24, elle vous permet de vous entraîner à tout moment de la journée selon vos disponibilités.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Que vous préfériez le cardio, la musculation ou les cours collectifs, notre équipement de dernière 
              génération et nos coachs professionnels sont là pour vous accompagner dans votre pratique sportive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Équipements</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Tapis de course (8 unités)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Vélos elliptiques
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Machines de musculation
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Poids libres et haltères
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Zone d'étirement
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Vestiaires avec douches
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Cours Collectifs</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Yoga</span>
                    <p className="text-sm text-gray-500">Lundi, Mercredi, Vendredi - 8h00</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Pilates</span>
                    <p className="text-sm text-gray-500">Mardi, Jeudi - 9h00</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Cardio Training</span>
                    <p className="text-sm text-gray-500">Tous les jours - 18h00</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Stretching</span>
                    <p className="text-sm text-gray-500">Dimanche - 10h00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Horaires & Accès</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Horaires</h4>
                <p className="text-gray-600">Ouvert 24h/24, 7j/7</p>
                <p className="text-sm text-gray-500 mt-2">
                  Accès libre pour tous les clients de l'hôtel
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Équipement</h4>
                <p className="text-gray-600">Serviettes fournies</p>
                <p className="text-sm text-gray-500 mt-2">
                  Casiers disponibles dans les vestiaires
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Informations</h3>
            <p className="text-gray-600 mb-6">
              L'accès à la salle de sport est gratuit pour tous les clients. Pour les cours collectifs, 
              une réservation est recommandée. Contactez la réception pour plus d'informations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition text-center"
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

