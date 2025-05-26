'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Temoignages() {
  const temoins = [
    {
      auteur: 'Fatou Nguema – Locataire à Libreville',
      texte:
        'J’ai trouvé mon appartement en seulement 3 jours grâce à la plateforme. Les photos et les infos étaient très claires.',
    },
    {
      auteur: 'Kevin Ondo – Propriétaire à Owendo',
      texte:
        'Publier mon annonce a été simple et rapide. J’ai pu échanger facilement avec les candidats sérieux.',
    },
    {
      auteur: 'Agence Prestige Immo',
      texte:
        'L’outil de gestion locative nous permet de suivre les dossiers et de mieux communiquer avec nos clients.',
    },
    {
      auteur: 'Sylvie Obiang – Nouvelle locataire',
      texte:
        'L’interface est fluide, les filtres très pratiques. J’ai trouvé un logement en une semaine !',
    },
  ]

  return (
    <section className="py-16 bg-blue-50" id="temoignages">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Témoignages
        </h2>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="pb-10"
        >
          {temoins.map((temoin, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-xl shadow-md text-center mx-4">
                <p className="text-gray-700 mb-4 italic">
                  &ldquo;{temoin.texte}&rdquo;
                </p>
                <span className="block text-sm font-semibold text-blue-700">
                  — {temoin.auteur}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bouton d’appel à témoignage */}
        <div className="text-center mt-6">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300">
            Laisser un témoignage
          </button>
        </div>
      </div>
    </section>
  )
}
