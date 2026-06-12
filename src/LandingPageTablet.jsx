import { useState, useEffect } from "react";
import heroBg from "./assets/hero-bg.png";
import worldMap from "./assets/world-map.png";
import lockImg from "./assets/lock-bg.png";

const BRAND = "#e8334a";
const BRAND_LIGHT = "#fdeaed";

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, target - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  });
  return t;
}

// ─── Shared ───────────────────────────────────────────────────────────────────

function Tag({ children, noBg, light }) {
  return (
    <span style={{
      display: "inline-block",
      background: noBg ? "transparent" : light ? "rgba(232,51,74,0.18)" : BRAND_LIGHT,
      color: light ? "#ff8090" : BRAND,
      borderRadius: 20, padding: "5px 14px",
      fontSize: 11, fontWeight: 700, letterSpacing: "1.5px",
      textTransform: "uppercase", fontFamily: "'Inter', sans-serif",
      marginBottom: 14,
    }}>{children}</span>
  );
}

const sectionTitle = {
  fontFamily: "'Inter', sans-serif", fontWeight: 800,
  fontSize: "clamp(26px, 3.5vw, 34px)", color: "#1a0a0d",
  letterSpacing: "-0.5px", marginBottom: 16, lineHeight: 1.15,
};

const inputStyle = {
  width: "100%",
  paddingTop: "11px",
  paddingBottom: "11px",
  paddingLeft: "14px",
  paddingRight: "36px",
  borderRadius: 9,
  fontSize: 13,
  border: "1.5px solid #f0dfe2",
  outline: "none",
  fontFamily: "'DM Sans', sans-serif",
  color: "#333",
  background: "#fafafa",
  boxSizing: "border-box",
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 32px", height: 60,
      background: "rgba(249,245,247,0.95)", backdropFilter: "blur(12px)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="40" height="40" viewBox="0 0 44 44" fill="none" style={{ flexShrink: 0 }}>
          <path d="M36.499 0C40.3359 0 43.4463 3.11041 43.4463 6.94727V36.499C43.4463 36.6885 43.4358 36.8759 43.4209 37.0615L32.6826 26.5566C31.3112 25.2156 29.0995 25.2276 27.7432 26.584L25.5107 28.8174C24.1546 30.1738 24.1663 32.3607 25.5371 33.7021L35.498 43.4463H7.1543L34.7979 16.4053C36.169 15.0637 36.1807 12.877 34.8242 11.5205L32.5918 9.28711C31.2353 7.93089 29.0237 7.91858 27.6523 9.25977L0 36.3096V7.89941L10.7188 18.3857C12.0901 19.727 14.3017 19.7147 15.6582 18.3584L17.8906 16.125C19.2471 14.7685 19.2355 12.5818 17.8643 11.2402L6.39746 0.0234375C6.57891 0.00922816 6.76217 0 6.94727 0H36.499Z" fill="#E22A2A"/>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontFamily: "'MuseoModerno', sans-serif", fontWeight: 400, fontSize: 28, color: "#1a0a0d", lineHeight: 1 }}>Nexgn</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 10, color: "#888", marginTop: 2 }}>Smart Signing</span>
        </div>
      </div>
      
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section style={{
  background: "#F9F5F7",
  position: "relative",
  overflow: "hidden",
  paddingTop: 80,
  minHeight: 577,
  display: "flex",
}}>

{/* Exact Figma spec as CSS background */}
      <div style={{
        position: "absolute",
backgroundImage: `url(${lockImg})`,
width: "1050px",
height: "535px",
right: "auto",
top: "42px",
left: "0",
backgroundSize: "cover",
backgroundPosition: "left center",
backgroundRepeat: "no-repeat",
zIndex: 0,
maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%), linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 25%), linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
maskComposite: "intersect",
WebkitMaskComposite: "source-in",
      }}/>
      {/* Left content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        width: "50%",
        minHeight: 493,
        padding: "80px 0 32px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}>
        <span style={{
          display: "inline-block", color: BRAND,
          fontSize: 11, fontWeight: 700,
          letterSpacing: "1.5px", textTransform: "uppercase",
          fontFamily: "'DM Sans', sans-serif", marginBottom: 12,
        }}>Coming Soon</span>

        <h1 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 32, fontWeight: 800,
          lineHeight: 1.15, color: "#1a0a0d",
          marginBottom: 12,
        }}>
          The Next Generation<br/>
          of <span style={{ color: BRAND }}>Document Signature</span>
        </h1>

        <p style={{
          fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 22,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          Nexgn is building the intelligent backbone<br/>
          for a faster, smarter and more connected future
        </p>

        <div style={{
  background: "#fff", borderRadius: 16,
  padding: "18px 18px 14px",
  boxShadow: "2px 5px 40px rgba(0,0,0,0.08)",
  maxWidth: 370,
}}>
          <p style={{ fontSize: 14, fontWeight: 700, color: "#1a0a0d", marginBottom: 2, fontFamily: "'DM Sans', sans-serif" }}>
            Join Early Access
          </p>
          <p style={{ fontSize: 12, color: "#999", marginBottom: 12, fontFamily: "'DM Sans', sans-serif" }}>
            Be the first to experience what's next.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
            <div style={{ position: "relative" }}>
              <input placeholder="Full Name" style={inputStyle} />
              <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
            </div>
            <div style={{ position: "relative" }}>
              <input placeholder="Phone Number" style={inputStyle} />
              <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.95-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
            <div style={{ position: "relative" }}>
              <select defaultValue="" style={{ ...inputStyle, appearance: "none", color: "#aaa" }}>
  <option value="" disabled>Business Type</option>
                <option>Startup</option>
                <option>Enterprise</option>
                <option>Freelancer</option>
              </select>
              <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "#ccc", fontSize: 10, pointerEvents: "none" }}>▼</span>
            </div>
            <div style={{ position: "relative" }}>
              <input placeholder="Email Address" style={inputStyle} />
              <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </span>
            </div>
          </div>
          <button style={{
            width: "100%", background: "#FF000C", color: "#fff", border: "none",
            borderRadius: 8, height: 40, fontSize: 13, fontWeight: 700,
            cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
            boxShadow: "0 4px 20px rgba(255,0,12,0.25)",
          }}>Request Early Access</button>
          <p style={{ fontSize: 11, color: "#bbb", marginTop: 10, fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 5 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
// ─── What Is Nexgn ────────────────────────────────────────────────────────────

function WhatIsSection() {
  const features = [
    {
      icon: <svg width="48" height="54" viewBox="0 0 48 54" fill="none"><path d="M21.3333 46.4667V28.2L5.33333 18.9333V37.2L21.3333 46.4667ZM26.6667 46.4667L42.6667 37.2V18.9333L26.6667 28.2V46.4667ZM21.3333 52.6L2.66667 41.8667C1.82222 41.3778 1.16667 40.7333 0.7 39.9333C0.233333 39.1333 0 38.2444 0 37.2667V16.0667C0 15.0889 0.233333 14.2 0.7 13.4C1.16667 12.6 1.82222 11.9556 2.66667 11.4667L21.3333 0.733333C22.1778 0.244444 23.0667 0 24 0C24.9333 0 25.8222 0.244444 26.6667 0.733333L45.3333 11.4667C46.1778 11.9556 46.8333 12.6 47.3 13.4C47.7667 14.2 48 15.0889 48 16.0667V37.2667C48 38.2444 47.7667 39.1333 47.3 39.9333C46.8333 40.7333 46.1778 41.3778 45.3333 41.8667L26.6667 52.6C25.8222 53.0889 24.9333 53.3333 24 53.3333C23.0667 53.3333 22.1778 53.0889 21.3333 52.6ZM34.6667 17.4L39.8 14.4667L24 5.33333L18.8 8.33333L34.6667 17.4ZM24 23.6L29.2 20.6L13.4 11.4667L8.2 14.4667L24 23.6Z" fill="#FF0915"/></svg>,
      title: "1.Build", desc: "Plugin to our powerful and tailored templates for easy documentation."
    },
    {
      icon: <svg width="54" height="54" viewBox="0 0 54 54" fill="none"><path d="M9.6 21.3215L14.8 23.5215C15.4222 22.2771 16.0667 21.0771 16.7333 19.9215C17.4 18.7659 18.1333 17.6104 18.9333 16.4548L15.2 15.7215L9.6 21.3215ZM19.0667 26.8548L26.6667 34.3882C28.5333 33.6771 30.5333 32.5882 32.6667 31.1215C34.8 29.6548 36.8 27.9882 38.6667 26.1215C41.7778 23.0104 44.2111 19.5548 45.9667 15.7548C47.7222 11.9548 48.4889 8.45484 48.2667 5.25484C45.0667 5.03262 41.5556 5.79928 37.7333 7.55484C33.9111 9.31039 30.4444 11.7437 27.3333 14.8548C25.4667 16.7215 23.8 18.7215 22.3333 20.8548C20.8667 22.9882 19.7778 24.9882 19.0667 26.8548ZM29.4 18.7548C29.4 17.2659 29.9111 16.0104 30.9333 14.9882C31.9556 13.966 33.2222 13.4548 34.7333 13.4548C36.2444 13.4548 37.5111 13.966 38.5333 14.9882C39.5556 16.0104 40.0667 17.2659 40.0667 18.7548C40.0667 20.2437 39.5556 21.4993 38.5333 22.5215C37.5111 23.5437 36.2444 24.0548 34.7333 24.0548C33.2222 24.0548 31.9556 23.5437 30.9333 22.5215C29.9111 21.4993 29.4 20.2437 29.4 18.7548ZM32.2 43.9215L37.8 38.3215L37.0667 34.5882C35.9111 35.3882 34.7556 36.1104 33.6 36.7548C32.4444 37.3993 31.2444 38.0326 30 38.6548L32.2 43.9215ZM53.0667 0.388172C53.9111 5.76595 53.3889 10.9993 51.5 16.0882C49.6111 21.1771 46.3556 26.0326 41.7333 30.6548L43.0667 37.2548C43.2444 38.1437 43.2 39.0104 42.9333 39.8548C42.6667 40.6993 42.2222 41.4326 41.6 42.0548L30.4 53.2548L24.8 40.1215L13.4 28.7215L0.266667 23.1215L11.4 11.9215C12.0222 11.2993 12.7667 10.8548 13.6333 10.5882C14.5 10.3215 15.3778 10.2771 16.2667 10.4548L22.8667 11.7882C27.4889 7.16595 32.3333 3.89928 37.4 1.98817C42.4667 0.077061 47.6889 -0.456272 53.0667 0.388172ZM5 37.1882C6.55556 35.6326 8.45556 34.8437 10.7 34.8215C12.9444 34.7993 14.8444 35.5659 16.4 37.1215C17.9556 38.6771 18.7222 40.5771 18.7 42.8215C18.6778 45.0659 17.8889 46.9659 16.3333 48.5215C15.2222 49.6326 13.3667 50.5882 10.7667 51.3882C8.16667 52.1882 4.57778 52.8993 0 53.5215C0.622222 48.9437 1.33333 45.3548 2.13333 42.7548C2.93333 40.1548 3.88889 38.2993 5 37.1882ZM8.8 40.9215C8.35555 41.3659 7.91111 42.1771 7.46667 43.3548C7.02222 44.5326 6.71111 45.7215 6.53333 46.9215C7.73333 46.7437 8.92222 46.4437 10.1 46.0215C11.2778 45.5993 12.0889 45.1659 12.5333 44.7215C13.0667 44.1882 13.3556 43.5437 13.4 42.7882C13.4444 42.0326 13.2 41.3882 12.6667 40.8548C12.1333 40.3215 11.4889 40.0659 10.7333 40.0882C9.97778 40.1104 9.33333 40.3882 8.8 40.9215Z" fill="#FF0915"/></svg>,
      title: "2.Deploy", desc: "Launch documents faster with pre build tools and scaleable services."
    },
    {
      icon: <svg width="56" height="43" viewBox="0 0 56 43" fill="none"><path d="M0 42.6667V21.3333H8V42.6667H0ZM16 42.6667V14.6667H24V42.6667H16ZM32 42.6667V8H40V42.6667H32ZM48 42.6667V0H56V42.6667H48Z" fill="#FF0915"/></svg>,
      title: "3.Scale", desc: "Scale seamlessly with reliable & high performance signing experience."
    },
    {
      icon: <svg width="48" height="54" viewBox="0 0 48 54" fill="none"><path d="M21.3333 53.3333C15.1556 51.7778 10.0556 48.2333 6.03333 42.7C2.01111 37.1667 0 31.0222 0 24.2667V8L21.3333 0L42.6667 8V23.1333C41.8222 22.7778 40.9556 22.4556 40.0667 22.1667C39.1778 21.8778 38.2667 21.6667 37.3333 21.5333V11.7333L21.3333 5.73333L5.33333 11.7333V24.2667C5.33333 26.3556 5.61111 28.4444 6.16667 30.5333C6.72222 32.6222 7.5 34.6111 8.5 36.5C9.5 38.3889 10.7111 40.1333 12.1333 41.7333C13.5556 43.3333 15.1333 44.6667 16.8667 45.7333C17.3556 47.1556 18 48.5111 18.8 49.8C19.6 51.0889 20.5111 52.2444 21.5333 53.2667C21.4889 53.2667 21.4556 53.2778 21.4333 53.3C21.4111 53.3222 21.3778 53.3333 21.3333 53.3333ZM34.6667 53.3333C30.9778 53.3333 27.8333 52.0333 25.2333 49.4333C22.6333 46.8333 21.3333 43.6889 21.3333 40C21.3333 36.3111 22.6333 33.1667 25.2333 30.5667C27.8333 27.9667 30.9778 26.6667 34.6667 26.6667C38.3556 26.6667 41.5 27.9667 44.1 30.5667C46.7 33.1667 48 36.3111 48 40C48 43.6889 46.7 46.8333 44.1 49.4333C41.5 52.0333 38.3556 53.3333 34.6667 53.3333ZM33.3333 48H36V41.3333H42.6667V38.6667H36V32H33.3333V38.6667H26.6667V41.3333H33.3333V48Z" fill="#FF0915"/></svg>,
      title: "4.Secure", desc: "Enterprise grade security and compliance built in from day one."
    },
  ];

  return (
    <section style={{ padding: "64px 32px", background: "#F9F5F7", textAlign: "center" }}>
      <Tag noBg>Product Review</Tag>
      <h2 style={sectionTitle}>What is Nexgn?</h2>
      <p style={{ color: "#000", fontSize: 14, maxWidth: 620, margin: "0 auto 48px", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
        Nexgn is a digital signature platform built to simplify document signing while maintaining security, trust, and compliance. It is designed for modern, India-first digital workflows and built to scale for growing teams and businesses.
      </p>

      {/* 4-col horizontal layout with connectors — same as desktop */}
      <div style={{ position: "relative", display: "flex", gap: 16, maxWidth: 900, margin: "0 auto", alignItems: "flex-start" }}>
        {/* Dashed connector line */}
        <div style={{ position: "absolute", top: 35, left: "12%", right: "12%", zIndex: 0, height: "1px" }}>
          <svg width="100%" height="1" viewBox="0 0 999 1" fill="none" preserveAspectRatio="none">
            <line y1="0.5" x2="999" y2="0.5" stroke="#FF0915" strokeDasharray="2 2"/>
          </svg>
        </div>
        {[0,1,2].map(i => (
          <div key={i} style={{ position: "absolute", top: 50, zIndex: 2, left: `${25 + i * 25}%`, transform: "translate(-50%, -50%)" }}>
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none"><circle cx="3.5" cy="3.5" r="3.5" fill="#FF0915"/></svg>
          </div>
        ))}
        {features.map(f => (
          <div key={f.title} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 1 }}>
            <div style={{ width: 72, height: 72, background: "#fff", borderRadius: 18, boxShadow: "0 4px 20px rgba(0,0,0,0.10)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, overflow: "hidden" }}>
  <div style={{ transform: "scale(0.7)", transformOrigin: "center center", flexShrink: 0 }}>
    {f.icon}
  </div>
</div>
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#000", marginBottom: 8 }}>{f.title}</h3>
            <p style={{ fontSize: 12, color: "#000", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", textAlign: "center" }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Global Section ───────────────────────────────────────────────────────────

function GlobalSection() {
  return (
    <section style={{ padding: "24px 32px", background: "#F9F5F7" }}>
      {/* Side by side — map left, text right */}
      <div style={{ display: "flex", alignItems: "stretch", borderRadius: 8, overflow: "hidden", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ width: "55%", minHeight: 280 }}>
          <img src={worldMap} alt="World Map" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
        </div>
        <div style={{ flex: 1, background: "#fff", padding: "36px 28px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span style={{ fontSize: 10, fontWeight: 700, color: BRAND, letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
              A Brand New Digital Experience
            </span>
          </div>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 26, color: "#1a0a0d", marginBottom: 14, lineHeight: 1.2 }}>
            Built in India,<br/>For the world.
          </h2>
          <p style={{ fontSize: 13, color: "#000", lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
            Our platform is built in India for better performance, data sovereignty, compliance and local support.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Enterprise Features ──────────────────────────────────────────────────────

function EnterpriseFeaturesSection() {
  const features = [
{ icon: <svg width="41" height="51" viewBox="0 0 41 51" fill="none"><path d="M16.6562 33.15H24.3438L22.8703 24.9263C23.7245 24.5013 24.3971 23.885 24.8883 23.0775C25.3794 22.27 25.625 21.3775 25.625 20.4C25.625 18.9975 25.1232 17.7969 24.1195 16.7981C23.1159 15.7994 21.9094 15.3 20.5 15.3C19.0906 15.3 17.8841 15.7994 16.8805 16.7981C15.8768 17.7969 15.375 18.9975 15.375 20.4C15.375 21.3775 15.6206 22.27 16.1117 23.0775C16.6029 23.885 17.2755 24.5013 18.1297 24.9263L16.6562 33.15ZM20.5 51C14.5635 49.5125 9.66276 46.1231 5.79766 40.8319C1.93255 35.5406 0 29.665 0 23.205V7.65L20.5 0L41 7.65V23.205C41 29.665 39.0674 35.5406 35.2023 40.8319C31.3372 46.1231 26.4365 49.5125 20.5 51ZM20.5 45.645C24.9417 44.2425 28.6146 41.4375 31.5188 37.23C34.4229 33.0225 35.875 28.3475 35.875 23.205V11.1562L20.5 5.41875L5.125 11.1562V23.205C5.125 28.3475 6.57708 33.0225 9.48125 37.23C12.3854 41.4375 16.0583 44.2425 20.5 45.645Z" fill="#FF0915"/></svg>, title: "Secure by Design", desc: "End-to-end encryption, robust access control and compliance at every level." },
    { icon: <svg width="41" height="41" viewBox="0 0 55 55" fill="none"><path d="M1.58323 33.6875L21.2703 53.35C21.821 53.9 22.4406 54.3125 23.1289 54.5875C23.8173 54.8625 24.5056 55 25.194 55C25.8824 55 26.5707 54.8625 27.2591 54.5875C27.9474 54.3125 28.567 53.9 29.1176 53.35L53.4168 29.0812C53.9216 28.5771 54.3116 27.9927 54.587 27.3281C54.8623 26.6635 55 25.9646 55 25.2313V5.5C55 3.9875 54.4608 2.69271 53.3824 1.61563C52.3039 0.538542 51.0075 0 49.4931 0H29.7372C29.0029 0 28.2916 0.148958 27.6033 0.446875C26.9149 0.744792 26.3183 1.14583 25.8135 1.65L1.58323 25.9188C1.03254 26.4688 0.630997 27.0875 0.378597 27.775C0.126202 28.4625 0 29.15 0 29.8375C0 30.525 0.126202 31.201 0.378597 31.8656C0.630997 32.5302 1.03254 33.1375 1.58323 33.6875ZM25.194 49.5L5.50688 29.8375L29.806 5.5H49.4931V25.1625L25.194 49.5ZM42.6095 16.5C41.4622 16.5 40.4871 16.099 39.684 15.2969C38.8809 14.4948 38.4793 13.5208 38.4793 12.375C38.4793 11.2292 38.8809 10.2552 39.684 9.45312C40.4871 8.65104 41.4622 8.25 42.6095 8.25C43.7568 8.25 44.732 8.65104 45.535 9.45312C46.3381 10.2552 46.7397 11.2292 46.7397 12.375C46.7397 13.5208 46.3381 14.4948 45.535 15.2969C44.732 16.099 43.7568 16.5 42.6095 16.5Z" fill="#FF0915"/></svg>, title: "Friendly Pricing", desc: "Transparent, affordable pricing built for early stage and growing businesses." },
    { icon: <svg width="41" height="51" viewBox="0 0 55 69" fill="none"><path d="M22.5156 55.89L40.3047 34.5H26.5547L29.0469 14.9213L13.1484 37.95H25.0938L22.5156 55.89ZM13.75 69L17.1875 44.85H0L30.9375 0H37.8125L34.375 27.6H55L20.625 69H13.75Z" fill="#FF0915"/></svg>, title: "Fast Workflows", desc: "Beginner friendly tools to help you move at light speed." },
    { icon: <svg width="41" height="41" viewBox="0 0 55 55" fill="none"><path d="M16.8438 52.8344C13.4979 51.3906 10.576 49.4198 8.07812 46.9219C5.58021 44.424 3.60938 41.5021 2.16563 38.1562C0.721875 34.8104 0 31.2469 0 27.4656C0 23.6844 0.721875 20.1323 2.16563 16.8094C3.60938 13.4865 5.58021 10.576 8.07812 8.07812C10.576 5.58021 13.4979 3.60938 16.8438 2.16563C20.1896 0.721875 23.7531 0 27.5344 0C31.3156 0 34.8677 0.721875 38.1906 2.16563C41.5135 3.60938 44.424 5.58021 46.9219 8.07812C49.4198 10.576 51.3906 13.4865 52.8344 16.8094C54.2781 20.1323 55 23.6844 55 27.4656C55 31.2469 54.2781 34.8104 52.8344 38.1562C51.3906 41.5021 49.4198 44.424 46.9219 46.9219C44.424 49.4198 41.5135 51.3906 38.1906 52.8344C34.8677 54.2781 31.3156 55 27.5344 55C23.7531 55 20.1896 54.2781 16.8438 52.8344ZM27.5 49.3625C28.6917 47.7125 29.7229 45.9938 30.5938 44.2063C31.4646 42.4188 32.175 40.5167 32.725 38.5H22.275C22.825 40.5167 23.5354 42.4188 24.4062 44.2063C25.2771 45.9938 26.3083 47.7125 27.5 49.3625ZM20.35 48.2625C19.525 46.75 18.8031 45.1802 18.1844 43.5531C17.5656 41.926 17.05 40.2417 16.6375 38.5H8.525C9.85417 40.7917 11.5156 42.7854 13.5094 44.4813C15.5031 46.1771 17.7833 47.4375 20.35 48.2625ZM34.65 48.2625C37.2167 47.4375 39.4969 46.1771 41.4906 44.4813C43.4844 42.7854 45.1458 40.7917 46.475 38.5H38.3625C37.95 40.2417 37.4344 41.926 36.8156 43.5531C36.1969 45.1802 35.475 46.75 34.65 48.2625ZM6.1875 33H15.5375C15.4 32.0833 15.2969 31.1781 15.2281 30.2844C15.1594 29.3906 15.125 28.4625 15.125 27.5C15.125 26.5375 15.1594 25.6094 15.2281 24.7156C15.2969 23.8219 15.4 22.9167 15.5375 22H6.1875C5.95833 22.9167 5.78646 23.8219 5.67188 24.7156C5.55729 25.6094 5.5 26.5375 5.5 27.5C5.5 28.4625 5.55729 29.3906 5.67188 30.2844C5.78646 31.1781 5.95833 32.0833 6.1875 33ZM21.0375 33H33.9625C34.1 32.0833 34.2031 31.1781 34.2719 30.2844C34.3406 29.3906 34.375 28.4625 34.375 27.5C34.375 26.5375 34.3406 25.6094 34.2719 24.7156C34.2031 23.8219 34.1 22.9167 33.9625 22H21.0375C20.9 22.9167 20.7969 23.8219 20.7281 24.7156C20.6594 25.6094 20.625 26.5375 20.625 27.5C20.625 28.4625 20.6594 29.3906 20.7281 30.2844C20.7969 31.1781 20.9 32.0833 21.0375 33ZM39.4625 33H48.8125C49.0417 32.0833 49.2135 31.1781 49.3281 30.2844C49.4427 29.3906 49.5 28.4625 49.5 27.5C49.5 26.5375 49.4427 25.6094 49.3281 24.7156C49.2135 23.8219 49.0417 22.9167 48.8125 22H39.4625C39.6 22.9167 39.7031 23.8219 39.7719 24.7156C39.8406 25.6094 39.875 26.5375 39.875 27.5C39.875 28.4625 39.8406 29.3906 39.7719 30.2844C39.7031 31.1781 39.6 32.0833 39.4625 33ZM38.3625 16.5H46.475C45.1458 14.2083 43.4844 12.2146 41.4906 10.5188C39.4969 8.82292 37.2167 7.5625 34.65 6.7375C35.475 8.25 36.1969 9.81979 36.8156 11.4469C37.4344 13.074 37.95 14.7583 38.3625 16.5ZM22.275 16.5H32.725C32.175 14.4833 31.4646 12.5813 30.5938 10.7937C29.7229 9.00625 28.6917 7.2875 27.5 5.6375C26.3083 7.2875 25.2771 9.00625 24.4062 10.7937C23.5354 12.5813 22.825 14.4833 22.275 16.5ZM8.525 16.5H16.6375C17.05 14.7583 17.5656 13.074 18.1844 11.4469C18.8031 9.81979 19.525 8.25 20.35 6.7375C17.7833 7.5625 15.5031 8.82292 13.5094 10.5188C11.5156 12.2146 9.85417 14.2083 8.525 16.5Z" fill="#FF0915"/></svg>, title: "Global Infrastructure", desc: "Built and hosted for best performance, and secure local support." },
  ];

  return (
    <section style={{ padding: "64px 32px", background: "#F9F5F7", textAlign: "center" }}>
      <Tag noBg>Benefits</Tag>
      <h2 style={sectionTitle}>Built for Enterprises, Ready for the Globe.</h2>
      {/* 4-col grid — same as desktop but slightly tighter */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, maxWidth: 900, margin: "36px auto 0" }}>
        {features.map(f => (
          <div key={f.title} style={{
  borderRadius: 8, padding: "24px 16px",
  border: "1px solid #E6E5E5", background: "rgba(249,245,247,0.20)",
  textAlign: "center", boxShadow: "0 4px 35.4px rgba(0,0,0,0.06)",
}}>
  <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
    {f.icon}
  </div>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 13, color: "#1a0a0d", marginBottom: 8 }}>{f.title}</h3>
            <p style={{ fontSize: 12, color: "#000000", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Why Early ────────────────────────────────────────────────────────────────

function WhyEarlySection() {
  const perks = [
    "Get early access before the public launch",
    "Exclusive perks and pricing for early members",
    "Influence product features and roadmap",
    "Priority support and onboarding",
  ];

  return (
    <section style={{ padding: "24px 32px", background: "#F9F5F7" }}>
      <div style={{
        maxWidth: 900, margin: "0 auto",
        background: "rgba(255,220,220,0.31)", borderRadius: 8,
        padding: "40px 32px", border: "1px solid rgba(255,9,21,0.30)",
        display: "flex", alignItems: "center", gap: 32,
      }}>
        {/* Circle */}
        <div style={{ width: 180, height: 180, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0px 2px 16.8px rgba(0,0,0,0.07)", position: "relative" }}>
          <svg width="120" height="120" viewBox="0 0 139 139" fill="none">
            <path d="M32.9319 65.5279C41.157 65.5279 47.8248 58.8601 47.8248 50.635C47.8248 42.4099 41.157 35.7422 32.9319 35.7422C24.7068 35.7422 18.0391 42.4099 18.0391 50.635C18.0391 58.8601 24.7068 65.5279 32.9319 65.5279Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M106.236 66.8506C114.918 66.8506 121.956 59.8124 121.956 51.1304C121.956 42.4483 114.918 35.4102 106.236 35.4102C97.5538 35.4102 90.5156 42.4483 90.5156 51.1304C90.5156 59.8124 97.5538 66.8506 106.236 66.8506Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M37.2349 97.7394V108.551H102.102V97.7394C102.102 92.0048 100.149 86.5051 96.6733 82.4502C93.1976 78.3952 88.4836 76.1172 83.5682 76.1172H55.7682C50.8529 76.1172 46.1389 78.3952 42.6632 82.4502C39.1875 86.5051 37.2349 92.0048 37.2349 97.7394Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M33.0142 103.917V97.2425C33.0142 91.2446 34.9817 85.4924 38.484 81.2512C40.3099 79.0402 42.7392 77.2437 45.0952 76.1172H20.522C15.9578 76.1172 11.5805 78.0698 8.35305 81.5455C5.12564 85.0212 3.3125 89.7352 3.3125 94.6505V103.917H33.0142Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M105.658 103.917V97.2425C105.658 91.2446 103.69 85.4924 100.188 81.2512C98.362 79.0402 95.9327 77.2437 93.5766 76.1172H118.15C122.714 76.1172 127.091 78.0698 130.319 81.5455C133.546 85.0212 135.359 89.7352 135.359 94.6505V103.917H105.658Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M69.0021 66.8518C79.2378 66.8518 87.5354 58.5542 87.5354 48.3185C87.5354 38.0828 79.2378 29.7852 69.0021 29.7852C58.7664 29.7852 50.4688 38.0828 50.4688 48.3185C50.4688 58.5542 58.7664 66.8518 69.0021 66.8518Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{ position: "absolute", bottom: 8, right: 8, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="44" height="44" viewBox="0 0 48 48" fill="none" style={{ position: "absolute" }}><circle cx="24" cy="24" r="24" fill="#F90000"/></svg>
            <svg width="22" height="23" viewBox="0 0 25 26" fill="none" style={{ position: "relative", zIndex: 1 }}><path d="M12.5328 26L0.721785 14.43L7.28346 6.5H17.7822L24.3438 14.43L12.5328 26ZM2.78871 6.5L0 3.7375L1.87008 1.9175L4.65879 4.68L2.78871 6.5ZM11.2205 3.9V0H13.8451V3.9H11.2205ZM22.2113 6.5L20.3412 4.6475L23.1299 1.885L25 3.7375L22.2113 6.5ZM12.5328 22.36L19.4226 15.6H5.64304L12.5328 22.36ZM8.53018 9.1L5.28215 13H19.7835L16.5354 9.1H8.53018Z" fill="white"/></svg>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: BRAND, letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>Early Access Benefits</span>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 24, color: "#1a0a0d", margin: "8px 0 20px" }}>Why Join Early?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {perks.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#1C1B1F"/><path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6Z" fill="#E8334A"/></svg>
                <span style={{ fontSize: 13, color: "#444", fontFamily: "'Inter', sans-serif" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Countdown ────────────────────────────────────────────────────────────────

function CountdownSection() {
  const target = Date.now() + (12 * 86400000) + (7 * 3600000) + (34 * 60000) + 56000;
  const { days, hours, mins, secs } = useCountdown(target);
  const units = [["DAYS", days], ["HOURS", hours], ["MINUTES", mins], ["SECONDS", secs]];

  return (
    <section style={{ padding: "64px 32px", background: "#F9F5F7", textAlign: "center" }}>
      <span style={{ display: "inline-block", color: BRAND, fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", marginBottom: 36 }}>Launching In</span>

      {/* 4 across — from Figma: each card 162×186 */}
      <div style={{ display: "flex", justifyContent: "center", gap: 16, maxWidth: 900, margin: "0 auto" }}>
{units.map(([label, val]) => (
  <div key={label} style={{
    width: 162,
    height: 186,
    background: "#FEF7F6",
    boxShadow: "0px 4px 13.1px rgba(255,9,21,0.16)",
    borderRadius: 13,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  }}>
    <span style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: 700,
      fontSize: 80,
      lineHeight: 1,
      color: "#F8545E",
    }}>
      {String(val).padStart(2, "0")}
    </span>
    <span style={{
      fontFamily: "'Inter', sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textTransform: "uppercase",
      color: "#666666",
      letterSpacing: "1px",
    }}>{label}</span>
  </div>
))}
      </div>
    </section>
  );
}

// ─── Data / Trust ─────────────────────────────────────────────────────────────

function DataSection() {
  const stats = [
  {
    icon: (
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 29C12.4942 29 10.6092 28.6199 8.845 27.8596C7.08083 27.0993 5.54625 26.0674 4.24125 24.764C2.93625 23.4607 1.90313 21.928 1.14188 20.166C0.380625 18.4041 0 16.5214 0 14.5181C0 12.7079 0.350417 10.9338 1.05125 9.19601C1.75208 7.45818 2.73083 5.90741 3.9875 4.5437C5.24417 3.17998 6.75458 2.08177 8.51875 1.24906C10.2829 0.416355 12.2163 0 14.3188 0C14.8263 0 15.3458 0.0241365 15.8775 0.0724095C16.4092 0.120682 16.9529 0.20516 17.5088 0.325843C17.2913 1.41199 17.3638 2.43779 17.7263 3.40325C18.0888 4.36871 18.6325 5.17125 19.3575 5.81086C20.0825 6.45048 20.9465 6.89097 21.9494 7.13234C22.9523 7.3737 23.9854 7.31336 25.0487 6.95131C24.4204 8.37537 24.511 9.73908 25.3206 11.0424C26.1302 12.3458 27.3325 13.0216 28.9275 13.0699C28.9517 13.3354 28.9698 13.5828 28.9819 13.8121C28.994 14.0414 29 14.2888 29 14.5543C29 16.5335 28.6194 18.398 27.8581 20.1479C27.0969 21.8978 26.0638 23.4305 24.7588 24.7459C23.4538 26.0614 21.9192 27.0993 20.155 27.8596C18.3908 28.6199 16.5058 29 14.5 29ZM12.325 11.6217C12.9292 11.6217 13.4427 11.4105 13.8656 10.9881C14.2885 10.5658 14.5 10.0529 14.5 9.44944C14.5 8.84603 14.2885 8.33313 13.8656 7.91074C13.4427 7.48835 12.9292 7.27715 12.325 7.27715C11.7208 7.27715 11.2073 7.48835 10.7844 7.91074C10.3615 8.33313 10.15 8.84603 10.15 9.44944C10.15 10.0529 10.3615 10.5658 10.7844 10.9881C11.2073 11.4105 11.7208 11.6217 12.325 11.6217ZM9.425 18.8627C10.0292 18.8627 10.5427 18.6515 10.9656 18.2291C11.3885 17.8067 11.6 17.2938 11.6 16.6904C11.6 16.087 11.3885 15.5741 10.9656 15.1517C10.5427 14.7293 10.0292 14.5181 9.425 14.5181C8.82083 14.5181 8.30729 14.7293 7.88438 15.1517C7.46146 15.5741 7.25 16.087 7.25 16.6904C7.25 17.2938 7.46146 17.8067 7.88438 18.2291C8.30729 18.6515 8.82083 18.8627 9.425 18.8627ZM18.85 20.3109C19.2608 20.3109 19.6052 20.1721 19.8831 19.8945C20.161 19.6169 20.3 19.273 20.3 18.8627C20.3 18.4524 20.161 18.1084 19.8831 17.8308C19.6052 17.5533 19.2608 17.4145 18.85 17.4145C18.4392 17.4145 18.0948 17.5533 17.8169 17.8308C17.539 18.1084 17.4 18.4524 17.4 18.8627C17.4 19.273 17.539 19.6169 17.8169 19.8945C18.0948 20.1721 18.4392 20.3109 18.85 20.3109ZM14.5 26.1036C17.4483 26.1036 20.0644 25.0899 22.3481 23.0624C24.6319 21.035 25.8825 18.4524 26.1 15.3146C24.8917 14.7836 23.9431 14.0595 23.2544 13.1423C22.5656 12.2251 22.1004 11.1993 21.8588 10.0649C19.9979 9.79942 18.4029 9.00291 17.0738 7.67541C15.7446 6.3479 14.9229 4.75489 14.6088 2.89638C12.6754 2.84811 10.9777 3.19809 9.51562 3.94632C8.05354 4.69455 6.83313 5.65398 5.85437 6.8246C4.87562 7.99522 4.13854 9.26842 3.64313 10.6442C3.14771 12.02 2.9 13.3113 2.9 14.5181C2.9 17.7283 4.02979 20.4617 6.28938 22.7185C8.54896 24.9752 11.2858 26.1036 14.5 26.1036Z" fill="#1C1B1F"/>
      </svg>
    ),
    title: "Cookies", label: "filler text"
  },
  {
    icon: (
      <svg width="32" height="29" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.16364 12.3591C3.81212 12.0133 3.63636 11.59 3.63636 11.0892C3.63636 10.5884 3.81212 10.1651 4.16364 9.81928C4.51515 9.47349 4.94545 9.30059 5.45455 9.30059C5.96364 9.30059 6.39394 9.47349 6.74546 9.81928C7.09697 10.1651 7.27273 10.5884 7.27273 11.0892C7.27273 11.59 7.09697 12.0133 6.74546 12.3591C6.39394 12.7048 5.96364 12.8777 5.45455 12.8777C4.94545 12.8777 4.51515 12.7048 4.16364 12.3591ZM25.2545 12.3591C24.903 12.0133 24.7273 11.59 24.7273 11.0892C24.7273 10.5884 24.903 10.1651 25.2545 9.81928C25.6061 9.47349 26.0364 9.30059 26.5455 9.30059C27.0545 9.30059 27.4848 9.47349 27.8364 9.81928C28.1879 10.1651 28.3636 10.5884 28.3636 11.0892C28.3636 11.59 28.1879 12.0133 27.8364 12.3591C27.4848 12.7048 27.0545 12.8777 26.5455 12.8777C26.0364 12.8777 25.6061 12.7048 25.2545 12.3591ZM4.36364 28.6172H1.45455V22.8938H7.27273C5.67273 22.8938 4.30303 22.3333 3.16364 21.2125C2.02424 20.0917 1.45455 18.7443 1.45455 17.1703H4.36364C4.36364 17.9573 4.64849 18.631 5.21818 19.1914C5.78788 19.7518 6.47273 20.032 7.27273 20.032V15.7395H11.2L9.81818 10.1949C9.26061 8.00089 8.06667 6.2302 6.23636 4.88281C4.40606 3.53542 2.32727 2.86172 0 2.86172V0C2.98182 0 5.65455 0.87044 8.01818 2.61132C10.3818 4.3522 11.9152 6.64158 12.6182 9.47945L14.5091 16.8126C14.6303 17.2657 14.5455 17.6771 14.2545 18.0467C13.9636 18.4164 13.5758 18.6012 13.0909 18.6012H10.1818V22.8938C10.1818 23.6807 9.89697 24.3544 9.32727 24.9149C8.75758 25.4753 8.07273 25.7555 7.27273 25.7555H4.36364V28.6172ZM30.5455 28.6172H27.6364V25.7555H24.7273C23.9273 25.7555 23.2424 25.4753 22.6727 24.9149C22.103 24.3544 21.8182 23.6807 21.8182 22.8938V18.6012H18.9091C18.4242 18.6012 18.0364 18.4104 17.7455 18.0288C17.4545 17.6473 17.3818 17.218 17.5273 16.7411L19.3818 9.47945C20.1576 6.73697 21.697 4.47144 24 2.68286C26.303 0.894288 28.9697 0 32 0V2.86172C29.697 2.86172 27.6303 3.54138 25.8 4.9007C23.9697 6.26001 22.7758 8.02474 22.2182 10.1949L20.8 15.7395H24.7273V20.032C25.5273 20.032 26.2121 19.7518 26.7818 19.1914C27.3515 18.631 27.6364 17.9573 27.6364 17.1703H30.5455C30.5455 18.7443 29.9758 20.0917 28.8364 21.2125C27.697 22.3333 26.3273 22.8938 24.7273 22.8938H30.5455V28.6172Z" fill="#1C1B1F"/>
      </svg>
    ),
    title: "SOC 2", label: "Compliant"
  },
  {
    icon: (
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18.5" cy="18.5" r="15" stroke="black" strokeWidth="7" strokeDasharray="4 4"/>
      </svg>
    ),
    title: "GDPR", label: "Compliant"
  },
  { 
  icon: (
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.1136 28.6172C16.8288 28.6172 14.8131 27.9451 13.0665 26.601C11.3199 25.2569 10.161 23.5442 9.58977 21.4629C10.5784 21.5063 11.5561 21.4087 12.5227 21.1702C13.4894 20.9318 14.4121 20.5957 15.2909 20.1621H20.6955C20.7174 19.9236 20.7339 19.6906 20.7449 19.463C20.7559 19.2353 20.7614 19.0023 20.7614 18.7638C20.7614 18.5687 20.7559 18.3681 20.7449 18.1622C20.7339 17.9562 20.7174 17.7557 20.6955 17.5606H18.7511C19.1027 17.1703 19.4267 16.7584 19.7233 16.3248C20.0199 15.8912 20.289 15.4359 20.5307 14.959H25.1773C24.7379 14.3086 24.2106 13.7395 23.5955 13.2517C22.9803 12.7639 22.2883 12.3899 21.5193 12.1298C21.6292 11.6962 21.7006 11.2518 21.7335 10.7965C21.7665 10.3412 21.772 9.89678 21.75 9.46319C23.8591 10.0269 25.5947 11.1705 26.9568 12.894C28.3189 14.6175 29 16.6067 29 18.8613C29 21.5713 28.0388 23.8748 26.1165 25.7717C24.1941 27.6687 21.8598 28.6172 19.1136 28.6172ZM15.983 25.3002C15.8292 24.8666 15.6919 24.4439 15.571 24.0319C15.4502 23.62 15.3458 23.1973 15.258 22.7637H13.05C13.4235 23.3057 13.8574 23.7935 14.3517 24.2271C14.846 24.6607 15.3898 25.0184 15.983 25.3002ZM19.1136 25.7555C19.3773 25.2785 19.6025 24.7907 19.7892 24.2921C19.9759 23.7935 20.1352 23.284 20.267 22.7637H17.9602C18.092 23.284 18.2568 23.7935 18.4545 24.2921C18.6523 24.7907 18.872 25.2785 19.1136 25.7555ZM22.2443 25.3002C22.8375 25.0184 23.3813 24.6607 23.8756 24.2271C24.3699 23.7935 24.8038 23.3057 25.1773 22.7637H22.9693C22.8595 23.1973 22.7496 23.62 22.6398 24.0319C22.5299 24.4439 22.3981 24.8666 22.2443 25.3002ZM23.3318 20.1621H26.2318C26.2758 19.9453 26.3087 19.7339 26.3307 19.528C26.3527 19.322 26.3636 19.0998 26.3636 18.8613C26.3636 18.6229 26.3527 18.4006 26.3307 18.1947C26.3087 17.9887 26.2758 17.7774 26.2318 17.5606H23.3318C23.3538 17.7557 23.3703 17.9562 23.3813 18.1622C23.3922 18.3681 23.3977 18.5687 23.3977 18.7638C23.3977 19.0023 23.3922 19.2353 23.3813 19.463C23.3703 19.6906 23.3538 19.9236 23.3318 20.1621ZM9.88636 19.5117C7.14015 19.5117 4.80587 18.5632 2.88352 16.6663C0.961174 14.7693 0 12.4658 0 9.75587C0 7.0459 0.961174 4.74243 2.88352 2.84546C4.80587 0.948487 7.14015 0 9.88636 0C12.6326 0 14.9669 0.948487 16.8892 2.84546C18.8116 4.74243 19.7727 7.0459 19.7727 9.75587C19.7727 12.4658 18.8116 14.7693 16.8892 16.6663C14.9669 18.5632 12.6326 19.5117 9.88636 19.5117ZM9.88636 16.9102C11.8856 16.9102 13.5938 16.211 15.0108 14.8127C16.4278 13.4143 17.1364 11.7287 17.1364 9.75587C17.1364 7.78301 16.4278 6.09742 15.0108 4.69908C13.5938 3.30073 11.8856 2.60156 9.88636 2.60156C7.88712 2.60156 6.17898 3.30073 4.76193 4.69908C3.34489 6.09742 2.63636 7.78301 2.63636 9.75587C2.63636 11.7287 3.34489 13.4143 4.76193 14.8127C6.17898 16.211 7.88712 16.9102 9.88636 16.9102ZM6.59091 9.10547C6.96439 9.10547 7.27746 8.98082 7.53011 8.7315C7.78277 8.48218 7.90909 8.17325 7.90909 7.80469C7.90909 7.43614 7.78277 7.1272 7.53011 6.87789C7.27746 6.62857 6.96439 6.50391 6.59091 6.50391C6.21742 6.50391 5.90436 6.62857 5.6517 6.87789C5.39905 7.1272 5.27273 7.43614 5.27273 7.80469C5.27273 8.17325 5.39905 8.48218 5.6517 8.7315C5.90436 8.98082 6.21742 9.10547 6.59091 9.10547ZM9.88636 14.8289C10.9409 14.8289 11.8801 14.5362 12.704 13.9509C13.5278 13.3655 14.1265 12.6176 14.5 11.707H5.27273C5.64621 12.6176 6.24489 13.3655 7.06875 13.9509C7.89261 14.5362 8.83182 14.8289 9.88636 14.8289ZM13.1818 9.10547C13.5553 9.10547 13.8684 8.98082 14.121 8.7315C14.3737 8.48218 14.5 8.17325 14.5 7.80469C14.5 7.43614 14.3737 7.1272 14.121 6.87789C13.8684 6.62857 13.5553 6.50391 13.1818 6.50391C12.8083 6.50391 12.4953 6.62857 12.2426 6.87789C11.99 7.1272 11.8636 7.43614 11.8636 7.80469C11.8636 8.17325 11.99 8.48218 12.2426 8.7315C12.4953 8.98082 12.8083 9.10547 13.1818 9.10547Z" fill="#1C1B1F"/>
    </svg>
  ), 
  title: "Data Encryption", 
  label: "Secure & Local" 
},
];

  return (
    <section style={{ padding: "24px 32px 48px", background: "#F9F5F7" }}>
      <div style={{
        maxWidth: 900, margin: "0 auto",
        background: "rgba(255,220,220,0.31)", borderRadius: 8,
        padding: "28px 32px", border: "1px solid rgba(255,9,21,0.30)",
        display: "flex", alignItems: "center", gap: 32,
      }}>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: BRAND, letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>Trust & Security</span>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 22, color: "#1a0a0d", margin: "8px 0 10px" }}>Your Data, Always Protected.</h2>
          <p style={{ color: "#555", fontSize: 12, fontFamily: "'Inter', sans-serif", lineHeight: 1.7, maxWidth: 280 }}>
            We follow industry best practices to ensure your data and infrastructure are always secure and private.
          </p>
        </div>
        <div style={{ display: "flex", gap: 24, flexShrink: 0, alignItems: "flex-start" }}>
  {stats.map(s => (
    <div key={s.title} style={{ textAlign: "center", width: 80 }}>
      <div style={{ width: 72, height: 72, background: "#fff", borderRadius: 14, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
        {s.icon}
      </div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 12, color: "#1a0a0d", marginBottom: 3 }}>{s.title}</div>
      <div style={{ fontSize: 11, color: "#000000", fontFamily: "'Inter', sans-serif" }}>{s.label}</div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function LandingPageTablet() {
  return (
    <>
      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@400&family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #F9F5F7; }
        ::-webkit-scrollbar { display: none; }
* { scrollbar-width: none; }
      `}</style>
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <GlobalSection />
      <EnterpriseFeaturesSection />
      <WhyEarlySection />
      <CountdownSection />
      <DataSection />
    </>
  );
}