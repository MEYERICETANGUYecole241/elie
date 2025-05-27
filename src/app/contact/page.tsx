export default function ContactPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Contactez-nous</h1>
      <form className="space-y-4 max-w-lg">
        <input type="text" placeholder="Votre nom" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Votre email" className="w-full p-2 border rounded" />
        <input type="text" placeholder="Sujet" className="w-full p-2 border rounded" />
        <textarea placeholder="Votre message" className="w-full p-2 border rounded h-32" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Envoyer
        </button>
      </form>
    </main>
  );
}
