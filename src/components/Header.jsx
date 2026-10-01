function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#c6ad73] bg-[#171512]/95 text-[#f5f0e7]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#inicio" className="text-xl tracking-[0.2em]">MAISON</a>
        <ul className="hidden gap-7 text-sm uppercase tracking-widest md:flex">
          <li><a href="#sobre-mi" className="hover:text-[#c6ad73]">Sobre mí</a></li>
          <li><a href="#servicios" className="hover:text-[#c6ad73]">Servicios</a></li>
          <li><a href="#proyectos" className="hover:text-[#c6ad73]">Proyectos</a></li>
          <li><a href="#contacto" className="hover:text-[#c6ad73]">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header