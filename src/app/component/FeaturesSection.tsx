// components/FeaturesSection.tsx

const features = [
  {
    icon: "🏡",
    title: "Biens en location",
    description: "Parcourez une large sélection de maisons, studios et appartements disponibles.",
    link: "#locations"
  },
  {
    icon: "📆",
    title: "Prise de rendez-vous",
    description: "Planifiez vos visites facilement grâce à notre agenda intégré.",
    link: "#rendezvous"
  },
  {
    icon: "💬",
    title: "Messagerie instantanée",
    description: "Discutez directement avec les propriétaires ou locataires via notre messagerie sécurisée.",
    link: "#chat"
  },
  {
    icon: "🧾",
    title: "Dossiers & documents",
    description: "Téléchargez ou gérez vos contrats de location, quittances et pièces justificatives.",
    link: "#documents"
  },
  {
    icon: "⭐",
    title: "Avis & notations",
    description: "Consultez ou laissez des avis sur les logements ou les bailleurs.",
    link: "#avis"
  },
  {
    icon: "🛠️",
    title: "Suivi des demandes",
    description: "Signalez un souci ou suivez les réparations en cours depuis votre espace personnel.",
    link: "#support"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Fonctionnalités principales</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a href={feature.link} className="text-blue-700 hover:underline font-medium">
                En savoir plus →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
