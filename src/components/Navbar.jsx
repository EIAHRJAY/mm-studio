import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="relative flex items-center justify-between">
          {/* Menú izquierdo */}
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonios</a></li>
          </ul>

          {/* Logo centrado */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <span className="block font-bold text-lg">MM Studio</span>
            <span className="text-sm">Belleza & Estética</span>
          </div>

          {/* Botón WhatsApp */}
          <div className="hidden md:block">
  <a
    href="https://wa.me/34600123456?text=Hola%20MM%20Studio,%20quiero%20más%20información."
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#EC2890] hover:opacity-90 px-4 py-2 rounded-full text-sm font-medium transition active:scale-[0.99]"
  >
    Hablar por WhatsApp
  </a>
</div>

          {/* Hamburguesa */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <ul className="md:hidden bg-[#232323]/95 px-4 py-4 space-y-4">
          <li><a href="#contact">Contacto</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
          <li>
            <a
                href="https://wa.me/34600123456?text=Hola%20MM%20Studio,%20quiero%20más%20información."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#EC2890] hover:opacity-90 px-4 py-2 rounded-full text-sm font-medium text-center transition active:scale-[0.99]"
            >
                Hablar por WhatsApp
            </a>
        </li>
        </ul>
      )}
    </nav>
  );
}
