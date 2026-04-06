"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(10, 15, 30, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.25rem",
            color: "var(--color-text-primary)",
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
              flexShrink: 0,
            }}
          >
            <Code2 size={20} color="#fff" strokeWidth={2.5} />
          </span>
          CodeWinx
        </Link>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            gap: "0.25rem",
            listStyle: "none",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    padding: "0.45rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    fontWeight: isActive ? 600 : 400,
                    fontSize: "0.9rem",
                    color: isActive
                      ? "var(--color-accent)"
                      : "var(--color-text-secondary)",
                    background: isActive
                      ? "rgba(0, 212, 255, 0.08)"
                      : "transparent",
                    transition: "var(--transition-fast)",
                    display: "block",
                  }}
                  // onMouseEnter={(e) => {
                  //   if (!isActive) {
                  //     (e.target as HTMLElement).style.color = "var(--color-text-primary)";
                  //   }
                  // }}
                  // onMouseLeave={(e) => {
                  //   if (!isActive) {
                  //     (e.target as HTMLElement).style.color = "var(--color-text-secondary)";
                  //   }
                  // }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="/contact" className="btn-primary" style={{ padding: "0.55rem 1.4rem", fontSize: "0.88rem" }}>
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--color-text-primary)",
            padding: "0.5rem",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          style={{
            background: "rgba(10, 15, 30, 0.98)",
            backdropFilter: "blur(20px)",
            padding: "1.5rem",
            borderTop: "1px solid var(--color-border)",
          }}
          className="mobile-nav"
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    display: "block",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-sm)",
                    color:
                      pathname === link.href
                        ? "var(--color-accent)"
                        : "var(--color-text-secondary)",
                    fontWeight: pathname === link.href ? 600 : 400,
                    background:
                      pathname === link.href
                        ? "rgba(0, 212, 255, 0.08)"
                        : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li style={{ marginTop: "0.5rem" }}>
              <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
