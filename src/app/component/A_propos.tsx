import React from 'react'
import Image from 'next/image'

export default function A_propos() {
  return (
    <div>
      {/* Titre principal */}
      <section className="px-6 py-6 bg-blue-50 mt-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center pb-6">
          À propos de LocaGabon
        </h1>
      </section>

      {/* Section principale avec image et texte */}
      <section className="px-6 py-6 bg-blue-50">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Colonne image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/image2.svg"
              alt="Illustration de la plateforme immobilière"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          
          {/* Colonne texte */}
          <div className="w-full md:w-1/2 text-left">
            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>LocaGabon</strong> est une plateforme moderne de location immobilière, conçue pour simplifier 
              la recherche de logements. Que vous soyez propriétaire ou locataire, notre objectif est de vous offrir 
              une expérience fluide, sécurisée et transparente. Grâce à notre interface intuitive, trouvez facilement 
              un logement adapté à vos besoins ou mettez votre bien en location en quelques clics. Nous croyons en 
              une location accessible, humaine et connectée.
            </p>

            {/* Bouton centré */}
            <div className="flex justify-center">
              <button className="bg-blue-900 text-white px-6 py-3 rounded-full animate-pulse hover:bg-blue-200 hover:text-black transition-colors duration-300">
                Explorer les logements
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
