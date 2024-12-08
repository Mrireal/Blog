export interface Articulo {
  id: number;
  titulo: string;
  contenido: string;
  autor: string;
  fecha: Date;
  imagen?: string;
  categoria: string;
  resumen: string;
}

export class ModeloArticulo {
  private articulos: Articulo[] = [
    {
      id: 1,
      titulo: "Bienvenidos a mi Blog",
      contenido: "Este es el primer artículo de nuestro blog. Aquí compartiremos contenido interesante sobre tecnología, programación y desarrollo web. Esperamos que encuentres útil toda la información que compartiremos.",
      resumen: "Una cálida bienvenida a nuestro espacio de tecnología y programación.",
      autor: "Israel González",
      fecha: new Date(),
      categoria: "General",
      imagen: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      titulo: "¿Cómo Empezar a Programar?",
      contenido: "La programación es una habilidad esencial en el mundo moderno. Comenzar puede parecer abrumador, pero con los recursos adecuados y práctica constante, cualquiera puede aprender.",
      resumen: "Guía básica para iniciarse en el mundo de la programación.",
      autor: "Israel González",
      fecha: new Date(),
      categoria: "Programación",
      imagen: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      titulo: "Mejores Prácticas en Desarrollo Web",
      contenido: "El desarrollo web moderno requiere seguir ciertas prácticas y estándares. En este artículo exploraremos las mejores prácticas actuales.",
      resumen: "Descubre las mejores prácticas para el desarrollo web moderno.",
      autor: "Israel González",
      fecha: new Date(),
      categoria: "Desarrollo Web",
      imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
    }
  ];

  obtenerTodos(): Articulo[] {
    return this.articulos;
  }

  obtenerPorId(id: number): Articulo | undefined {
    return this.articulos.find(articulo => articulo.id === id);
  }

  obtenerPorCategoria(categoria: string): Articulo[] {
    if (categoria === 'Todas') {
      return this.articulos;
    }
    return this.articulos.filter(articulo => articulo.categoria === categoria);
  }
}