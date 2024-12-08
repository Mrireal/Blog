import { Search } from 'lucide-react';
import { useState } from 'react';

interface Props {
  onBuscar: (termino: string) => void;
}

export function Encabezado({ onBuscar }: Props) {
  const [busqueda, setBusqueda] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBuscar(busqueda);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-green-600 to-green-400 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Mi Blog 2024</h1>
            <nav>
              <ul className="flex space-x-8">
                <li><a href="#" className="hover:text-green-100 font-medium transition-colors">Inicio</a></li>
                <li><a href="#" className="hover:text-green-100 font-medium transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-green-100 font-medium transition-colors">Admin</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              placeholder="Buscar publicaciones..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 h-5 w-5" />
          </form>
        </div>
      </div>
    </header>
  );
}