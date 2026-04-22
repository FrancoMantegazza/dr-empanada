import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contacto - Dr. Empanada',
  description: '¿Tenés alguna consulta? ¡Escribinos! Estamos para ayudarte.',
}

const info = [
  { icon: '📍', label: 'Dirección', value: 'Tu dirección aquí' },
  { icon: '📞', label: 'Teléfono', value: 'Tu número aquí' },
  { icon: '📧', label: 'Email', value: 'tu@email.com' },
  { icon: '🕐', label: 'Horarios', value: 'Lun – Dom: 11:00 – 22:00' },
]

export default function Contacto() {
  return (
    <div className="bg-black min-h-screen">
      {/* Header */}
      <section className="py-28 bg-[radial-gradient(ellipse_at_top,_rgba(255,102,0,0.15),_transparent_70%)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="text-orange-500">Contacto</span>
          </h1>
          <p className="text-xl text-gray-300">¿Tenés alguna consulta? ¡Escribinos, estamos para ayudarte!</p>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-orange-500 mb-8">Encontranos</h2>
              <div className="space-y-4">
                {info.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5 bg-gray-950 rounded-2xl border border-gray-800 hover:border-orange-500 transition-colors"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-orange-500 font-semibold text-xs uppercase tracking-widest mb-0.5">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formulario */}
            <div>
              <h2 className="text-2xl font-bold text-orange-500 mb-8">Envianos un mensaje</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
