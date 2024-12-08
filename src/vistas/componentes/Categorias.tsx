interface Props {
  categoriaActual: string;
  onSeleccionarCategoria: (categoria: string) => void;
}

export function Categorias({ categoriaActual, onSeleccionarCategoria }: Props) {
  const categorias = [
    { id: 'todas', nombre: 'Todas' },
    { id: 'general', nombre: 'General' },
    { id: 'programacion', nombre: 'Programación' },
    { id: 'desarrollo-web', nombre: 'Desarrollo Web' }
  ];

  return (
    <section className="mb-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Categorías</h2>
      <div className="flex flex-wrap gap-2">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSeleccionarCategoria(cat.nombre)}
            className={`px-4 py-2 rounded-full transition-colors ${
              categoriaActual === cat.nombre
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-green-100'
            }`}
          >
            {cat.nombre}
          </button>
        ))}
      </div>
    </section>
  );
}