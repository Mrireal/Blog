import React from 'react';
import { useArticuloControlador } from './controladores/ArticuloControlador';
import { Encabezado } from './vistas/componentes/Encabezado';
import { Inicio } from './vistas/paginas/Inicio';

function App() {
  const { buscarArticulos } = useArticuloControlador();

  return (
    <div className="min-h-screen bg-gray-100">
      <Encabezado onBuscar={buscarArticulos} />
      <Inicio />
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">© 2024 Mi Blog. Creado por Israel González.</p>
          <div className="mt-4 text-gray-400">
            <a href="#" className="hover:text-white mx-2 transition-colors">Política de Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-white mx-2 transition-colors">Términos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-white mx-2 transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;