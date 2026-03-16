"use client";
import { portfolioData } from "../data";

export default function WantedNewspaper({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="newspaper doc-hover relative"
      onClick={onClick}
      style={{
        width: "320px",
        minHeight: "420px",
        padding: "24px 20px",
        boxShadow: "4px 4px 0 #0006, 8px 8px 20px #0008",
        border: "1px solid #c8b48a",
        position: "relative",
        zIndex: 10,
        "--rot": "-1deg",
        transform: "rotate(-1deg)",
      } as React.CSSProperties}
    >
      {/* Pushpin */}
      <div
        style={{
          position: "absolute",
          top: "-12px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 35%, #ff5555, #8b0000)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.7), inset 0 1px 2px rgba(255,255,255,0.3)",
          zIndex: 30,
        }}
      />

      {/* Paper crease lines */}
      <div style={{ position: "absolute", top: 0, left: "33%", right: "33%", height: "100%", borderLeft: "1px solid rgba(0,0,0,0.04)", borderRight: "1px solid rgba(0,0,0,0.04)", pointerEvents: "none" }} />

      {/* Header bar */}
      <div style={{ borderTop: "3px solid #1a0f00", borderBottom: "3px double #1a0f00", padding: "4px 0", marginBottom: "10px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "9px", letterSpacing: "0.3em", color: "#1a0f00" }}>
          THE DAILY DOSSIER · EST. 1923 · VOL. XCIX
        </p>
      </div>

      {/* WANTED headline */}
      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <h1 style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          fontSize: "52px",
          lineHeight: 1,
          color: "#1a0f00",
          letterSpacing: "0.05em",
        }}>
          WANTED
        </h1>
        <div style={{ height: "2px", background: "#1a0f00", margin: "4px 0" }} />
        <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "10px", letterSpacing: "0.25em", color: "#5a3e1b" }}>
          ✦ DEAD OR ALIVE ✦
        </p>
      </div>

      {/* Photo */}
      <div style={{
        width: "120px",
        height: "140px",
        margin: "0 auto 12px",
        border: "2px solid #8b6914",
        boxShadow: "inset 0 0 20px rgba(0,0,0,0.2), 2px 2px 0 rgba(0,0,0,0.3)",
        position: "relative",
        overflow: "hidden",
      }}>
        <img
          src="/jordan.png"
          alt={portfolioData.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(30%) contrast(1.1) sepia(15%)",
            display: "block",
          }}
        />
        {/* Scanline overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
          pointerEvents: "none",
        }} />
        {/* Vignette */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.3) 100%)",
          pointerEvents: "none",
        }} />
      </div>

      {/* Name */}
      <div style={{ textAlign: "center", borderTop: "1px solid #8b6914", borderBottom: "1px solid #8b6914", padding: "6px 0", marginBottom: "10px" }}>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "22px", letterSpacing: "0.1em", color: "#1a0f00" }}>
          {portfolioData.name}
        </h2>
        <p style={{ fontFamily: "'Special Elite', cursive", fontSize: "10px", color: "#5a3e1b", letterSpacing: "0.15em" }}>
          {portfolioData.title.toUpperCase()}
        </p>
      </div>

      {/* Body text in columns */}
      <p style={{
        fontFamily: "'Courier Prime', monospace",
        fontSize: "9.5px",
        lineHeight: 1.5,
        color: "#2a1a0a",
        textAlign: "justify",
        
        columnGap: "12px",
        hyphens: "auto",
      }}>
        {portfolioData.bio}
      </p>

      {/* Case number */}
      <div style={{ marginTop: "12px", borderTop: "1px solid #c8b48a", paddingTop: "6px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "8px", color: "#5a3e1b" }}>{portfolioData.caseNumber}</span>
        <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "8px", color: "#8b1a1a", fontWeight: 700 }}>{portfolioData.status}</span>
      </div>

      {/* WANTED stamp */}
      <div style={{
        position: "absolute",
        bottom: "40px",
        right: "12px",
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        fontSize: "13px",
        letterSpacing: "0.1em",
        border: "2px solid rgba(139,26,26,0.7)",
        color: "rgba(139,26,26,0.7)",
        padding: "3px 8px",
        transform: "rotate(8deg)",
        opacity: 0.8,
      }}>
        HIRE ME
      </div>

      {/* Click hint */}
      <p style={{ textAlign: "center", fontFamily: "'Courier Prime', monospace", fontSize: "8px", color: "#8b6914", marginTop: "8px", letterSpacing: "0.1em" }}>
        [ CLICK TO INVESTIGATE ]
      </p>
    </div>
  );
}
