"use client";

interface Section {
  id: string;
  label: string;
  icon: string;
  type: string;
  rotation: number;
  color: string;
  stampText: string;
  content: Record<string, unknown>;
}

export default function DocCard({
  section,
  delay,
  onClick,
}: {
  section: Section;
  delay: number;
  onClick: () => void;
}) {
  const isNote = section.type === "note";
  const isFolded = section.type === "dossier";

  return (
    <div
      className="doc-hover fade-in-up"
      onClick={onClick}
      style={{
        "--rot": `${section.rotation}deg`,
        transform: `rotate(${section.rotation}deg)`,
        animationDelay: `${delay}ms`,
        width: isNote ? "200px" : "220px",
        minHeight: isNote ? "180px" : "200px",
        background: section.color,
        boxShadow: "3px 3px 0 #0005, 6px 6px 15px #0007",
        border: "1px solid rgba(0,0,0,0.15)",
        padding: isNote ? "28px 16px 16px" : "32px 16px 16px",
        position: "relative",
        cursor: "pointer",
        zIndex: 10,
      } as React.CSSProperties}
    >
      {/* Pushpin or tape */}
      {isFolded ? (
        /* Tape */
        <div style={{
          position: "absolute",
          top: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "64px",
          height: "22px",
          background: "rgba(255, 220, 120, 0.5)",
          border: "1px solid rgba(200, 160, 60, 0.4)",
          zIndex: 20,
        }} />
      ) : (
        /* Pushpin */
        <div style={{
          position: "absolute",
          top: "-11px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: `radial-gradient(circle at 35% 35%, ${section.id === "contact" ? "#ff9955" : "#ff5555"}, ${section.id === "contact" ? "#8b3a00" : "#8b0000"})`,
          boxShadow: "0 2px 5px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.3)",
          zIndex: 20,
        }} />
      )}

      {/* Fold corner for dossier type */}
      {isFolded && (
        <div style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 30px 30px 0",
          borderColor: `transparent ${darken(section.color)} transparent transparent`,
          zIndex: 15,
        }} />
      )}

      {/* Stamp */}
      <div style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        fontSize: "8px",
        letterSpacing: "0.15em",
        border: "1.5px solid rgba(139,26,26,0.6)",
        color: "rgba(139,26,26,0.65)",
        padding: "2px 5px",
        transform: "rotate(8deg)",
        zIndex: 15,
      }}>
        {section.stampText}
      </div>

      {/* Icon */}
      <div style={{ fontSize: "28px", marginBottom: "8px", filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))" }}>
        {section.icon}
      </div>

      {/* Horizontal rule */}
      <div style={{ height: "1px", background: "rgba(0,0,0,0.2)", marginBottom: "6px" }} />

      {/* Label */}
      <h3 style={{
        fontFamily: "'Special Elite', cursive",
        fontSize: "15px",
        color: "#1a0f00",
        letterSpacing: "0.05em",
        marginBottom: "4px",
      }}>
        {section.label}
      </h3>

      {/* Fake lines */}
      <div style={{ opacity: 0.35 }}>
        {[70, 85, 60, 75, 40].map((w, i) => (
          <div key={i} style={{
            height: "1.5px",
            width: `${w}%`,
            background: "#1a0f00",
            marginTop: "5px",
          }} />
        ))}
      </div>

      {/* Open hint */}
      <p style={{
        fontFamily: "'Courier Prime', monospace",
        fontSize: "8px",
        color: "#8b6914",
        marginTop: "10px",
        letterSpacing: "0.1em",
      }}>
        [ OPEN FILE ]
      </p>
    </div>
  );
}

function darken(hex: string): string {
  // Simple darken for fold corner
  const map: Record<string, string> = {
    "#f5ead6": "#d4c4a0",
    "#eee0c0": "#c8ba90",
    "#f0e4c5": "#cfc0a0",
    "#fef3c0": "#ddd090",
    "#fde8d0": "#e0c4a0",
  };
  return map[hex] ?? "#c8b48a";
}
