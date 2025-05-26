"use client"

import { Menu, X, Lock } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-6 bg-blue-100 shadow-md sticky top-0 z-30">
      {/* Logo / Nom du site */}
      <div className="text-xl font-bold text-blue-700">
        <Link href="/">LocaGabon</Link>
      </div>

      {/* Menu de navigation (desktop) */}
      <nav className="hidden md:flex space-x-6 text-sm items-center text-gray-800">
        <Link href="/" className="hover:text-blue-600">Accueil</Link>
        <Link href="/logements" className="hover:text-blue-600">Logements</Link>
        <Link href="/recherche" className="hover:text-blue-600">Recherche</Link>
        <Link href="/favoris" className="hover:text-blue-600">Favoris</Link>
        <Link href="/contact" className="hover:text-blue-600">Contact</Link>
      </nav>

      {/* Actions (connexion + CTA) */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/login" className="flex items-center gap-1 text-sm text-gray-800 hover:text-blue-600">
          <Lock size={16} />
          Connexion
        </Link>
        <Link href="/register" className=" shadow-md animate-pulse hover:bg-yellow-600  bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          {"S'inscrire"}
        </Link>
      </div>

      {/* Menu burger mobile */}
      <button
        className="md:hidden text-gray-700 z-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu mobile */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col space-y-4 p-6 md:hidden z-20 text-gray-800">
          <Link href="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link href="/logements" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Logements</Link>
          <Link href="/recherche" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Recherche</Link>
          <Link href="/favoris" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Favoris</Link>
          <Link href="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
          
          <Link href="/login" className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded" onClick={() => setIsOpen(false)}>
            <Lock size={16} />
            Connexion
          </Link>
          <Link href="/register" className=" shadow-md animate-pulse hover:bg-yellow-600  bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          {"S'inscrire"}
        </Link>
        </div>
      )}
    </header>
  );
}
