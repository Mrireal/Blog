import { Articulo } from '../../modelos/Articulo';

interface Props {
  articulo: Articulo;
  onClick: (id: number) => void;
}

export function TarjetaArticulo({ articulo, onClick }: Props) {
  return (
    <article 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      {articulo.imagen && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={articulo.imagen} 
            alt={articulo.titulo}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
              {articulo.categoria}
            </span>
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-green-600 transition-colors">
          {articulo.titulo}
        </h3>
        <p className="text-gray-600 mb-4">{articulo.resumen}</p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <span className="font-medium">{articulo.autor}</span>
          </span>
          <span>{new Date(articulo.fecha).toLocaleDateString('es-ES')}</span>
        </div>
        <button
          onClick={() => onClick(articulo.id)}
          className="w-full text-center bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Leer más
        </button>
      </div>
    </article>
  );
}