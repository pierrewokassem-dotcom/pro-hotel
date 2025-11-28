import Link from 'next/link';

export default function ParkingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">🚗</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Parking</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Stationnement sécurisé et gratuit
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Parking</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Profitez d'un parking sécurisé et gratuit pour tous les clients de l'hôtel. 
              Notre parking souterrain peut accueillir jusqu'à 150 véhicules et est accessible 
              24h/24 pour votre commodité.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Équipé d'un système de vidéosurveillance et d'un accès contrôlé, votre véhicule 
              est en sécurité pendant toute la durée de votre séjour. Des places de stationnement 
              pour personnes à mobilité réduite sont également disponibles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Caractéristiques</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Parking gratuit pour les clients
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Accès 24h/24
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Vidéosurveillance
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Places PMR disponibles
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Espaces pour vélos
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Borne de recharge électrique
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Informations Pratiques</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Capacité :</span> 150 places
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Hauteur max :</span> 2,10 m
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Accès :</span> Badge à la réception
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Réservation :</span> Non nécessaire
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Tarifs</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-lg mb-1">Clients de l'hôtel</h4>
                <p className="text-2xl font-bold text-green-600">Gratuit</p>
                <p className="text-sm text-gray-500">Pour toute la durée du séjour</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-lg mb-1">Visiteurs</h4>
                <p className="text-2xl font-bold text-blue-600">5€ / jour</p>
                <p className="text-sm text-gray-500">Sur demande à la réception</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Accès</h3>
            <p className="text-gray-600 mb-6">
              Le parking est accessible directement depuis la rue principale. À votre arrivée, 
              présentez-vous à la réception pour obtenir votre badge d'accès. Le parking est 
              situé au sous-sol de l'hôtel, avec un accès direct par ascenseur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition text-center"
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

