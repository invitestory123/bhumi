import { Sparkles } from "lucide-react";
import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

export function Family() {
  const { family } = invitation;

  return (
    <section className="relative px-5 py-16">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-[0.62rem] tracking-[0.4em] text-ink/60 uppercase">
          With Blessings &amp; Love
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-[0.14em] text-pine uppercase">
          Our Families &amp; Hosts
        </h2>
        <div className="mx-auto mt-4 w-24 gold-rule" />

        {/* Grandparents Blessing Card */}
        <div className="relative mt-10 overflow-hidden rounded-t-[3.5rem] border border-gold/45 bg-parchment-deep/60 px-6 py-8 shadow-[0_16px_36px_-28px_var(--color-ink)] paper-grain">
          <div className="pointer-events-none absolute inset-x-3 top-3 bottom-3 rounded-t-[3rem] border border-gold/25" />
          <div className="flex items-center justify-center gap-2 text-gold">
            <Sparkles className="size-4" aria-hidden />
            <span className="text-[0.65rem] tracking-[0.35em] text-gold uppercase">
              With the heavenly blessings of
            </span>
            <Sparkles className="size-4" aria-hidden />
          </div>
          <p className="mt-3 font-display text-xl text-pine sm:text-2xl">
            {family.grandparents}
          </p>
        </div>

        {/* Parents Grid */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Bride's Parents */}
          <div className="relative overflow-hidden rounded-t-[3rem] border border-gold/45 bg-parchment-deep/60 p-6 shadow-[0_14px_30px_-25px_var(--color-ink)] paper-grain">
            <div className="pointer-events-none absolute inset-x-2.5 top-2.5 bottom-2.5 rounded-t-[2.6rem] border border-gold/25" />
            <p className="text-[0.62rem] tracking-[0.3em] text-gold uppercase">
              Bride’s Parents
            </p>
            <div className="mx-auto mt-2 w-12 gold-rule" />
            <p className="mt-4 font-display text-lg text-pine">
              {family.brideParents}
            </p>
          </div>

          {/* Groom's Parents */}
          <div className="relative overflow-hidden rounded-t-[3rem] border border-gold/45 bg-parchment-deep/60 p-6 shadow-[0_14px_30px_-25px_var(--color-ink)] paper-grain">
            <div className="pointer-events-none absolute inset-x-2.5 top-2.5 bottom-2.5 rounded-t-[2.6rem] border border-gold/25" />
            <p className="text-[0.62rem] tracking-[0.3em] text-gold uppercase">
              Groom’s Parents
            </p>
            <div className="mx-auto mt-2 w-12 gold-rule" />
            <p className="mt-4 font-display text-lg text-pine">
              {family.groomParents}
            </p>
          </div>
        </div>

        {/* Hosts */}
        <div className="relative mt-6 overflow-hidden rounded-full border border-gold/40 bg-parchment-deep/50 px-6 py-4 shadow-[0_10px_25px_-20px_var(--color-ink)]">
          <p className="text-[0.62rem] tracking-[0.35em] text-ink/65 uppercase">
            Cordially Hosted By
          </p>
          <p className="mt-1 font-display text-xl text-pine">
            {family.hosts}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
