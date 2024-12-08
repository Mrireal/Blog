import { useState } from 'react';
import { ModeloArticulo, Articulo } from '../modelos/Articulo';

export function useArticuloControlador() {
  const modelo = new ModeloArticulo();
  const [articulos, setArticulos] = useState<Articulo[]>(modelo.obtenerTodos());
  const [articuloActual, setArticuloActual] = useState<Articulo | null>(null);
  const [categoriaActual, setCategoriaActual] = useState('Todas');

  const mostrarArticulo = (id: number) => {
    const articulo = modelo.obtenerPorId(id);
    if (articulo) {
      setArticuloActual(articulo);
    }
  };

  const filtrarPorCategoria = (categoria: string) => {
    setCategoriaActual(categoria);
    setArticulos(modelo.obtenerPorCategoria(categoria));
  };

  const buscarArticulos = (termino: string) => {
    const resultados = modelo.obtenerTodos().filter(articulo => 
      articulo.titulo.toLowerCase().includes(termino.toLowerCase()) ||
      articulo.contenido.toLowerCase().includes(termino.toLowerCase())
    );
    setArticulos(resultados);
  };

  return {
    articulos,
    articuloActual,
    categoriaActual,
    mostrarArticulo,
    filtrarPorCategoria,
    buscarArticulos
  };
}