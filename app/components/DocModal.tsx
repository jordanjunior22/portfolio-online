"use client";
import { useEffect } from "react";
import { portfolioData } from "../data";

type Section = (typeof portfolioData.sections)[number];

export default function DocModal({
  section,
  onClose,
}: {
  section: Section;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const content = section.content as Record<string, unknown>;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-enter newspaper"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(680px, 92vw)",
          maxHeight: "85vh",
          overflowY: "auto",
          padding: "40px 44px",
          position: "relative",
          border: "1px solid #c8b48a",
          boxShadow: "0 30px 80px rgba(0,0,0,0.8)",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "14px",
            right: "16px",
            background: "none",
            border: "none",
            fontFamily: "'Courier Prime', monospace",
            fontSize: "18px",
            color: "#5a3e1b",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        {/* Header rule */}
        <div style={{ borderTop: "3px solid #1a0f00", borderBottom: "3px double #1a0f00", padding: "5px 0", marginBottom: "20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "9px", letterSpacing: "0.3em", color: "#1a0f00" }}>
            OFFICIAL DOCUMENT · {String(portfolioData.caseNumber)}
          </span>
          <span style={{ fontFamily: "'Special Elite', cursive", fontSize: "9px", letterSpacing: "0.2em", color: "#8b1a1a" }}>
            {String(section.stampText)}
          </span>
        </div>

        {/* Icon + title */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
          <span style={{ fontSize: "40px" }}>{String(section.icon)}</span>
          <div>
            <h2 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "28px", color: "#1a0f00", letterSpacing: "0.05em" }}>
              {content.heading as string}
            </h2>
            <div style={{ height: "2px", background: "#1a0f00", marginTop: "4px" }} />
          </div>
        </div>

        {/* Body text */}
        {content.body && (
          <p style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: "13px",
            lineHeight: 1.8,
            color: "#1a0f00",
            whiteSpace: "pre-line",
            borderLeft: "3px solid #8b6914",
            paddingLeft: "16px",
            marginBottom: "16px",
          }}>
            {content.body as string}
          </p>
        )}

        {/* Items list (experience / projects / education) */}
        {content.items && (
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {(content.items as Array<{ title: string; org?: string; period?: string; detail: string; tech?: string; link?: string }>).map((item, i) => (
              <div key={i} style={{ borderBottom: "1px dashed #c8b48a", paddingBottom: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "4px" }}>
                  <h3 style={{ fontFamily: "'Special Elite', cursive", fontSize: "16px", color: "#1a0f00" }}>
                    {item.title}
                  </h3>
                  {item.period && (
                    <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "11px", color: "#8b6914", flexShrink: 0 }}>
                      {item.period}
                    </span>
                  )}
                </div>
                {item.org && (
                  <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "11px", color: "#5a3e1b", fontStyle: "italic", marginBottom: "4px" }}>
                    {item.org}
                  </p>
                )}
                {item.tech && (
                  <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "10px", color: "#8b6914", marginBottom: "4px", letterSpacing: "0.05em" }}>
                    {item.tech}
                  </p>
                )}
                <p style={{ fontFamily: "'Courier Prime', monospace", fontSize: "12px", color: "#2a1a0a", lineHeight: 1.6 }}>
                  {item.detail}
                </p>
                {item.link && (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ fontFamily: "'Courier Prime', monospace", fontSize: "11px", color: "#8b1a1a", textDecoration: "underline" }}>
                    VIEW EVIDENCE →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills groups */}
        {content.groups && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {(content.groups as Array<{ label: string; items: string[] }>).map((group, i) => (
              <div key={i}>
                <h3 style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.15em", color: "#5a3e1b", marginBottom: "8px", textTransform: "uppercase" }}>
                  ▸ {group.label}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.items.map((skill, j) => (
                    <span key={j} style={{
                      fontFamily: "'Courier Prime', monospace",
                      fontSize: "11px",
                      background: "rgba(0,0,0,0.08)",
                      border: "1px solid rgba(0,0,0,0.15)",
                      padding: "3px 10px",
                      color: "#1a0f00",
                      letterSpacing: "0.05em",
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div style={{ borderTop: "1px solid #c8b48a", marginTop: "24px", paddingTop: "10px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "9px", color: "#8b6914" }}>
            PRESS ESC OR CLICK OUTSIDE TO CLOSE
          </span>
          <span style={{ fontFamily: "'Courier Prime', monospace", fontSize: "9px", color: "#5a3e1b" }}>
            {String(portfolioData.name)} · {String(portfolioData.location)}
          </span>
        </div>
      </div>
    </div>
  );
}