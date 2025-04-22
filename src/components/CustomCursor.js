"use client";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] w-6 h-6 rounded-full bg-[#a3a17a] opacity-90 blur-sm shadow-[0_0_12px_8px_rgba(163,161,122,0.4)] transition-transform duration-100 transform -translate-x-1/2 -translate-y-1/2"
    ></div>
  );
};

export default CustomCursor;
