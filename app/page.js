import Link from 'next/link'

const featured = [
  { emoji: '🥩', nombre: 'Carne Suave', desc: 'Relleno de carne vacuna jugosa con cebolla, huevo duro y aceitunas. Un clásico que nunca falla.' },
  { emoji: '🔪', nombre: 'Carne Cuchillo', desc: 'Carne cortada a cuchillo, con más textura y sabor en cada bocado.' },
  { emoji: '🍔', nombre: 'Cheeseburguer', desc: 'Nuestra especial favorita: el sabor de una hamburguesa en formato empanada.' },
]

const razones = [
  { icon: '📅', titulo: 'Desde 1989', desc: 'Más de 35 años elaborando empanadas artesanales en Villa Devoto.' },
  { icon: '🌿', titulo: 'Materia prima de calidad', desc: 'Ingredientes frescos seleccionados para potenciar el sabor en cada bocado.' },
  { icon: '🤌', titulo: 'Masa artesanal', desc: 'Rellenos generosos y masa hecha a mano con dedicación y consistencia.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,102,0,0.15),_transparent_70%)]" />
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <div className="text-8xl mb-6">🫔</div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight">
            <span className="text-orange-500">Dr.</span>
            <span className="text-white">Empanada</span>
          </h1>
          <p className="text-lg md:text-xl text-orange-400 font-medium mb-3">Villa Devoto, CABA · Desde 1989</p>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Empanadas artesanales con rellenos generosos y masa hecha a mano. Clásicas y especiales para todos los gustos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/5491132456209"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/20"
            >
              📱 Pedí ya
            </Link>
            <Link
              href="/menu"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black font-bold py-4 px-10 rounded-full text-lg transition-all"
            >
              Ver menú
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            ¿Por qué <span className="text-orange-500">elegirnos</span>?
          </h2>
          <p className="text-gray-400 text-center mb-14 text-lg">Sabor, consistencia y satisfacción garantizados</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {razones.map((r) => (
              <div
                key={r.titulo}
                className="text-center p-10 bg-black rounded-2xl border border-gray-800 hover:border-orange-500 transition-colors group"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform">{r.icon}</div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">{r.titulo}</h3>
                <p className="text-gray-400">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destacadas */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Las <span className="text-orange-500">favoritas</span>
          </h2>
          <p className="text-gray-400 text-center mb-14 text-lg">Lo que más nos piden</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((p) => (
              <div
                key={p.nombre}
                className="bg-gray-950 rounded-2xl p-8 border border-gray-800 hover:border-orange-500 transition-all hover:-translate-y-2 group"
              >
                <div className="text-6xl mb-5 text-center group-hover:scale-110 transition-transform">{p.emoji}</div>
                <h3 className="text-xl font-bold text-orange-500 mb-2">{p.nombre}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105"
            >
              Ver menú completo
            </Link>
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-24 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">¿Listo para pedir?</h2>
          <p className="text-black/75 text-xl mb-10">Escribinos por WhatsApp y te atendemos al instante.</p>
          <Link
            href="https://wa.me/5491132456209"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-gray-900 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105"
          >
            📱 Pedí ya por WhatsApp
          </Link>
        </div>
      </section>
    </>
  )
}
