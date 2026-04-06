"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Code2, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--gradient-hero)",
      }}
      className="grid-bg"
    >
      {/* Glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ paddingTop: "8rem", paddingBottom: "6rem", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 780 }}>
          {/* Tag */}
          <div
            className="animate-fade-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.78rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              background: "rgba(0, 212, 255, 0.08)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
              padding: "0.4rem 1rem",
              borderRadius: "100px",
              marginBottom: "2rem",
            }}
          >
            <Sparkles size={13} />
            Full-Service IT Solutions Agency
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: "1.75rem",
              animation: "fadeUp 0.7s ease 0.1s both",
            }}
          >
            We Build Digital
            <br />
            <span className="gradient-text">Products That Win.</span>
          </h1>

          {/* Sub */}
          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--color-text-secondary)",
              lineHeight: 1.8,
              maxWidth: 600,
              marginBottom: "2.5rem",
              animation: "fadeUp 0.7s ease 0.2s both",
            }}
          >
            From concept to deployment — we craft blazing-fast web apps, mobile experiences, AI integrations, and growth strategies that push your business forward.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              animation: "fadeUp 0.7s ease 0.3s both",
            }}
          >
            <Link href="/contact" className="btn-primary">
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link href="/projects" className="btn-outline">
              View Our Work
            </Link>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "4rem",
              flexWrap: "wrap",
              animation: "fadeUp 0.7s ease 0.4s both",
            }}
          >
            {[
              { value: "120+", label: "Projects Delivered" },
              { value: "85+", label: "Happy Clients" },
              { value: "7+", label: "Years of Experience" },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "2rem",
                    background: "var(--gradient-accent)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </div>
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating cards */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            animation: "fadeIn 1s ease 0.5s both",
          }}
          className="floating-cards"
        >
          {[
            { icon: Code2, label: "Clean Code", sub: "TypeScript + Next.js" },
            { icon: Layers, label: "Full Stack", sub: "End-to-End Delivery" },
            { icon: Sparkles, label: "AI-Powered", sub: "Smart Automation" },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              style={{
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-md)",
                padding: "1rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                minWidth: 220,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "var(--gradient-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon size={18} color="#fff" />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9rem" }}>{label}</div>
                <div style={{ color: "var(--color-text-muted)", fontSize: "0.78rem" }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .floating-cards { display: none !important; }
        }
      `}</style>
    </section>
  );
}
