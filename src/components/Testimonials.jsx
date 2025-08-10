import { Star, Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const DATA = [
    { name: "Nuria S.",    source: "Booksy",   date: "ene 2025", rating: 5, text: "Muy profisional y amable, super satisfecha con el servicio 🥰.", avatar: "", service: "Hidratación", url: "https://booksy.com/tu-enlace", },
    { name: "Norjan H.",   source: "Google",    date: "Ago 2024", rating: 5, text: "Me encantó el servicio, me trataron estupendamente lo recomiendo y mucho y es el mejor de Manacor. Os animo a que vayáis os encantará os lo aseguro.", avatar: "", service: "Tratamiento capilar", url: "https://goo.gl/maps/...", },
  { name: "Natalia S.", source: "Instagram", date: "Jun 2025", rating: 5, text: "Siempre las mejores💗💅😍", avatar: "", service: "Coloración", url: "https://goo.gl/maps/...", },
  { name: "Jackie G.",  source: "Google",    date: "Ago 2024", rating: 5, text: "Secagem, Brushing, Coloração capilar, Regeneração capilar, Penteados.", avatar: "", service: "Tratamiento capilar", url: "https://www.google.com/maps/reviews/@39.5662308,3.2090851,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUQ1enRxbzVRRRAB!2m1!1s0x0:0xf6f37e5ce9431a35?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D", },
  { name: "Gabriela C.", source: "Booksy",   date: "Jul 2025", rating: 5, text: "La atencion siempre es muy buena, y quedo contenta con mis uñas, cejas y cabello.", avatar: "", service: "Corte & uñas", url: "https://booksy.com/tu-enlace", },
  { name: "Mirian Martinez C.", source: "Instagram", date: "Abr 2025", rating: 5, text: "Preciosas.", avatar: "", service: "Nail art", url: "https://instagram.com/mmstudiobelleza_estetica", },
];

function Stars({ value = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < value;
        return (
          <Star
            key={i}
            className={`size-4 ${filled ? "text-yellow-500" : "text-zinc-300"}`}
            strokeWidth={1.5}
            style={{ fill: filled ? "currentColor" : "transparent" }}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
}

function Avatar({ name, src }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`Foto de ${name}`}
        className="h-10 w-10 rounded-full object-cover ring-1 ring-zinc-200"
        loading="lazy"
      />
    );
  }
  const initial = (name || "?").trim().charAt(0).toUpperCase();
  return (
    <div className="h-10 w-10 rounded-full bg-zinc-200 text-zinc-700 grid place-items-center font-semibold">
      {initial}
    </div>
  );
}

function Card({ t }) {
  return (
    <article className="relative bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
      <Quote className="absolute -top-3 -left-3 size-6 text-zinc-300" aria-hidden="true" />
      <Stars value={t.rating} />
      <p className="mt-3 text-sm leading-relaxed text-zinc-700">{t.text}</p>

      <div className="mt-4 flex items-center gap-3">
        <Avatar name={t.name} src={t.avatar} />
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-zinc-900 truncate">{t.name}</h3>
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-600 ring-1 ring-zinc-200">
              {t.source}
            </span>
          </div>
          <div className="text-[12px] text-zinc-500">{t.service} • {t.date}</div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  // --- Móvil: slider 1x ---
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / (el.clientWidth * 0.9));
      setActive(Math.max(0, Math.min(DATA.length - 1, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // --- Desktop: páginas de 3 con scroll-snap ---
  const PAGE = 3;
  const pages = Math.ceil(DATA.length / PAGE);
  const [page, setPage] = useState(0);

  const deskRef = useRef(null);
  useEffect(() => {
    const el = deskRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setPage(Math.max(0, Math.min(pages - 1, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [pages]);

  return (
    <section id="testimonials" className="bg-zinc-100 text-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <header className="mb-8 sm:mb-10 text-center">{/* título opcional */}</header>

        {/* Móvil */}
        <div className="lg:hidden">
          <div ref={trackRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-1">
            {DATA.map((t, i) => (
              <div key={i} className="snap-center shrink-0 w-[90%] mx-[5%]">
                <Card t={t} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {DATA.map((_, i) => (
              <span
                key={i}
                className={`inline-block h-2 w-2 rounded-full ${i === active ? "bg-[#EC2890]" : "bg-zinc-300"}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: scroll lateral + snap + dots */}
        <div className="hidden lg:block">
          <div
            ref={deskRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-0"
          >
            {Array.from({ length: pages }).map((_, p) => (
              <div key={p} className="snap-center shrink-0 min-w-full px-1">
                <div className="grid grid-cols-3 gap-8">
                  {DATA.slice(p * PAGE, p * PAGE + PAGE).map((t, i) => (
                    <Card key={i} t={t} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = deskRef.current;
                  if (!el) return;
                  el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
                  setPage(i);
                }}
                aria-label={`Página ${i + 1}`}
                className={`h-2 w-2 rounded-full transition ${i === page ? "bg-[#EC2890]" : "bg-zinc-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
