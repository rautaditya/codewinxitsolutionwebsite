
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { SERVICES, PROJECTS, TESTIMONIALS, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CodeWinx IT Solutions — Web, Mobile & AI Development",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-tag">What We Do</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
              Services That Drive <span className="gradient-text">Real Growth</span>
            </h2>
            <p style={{ color: "var(--color-text-secondary)", maxWidth: 580, margin: "0 auto", fontSize: "1rem" }}>
              From your first line of code to your thousandth customer — we offer everything you need to build, launch, and scale.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/services" className="btn-outline">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Projects Section */}
      <section className="section" style={{ background: "var(--color-primary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-tag">Our Work</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1rem" }}>
{"Projects We're "} <span className="gradient-text">Proud Of</span>            </h2>
            <p style={{ color: "var(--color-text-secondary)", maxWidth: 560, margin: "0 auto", fontSize: "1rem" }}>
              A selection of products and platforms we've built for ambitious clients across industries.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {PROJECTS.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/projects" className="btn-outline">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-tag">Testimonials</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {TESTIMONIALS.map(({ name, company, quote, rating }) => (
              <div
                key={name}
                style={{
                  background: "var(--gradient-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.25rem" }}>
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={14} fill="var(--color-highlight)" color="var(--color-highlight)" />
                  ))}
                </div>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem", lineHeight: 1.8, flex: 1 }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.95rem" }}>{name}</p>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.82rem" }}>{company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: "6rem 1.5rem",
          background: "var(--color-secondary)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <span className="section-tag">Let&apos;s Work Together</span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              marginBottom: "1.25rem",
              maxWidth: 700,
              margin: "0 auto 1.25rem",
            }}
          >
            Ready to Build Something <span className="gradient-text">Exceptional?</span>
          </h2>
          <p
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: 540,
              margin: "0 auto 2.5rem",
              fontSize: "1rem",
            }}
          >
            Tell us about your project and we&apos;ll get back to you within 24 hours with a tailored plan.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
            <Link href="/contact" className="btn-primary">
              Start a Project <ArrowRight size={16} />
            </Link>
            <Link href="/about" className="btn-outline">
              Learn About Us
            </Link>
          </div>

          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            {["Free consultation", "48-hr turnaround", "No long-term contracts"].map((item) => (
              <span
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--color-text-muted)",
                  fontSize: "0.85rem",
                }}
              >
                <CheckCircle2 size={14} color="var(--color-accent)" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
