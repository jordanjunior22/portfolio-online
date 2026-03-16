"use client";

// Decorative red string lines connecting pins on the board.
// These are purely visual and positioned absolutely over the board.
export default function StringLines() {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 6 }}
      aria-hidden="true"
    >
      <defs>
        <filter id="string-blur">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>
      {/* Strings connecting newspaper to section cards — approximate visual positions */}
      {/* These are intentionally slightly imprecise for an organic feel */}
      <line x1="50%" y1="28%" x2="28%" y2="52%" stroke="#8b1a1a" strokeWidth="1.5" strokeDasharray="none" opacity="0.5" filter="url(#string-blur)" />
      <line x1="50%" y1="28%" x2="72%" y2="52%" stroke="#8b1a1a" strokeWidth="1.5" opacity="0.45" filter="url(#string-blur)" />
      <line x1="28%" y1="52%" x2="28%" y2="72%" stroke="#8b1a1a" strokeWidth="1.2" opacity="0.35" filter="url(#string-blur)" />
      <line x1="72%" y1="52%" x2="72%" y2="72%" stroke="#8b1a1a" strokeWidth="1.2" opacity="0.35" filter="url(#string-blur)" />
      <line x1="50%" y1="28%" x2="50%" y2="72%" stroke="#8b1a1a" strokeWidth="1" strokeDasharray="4 4" opacity="0.25" filter="url(#string-blur)" />
    </svg>
  );
}
