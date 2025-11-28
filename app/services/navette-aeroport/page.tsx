import Link from 'next/link';

export default function NavetteAeroportPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">✈️</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Navette Aéroport</h1>
          <p className="text-xl md:text-2xl text-indigo-100">
            Transport confortable vers l'aéroport
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Service de Navette</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Voyagez en toute sérénité avec notre service de navette gratuit vers l'aéroport. 
              Nos véhicules confortables et climatisés vous emmènent directement à l'aéroport 
              ou vous récupèrent à votre arrivée.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Disponible pour tous les clients de l'hôtel, ce service vous permet de commencer 
              ou terminer votre séjour dans les meilleures conditions, sans stress lié au transport.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Service Inclus</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Navette gratuite pour les clients
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Aller et retour
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Véhicules confortables
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Assistance bagages
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Service 7j/7
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Réservation à l'avance
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Horaires</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Départs de l'hôtel :</span>
                    <p className="text-sm text-gray-500">Toutes les heures de 5h00 à 22h00</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Départs de l'aéroport :</span>
                    <p className="text-sm text-gray-500">Sur demande, selon les arrivées</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <div>
                    <span className="font-semibold">Durée du trajet :</span>
                    <p className="text-sm text-gray-500">Environ 30 minutes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Comment Réserver</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-lg mb-2">À la réservation</h4>
                <p className="text-gray-600">
                  Indiquez votre besoin de navette lors de la réservation de votre chambre. 
                  Nous organiserons le transport selon vos horaires de vol.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-lg mb-2">À l'arrivée</h4>
                <p className="text-gray-600">
                  Contactez la réception au moins 24h à l'avance pour réserver votre navette. 
                  Nous adapterons les horaires selon vos besoins.
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-lg mb-2">Informations nécessaires</h4>
                <p className="text-gray-600">
                  Numéro de vol, heure d'arrivée/départ, nombre de passagers et de bagages.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Informations Importantes</h3>
            <div className="space-y-3 text-gray-600 mb-6">
              <p>
                • La navette est gratuite pour tous les clients résidant à l'hôtel
              </p>
              <p>
                • Une réservation est obligatoire au moins 24h à l'avance
              </p>
              <p>
                • En cas de retard de vol, contactez immédiatement la réception
              </p>
              <p>
                • Les bagages sont limités à 2 par personne (valises standard)
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#reservation"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition text-center"
              >
                Réserver avec navette
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

