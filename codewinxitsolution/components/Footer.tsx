import Link from "next/link";
import { Code2, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { NAV_LINKS, CONTACT_EMAIL, PHONE, SERVICES } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--color-secondary)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: "5rem",
        marginTop: "0",
      }}
    >
      <div className="container">
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
            paddingBottom: "4rem",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.2rem",
                color: "var(--color-text-primary)",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: "var(--gradient-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Code2 size={20} color="#fff" strokeWidth={2.5} />
              </span>
              CodeWinx
            </Link>
            <p style={{ color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Building digital products that move fast, look great, and scale with your ambitions.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    background: "var(--color-surface-3)",
                    border: "1px solid var(--color-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-text-secondary)",
                    transition: "var(--transition-fast)",
                  }}
                  // onMouseEnter={(e) => {
                  //   (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
                  //   (e.currentTarget as HTMLElement).style.borderColor = "var(--color-accent)";
                  // }}
                  // onMouseLeave={(e) => {
                  //   (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                  //   (e.currentTarget as HTMLElement).style.borderColor = "var(--color-border)";
                  // }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.9rem",
                      transition: "var(--transition-fast)",
                    }}
                    // onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                    // onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-secondary)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                marginBottom: "1.25rem",
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: "0.9rem",
                      transition: "var(--transition-fast)",
                    }}
                    // onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                    // onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-secondary)")}
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-text-muted)",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: Mail, text: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: Phone, text: PHONE, href: `tel:${PHONE}` },
                { icon: MapPin, text: "Solapur, Maharashtra, India", href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    color: "var(--color-text-secondary)",
                    fontSize: "0.9rem",
                    transition: "var(--transition-fast)",
                  }}
                  // onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-accent)")}
                  // onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)")}
                >
                  <Icon size={16} style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            padding: "1.75rem 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
            © {currentYear} CodeWinx IT Solutions. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.85rem",
                  transition: "var(--transition-fast)",
                }}
                // onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--color-accent)")}
                // onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--color-text-muted)")}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
