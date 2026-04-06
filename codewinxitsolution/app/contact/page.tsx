"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare } from "lucide-react";
import { CONTACT_EMAIL, PHONE } from "@/lib/constants";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.9rem 1.1rem",
    background: "var(--color-surface-2)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-sm)",
    color: "var(--color-text-primary)",
    fontFamily: "var(--font-body)",
    fontSize: "0.95rem",
    outline: "none",
    transition: "var(--transition-fast)",
  };

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
            left: "65%",
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-tag">Get in Touch</span>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              marginTop: "1rem",
              marginBottom: "1.5rem",
              maxWidth: 700,
            }}
          >
            Let&apos;s Start a
            <br />
            <span className="gradient-text">Conversation</span>
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              fontSize: "1.1rem",
              maxWidth: 560,
              lineHeight: 1.8,
            }}
          >
            Tell us about your project. We typically respond within 24 hours with initial thoughts and next steps.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Left: Info */}
            <div>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "1.25rem" }}>
                Contact <span className="gradient-text">Information</span>
              </h2>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                Reach out via form, email, or phone. We&apos;re also available on WhatsApp for quick queries.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
                {[
                  { icon: Mail, label: "Email Us", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                  { icon: Phone, label: "Call Us", value: PHONE, href: `tel:${PHONE}` },
                  { icon: MapPin, label: "Our Office", value: "Solapur, Maharashtra, India — 413001", href: "#" },
                  { icon: Clock, label: "Working Hours", value: "Mon–Sat, 9 AM – 7 PM IST", href: "#" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      display: "flex",
                      gap: "1.1rem",
                      alignItems: "flex-start",
                      color: "var(--color-text-secondary)",
                      transition: "var(--transition-fast)",
                    }}
                    // onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-text-primary)")}
                    // onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)")}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "var(--color-surface-3)",
                        border: "1px solid var(--color-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} color="var(--color-accent)" />
                    </div>
                    <div>
                      <p style={{ fontSize: "0.78rem", color: "var(--color-text-muted)", marginBottom: "0.2rem" }}>{label}</p>
                      <p style={{ fontSize: "0.92rem" }}>{value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* FAQs teaser */}
              <div
                style={{
                  background: "var(--gradient-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <MessageSquare size={18} color="var(--color-accent)" />
                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>Quick Questions?</h4>
                </div>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.87rem", lineHeight: 1.7 }}>
                  WhatsApp us for a quick chat:{" "}
                  <a
                    href={`https://wa.me/${PHONE.replace(/\D/g, "")}`}
                    style={{ color: "var(--color-accent)" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open WhatsApp
                  </a>
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <div
              style={{
                background: "var(--gradient-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "rgba(0, 212, 255, 0.1)",
                      border: "2px solid var(--color-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                    }}
                  >
                    <CheckCircle2 size={32} color="var(--color-accent)" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>
                    Message Received!
                  </h3>
                  <p style={{ color: "var(--color-text-secondary)", marginBottom: "2rem" }}>
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", service: "", budget: "", message: "" }); }}
                    className="btn-outline"
                    style={{ border: "1px solid var(--color-accent)", borderRadius: "var(--radius-sm)", padding: "0.75rem 1.75rem" }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", marginBottom: "0.25rem" }}>
                    Tell Us About Your Project
                  </h3>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", display: "block", marginBottom: "0.4rem" }}>
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Rahul Sharma"
                        style={inputStyle}
                        onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--color-accent)")}
                        onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--color-border)")}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", display: "block", marginBottom: "0.4rem" }}>
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="rahul@company.com"
                        style={inputStyle}
                        onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--color-accent)")}
                        onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--color-border)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", display: "block", marginBottom: "0.4rem" }}>
                      Company / Organization
                    </label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      style={inputStyle}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--color-accent)")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--color-border)")}
                    />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", display: "block", marginBottom: "0.4rem" }}>
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--color-accent)")}
                        onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--color-border)")}
                      >
                        <option value="">Select service</option>
                        <option>Web Development</option>
                        <option>Mobile App Development</option>
                        <option>UI/UX Design</option>
                        <option>Cloud & DevOps</option>
                        <option>AI & Automation</option>
                        <option>Digital Marketing & SEO</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", display: "block", marginBottom: "0.4rem" }}>
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                        onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--color-accent)")}
                        onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--color-border)")}
                      >
                        <option value="">Select budget</option>
                        <option>Under ₹50,000</option>
                        <option>₹50,000 – ₹2,00,000</option>
                        <option>₹2,00,000 – ₹5,00,000</option>
                        <option>₹5,00,000+</option>
                        <option>Let&apos;s discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: "0.82rem", color: "var(--color-text-muted)", display: "block", marginBottom: "0.4rem" }}>
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your project, goals, timeline, and any specific requirements..."
                      style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                      onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "var(--color-accent)")}
                      onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "var(--color-border)")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{
                      justifyContent: "center",
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && <Send size={16} />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
