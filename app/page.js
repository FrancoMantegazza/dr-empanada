import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const featured = [
  { img: '/images/menu/carne-suave.png',   nombre: 'Carne Suave',   desc: 'Carne vacuna, cebolla, huevo duro y aceitunas. Un clásico eterno.' },
  { img: '/images/menu/carne-cuchillo.jpg', nombre: 'Carne Cuchillo', desc: 'Cortada a cuchillo, con más textura y sabor en cada bocado.' },
  { img: '/images/menu/cheeseburger.jpg',   nombre: 'Cheeseburguer',  desc: 'El sabor de una hamburguesa clásica en formato empanada.' },
]

const razones = [
  { icon: '📅', titulo: 'Desde 1989', desc: 'Más de 35 años elaborando empanadas artesanales en Villa Devoto.' },
  { icon: '🌿', titulo: 'Materia prima', desc: 'Ingredientes frescos seleccionados para potenciar el sabor.' },
  { icon: '🤌', titulo: 'Masa artesanal', desc: 'Rellenos generosos y masa hecha a mano con dedicación.' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-[0.50]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Viñeta cinematográfica */}
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)'}} />

        {/* Barras letterbox estilo cine */}
        <div className="absolute top-0 left-0 right-0 h-[7vh] bg-black z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[7vh] bg-black z-10" />

        {/* Contenido */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="animate-scale-in">
            <Image
              src="/images/logo.png"
              alt="Dr. Empanada Logo"
              width={130}
              height={130}
              className="object-contain mx-auto mb-6 drop-shadow-2xl"
              priority
            />
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight animate-fade-in-up delay-100 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            <span className="text-orange-500">Dr.</span>
            <span className="text-white">Empanada</span>
          </h1>
          <p className="text-orange-400 font-semibold text-lg mb-3 animate-fade-in-up delay-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            Villa Devoto, CABA · Desde 1989
          </p>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Empanadas artesanales con rellenos generosos y masa hecha a mano. Clásicas y especiales para todos los gustos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
            <Link
              href="https://wa.me/5491132456209"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/30"
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

        {/* Scroll indicator */}
        <div className="absolute bottom-[8vh] left-1/2 -translate-x-1/2 animate-bounce opacity-70 z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* ── Por qué elegirnos ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ¿Por qué <span className="text-orange-500">elegirnos</span>?
            </h2>
            <p className="text-gray-400 text-lg">Sabor, consistencia y satisfacción garantizados</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {razones.map((r, i) => (
              <ScrollReveal key={r.titulo} delay={i * 120}>
                <div className="text-center p-10 bg-black rounded-2xl border border-gray-800 hover:border-orange-500 transition-colors group h-full">
                  <div className="text-5xl mb-5 group-hover:scale-110 transition-transform">{r.icon}</div>
                  <h3 className="text-xl font-bold text-orange-500 mb-3">{r.titulo}</h3>
                  <p className="text-gray-400">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Productos destacados ── */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Las <span className="text-orange-500">favoritas</span>
            </h2>
            <p className="text-gray-400 text-lg">Lo que más nos piden</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <ScrollReveal key={p.nombre} delay={i * 130}>
                <div className="bg-gray-950 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500 transition-all hover:-translate-y-2 group h-full">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={p.img}
                      alt={p.nombre}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-500 mb-2">{p.nombre}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105"
            >
              Ver menú completo
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Galería ── */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestro <span className="text-orange-500">local</span>
            </h2>
            <p className="text-gray-400 text-lg">Melincué 4399, Villa Devoto</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['/images/nosotros/foto1.jpg', '/images/nosotros/foto2.jpg', '/images/nosotros/foto3.jpg'].map((src, i) => (
              <ScrollReveal key={src} delay={i * 100}>
                <div className="relative h-64 rounded-2xl overflow-hidden group">
                  <Image
                    src={src}
                    alt={`Dr. Empanada - foto ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA WhatsApp ── */}
      <section className="py-24 bg-orange-500">
        <ScrollReveal>
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
        </ScrollReveal>
      </section>
    </>
  )
}
