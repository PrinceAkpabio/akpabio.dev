"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

const SRC = "/the-void.mp3";
const VOLUME = 0.25;

const SoundContext = createContext<{
  playing: boolean;
  toggle: () => void;
  start: () => void;
}>({
  playing: false,
  toggle: () => {},
  start: () => {},
});

export const useSound = () => useContext(SoundContext);

const wantsSound = () => {
  if (typeof window === "undefined") return false;
  const v = new URLSearchParams(window.location.search).get("sound");
  return v === "on" || v === "1" || v === "true";
};

// Ambient loop. `enabled` is the intent (armed); `playing` is the real playback
// state, so the icon only shows "on" once audio is actually sounding. It starts
// from the toggle, a `?sound=on` link, or once the loader reveals the page — and
// if the browser blocks autoplay (no gesture yet), it starts on the first input.
export default function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState<boolean>(wantsSound);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Mirror actual playback into `playing` so the UI stays truthful
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  // Drive playback from intent, falling back to the first input if autoplay is blocked
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = VOLUME;

    if (!enabled) {
      audio.pause();
      return;
    }

    let cleanup = () => {};
    audio.play().catch(() => {
      const startOnGesture = () => audio.play().catch(() => {});
      window.addEventListener("pointerdown", startOnGesture, { once: true });
      window.addEventListener("keydown", startOnGesture, { once: true });
      cleanup = () => {
        window.removeEventListener("pointerdown", startOnGesture);
        window.removeEventListener("keydown", startOnGesture);
      };
    });
    return () => cleanup();
  }, [enabled]);

  const toggle = useCallback(() => setEnabled((on) => !on), []);
  const start = useCallback(() => setEnabled(true), []);

  return (
    <SoundContext.Provider value={{ playing, toggle, start }}>
      {children}
      <audio ref={audioRef} src={SRC} loop preload="none" aria-hidden="true" />
    </SoundContext.Provider>
  );
}
