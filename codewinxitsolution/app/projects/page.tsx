import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore CodeWinx IT Solutions' portfolio — web apps, mobile apps, SaaS platforms, AI tools, and more built for ambitious clients.",
};

const CATEGORIES = ["All", "Web Development", "Mobile Development", "AI & Automation", "UI/UX Design"];

export default function ProjectsPage() {
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
            bottom: "10%",
            right: "10%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-tag">Our Portfolio</span>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              marginTop: "1rem",
              marginBottom: "1.5rem",
              maxWidth: 700,
            }}
          >
            Work That Speaks
            <br />
            <span className="gradient-text">For Itself</span>
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.1rem",
              maxWidth: 580,
              lineHeight: 1.8,
            }}
          >
            120+ projects delivered. Here&apos;s a curated selection of products and platforms we&apos;re proud to have built.
          </p>
        </div>
      </section>

      {/* Filter tabs (visual only — upgrade with state for interactivity) */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {CATEGORIES.map((cat, i) => (
              <span
                key={cat}
                style={{
                  padding: "0.45rem 1.1rem",
                  borderRadius: "100px",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: i === 0 ? 600 : 400,
                  cursor: "pointer",
                  background: i === 0 ? "var(--gradient-accent)" : "var(--color-surface-3)",
                  color: i === 0 ? "#fff" : "var(--color-text-secondary)",
                  border: "1px solid",
                  borderColor: i === 0 ? "transparent" : "var(--color-border)",
                  transition: "var(--transition-fast)",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i} />
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
          <span className="section-tag">Your Project Here</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.25rem", marginTop: "1rem" }}>
            Let&apos;s Build Your <span className="gradient-text">Next Big Thing</span>
          </h2>
          <p style={{ color: "var(--color-text-secondary)", maxWidth: 500, margin: "0 auto 2.5rem", fontSize: "1rem" }}>
            Have a project in mind? We&apos;d love to hear about it and help you bring it to life.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a Conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
