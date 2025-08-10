import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#232323] text-white ">
      {/* IMAGEN FULL-BLEED */}
      <div className="relative w-full">
        <picture>
          <source media="(min-width:1024px)" srcSet="/edu.jpg" />
          <img
            src="/edu.jpg"
            alt="Arco de tarjetas con objetos de peluquería"
            className="block w-full h-auto select-none"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Degradados para fundir con el fondo */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-[#232323] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-[#232323] to-transparent" />

        {/* CONTENIDO CENTRADO */}
        <div
          className="
            absolute left-1/2 -translate-x-1/2
            top-[33%] sm:top-[54%] md:top-[53%] lg:top-[52%]
            max-[390px]:top-[38%]   /* iPhone 12 ajustado */
            max-[375px]:top-[39.5%]     /* iPhone SE  */
            w-full px-4
          "
        >
          <div
            className="
              mx-auto text-center
              max-w-[16.5rem] sm:max-w-xl md:max-w-[640px]
              max-[390px]:max-w-[15.5rem]   /* Ajuste ancho iPhone 12 */
              max-[375px]:max-w-[15.25rem]
            "
          >
            <h1
  className="
    font-semibold italic
    text-[16px] sm:text-5xl md:text-[42px] lg:text-6xl
    leading-[1.12] sm:leading-tight
    max-[390px]:text-[14.5px]
    max-[375px]:text-[14px]
  "
  style={{ fontFamily: 'Playfair Display, ui-serif, Georgia, serif' }}
>
   Realza tu belleza 
</h1>

<p className="mt-1.5 sm:mt-3 text-[10.5px] sm:text-base md:text-[15px] leading-[1.25] text-white/85 mx-auto md:max-w-[620px] max-[390px]:text-[10px] max-[390px]:leading-[1.22] max-[375px]:text-[9.5px] max-[375px]:leading-[1.2]">
En MM Studio Belleza & Estética cuidamos cada detalle para que luzcas espectacular. Peluquería, uñas y tratamientos exclusivos para ti. 

Reserva tu cita hoy, luce espectacular y sorpréndete con el cambio.
</p>

<div className="mt-3 sm:mt-5 flex justify-center">
  <a
    href="https://booksy.com/es-es/98197_mmstudiobelleza-estetica_salon-de-unas_68645_manacor#ba_s=sh_1" // cámbialo por el enlace real
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center justify-center rounded-full
      px-4 py-2
      text-[12px] sm:text-base md:text-[15px]
      font-medium bg-[#EC2890] hover:opacity-90  active:scale-[0.99] transition
      w-[80%] max-w-[200px]
      sm:w-[300px] sm:max-w-[300px]
      md:w-[320px] md:max-w-[320px]
      max-[390px]:max-w-[178px] max-[390px]:text-[10.75px] max-[390px]:py-[6px]
      max-[375px]:max-w-[176px] max-[375px]:text-[10.75px] max-[375px]:py-[6px]
    "
  >
    Reservar tu cita
    <ArrowRight
        className="ml-2 size-4 sm:size-5"
        aria-hidden="true"
    /> 
  </a>
</div>


          </div>
        </div>
      </div>
    </section>
  );
}