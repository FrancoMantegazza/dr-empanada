import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'Menú - Dr. Empanada',
  description: 'Menú completo de Dr. Empanada. Clásicas, especiales y pastelitos artesanales en Villa Devoto.',
}

const clasicas = [
  { img: '/images/menu/carne-suave.png',    nombre: 'Carne Suave',     desc: 'Carne vacuna, cebolla, huevo duro y aceitunas.' },
  { img: '/images/menu/carne-cuchillo.jpg', nombre: 'Carne Cuchillo',  desc: 'Cortada a cuchillo, más textura y sabor.' },
  { img: '/images/menu/carne-picante.jpg',  nombre: 'Carne Picante',   desc: 'Con ají molido y un toque que conquista.' },
  { img: '/images/menu/roque-jamon.jpg',    nombre: 'Roque con Jamón', desc: 'Queso roquefort y jamón, una combinación audaz.' },
  { img: '/images/menu/queso-cebolla.jpg',  nombre: 'Queso y Cebolla', desc: 'Cremosa mezcla de queso con cebolla suave.' },
  { img: '/images/menu/caprese.jpg',        nombre: 'Caprese',         desc: 'Tomate fresco, mozzarella y albahaca.' },
  { img: null,                              nombre: 'Jamón y Queso',   desc: 'Jamón cocido con queso que se derrite en la boca.', emoji: '🧀' },
  { img: '/images/menu/humita.jpg',         nombre: 'Humita',          desc: 'Choclo cremoso con cebolla y morrones.' },
  { img: '/images/menu/verdura.jpg',        nombre: 'Verdura',         desc: 'Mix de vegetales frescos salteados con especias.' },
  { img: '/images/menu/pollo.jpg',          nombre: 'Pollo',           desc: 'Pollo tierno desmenuzado con condimentos.' },
]

const especiales = [
  { img: '/images/menu/cheeseburger.jpg',   nombre: 'Cheeseburguer',       desc: 'El sabor de una hamburguesa clásica en empanada.' },
  { img: '/images/menu/provolone.jpg',      nombre: 'Provolone',           desc: 'Queso provolone fundido con hierbas.' },
  { img: null,                              nombre: 'Bondiola BBQ',        desc: 'Bondiola tierna con salsa BBQ ahumada.', emoji: '🍖' },
  { img: '/images/menu/vacio.jpg',          nombre: 'Vacío y Provo',       desc: 'Vacío jugoso con queso provolone.' },
  { img: '/images/menu/matambre-pizza.jpg', nombre: 'Matambre a la Pizza', desc: 'Matambre con salsa, mozzarella y orégano.' },
]

const pastelitos = [
  { img: '/images/menu/pastelito-ddl.jpg',      nombre: 'Pastelito DDL',      desc: 'Relleno de dulce de leche, frito y crocante.' },
  { img: '/images/menu/pastelito-batata.jpg',   nombre: 'Pastelito Batata',   desc: 'Relleno de dulce de batata, tradicional.' },
  { img: '/images/menu/pastelito-membrillo.jpg',nombre: 'Pastelito Membrillo',desc: 'Relleno de dulce de membrillo.' },
  { img: null,                                  nombre: 'Chocotorta',         desc: 'Postre clásico argentino, cremoso e irresistible.', emoji: '🍫' },
]

function ProductCard({ img, nombre, desc, emoji }) {
  return (
    <div className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500 transition-all hover:-translate-y-1 group">
      <div className="relative h-44 overflow-hidden bg-black">
        {img ? (
          <Image
            src={img}
            alt={nombre}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl bg-gray-900">
            {emoji}
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-white mb-1">{nombre}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

function SectionTitle({ children }) {
  return (
    <ScrollReveal>
      <div className="flex items-center gap-4 mb-10">
        <div className="h-px flex-1 bg-gray-800" />
        <h2 className="text-3xl font-bold text-orange-500 whitespace-nowrap">{children}</h2>
        <div className="h-px flex-1 bg-gray-800" />
      </div>
    </ScrollReveal>
  )
}

export default function Menu() {
  return (
    <div className="bg-black min-h-screen">
      {/* ── Header ── */}
      <section className="py-28 bg-[radial-gradient(ellipse_at_top,_rgba(255,102,0,0.18),_transparent_70%)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in-up">
            Nuestro <span className="text-orange-500">Menú</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up delay-200">
            Elaboradas artesanalmente. Disponibles fritas en grasa o al horno.
          </p>
          <div className="animate-fade-in-up delay-300">
            <Link
              href="https://wa.me/5491132456209"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/20"
            >
              📱 Pedí ahora por WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* ── Clásicas ── */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>🫔 Clásicas</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {clasicas.map((p, i) => (
              <ScrollReveal key={p.nombre} delay={i * 60}>
                <ProductCard {...p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Especiales ── */}
      <section className="py-14 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>⭐ Especiales</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {especiales.map((p, i) => (
              <ScrollReveal key={p.nombre} delay={i * 80}>
                <ProductCard {...p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pastelitos y Postres ── */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>🍮 Pastelitos y Postres</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pastelitos.map((p, i) => (
              <ScrollReveal key={p.nombre} delay={i * 80}>
                <ProductCard {...p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-24">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8">
              <p className="text-orange-400 font-medium text-lg mb-2">¿Ya sabés lo que querés?</p>
              <p className="text-gray-300 mb-6">Escribinos por WhatsApp y te atendemos al instante.</p>
              <Link
                href="https://wa.me/5491132456209"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105"
              >
                📱 Pedí ya
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  )
}
