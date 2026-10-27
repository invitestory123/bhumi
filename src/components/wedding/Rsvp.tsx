import { Phone, MessageCircle } from "lucide-react";
import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

export function Rsvp() {
  const { rsvp } = invitation;

  return (
    <section className="relative px-5 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-xl text-center">
        {/* Subtle decorative kicker */}
        <p className="text-[0.62rem] tracking-[0.45em] text-gold uppercase">
          Kindly Respond
        </p>

        {/* Section Heading */}
        <h2 className="mt-2 font-display text-3xl tracking-[0.18em] text-pine uppercase sm:text-4xl">
          {rsvp.title}
        </h2>
        <div className="mx-auto mt-4 w-24 gold-rule" />

        <p className="mx-auto mt-4 max-w-md text-xs tracking-wider text-ink/75 sm:text-sm">
          {rsvp.subtitle}
        </p>

        {/* Contacts Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {rsvp.contacts.map((contact) => (
            <div
              key={contact.name}
              className="group relative overflow-hidden rounded-2xl border border-gold/50 bg-[#fffdfa]/90 p-6 text-center shadow-[0_15px_35px_-20px_rgba(58,46,34,0.25)] transition-all duration-300 hover:border-gold hover:shadow-[0_20px_40px_-20px_rgba(58,46,34,0.35)] paper-grain"
            >
              {/* Delicate inner gold border */}
              <div className="pointer-events-none absolute inset-2 rounded-xl border border-gold/25" />

              {/* Corner floral motifs */}
              <div className="pointer-events-none absolute top-3 left-3 select-none text-[0.65rem] text-gold/40">
                ❦
              </div>
              <div className="pointer-events-none absolute top-3 right-3 select-none text-[0.65rem] text-gold/40 scale-x-[-1]">
                ❦
              </div>

              <h3 className="font-display text-2xl text-pine tracking-wide">
                {contact.name}
              </h3>
              <p className="mt-1 font-sans text-sm tracking-widest text-ink/80 font-medium">
                {contact.phone}
              </p>

              {/* Action buttons */}
              <div className="mt-5 flex items-center justify-center gap-2.5">
                <a
                  href={`tel:${contact.tel}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/70 bg-parchment/80 px-4 py-2 text-[0.65rem] tracking-[0.2em] text-pine uppercase transition-all duration-200 hover:bg-gold/20 active:scale-95"
                  aria-label={`Call ${contact.name}`}
                >
                  <Phone className="size-3.5 text-gold" aria-hidden />
                  <span>Call</span>
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Hello ${contact.name}, regarding Bhumika & Piyush's Wedding Invitation.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-gold/70 bg-parchment/80 px-4 py-2 text-[0.65rem] tracking-[0.2em] text-pine uppercase transition-all duration-200 hover:bg-gold/20 active:scale-95"
                  aria-label={`WhatsApp ${contact.name}`}
                >
                  <MessageCircle className="size-3.5 text-gold" aria-hidden />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
