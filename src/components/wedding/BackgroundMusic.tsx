import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleStartBgm = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch((err) => {
          console.warn("Autoplay prevented:", err);
        });
      }
    };

    window.addEventListener("start-wedding-bgm", handleStartBgm);
    return () => {
      window.removeEventListener("start-wedding-bgm", handleStartBgm);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    setHasInteracted(true);

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Playback error:", err);
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/bgm.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating BGM Controller */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              className="rounded-full bg-pine/90 px-3 py-1 text-[0.65rem] tracking-widest text-parchment uppercase backdrop-blur-md shadow-md"
            >
              {isPlaying ? "Pause Music" : "Play Music"}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={toggleMusic}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          aria-label={isPlaying ? "Mute background music" : "Play background music"}
          className={`relative flex size-12 items-center justify-center rounded-full border border-gold/60 shadow-[0_8px_25px_-8px_var(--color-ink)] backdrop-blur-md transition-colors ${
            isPlaying ? "bg-parchment text-pine" : "bg-pine/90 text-parchment"
          }`}
        >
          {isPlaying && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-gold/50"
            />
          )}

          {isPlaying ? (
            <div className="relative flex items-center justify-center">
              <Volume2 className="size-5 text-gold" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
            </div>
          ) : (
            <VolumeX className="size-5 text-gold" />
          )}
        </motion.button>
      </div>
    </>
  );
}
