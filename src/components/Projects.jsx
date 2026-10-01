function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-24">
      <header className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#9a7b38]">Proyectos</p>
        <h2 className="mt-3 text-4xl">Trabajos seleccionados</h2>
      </header>
      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        <li className="border-t-2 border-[#c6ad73] pt-6"><h3 className="text-2xl">Experiencia personal</h3><p className="mt-3 text-[#5e574e]">Diseño de una atención cercana y elegante.</p></li>
        <li className="border-t-2 border-[#c6ad73] pt-6"><h3 className="text-2xl">Imagen</h3><p className="mt-3 text-[#5e574e]">Presentación visual limpia y sofisticada.</p></li>
        <li className="border-t-2 border-[#c6ad73] pt-6"><h3 className="text-2xl">Cuidado</h3><p className="mt-3 text-[#5e574e]">Detalles pensados para cada cliente.</p></li>
      </ul>
    </section>
  )
}

export default Projects