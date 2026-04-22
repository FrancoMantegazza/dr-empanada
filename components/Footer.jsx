import Link from 'next/link'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/productos', label: 'Productos' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-orange-900 text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-2xl font-extrabold mb-3">
              <span className="text-orange-500">Dr.</span>
              <span className="text-white">Empanada</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empanadas artesanales hechas con los mejores ingredientes y mucho amor. Porque una buena empanada es medicina para el alma.
            </p>
          </div>

          <div>
            <h4 className="text-orange-500 font-semibold mb-4 uppercase text-xs tracking-widest">Navegación</h4>
            <ul className="space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-orange-500 font-semibold mb-4 uppercase text-xs tracking-widest">Contacto</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span>📍</span> Tu dirección aquí
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> Tu teléfono aquí
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span> Lun – Dom: 11:00 – 22:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Dr. Empanada. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
