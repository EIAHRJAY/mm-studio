// src/components/FAQ.jsx
import { Plus, Minus, Phone, Mail, MapPin, MessageSquareText } from "lucide-react";
import { useState } from "react";

// ORDEN DEFINITIVO
const items = [
  {
    q: "Horarios de funcionamiento",
    type: "hours",
    hours: {
      Lunes: "09:30–20:00",
      Martes: "09:30–20:00",
      Miércoles: "09:30–20:00",
      Jueves: "09:30–20:00",
      Viernes: "09:30–20:00",
      Sábado: "10:00–18:00",
      Domingo: "Cerrado",
    },
  },
  {
    q: "Contacto",
    type: "contact",
    phone: "+34 642 47 85 93",
    whatsapp: "https://wa.me/34642478593",
    email: "",
    instagram: "https://instagram.com/mmstudiobelleza_estetica",
    maps:
      "https://www.google.es/maps/place/MM+Studio+de+Belleza+%26+Estetica/@39.5663421,3.2091044,15z/data=!4m16!1m9!3m8!1s0x129649f223fa9b81:0xf6f37e5ce9431a35!2sMM+Studio+de+Belleza+%26+Estetica!8m2!3d39.5662308!4d3.2090851!9m1!1b1!16s%2Fg%2F11p6qqv2my!3m5!1s0x129649f223fa9b81:0xf6f37e5ce9431a35!8m2!3d39.5662308!4d3.2090851!16s%2Fg%2F11p6qqv2my",
  },
  {
    q: "¿Cómo reservo cita?",
    a: "Reserva cuando quieras por Booksy o escríbenos por WhatsApp. Si tienes dudas, te asesoramos antes de confirmar.",
    images: ["/images/faq/1.jpg", "/images/faq/2.jpg"],
    cta: { label: "Reservar ahora", href: "https://booksy.com/tu-enlace" },
  },
  {
    q: "¿Puedo cambiar o cancelar la cita?",
    a: "Sí. Hasta 24 h antes puedes modificarla sin coste desde Booksy o por WhatsApp. Si surge algo, avísanos y buscamos hueco.",
    images: ["/images/faq/5.jpg", "/images/faq/6.jpg"],
    cta: { label: "Hablar por WhatsApp", href: "https://wa.me/34642478593" },
  },
  {
    q: "¿Dónde estamos y cómo llegar?",
    type: "map",
    address: "Avinguda d'es Torrent, 29, 07500 Manacor, Illes Balears",
    mapSrc: "https://www.google.com/maps?q=39.5662308,3.2090851&z=16&output=embed",
  },
  {
    q: "¿Qué servicios ofrecéis?",
    a: "Peluquería, color y tratamientos capilares; manicura/pedicura y estética de cejas. Trabajamos con marcas profesionales y protocolos de higiene.",
    images: [
      "/images/faq/pelo.jpg",
      "/images/faq/tinte.jpg",
      "/images/faq/cejas.jpg",
      "/images/faq/unhas.jpg",
    ],
    cta: { label: "Ver nuestro Instagram", href: "https://instagram.com/mmstudiobelleza_estetica" },
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0); // primero abierto

  return (
    <section id="faq" className="bg-zinc-100 text-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <header className="mb-8 text-center">
          <h2
            className="text-2xl sm:text-3xl font-semibold italic"
            style={{ fontFamily: "Playfair Display, ui-serif, Georgia, serif" }}
          >
            Preguntas frecuentes
          </h2>
        </header>

        {/* permitir ver el solape */}
        <div className="bg-white border border-zinc-200 overflow-visible">
          {items.map((it, i) => {
            const isOpen = open === i;
            const num = String(i + 1).padStart(2, "0");
            const panelId = `faq-panel-${i}`;

            return (
              <div
                key={i}
                className={`relative bg-white border-t border-zinc-200 first:border-t-0 transition-all
                  ${i > 0 && !isOpen ? "-mt-3 sm:-mt-5 lg:-mt-16 xl:-mt-20" : ""}
                  ${isOpen ? "z-10" : "hover:z-[1] hover:shadow-sm"}
                `}
              >
                {/* CABECERA: grid 3 columnas → centrado perfecto */}
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="
                    group relative w-full min-h-[86px] sm:min-h-[98px]
                    grid grid-cols-[auto,1fr,auto] items-center gap-3
                    py-6 sm:py-7 lg:py-5 px-4 sm:px-6 text-left hover:bg-zinc-50 transition-colors
                  "
                >
                  {/* /01 (col 1) */}
                  <span className="text-[11px] tracking-widest text-zinc-400 justify-self-start">
                    /{num}
                  </span>

                  {/* Título (col 2, centrado y con tamaño XXL en desktop) */}
                  <span
                    className="justify-self-center text-center uppercase leading-[0.9] text-zinc-900 tracking-[-0.01em] lg:tracking-[-0.02em]"
                    style={{ fontSize: "clamp(22px, 7.2vw, 88px)", fontWeight: 800 }}
                  >
                    {it.q}
                  </span>

                  {/* + / – (col 3) */}
                  <span className="text-zinc-600 justify-self-end">
                    {isOpen ? <Minus className="size-4" aria-hidden="true" /> : <Plus className="size-4" aria-hidden="true" />}
                  </span>
                </button>

                {/* PANEL */}
                <div
                  id={panelId}
                  className={`
                    grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-6
                    transition-[max-height,padding] duration-300 overflow-hidden
                    ${isOpen ? "max-h-[1400px] pt-6 pb-8" : "max-h-0 py-0"}
                  `}
                >
                  {it.type === "map" ? (
                    <div className="lg:col-span-3">
                      <div className="aspect-[16/9] rounded-xl overflow-hidden ring-1 ring-zinc-200">
                        <iframe
                          src={it.mapSrc}
                          className="h-full w-full border-0"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          allowFullScreen
                          title="Mapa MM Studio"
                        />
                      </div>
                      {it.address && <p className="mt-3 text-sm text-zinc-700 text-center">{it.address}</p>}
                    </div>
                  ) : it.type === "contact" ? (
                    // CONTACTO centrado
                    <div className="lg:col-span-3">
                      <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                        <a
                          href={`tel:${it.phone?.replace(/\s+/g, "")}`}
                          className="w-full sm:w-[300px] rounded-xl ring-1 ring-zinc-200 p-4 hover:bg-zinc-50 transition flex items-center gap-3"
                        >
                          <Phone className="size-5 text-[#EC2890]" />
                          <div>
                            <div className="text-sm font-semibold">Teléfono</div>
                            <div className="text-sm text-zinc-600">{it.phone}</div>
                          </div>
                        </a>

                        <a
                          href={it.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-[300px] rounded-xl ring-1 ring-zinc-200 p-4 hover:bg-zinc-50 transition flex items-center gap-3"
                        >
                          <MessageSquareText className="size-5 text-[#25D366]" />
                          <div>
                            <div className="text-sm font-semibold">WhatsApp</div>
                            <div className="text-sm text-zinc-600">Escríbenos</div>
                          </div>
                        </a>

                        <a
                          href={it.maps}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-[300px] rounded-xl ring-1 ring-zinc-200 p-4 hover:bg-zinc-50 transition flex items-center gap-3"
                        >
                          <MapPin className="size-5 text-[#EC2890]" />
                          <div>
                            <div className="text-sm font-semibold">Cómo llegar</div>
                            <div className="text-sm text-zinc-600">Abrir en Google Maps</div>
                          </div>
                        </a>

                        {/* Si quieres email, descomenta y pon it.email */}
                        {it.email && (
                          <a
                            href={`mailto:${it.email}`}
                            className="w-full sm:w-[300px] rounded-xl ring-1 ring-zinc-200 p-4 hover:bg-zinc-50 transition flex items-center gap-3"
                          >
                            <Mail className="size-5 text-zinc-700" />
                            <div>
                              <div className="text-sm font-semibold">Email</div>
                              <div className="text-sm text-zinc-600">{it.email}</div>
                            </div>
                          </a>
                        )}
                      </div>
                    </div>
                  ) : it.type === "hours" ? (
                    // HORARIOS centrados
                    <div className="lg:col-span-3">
                      <div className="mx-auto max-w-md rounded-xl ring-1 ring-zinc-200 p-4 bg-white">
                        <ul className="divide-y divide-zinc-200">
                          {Object.entries(it.hours).map(([day, time]) => (
                            <li key={day} className="py-2 flex items-center justify-between">
                              <span className="text-sm font-medium">{day}</span>
                              <span className="text-sm text-zinc-700">{time}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-3 text-center text-xs text-zinc-500">
                          *Horarios orientativos. Festivos y vísperas pueden variar.
                        </p>
                      </div>
                    </div>
                  ) : (
                    // DEFAULT: texto + grid imágenes adaptable + CTA
                    <>
                      <div className="lg:col-span-1">
                        <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">{it.a}</p>
                        {it.cta && (
                          <div className="mt-4">
                            <a
                              href={it.cta.href}
                              className="inline-flex items-center justify-center rounded-full bg-[#EC2890] px-5 py-2 text-white text-sm font-medium hover:opacity-90 active:scale-[0.99] transition"
                              target={it.cta.href.startsWith("http") ? "_blank" : undefined}
                              rel="noopener noreferrer"
                            >
                              {it.cta.label}
                            </a>
                          </div>
                        )}
                      </div>

                      {(() => {
                        const count = it.images?.length ?? 0;
                        const cols =
                          count >= 4 ? "grid-cols-2 md:grid-cols-4"
                          : count === 3 ? "grid-cols-2 md:grid-cols-3"
                          : "grid-cols-2";
                        return (
                          <div className={`lg:col-span-2 grid gap-4 ${cols}`}>
                            {(it.images ?? []).map((src, idx) => (
                              <div key={idx} className="aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-zinc-200">
                                <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                              </div>
                            ))}
                          </div>
                        );
                      })()}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
