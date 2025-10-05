// CustomCursor.tsx
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const t = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(t).cursor === "pointer" ||
        t.tagName === "BUTTON" ||
        t.tagName === "A"
      );
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* big ring */}
      <div
        className="fixed top-0 left-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2
                    pointer-events-none z-[9999] mix-blend-difference
                    border-2 border-primary rounded-full opacity-50"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${isPointer ? 1.5 : 1})`,
        }}
      />

      {/* dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 -translate-x-1/2 -translate-y-1/2
                    pointer-events-none z-[9999] mix-blend-difference
                    bg-accent rounded-full"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px)`,
        }}
      />
    </>
  );
};
