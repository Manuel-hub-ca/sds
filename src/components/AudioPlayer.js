"use client";

import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4; // Set your preferred volume
    audio.muted = true; // Start muted to allow autoplay
    audio.play().catch(() => {}); // Attempt to play silently

    // Wait for first user interaction to unmute and play with sound
    const enableAudio = () => {
      if (audio) {
        audio.muted = false;
        audio.play().catch(() => {});
      }
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("touchstart", enableAudio);
    };

    window.addEventListener("click", enableAudio);
    window.addEventListener("touchstart", enableAudio);

    return () => {
      window.removeEventListener("click", enableAudio);
      window.removeEventListener("touchstart", enableAudio);
    };
  }, []);

  return (
    <audio ref={audioRef} autoPlay loop>
      <source src="/relax.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}


