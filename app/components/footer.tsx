import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ProHotel</h3>
            <p className="text-gray-400 text-sm">
              Votre destination de choix pour un séjour inoubliable. Confort, élégance et service exceptionnel.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Accueil</Link></li>
              <li><Link href="/#chambres" className="hover:text-white transition">Chambres</Link></li>
              <li><Link href="/#services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/#galerie" className="hover:text-white transition">Galerie</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/#contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/#reservation" className="hover:text-white transition">Réservation</Link></li>
              <li><Link href="/terms" className="hover:text-white transition">CGU</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Confidentialité</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Avenue de l'Hôtel</li>
              <li>75001 Paris, France</li>
              <li>+33 1 23 45 67 89</li>
              <li><a href="mailto:contact@prohotel.com" className="hover:text-white transition">contact@prohotel.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} ProHotel. Tous droits réservés.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">📘</a>
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">🐦</a>
            <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">📷</a>
          </div>
        </div>
      </div>
    </footer>
  );
}