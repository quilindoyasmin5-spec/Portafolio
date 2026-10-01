function Contact() {
  return (
    <section id="contacto" className="bg-[#171512] px-6 py-24 text-[#f5f0e7]">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#c6ad73]">Contacto</p>
        <h2 className="mt-3 text-4xl">Hablemos</h2>
      </header>
      <form className="mx-auto mt-10 grid max-w-2xl gap-5" onSubmit={(event) => event.preventDefault()}>
        <label className="grid gap-2">Nombre<input className="border border-[#766b5b] bg-transparent p-3 outline-none" type="text" /></label>
        <label className="grid gap-2">Correo<input className="border border-[#766b5b] bg-transparent p-3 outline-none" type="email" /></label>
        <label className="grid gap-2">Mensaje<textarea className="border border-[#766b5b] bg-transparent p-3 outline-none" rows="5" /></label>
        <button className="border border-[#c6ad73] px-6 py-3 uppercase tracking-widest hover:bg-[#c6ad73] hover:text-[#171512]" type="submit">Enviar mensaje</button>
      </form>
    </section>
  )
}

export default Contact