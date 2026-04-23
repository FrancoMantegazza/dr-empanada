import Link from 'next/link'

export const metadata = {
  title: 'Menú - Dr. Empanada',
  description: 'Menú completo de Dr. Empanada. Clásicas, especiales y pastelitos artesanales en Villa Devoto.',
}

const clasicas = [
  { emoji: '🥩', nombre: 'Carne Suave', desc: 'Carne vacuna, cebolla, huevo duro y aceitunas.' },
  { emoji: '🔪', nombre: 'Carne Cuchillo', desc: 'Carne cortada a cuchillo, más textura y sabor.' },
  { emoji: '🌶️', nombre: 'Carne Picante', desc: 'Carne con ají molido y un toque que conquista.' },
  { emoji: '🧀', nombre: 'Roque con Jamón', desc: 'Queso roquefort y jamón, una combinación audaz.' },
  { emoji: '🧅', nombre: 'Queso y Cebolla', desc: 'Cremosa mezcla de queso con cebolla suave.' },
  { emoji: '🍅', nombre: 'Caprese', desc: 'Tomate fresco, mozzarella y albahaca.' },
  { emoji: '🧀', nombre: 'Jamón y Queso', desc: 'Jamón cocido con queso que se derrite en la boca.' },
  { emoji: '🌽', nombre: 'Humita', desc: 'Choclo cremoso con cebolla y morrones. Clásico del norte.' },
  { emoji: '🥦', nombre: 'Verdura', desc: 'Mix de vegetales frescos salteados con especias.' },
  { emoji: '🍗', nombre: 'Pollo', desc: 'Pollo tierno desmenuzado con condimentos de la casa.' },
]

const especiales = [
  { emoji: '🍔', nombre: 'Cheeseburguer', desc: 'El sabor de una hamburguesa clásica en formato empanada.' },
  { emoji: '🫕', nombre: 'Provolone', desc: 'Queso provolone fundido con hierbas.' },
  { emoji: '🍖', nombre: 'Bondiola BBQ', desc: 'Bondiola tierna con salsa BBQ ahumada.' },
  { emoji: '🥩', nombre: 'Vacío y Provo', desc: 'Vacío jugoso con queso provolone.' },
  { emoji: '🍕', nombre: 'Matambre a la Pizza', desc: 'Matambre con salsa, mozzarella y orégano.' },
]

const pastelitos = [
  { emoji: '🍮', nombre: 'Pastelito DDL', desc: 'Relleno de dulce de leche, frito y crocante.' },
  { emoji: '🍠', nombre: 'Pastelito Batata', desc: 'Relleno de dulce de batata, tradicional.' },
  { emoji: '🟡', nombre: 'Pastelito Membrillo', desc: 'Relleno de dulce de membrillo, una delicia.' },
  { emoji: '🍫', nombre: 'Chocotorta', desc: 'Postre clásico argentino, cremoso e irresistible.' },
]

function ProductCard({ emoji, nombre, desc }) {
  return (
    <div className="bg-gray-950 rounded-2xl p-6 border border-gray-800 hover:border-orange-500 transition-all hover:-translate-y-1 group">
      <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform">{emoji}</div>
      <h3 className="text-lg font-bold text-white mb-1">{nombre}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

export default function Menu() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="py-28 bg-[radial-gradient(ellipse_at_top,_rgba(255,102,0,0.15),_transparent_70%)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Nuestro <span className="text-orange-500">Menú</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Elaboradas artesanalmente. Disponibles fritas en grasa o al horno.
          </p>
          <Link
            href="https://wa.me/5491132456209"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105"
          >
            📱 Pedí ahora por WhatsApp
          </Link>
        </div>
      </section>

      {/* Clásicas */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gray-800" />
            <h2 className="text-3xl font-bold text-orange-500 whitespace-nowrap">🫔 Clásicas</h2>
            <div className="h-px flex-1 bg-gray-800" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {clasicas.map((p) => <ProductCard key={p.nombre} {...p} />)}
          </div>
        </div>
      </section>

      {/* Especiales */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gray-800" />
            <h2 className="text-3xl font-bold text-orange-500 whitespace-nowrap">⭐ Especiales</h2>
            <div className="h-px flex-1 bg-gray-800" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {especiales.map((p) => <ProductCard key={p.nombre} {...p} />)}
          </div>
        </div>
      </section>

      {/* Pastelitos y Postres */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gray-800" />
            <h2 className="text-3xl font-bold text-orange-500 whitespace-nowrap">🍮 Pastelitos y Postres</h2>
            <div className="h-px flex-1 bg-gray-800" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pastelitos.map((p) => <ProductCard key={p.nombre} {...p} />)}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8">
            <p className="text-orange-400 font-medium text-lg mb-2">¿Ya sabés lo que querés?</p>
            <p className="text-gray-300 mb-6">Escribinos por WhatsApp y te atendemos al instante.</p>
            <Link
              href="https://wa.me/5491132456209"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all"
            >
              📱 Pedí ya
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
