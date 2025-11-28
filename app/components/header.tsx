'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
            ProHotel
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              Accueil
            </Link>
            <Link href="/#chambres" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              Chambres
            </Link>
            <Link href="/#services" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/#galerie" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              Galerie
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
            <Link href="/#reservation" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Réserver
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3">
            <Link href="/" className="block text-sm font-medium text-gray-700 hover:text-blue-600">
              Accueil
            </Link>
            <Link href="/#chambres" className="block text-sm font-medium text-gray-700 hover:text-blue-600">
              Chambres
            </Link>
            <Link href="/#services" className="block text-sm font-medium text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/#galerie" className="block text-sm font-medium text-gray-700 hover:text-blue-600">
              Galerie
            </Link>
            <Link href="/#contact" className="block text-sm font-medium text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <Link href="/#reservation" className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
              Réserver
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}