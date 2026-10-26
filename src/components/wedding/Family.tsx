import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, Sparkles, X, Image as ImageIcon } from "lucide-react";
import { invitation } from "@/config/invitation";
import { Reveal } from "./Reveal";

export function Family() {
  const { card } = invitation;
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <section className="relative px-4 py-16 sm:px-6 sm:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-center gap-2 text-gold">
          <Sparkles className="size-4" aria-hidden />
          <p className="text-[0.65rem] tracking-[0.45em] text-gold uppercase">
            Official Wedding Invitation
          </p>
          <Sparkles className="size-4" aria-hidden />
        </div>
        <h2 className="mt-2 font-display text-3xl tracking-[0.15em] text-pine uppercase sm:text-4xl">
          The Wedding Card
        </h2>
        <div className="mx-auto mt-4 w-28 gold-rule" />

        {/* View Original Card Toggle Button */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowOriginal(!showOriginal)}
            className="inline-flex items-center gap-2 rounded-full border border-gold/70 bg-parchment-deep/60 px-5 py-2 text-xs tracking-widest text-pine uppercase shadow-sm transition-all hover:bg-gold/15 active:scale-95 cursor-pointer"
          >
            <ImageIcon className="size-3.5 text-gold" />
            <span>{showOriginal ? "Show Digital Card" : "View Original Scanned Card"}</span>
          </button>
        </div>

        {/* Card Presentation */}
        <div className="relative mx-auto mt-10 max-w-xl">
          {showOriginal ? (
            /* Scanned Card View */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border-2 border-gold/60 bg-parchment p-2 shadow-2xl"
            >
              <img
                src="/invitation-card.jpg"
                alt="Original Wedding Invitation Card of Bhumika & Piyush"
                className="w-full rounded-xl object-contain shadow-inner"
              />
            </motion.div>
          ) : (
            /* Digital Recreated Card with Exact Formatting */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border-4 border-[#e8cbb1] bg-[#fbf2e7] p-3 sm:p-5 shadow-[0_20px_50px_-20px_rgba(58,46,34,0.35)]"
            >
              {/* Ornate Inner Double Frame */}
              <div className="relative rounded-xl border border-[#b8956e]/50 bg-[#fffdfa] px-6 py-10 sm:px-12 sm:py-14 text-center shadow-inner paper-grain">
                {/* Thin Inner Gold Border */}
                <div className="pointer-events-none absolute inset-2.5 rounded-lg border border-[#b8956e]/30" />

                {/* Top Corner Ornaments */}
                <div className="pointer-events-none absolute top-3.5 left-3.5 text-[#b8956e]/50 text-xs select-none">
                  ❦
                </div>
                <div className="pointer-events-none absolute top-3.5 right-3.5 text-[#b8956e]/50 text-xs select-none scale-x-[-1]">
                  ❦
                </div>
                <div className="pointer-events-none absolute bottom-3.5 left-3.5 text-[#b8956e]/50 text-xs select-none scale-y-[-1]">
                  ❦
                </div>
                <div className="pointer-events-none absolute bottom-3.5 right-3.5 text-[#b8956e]/50 text-xs select-none scale-[-1]">
                  ❦
                </div>

                {/* 1) Lord Ganesha Icon */}
                <div className="flex justify-center">
                  <img
                    src="/ganesha.png"
                    alt="Lord Shri Ganesh"
                    width={48}
                    height={60}
                    className="h-14 w-auto object-contain opacity-90 drop-shadow-sm"
                  />
                </div>

                {/* 2) Hindi Shloka */}
                <div className="mt-3.5 space-y-1">
                  <p className="font-devanagari text-[0.82rem] leading-relaxed tracking-wider text-[#342a22] sm:text-[0.95rem]">
                    {card.shloka[0]}
                  </p>
                  <p className="font-devanagari text-[0.82rem] leading-relaxed tracking-wider text-[#342a22] sm:text-[0.95rem]">
                    {card.shloka[1]}
                  </p>
                </div>

                {/* 3) Decorative Divider */}
                <div className="my-4 flex items-center justify-center">
                  <svg
                    className="h-4 w-32 text-[#b8956e]"
                    viewBox="0 0 120 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="60" cy="10" r="2.5" fill="currentColor" />
                    <path
                      d="M60 4 C60 2 61.5 2 61.5 4 C61.5 6 60 6 60 4 Z"
                      fill="currentColor"
                    />
                    <path
                      d="M60 16 C60 18 58.5 18 58.5 16 C58.5 14 60 14 60 16 Z"
                      fill="currentColor"
                    />
                    <path
                      d="M53 10 C43 10 36 6 25 10 C16 13 8 7 0 10"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M67 10 C77 10 84 6 95 10 C104 13 112 7 120 10"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path d="M40 9 C38 6 34 7 36 9" strokeWidth="1" strokeLinecap="round" />
                    <path d="M80 9 C82 6 86 7 84 9" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </div>

                {/* 4) Blessings of Grandparents */}
                <div className="mt-2">
                  <p className="font-display text-sm tracking-wide text-[#5a4d41] italic sm:text-base">
                    {card.blessingPrefix}
                  </p>
                  <p className="mt-1 font-display text-base font-medium tracking-wide text-[#2b221a] italic sm:text-lg">
                    {card.grandparents}
                  </p>
                </div>

                {/* 5) Hosts */}
                <div className="mt-7">
                  <p className="font-display text-xl font-bold tracking-wide text-[#1f1914] italic sm:text-2xl md:text-[1.7rem]">
                    {card.hosts}
                  </p>
                  <p className="mx-auto mt-2 max-w-sm font-display text-xs leading-relaxed text-[#5a4d41] italic sm:text-sm">
                    {card.invitationLine}
                  </p>
                </div>

                {/* 6) Wedding Festivities */}
                <div className="mt-4">
                  <h3 className="font-script text-4xl text-[#1f1914] sm:text-5xl md:text-6xl tracking-wide py-1">
                    {card.festivities}
                  </h3>
                  <p className="mt-1 font-display text-xs tracking-wide text-[#5a4d41] italic sm:text-sm">
                    {card.daughterLine}
                  </p>
                </div>

                {/* 7) Bride */}
                <div className="mt-4">
                  <h4 className="font-script text-5xl text-[#1a1612] sm:text-6xl md:text-7xl">
                    {card.bride}
                  </h4>
                  <p className="mt-1 font-display text-xs tracking-wide text-[#42362b] italic sm:text-sm">
                    {card.brideLineage}
                  </p>
                </div>

                {/* 8) with */}
                <p className="my-2.5 font-display text-base text-[#5a4d41] italic sm:text-lg">
                  {card.connector}
                </p>

                {/* 9) Groom */}
                <div>
                  <h4 className="font-script text-5xl text-[#1a1612] sm:text-6xl md:text-7xl">
                    {card.groom}
                  </h4>
                  <p className="mt-1 font-display text-xs tracking-wide text-[#42362b] italic sm:text-sm">
                    {card.groomLineage}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
