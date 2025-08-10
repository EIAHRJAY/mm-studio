import { ArrowDown } from "lucide-react";
import { SiInstagram, SiGoogle } from "react-icons/si";

// Icono “de texto” para Booksy
const BooksyIcon = ({ className = "" }) => (
  <span className={`text-[11px] font-medium ${className}`}>Booksy</span>
);

export default function PreTestimonials() {
  const socials = [
    { label: "Instagram", href: "https://instagram.com/tu_usuario", Icon: SiInstagram },
    { label: "Google",    href: "https://maps.google.com/?cid=TU_CID", Icon: SiGoogle },
    { label: "Booksy",    href: "https://booksy.com/tu-enlace", Icon: BooksyIcon },
  ];

  return (
    <section className="bg-zinc-100 text-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-14">
        <div className="relative bg-white border border-zinc-300 overflow-visible">
          {/* rombos */}
          <span aria-hidden className="hidden sm:block absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rotate-45 bg-zinc-900" />
          <span aria-hidden className="hidden sm:block absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rotate-45 bg-zinc-900" />
          <span aria-hidden className="hidden sm:block absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[7px] h-[7px] rotate-45 bg-zinc-900" />
          <span aria-hidden className="hidden sm:block absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[7px] h-[7px] rotate-45 bg-zinc-900" />

          <div className="px-6 py-12 sm:px-10 sm:py-16 text-center">
            <h2
              className="text-3xl sm:text-4xl font-semibold italic"
              style={{ fontFamily: "Playfair Display, ui-serif, Georgia, serif" }}
            >
              Cientos de clientas confían en MM Studio
            </h2>

            <div className="mt-6 flex justify-center">
              <ArrowDown className="size-6 sm:size-7 text-[#EC2890]" aria-hidden="true" />
            </div>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto">
              Lee opiniones reales y descubre por qué vuelven: calidad, trato cercano y resultados que duran.
            </p>

            {/* Botón falso */}
            <div className="mt-4 sm:mt-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EC2890] px-6 py-2.5 text-white text-sm font-medium select-none cursor-default pointer-events-none">
                Ver más reseñas
                <ArrowDown className="size-4" aria-hidden="true" />
              </span>
            </div>

            {/* Iconos */}
            <div className="mt-5 sm:mt-6 flex justify-center gap-4">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex items-center justify-center size-10 rounded-full ring-1 ring-zinc-300 hover:ring-zinc-400 transition"
                >
                  
                  <Icon className="text-zinc-800" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
