import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  index?: number;
}

export default function ProjectCard({
  title,
  category,
  description,
  tech,
  image,
  link,
  index = 0,
}: ProjectCardProps) {
  return (
    <div
      style={{
        background: "var(--gradient-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "var(--transition-med)",
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(-4px)";
        el.style.borderColor = "rgba(0, 212, 255, 0.3)";
        el.style.boxShadow = "var(--shadow-card)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "translateY(0)";
        el.style.borderColor = "var(--color-border)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          height: 200,
          background: "linear-gradient(135deg, var(--color-surface-2) 0%, var(--color-surface-3) 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "3rem",
            opacity: 0.08,
            letterSpacing: "-0.03em",
            userSelect: "none",
          }}
        >
          {title.slice(0, 2).toUpperCase()}
        </div>

        {/* Category badge */}
        <span
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            background: "rgba(0, 212, 255, 0.12)",
            border: "1px solid rgba(0, 212, 255, 0.2)",
            padding: "0.25rem 0.75rem",
            borderRadius: "100px",
          }}
        >
          {category}
        </span>

        {/* Link button */}
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-text-primary)",
            transition: "var(--transition-fast)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--gradient-accent)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
          }}
        >
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
          }}
        >
          {title}
        </h3>

        <p style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: 1.75, flex: 1 }}>
          {description}
        </p>

        {/* Tech stack */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--color-text-muted)",
                background: "var(--color-surface-3)",
                border: "1px solid var(--color-border)",
                padding: "0.2rem 0.6rem",
                borderRadius: "6px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
