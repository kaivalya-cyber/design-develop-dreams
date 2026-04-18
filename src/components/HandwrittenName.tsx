import { useEffect, useState } from "react";

const HandwrittenName = ({ onComplete }: { onComplete?: () => void }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setDone(true);
      onComplete?.();
    }, 4200);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden={done}
    >
      <svg
        viewBox="0 0 900 260"
        className="w-[85vw] max-w-[900px] h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--primary-glow))" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="'Brush Script MT', 'Snell Roundhand', 'Segoe Script', cursive"
          fontSize="160"
          fontStyle="italic"
          fontWeight="500"
          stroke="url(#strokeGradient)"
          strokeWidth="2.5"
          fill="transparent"
          className="handwriting-text"
        >
          Kaivalya Singh
        </text>
      </svg>
      <style>{`
        .handwriting-text {
          stroke-dasharray: 2400;
          stroke-dashoffset: 2400;
          animation: drawName 3s ease-in-out forwards, fillName 0.8s ease-in 3s forwards;
        }
        @keyframes drawName {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fillName {
          to { fill: hsl(var(--primary-glow)); }
        }
      `}</style>
    </div>
  );
};

export default HandwrittenName;
