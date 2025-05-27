export default function FavorisPage() {
  type Logement = {
    id: number;
    titre: string;
    imageUrl: string;
  };

  const favoris: Logement[] = [];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mes logements favoris</h1>
      {favoris.length === 0 ? (
        <p>Vous n’avez pas encore ajouté de favoris.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favoris.map((fav, index) => (
            <div key={index} className="border rounded p-4">
              <h2 className="text-lg font-semibold">{fav.titre}</h2>
              <p>Ville – Prix FCFA</p>
              <button className="text-red-500 mt-2">Retirer</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
