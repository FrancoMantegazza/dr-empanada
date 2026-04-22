export const metadata = {
  title: 'Nosotros - Dr. Empanada',
  description: 'Conocé la historia y los valores detrás de Dr. Empanada.',
}

const valores = [
  { icon: '🌿', titulo: 'Calidad', desc: 'Ingredientes frescos seleccionados cada día sin excepción.' },
  { icon: '🤝', titulo: 'Compromiso', desc: 'Con nuestros clientes y con la excelencia en cada producto.' },
  { icon: '💡', titulo: 'Creatividad', desc: 'Sabores clásicos y combinaciones únicas que sorprenden.' },
  { icon: '❤️', titulo: 'Pasión', desc: 'Amamos lo que hacemos y eso se nota en cada empanada.' },
]

export default function Nosotros() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="py-28 bg-[radial-gradient(ellipse_at_top,_rgba(255,102,0,0.15),_transparent_70%)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Sobre <span className="text-orange-500">nosotros</span>
          </h1>
          <p className="text-xl text-gray-300">La historia detrás de las mejores empanadas de la ciudad</p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Nuestra historia</h2>
              <p className="text-gray-300 mb-5 leading-relaxed text-lg">
                Dr. Empanada nació de una pasión profunda por la gastronomía tradicional argentina.
                Creemos que una buena empanada es mucho más que comida: es cultura, es familia, es identidad.
              </p>
              <p className="text-gray-300 mb-5 leading-relaxed text-lg">
                Con años de experiencia perfeccionando nuestras recetas, cada empanada que sale de nuestra
                cocina está hecha con los mejores ingredientes y una dedicación que se nota en cada bocado.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Hoy ofrecemos una variedad de sabores únicos, manteniendo siempre la esencia artesanal
                que nos caracteriza desde el primer día.
              </p>
            </div>
            <div className="bg-gray-950 rounded-3xl p-16 text-center border border-orange-900">
              <div className="text-9xl mb-6">🫔</div>
              <p className="text-orange-500 font-bold text-xl">Artesanales desde el primer día</p>
              <p className="text-gray-500 mt-2">Gastronomía con identidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nuestros <span className="text-orange-500">valores</span>
          </h2>
          <p className="text-gray-400 text-center mb-14">Lo que guía cada cosa que hacemos</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((v) => (
              <div
                key={v.titulo}
                className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-orange-500 transition-colors text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className="text-orange-500 font-bold text-lg mb-2">{v.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="py-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Nuestra <span className="text-orange-500">misión</span>
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            Llevar a cada cliente la experiencia de una empanada verdaderamente artesanal,
            elaborada con respeto por la tradición y amor por la gastronomía argentina.
          </p>
        </div>
      </section>
    </div>
  )
}
