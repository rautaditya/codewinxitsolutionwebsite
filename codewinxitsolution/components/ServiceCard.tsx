import Link from "next/link";
import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Bot,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Bot,
  TrendingUp,
};

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  features: string[];
  slug: string;
  index?: number;
}

export default function ServiceCard({
  title,
  icon,
  description,
  features,
  slug,
  index = 0,
}: ServiceCardProps) {
  const Icon = ICON_MAP[icon] || Globe;

  return (
    <div
      style={{
        background: "var(--gradient-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        transition: "var(--transition-med)",
        position: "relative",
        overflow: "hidden",
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
      {/* Subtle glow top-right */}
      <div
        style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: "var(--gradient-accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={24} color="#fff" />
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: 1.75, flex: 1 }}>
        {description}
      </p>

      {/* Features */}
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-text-muted)",
              fontSize: "0.85rem",
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: "var(--color-accent)",
                flexShrink: 0,
              }}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link
        href={`/services#${slug}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          color: "var(--color-accent)",
          fontSize: "0.88rem",
          fontWeight: 600,
          fontFamily: "var(--font-display)",
          transition: "var(--transition-fast)",
          marginTop: "auto",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.gap = "0.7rem";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.gap = "0.4rem";
        }}
      >
        Learn More <ArrowRight size={14} />
      </Link>
    </div>
  );
}
