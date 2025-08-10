// src/components/WhyUs.jsx
import { ArrowRight } from "lucide-react";

const items = [
  { title: "CITA CUANDO QUIERAS", desc: "Reserva online a la hora que mejor te venga, sin llamadas y con confirmación al instante.", img: "/images/why/1.jpg", alt: "Reloj" },
  { title: "ESTILISTAS EXPERTOS", desc: "Equipo con años de experiencia en peluquería y estética.", img: "/images/why/2.jpg", alt: "Estilista en acción" },
  { title: "TENDENCIAS ACTUALES", desc: "Técnicas y looks del momento pensados para ti.", img: "/images/why/3.jpg", alt: "Peinado de tendencia" },
  { title: "ASESORÍA PERSONALIZADA", desc: "Diagnóstico previo para acertar con tu corte o tratamiento.", img: "/images/why/4.jpg", alt: "Notas y asesoría" },

  // Tarjeta central con CTA
{ 
    ctaCard: true,
    title: "INSTAGRAM",
    desc: "Síguenos para ver resultados reales, ofertas y consejos.",
    cta: {
      label: "Síguenos en Instagram",
      href: "https://www.instagram.com/mmstudiobelleza_estetica/"
    }
  },
  

  { title: "CUIDADO EN CADA PASO", desc: "Te acompañamos durante y después del servicio.", img: "/images/why/6.jpg", alt: "Atención durante el servicio" },
  { title: "PRODUCTOS PROFESIONALES", desc: "Marcas de calidad para un acabado duradero.", img: "/images/why/7.jpg", alt: "Productos profesionales" },
  { title: "ESPACIO CÓMODO", desc: "Salón acogedor para que disfrutes cada visita.", img: "/images/why/8.jpg", alt: "Salón cómodo" },
  { title: "RESULTADOS QUE DURAN", desc: "Acabados que se mantienen bonitos por más tiempo.", img: "/images/why/9.jpg", alt: "Resultado final" },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-zinc-100 text-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <header className="text-center mb-10 sm:mb-12">
          <h2
            className="text-2xl sm:text-3xl font-semibold italic"
            style={{ fontFamily: "Playfair Display, ui-serif, Georgia, serif" }}
          >
            ¿Por qué elegirnos?
          </h2>
        </header>

        {/* --- mantiene  grid con líneas y rombos  --- */}
        
        <div className="relative bg-white border border-zinc-300 overflow-visible">
          {/* rombos de las 4 esquinas */}
          <span aria-hidden className="hidden sm:block pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rotate-45 bg-zinc-900 z-10" />
          <span aria-hidden className="hidden sm:block pointer-events-none absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rotate-45 bg-zinc-900 z-10" />
          <span aria-hidden className="hidden sm:block pointer-events-none absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[6px] h-[6px] rotate-45 bg-zinc-900 z-10" />
          <span aria-hidden className="hidden sm:block pointer-events-none absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[6px] h-[6px] rotate-45 bg-zinc-900 z-10" />

          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 min-[744px]:grid-cols-3 lg:grid-cols-3
              gap-0
              divide-y divide-zinc-300 sm:divide-x

              [&>article>._tl]:hidden sm:[&>article>._tl]:block
              [&>article>._tr]:hidden
              [&>article>._bl]:hidden
              [&>article>._br]:hidden

              sm:[&>article:nth-child(2n)>._tr]:block
              min-[744px]:[&>article:nth-child(3n)>._tr]:block
              sm:[&>article:nth-last-child(-n+2)>._bl]:block
              min-[744px]:[&>article:nth-last-child(-n+3)>._bl]:block
              [&>article:last-child>._br]:block
            "
          >
            {items.map((it, i) => (
              <article key={i} className="relative bg-white">
                {/* rombos intersección */}
                <span aria-hidden className="_tl pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rotate-45 bg-zinc-900 z-10" />
                <span aria-hidden className="_tr pointer-events-none absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rotate-45 bg-zinc-900 z-10" />
                <span aria-hidden className="_bl pointer-events-none absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[6px] h-[6px] rotate-45 bg-zinc-900 z-10" />
                <span aria-hidden className="_br pointer-events-none absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[6px] h-[6px] rotate-45 bg-zinc-900 z-10" />

                <div className="px-6 py-10 min-[744px]:px-5 min-[744px]:py-8 lg:py-12 flex flex-col items-center text-center">
                  {!it.ctaCard && (
                    <div className="h-24 w-24 min-[744px]:h-20 min-[744px]:w-20 lg:h-24 lg:w-24 rounded-full overflow-hidden ring-1 ring-zinc-300">
                      <img
                        src={it.img}
                        alt={it.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        onError={(e) => { e.currentTarget.alt = ""; }}
                      />
                    </div>
                  )}

                  {it.ctaCard ? (
                    <>
                      <h3 className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#EC2890]">
                        {it.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-600 max-w-xs">{it.desc}</p>
                      <a
                        href="https://www.instagram.com/mmstudiobelleza_estetica/"
                        className="mt-4 inline-flex items-center justify-center rounded-full bg-[#EC2890] px-5 py-2 text-white text-sm font-medium hover:opacity-90 active:scale-[0.99] transition"
                      >
                        Síguenos en Instagram
                        <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                      </a>
                    </>
                  ) : (
                    <>
                      <h3 className="mt-4 text-[13px] font-semibold uppercase tracking-wide text-zinc-800">
                        {it.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-600 max-w-xs">{it.desc}</p>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
