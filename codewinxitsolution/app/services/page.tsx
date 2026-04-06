import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service IT solutions — web development, mobile apps, UI/UX design, cloud DevOps, AI automation, and digital marketing.",
};

const PROCESS = [
  { step: "01", title: "Discovery", desc: "We deep-dive into your business, goals, and audience to map out the right solution." },
  { step: "02", title: "Design", desc: "Our designers craft wireframes and prototypes before a single line of code is written." },
  { step: "03", title: "Development", desc: "Agile development with weekly check-ins, demos, and transparent communication." },
  { step: "04", title: "Launch & Support", desc: "Rigorous QA, smooth deployment, and ongoing maintenance to keep things running." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "6rem",
          background: "var(--gradient-hero)",
          position: "relative",
        }}
        className="grid-bg"
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "60%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-tag">What We Offer</span>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              marginTop: "1rem",
              marginBottom: "1.5rem",
              maxWidth: 700,
            }}
          >
            Services Built for
            <br />
            <span className="gradient-text">Modern Businesses</span>
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.1rem",
              maxWidth: 580,
              lineHeight: 1.8,
            }}
          >
            Whether you&apos;re a startup building your first product or an enterprise modernizing your tech stack — we have the expertise to deliver.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {SERVICES.map((service, i) => (
              <div key={service.id} id={service.slug}>
                <ServiceCard {...service} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: "var(--color-primary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-tag">How We Work</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Our <span className="gradient-text">Process</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
              position: "relative",
            }}
          >
            {PROCESS.map(({ step, title, desc }) => (
              <div
                key={step}
                style={{
                  background: "var(--gradient-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "3rem",
                    fontWeight: 800,
                    color: "rgba(0, 212, 255, 0.12)",
                    lineHeight: 1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {step}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {title}
                </h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: 1.75 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section" style={{ background: "var(--color-secondary)" }}>
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
              <span className="section-tag">Why CodeWinx</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", margin: "1rem 0 1.25rem" }}>
                The <span className="gradient-text">Difference</span> is in the Details
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.9, marginBottom: "2rem" }}>
                We don&apos;t just write code — we solve problems. Every decision is deliberate, every pixel purposeful, every
                deploy thoroughly tested.
              </p>
              <Link href="/contact" className="btn-primary">
                Start a Project <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Dedicated project manager on every engagement",
                "Weekly progress demos and Slack/email updates",
                "Source code ownership — it's yours, always",
                "Post-launch support for 30 days, included",
                "On-time delivery with milestone-based billing",
                "Security-first development practices",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    color: "var(--color-text-secondary)",
                    fontSize: "0.95rem",
                  }}
                >
                  <CheckCircle2 size={18} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
