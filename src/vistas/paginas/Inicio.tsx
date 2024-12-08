import { useArticuloControlador } from '../../controladores/ArticuloControlador';
import { TarjetaArticulo } from '../componentes/TarjetaArticulo';
import { Categorias } from '../componentes/Categorias';
import { Boletin } from '../componentes/Boletin';

export function Inicio() {
  const { 
    articulos, 
    categoriaActual,
    mostrarArticulo, 
    filtrarPorCategoria 
  } = useArticuloControlador();

  return (
    <main className="container mx-auto px-4 py-8">
      <Categorias 
        categoriaActual={categoriaActual}
        onSeleccionarCategoria={filtrarPorCategoria}
      />
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Últimas Publicaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articulos.map(articulo => (
            <TarjetaArticulo 
              key={articulo.id}
              articulo={articulo}
              onClick={mostrarArticulo}
            />
          ))}
        </div>
      </section>

      <Boletin />
    </main>
  );
}