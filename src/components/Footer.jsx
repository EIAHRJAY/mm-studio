// src/components/Footer.jsx
import { MapPin, Phone, Clock, Mail, ArrowUpRight } from "lucide-react";
import { SiInstagram, SiGoogle } from "react-icons/si";
import { BsCalendarCheck } from "react-icons/bs";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-300">
      {/* contenido principal */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Marca + RRSS */}
          <div>
            <h3 className="text-white text-xl font-semibold">MM Studio</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Belleza & Estética en Manacor.
            </p>

            {/* RRSS en rosa (cuadrado redondeado) */}
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://instagram.com/mmstudiobelleza_estetica"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-grid place-items-center size-9 rounded-md bg-[#EC2890] hover:opacity-90 transition"
                title="Instagram"
              >
                <SiInstagram size={18} className="text-white" />
              </a>
              <a
                href="https://www.google.com/maps/place/MM+Studio+de+Belleza+%26+Estetica/@39.5662308,3.1369873,13z/data=!4m10!1m2!2m1!1sMM+Studio+de+Belleza+%26+Estetica!3m6!1s0x129649f223fa9b81:0xf6f37e5ce9431a35!8m2!3d39.5662308!4d3.2090851!15sCh9NTSBTdHVkaW8gZGUgQmVsbGV6YSAmIEVzdGV0aWNhkgESdW5pc2V4X2hhaXJkcmVzc2VyqgFgCg0vZy8xMXA2cXF2Mm15CgcvbS8weDB3EAEyHxABIhveVaqqneSywO6sFvN_KpVbGOESopyp4DM56S0yIxACIh9tbSBzdHVkaW8gZGUgYmVsbGV6YSAmIGVzdGV0aWNh4AEA!16s%2Fg%2F11p6qqv2my?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="inline-grid place-items-center size-9 rounded-md bg-[#EC2890] hover:opacity-90 transition"
                title="Google"
              >
                <SiGoogle size={18} className="text-white" />
              </a>
              <a
                href="https://booksy.com/es-es/98197_mmstudiobelleza-estetica_salon-de-unas_68645_manacor?hl=pt-PT&gei=ydOYaJzQPI6kkdUP0d7A4A8&rwg_token=ACgRB3cvAi37WxUAGDNmBVPq4Ei_y3LVjKSA3FRjhsNBUGfpBgfdZPH1haos3w5A4T4bBkFpCuxqXMXVMFt8E9wiTwQXDkRFZA%3D%3D#ba_s=seo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Booksy"
                className="inline-grid place-items-center size-9 rounded-md bg-[#EC2890] hover:opacity-90 transition"
                title="Booksy"
              >
                <BsCalendarCheck size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/90">
              Enlaces
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#hero">Inicio</a></li>
              <li><a className="hover:text-white" href="#why">Por qué elegirnos</a></li>
              <li><a className="hover:text-white" href="#program">Servicios</a></li>
              <li><a className="hover:text-white" href="#testimonials">Testimonios</a></li>
              <li><a className="hover:text-white" href="#faq">Preguntas frecuentes</a></li>
              <li><a className="hover:text-white" href="#contact">Contacto</a></li>
            </ul>
          </div>

          {/* Reservas / Accesos */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/90">
              Reservas y accesos
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="inline-flex items-center gap-1.5 hover:text-white"
                  href="https://booksy.com/es-es/98197_mmstudiobelleza-estetica_salon-de-unas_68645_manacor?hl=pt-PT&gei=ydOYaJzQPI6kkdUP0d7A4A8&rwg_token=ACgRB3cvAi37WxUAGDNmBVPq4Ei_y3LVjKSA3FRjhsNBUGfpBgfdZPH1haos3w5A4T4bBkFpCuxqXMXVMFt8E9wiTwQXDkRFZA%3D%3D#ba_s=seo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar en Booksy <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-1.5 hover:text-white"
                  href="https://wa.me/34642478593"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-1.5 hover:text-white"
                  href="https://instagram.com/mmstudiobelleza_estetica"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram <ArrowUpRight className="size-3.5" />
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-1.5 hover:text-white"
                  href="https://www.google.com/maps/place/MM+Studio+de+Belleza+%26+Estetica/@39.5662308,3.1730362,14z/data=!4m10!1m2!2m1!1sMM+Studio+de+Belleza+%26+Estetica!3m6!1s0x129649f223fa9b81:0xf6f37e5ce9431a35!8m2!3d39.5662308!4d3.2090851!15sCh9NTSBTdHVkaW8gZGUgQmVsbGV6YSAmIEVzdGV0aWNhkgESdW5pc2V4X2hhaXJkcmVzc2VyqgFgCg0vZy8xMXA2cXF2Mm15CgcvbS8weDB3EAEyHxABIhveVaqqneSywO6sFvN_KpVbGOESopyp4DM56S0yIxACIh9tbSBzdHVkaW8gZGUgYmVsbGV6YSAmIGVzdGV0aWNh4AEA!16s%2Fg%2F11p6qqv2my?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Maps <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Dirección / Horario / Contacto */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white/90">
              Visítanos
            </h4>
            <ul className="mt-3 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-[#EC2890]" />
                <span>
                  Avinguda d&apos;es Torrent, 29<br />
                  07500 Manacor, Illes Balears
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-[#EC2890]" />
                <a className="hover:text-white" href="tel:+34642478593">
                  +34 642 47 85 93
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-[#EC2890]" />
                <a className="hover:text-white" href="mailto:">
                  (email opcional)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 text-[#EC2890]" />
                <span>
                  Lun–Vie 09:30–20:00<br />
                  Sáb 10:00–18:00 · Dom cerrado
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* línea y pie legal */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {year} MM Studio. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#" rel="nofollow">Política de privacidad</a>
            <a className="hover:text-white" href="#" rel="nofollow">Aviso legal</a>
            <a className="hover:text-white" href="#" rel="nofollow">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
