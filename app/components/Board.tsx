"use client";
import { useState } from "react";
import WantedNewspaper from "./WantedNewspaper";
import DocCard from "./DocCard";
import DocModal from "./DocModal";
import StringLines from "./StringLines";
import { portfolioData } from "../data";

type Section = (typeof portfolioData.sections)[number];

export default function Board() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  return (
    <>
      {/* Ambient scanlines + vignette */}
      <div className="scanlines" />
      <div className="vignette" />

      {/* Main cork board */}
      <main
        className="cork-board"
        style={{
          minHeight: "100vh",
          padding: "60px 40px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Board header */}
        <div style={{ textAlign: "center", marginBottom: "50px", position: "relative", zIndex: 10 }}>
          <p style={{
            fontFamily: "'Special Elite', cursive",
            fontSize: "11px",
            letterSpacing: "0.4em",
            color: "#8b6914",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}>
            ✦ INVESTIGATION BOARD ✦
          </p>
          <h1 style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(28px, 5vw, 52px)",
            letterSpacing: "0.12em",
            color: "#d4a853",
            textShadow: "2px 2px 0 rgba(0,0,0,0.5)",
          }}>
            {portfolioData.tagline}
          </h1>
          <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "12px", color: "#8b6914", marginTop: "4px", letterSpacing: "0.15em" }}>
            {portfolioData.caseNumber} · {portfolioData.location}
          </p>
        </div>

        {/* String connections */}
        <StringLines />

        {/* Main newspaper — centered top */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px", position: "relative", zIndex: 10 }}>
          <WantedNewspaper onClick={() => {
            // Open "about" on newspaper click
            const about = portfolioData.sections.find(s => s.id === "about");
            if (about) setActiveSection(about);
          }} />
        </div>

        {/* Document cards grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px 30px",
            maxWidth: "1100px",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          {portfolioData.sections.map((section, i) => (
            <DocCard
              key={section.id}
              section={section}
              delay={i * 100 + 300}
              onClick={() => setActiveSection(section)}
            />
          ))}
        </div>

        {/* Coffee stain decoration */}
        <div style={{
          position: "absolute",
          bottom: "80px",
          right: "60px",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "12px solid rgba(80, 40, 5, 0.18)",
          boxShadow: "0 0 0 4px rgba(80,40,5,0.08), 0 0 0 8px rgba(80,40,5,0.04)",
          pointerEvents: "none",
          zIndex: 2,
        }} />
        <div style={{
          position: "absolute",
          bottom: "95px",
          right: "75px",
          width: "88px",
          height: "88px",
          borderRadius: "50%",
          border: "8px solid rgba(80, 40, 5, 0.1)",
          pointerEvents: "none",
          zIndex: 2,
        }} />

        {/* Sticky note bottom left */}
        <div style={{
          position: "absolute",
          bottom: "60px",
          left: "50px",
          width: "150px",
          padding: "12px",
          background: "#fef3c0",
          boxShadow: "2px 2px 0 #0004",
          transform: "rotate(-5deg)",
          fontFamily: "'Courier Prime', monospace",
          fontSize: "10px",
          lineHeight: 1.5,
          color: "#1a0f00",
          zIndex: 10,
        }}>
          <p style={{ fontWeight: 700, marginBottom: "4px" }}>NOTE TO SELF:</p>
          <p>Click any document to open it. Press ESC to close.</p>
        </div>
      </main>

      {/* Modal */}
      {activeSection && (
        <DocModal section={activeSection} onClose={() => setActiveSection(null)} />
      )}
    </>
  );
}
