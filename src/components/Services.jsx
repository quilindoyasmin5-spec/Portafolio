const services = [
  { name: 'Asesoría personal', text: 'Orientación individual para encontrar el servicio adecuado.' },
  { name: 'Imagen y estilo', text: 'Detalles de presentación para una experiencia más especial.' },
  { name: 'Atención personalizada', text: 'Un servicio cercano, organizado y adaptado a cada necesidad.' },
]

function Services() {
  return (
    <section id="servicios" className="bg-[#e9e1d3] px-6 py-24">
      <header className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b38]">Servicios</p>
        <h2 className="mt-3 text-4xl">Una atención hecha para ti</h2>
      </header>
      <ul className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
        {services.map((service) => (
          <li key={service.name} className="border border-[#c6ad73] bg-[#f8f4ec] p-8">
            <h3 className="text-2xl">{service.name}</h3>
            <p className="mt-4 leading-7 text-[#5e574e]">{service.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Services