import { Star } from "lucide-react";

const reviews = [
  {
    name: "Fátima Z.",
    source: "Google",
    date: "Jun 2025",
    rating: 5,
    text:
      "Me atendieron fuera del horario habitual y así pude conseguir hacerme las uñas en el último momento antes de un evento. El resultado me encantó y la chica que me atendió super amable. ",
    avatar: "",
    href: "https://maps.app.goo.gl/XRK4Kt3UwG8BJjVz7",
    service: "Uñas",
  },
  {
    name: "Katerine V.",
    source: "Booksy",
    date: "Abr 2025",
    rating: 5,
    text:
      "Son excelentes profesionales todas y la atencion increíble.",
    avatar: "",
    href: "https://booksy.com/es-es/98197_mmstudiobelleza-estetica_salon-de-unas_68645_manacor#ba_s=sh_1",
    service: "Uñas semipermanentes",
  },
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

function ReviewCard({ r }) {
  return (
    <article className="relative rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
      <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#EC2890]" aria-hidden />
      <div className="p-4 sm:p-5">
        <Stars value={r.rating} />
        <p className="mt-2 text-sm leading-relaxed text-zinc-700">{r.text}</p>

        <div className="mt-4 flex items-center gap-3">
          <Avatar name={r.name} src={r.avatar} />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-zinc-900 truncate">{r.name}</h3>
              <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] text-zinc-600 ring-1 ring-zinc-200">
                {r.source}
              </span>
            </div>
            <div className="text-[12px] text-zinc-500">{r.service} • {r.date}</div>
          </div>
        </div>

        {r.href && (
          <div className="mt-3">
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-[#EC2890] hover:underline"
            >
              Ver reseña original
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default function TestimonialsIntro({ showHeading = true }) {
  const headingId = "testimonials-intro-heading";
  return (
    <section
      id="testimonials-intro"
      aria-labelledby={headingId}
      className="bg-zinc-100 text-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-4">
        {showHeading && (
          <h3
            id={headingId}
            className="pt-10 sm:pt-12 text-center text-2xl sm:text-3xl font-semibold italic"
            style={{ fontFamily: "Playfair Display, ui-serif, Georgia, serif" }}
          >
            Opiniones
          </h3>
        )}

        <div className="mt-6 space-y-4">
          <ReviewCard r={reviews[0]} />
          <ReviewCard r={reviews[1]} />
        </div>
      </div>
    </section>
  );
}
