"use client";

import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3; // optional: set default volume
    }
  }, []);

  return (
    <audio ref={audioRef} autoPlay loop>
      <source src="/relax.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
