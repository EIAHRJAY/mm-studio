const bonuses = [
    {
      title: "Consulta gratuita",
      desc: "Te escuchamos y planificamos el servicio para acertar a la primera.",
    },
    {
        title: "Higiene y esterilización",
        desc: "Instrumental esterilizado y protocolos sanitarios en cada servicio.",
    },
    {
        title: "Atención post-servicio",
        desc: "Consejos y seguimiento para mantener el resultado en casa por más tiempo.",
    },
  ];
  
  function Card({ title, items, thumb }) { }
  
  export default function Program() {
    return (
      <section id="program" className="bg-zinc-100 text-zinc-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-14">
  
          
          <div className="mt-6">
            <ul className="space-y-2">
              {bonuses.map((b, i) => (
                <li key={i}>
                  <div
                    className="
                      rounded-md bg-[#EC2890] px-4 py-3 text-white
                      cursor-default select-none
                    "
                    role="note"
                  >
                    <div className="flex items-start gap-3">
                      <span className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-white/40 bg-white/10 grid place-items-center shrink-0">
                        {b.icon ? (
                          <img
                            src={b.icon}
                            alt=""
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <span className="text-white/80 text-sm">★</span>
                        )}
                      </span>
  
                      <div className="flex-1">
                        <p className="text-sm font-semibold leading-5">{b.title}</p>
                        <p className="text-xs leading-relaxed text-white/90">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
  
        </div>
      </section>
    );
  }
  