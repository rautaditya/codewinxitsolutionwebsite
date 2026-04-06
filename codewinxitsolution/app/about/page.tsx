import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Heart } from "lucide-react";
import { TEAM, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CodeWinx IT Solutions — our story, mission, values, and the talented team behind our work.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "6rem",
          background: "var(--gradient-hero)",
          position: "relative",
          overflow: "hidden",
        }}
        className="grid-bg"
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "15%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-tag">Who We Are</span>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              marginTop: "1rem",
              marginBottom: "1.5rem",
              maxWidth: 700,
            }}
          >
            Building the Future,
            <br />
            <span className="gradient-text">One Line at a Time</span>
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.1rem",
              maxWidth: 620,
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            CodeWinx IT Solutions is a full-service technology agency founded on a simple belief: great software
            changes businesses. We combine technical excellence with thoughtful design to deliver products that work.
          </p>
          <Link href="/contact" className="btn-primary">
            Work With Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div>
              <span className="section-tag">Our Story</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", margin: "1rem 0 1.25rem" }}>
                From a Small Team to a <span className="gradient-text">Trusted Agency</span>
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.9, marginBottom: "1rem" }}>
                CodeWinx was founded in 2017 with a team of three passionate developers in Solapur, Maharashtra. We
                started by building local business websites and quickly grew our capabilities as client ambitions grew.
              </p>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.9 }}>
                Today, we&apos;re a 20+ strong team of developers, designers, and strategists — delivering
                cutting-edge digital products for startups and enterprises across India and globally.
              </p>
            </div>

            {/* Values */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                {
                  icon: Target,
                  title: "Mission",
                  text: "To empower businesses with technology that is fast, beautiful, and built to last.",
                },
                {
                  icon: Eye,
                  title: "Vision",
                  text: "To be India's most trusted software agency — known for quality, speed, and transparency.",
                },
                {
                  icon: Heart,
                  title: "Values",
                  text: "Integrity, craftsmanship, continuous learning, and genuine client partnership.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    background: "var(--gradient-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "var(--gradient-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color="#fff" />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {title}
                    </h3>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: 1.7 }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "5rem 1.5rem", background: "var(--color-secondary)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {STATS.map(({ label, value }) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "3rem",
                    background: "var(--gradient-accent)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "0.5rem",
                  }}
                >
                  {value}
                </div>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "var(--color-primary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-tag">The Team</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Meet the <span className="gradient-text">Makers</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {TEAM.map(({ name, role, bio }) => (
              <div
                key={name}
                style={{
                  background: "var(--gradient-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  textAlign: "center",
                  transition: "var(--transition-med)",
                }}
                // onMouseEnter={(e) => {
                //   (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.3)";
                //   (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                // }}
                // onMouseLeave={(e) => {
                //   (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                //   (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                // }}
              >
                {/* Avatar placeholder */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "var(--gradient-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.5rem",
                    color: "#fff",
                  }}
                >
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.25rem" }}>
                  {name}
                </h3>
                <p
                  style={{
                    color: "var(--color-accent)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.08em",
                    marginBottom: "1rem",
                  }}
                >
                  {role}
                </p>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: 1.75 }}>{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--color-secondary)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.25rem" }}>
            Ready to Join Our <span className="gradient-text">Client Family?</span>
          </h2>
          <p style={{ color: "var(--color-text-secondary)", maxWidth: 500, margin: "0 auto 2.5rem", fontSize: "1rem" }}>
            Let&apos;s have a conversation about your next big idea.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
