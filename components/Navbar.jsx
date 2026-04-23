'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/menu', label: 'Menú' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-orange-600 ${
      scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-black'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.png"
              alt="Dr. Empanada"
              width={44}
              height={44}
              className="object-contain group-hover:scale-110 transition-transform duration-200"
            />
            <span className="text-xl font-extrabold tracking-tight hidden sm:block">
              <span className="text-orange-500">Dr.</span>
              <span className="text-white">Empanada</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-medium transition-colors ${
                  pathname === href ? 'text-orange-500' : 'text-gray-300 hover:text-orange-500'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="https://wa.me/5491132456209"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-5 rounded-full text-sm transition-all hover:scale-105"
            >
              Pedí ya
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menú"
          >
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-6 h-0.5 bg-current my-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-black/95 backdrop-blur-md border-t border-orange-900 transition-all duration-300 ${isOpen ? 'max-h-72' : 'max-h-0 overflow-hidden'}`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setIsOpen(false)}
            className={`block px-6 py-4 font-medium transition-colors border-b border-gray-900 ${
              pathname === href ? 'text-orange-500' : 'text-gray-300 hover:text-orange-500 hover:bg-gray-950'
            }`}
          >
            {label}
          </Link>
        ))}
        <Link
          href="https://wa.me/5491132456209"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="block px-6 py-4 text-green-400 font-bold hover:bg-gray-950"
        >
          📱 Pedí ya por WhatsApp
        </Link>
      </div>
    </nav>
  )
}
