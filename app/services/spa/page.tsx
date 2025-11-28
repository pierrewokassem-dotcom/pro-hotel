import Link from 'next/link';

export default function SpaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">💆</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Spa & Bien-être</h1>
          <p className="text-xl md:text-2xl text-pink-100">
            Détente et relaxation absolue
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Notre Centre de Bien-être</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Plongez dans un univers de détente et de sérénité dans notre spa de luxe. 
              Notre équipe de thérapeutes expérimentés vous propose une gamme complète de soins 
              pour le corps et l'esprit, utilisant des produits naturels et de qualité supérieure.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Que vous recherchiez un massage relaxant, un soin du visage, ou une expérience 
              complète de bien-être, notre spa est conçu pour vous offrir un moment de pure évasion 
              et de régénération.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Nos Soins</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Massages relaxants (60/90 min)
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Soins du visage
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Enveloppements corporels
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Hammam et sauna
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Soins aux pierres chaudes
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Packages bien-être
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Équipements</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">•</span>
                  Hammam traditionnel
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">•</span>
                  Sauna finlandais
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">•</span>
                  Jacuzzi
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">•</span>
                  Salle de relaxation
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">•</span>
                  5 cabines de soins
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Tarifs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">Massage Relaxant</h4>
                <p className="text-2xl font-bold text-purple-600 mb-1">80€</p>
                <p className="text-sm text-gray-500">60 minutes</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">Soin du Visage</h4>
                <p className="text-2xl font-bold text-purple-600 mb-1">65€</p>
                <p className="text-sm text-gray-500">50 minutes</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-2">Package Détente</h4>
                <p className="text-2xl font-bold text-purple-600 mb-1">150€</p>
                <p className="text-sm text-gray-500">2h30 de soins</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Réservation</h3>
            <p className="text-gray-600 mb-6">
              Réservez votre soin à l'avance pour garantir votre créneau. Les réservations peuvent être 
              effectuées à la réception ou par téléphone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+33123456789"
                className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition text-center"
              >
                Réserver par téléphone
              </a>
              <Link
                href="/#contact"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition text-center"
              >
                Nous contacter
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

