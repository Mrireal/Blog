import { useState } from 'react';

export function Boletin() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Suscrito:', email);
    setEmail('');
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Suscríbete a nuestro boletín</h2>
        <p className="text-gray-600 mb-6">
          Recibe las últimas actualizaciones y recursos directamente en tu correo electrónico.
          ¡No te pierdas ninguna novedad!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  );
}