import Image from 'next/image';

export default function LogementsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tous les logements disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map(id => (
          <div key={id} className="border rounded-lg p-4 hover:shadow-lg">
            <Image
              src="/placeholder.jpg"
              alt="Logement"
              width={400}
              height={250}
              className="rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">Nom du logement</h2>
            <p>Libreville • 300 000 FCFA</p>
          </div>
        ))}
      </div>
    </main>
  );
}
