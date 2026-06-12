import { useState, useEffect } from "react";
import heroBg from "./assets/hero-bg.png";
import worldMap from "./assets/world-map.png";
import lockImg from "./assets/hero-lock-img.png";

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

// ─── Shared helpers ───────────────────────────────────────────────────────────

function Tag({ children, light, noBg }) {
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
  fontSize: "clamp(24px, 6vw, 32px)", color: "#1a0a0d",
  letterSpacing: "-0.5px", marginBottom: 16, lineHeight: 1.15,
};

const inputStyle = {
  width: "100%", padding: "11px 14px", borderRadius: 9, fontSize: 13,
  border: "1.5px solid #f0dfe2", outline: "none", fontFamily: "'DM Sans', sans-serif",
  color: "#333", background: "#fafafa", boxSizing: "border-box",
};

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 16px", height: 56,
      background: "rgba(249,245,247,0.95)", backdropFilter: "blur(12px)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <svg width="36" height="36" viewBox="0 0 44 44" fill="none" style={{ flexShrink: 0 }}>
          <path d="M36.499 0C40.3359 0 43.4463 3.11041 43.4463 6.94727V36.499C43.4463 36.6885 43.4358 36.8759 43.4209 37.0615L32.6826 26.5566C31.3112 25.2156 29.0995 25.2276 27.7432 26.584L25.5107 28.8174C24.1546 30.1738 24.1663 32.3607 25.5371 33.7021L35.498 43.4463H7.1543L34.7979 16.4053C36.169 15.0637 36.1807 12.877 34.8242 11.5205L32.5918 9.28711C31.2353 7.93089 29.0237 7.91858 27.6523 9.25977L0 36.3096V7.89941L10.7188 18.3857C12.0901 19.727 14.3017 19.7147 15.6582 18.3584L17.8906 16.125C19.2471 14.7685 19.2355 12.5818 17.8643 11.2402L6.39746 0.0234375C6.57891 0.00922816 6.76217 0 6.94727 0H36.499Z" fill="#E22A2A"/>
        </svg>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontFamily: "'MuseoModerno', sans-serif", fontWeight: 400, fontSize: 22, color: "#1a0a0d", lineHeight: 1 }}>Nexgn</span>
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
      minHeight: "unset",
      padding: "72px 16px 32px",
      background: "#F9F5F7",
      overflow: "hidden",
    }}>
      <span style={{
        display: "inline-block", background: "transparent", color: BRAND,
        fontSize: 11, fontWeight: 700,
        letterSpacing: "1.5px", textTransform: "uppercase",
        fontFamily: "'DM Sans', sans-serif", marginBottom: 18,
      }}>Coming Soon</span>

      <h1 style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: "26px",
        fontWeight: 700,
        lineHeight: 1.15,
        color: "#1a0a0d",
        marginBottom: 16,
        whiteSpace: "normal",
      }}>
        The Next Generation<br/>
        of <span style={{ color: BRAND }}>Document Signature</span>
      </h1>

      <p style={{
        fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 20,
        fontFamily: "'DM Sans', sans-serif",
      }}>
        Nexgn is building the intelligent backbone for a faster, smarter and more connected future.
      </p>

      {/* Lock image */}
      <div style={{ margin: "0 0 24px", background: "#F9F5F7" }}>
  <img
    src={lockImg}
    alt=""
    style={{
      display: "block",
      width: "100%",
      height: 320,
      objectFit: "contain",
      mixBlendMode: "multiply",
      filter: "contrast(1.05) saturate(1.1)",
    }}
  />
</div>

      {/* Form */}
      <div style={{
        background: "#fff",
        borderRadius: 20,
        padding: 20,
        boxShadow: "2px 5px 40.8px rgba(0,0,0,0.07)",
        boxSizing: "border-box",
      }}>
        <p style={{ fontSize: 15, fontWeight: 700, color: "#1a0a0d", marginBottom: 4, fontFamily: "'DM Sans', sans-serif" }}>
          Join Early Access
        </p>
        <p style={{ fontSize: 12, color: "#888", marginBottom: 14, fontFamily: "'DM Sans', sans-serif" }}>
          Be the first to experience what's next.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10, marginBottom: 10 }}>
          <input placeholder="Full Name" style={inputStyle} />
          <input placeholder="Phone Number" style={inputStyle} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10, marginBottom: 14 }}>
          <input placeholder="Business Type" style={inputStyle} />
          <input placeholder="Email Address" style={inputStyle} />
        </div>

        <button style={{
          width: "100%", background: "#FF000C", color: "#fff", border: "none",
          borderRadius: 8, height: 39, fontSize: 14, fontWeight: 700,
          cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "0.3px",
          boxShadow: "-3px 0px 29.8px rgba(0,0,0,0.25)",
        }}>
          Request Early Access
        </button>

        <p style={{ fontSize: 11, color: "#aaa", marginTop: 10, fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", gap: 6 }}>
          <span>🛡</span> We respect your privacy. No spam, ever.
        </p>
      </div>
    </section>
  );
}

// ─── What Is Nexgn ────────────────────────────────────────────────────────────

function WhatIsSection() {
  const features = [
  {
    icon: <svg width="41" height="51" viewBox="0 0 41 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6562 33.15H24.3438L22.8703 24.9263C23.7245 24.5013 24.3971 23.885 24.8883 23.0775C25.3794 22.27 25.625 21.3775 25.625 20.4C25.625 18.9975 25.1232 17.7969 24.1195 16.7981C23.1159 15.7994 21.9094 15.3 20.5 15.3C19.0906 15.3 17.8841 15.7994 16.8805 16.7981C15.8768 17.7969 15.375 18.9975 15.375 20.4C15.375 21.3775 15.6206 22.27 16.1117 23.0775C16.6029 23.885 17.2755 24.5013 18.1297 24.9263L16.6562 33.15ZM20.5 51C14.5635 49.5125 9.66276 46.1231 5.79766 40.8319C1.93255 35.5406 0 29.665 0 23.205V7.65L20.5 0L41 7.65V23.205C41 29.665 39.0674 35.5406 35.2023 40.8319C31.3372 46.1231 26.4365 49.5125 20.5 51ZM20.5 45.645C24.9417 44.2425 28.6146 41.4375 31.5188 37.23C34.4229 33.0225 35.875 28.3475 35.875 23.205V11.1562L20.5 5.41875L5.125 11.1562V23.205C5.125 28.3475 6.57708 33.0225 9.48125 37.23C12.3854 41.4375 16.0583 44.2425 20.5 45.645Z" fill="#FF0915"/></svg>,
    title: "Secure by Design", desc: "End-to-end encryption, robust access control and compliance at every level."
  },
  {
    icon: <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.18023 25.1125L15.8561 39.77C16.2666 40.18 16.7284 40.4875 17.2416 40.6925C17.7547 40.8975 18.2678 41 18.781 41C19.2941 41 19.8073 40.8975 20.3204 40.6925C20.8335 40.4875 21.2954 40.18 21.7059 39.77L39.8198 21.6787C40.1961 21.3029 40.4869 20.8673 40.6921 20.3719C40.8974 19.8765 41 19.3554 41 18.8088V4.1C41 2.9725 40.598 2.00729 39.7941 1.20438C38.9902 0.401458 38.0238 0 36.8949 0H22.1677C21.6204 0 21.0901 0.111042 20.577 0.333125C20.0638 0.555208 19.6191 0.854167 19.2428 1.23L1.18023 19.3212C0.769714 19.7313 0.470383 20.1925 0.28223 20.705C0.0940781 21.2175 0 21.73 0 22.2425C0 22.755 0.0940781 23.259 0.28223 23.7544C0.470383 24.2498 0.769714 24.7025 1.18023 25.1125ZM18.781 36.9L4.10513 22.2425L22.219 4.1H36.8949V18.7575L18.781 36.9ZM31.7635 12.3C30.9082 12.3 30.1813 12.001 29.5826 11.4031C28.9839 10.8052 28.6846 10.0792 28.6846 9.225C28.6846 8.37083 28.9839 7.64479 29.5826 7.04688C30.1813 6.44896 30.9082 6.15 31.7635 6.15C32.6187 6.15 33.3456 6.44896 33.9443 7.04688C34.543 7.64479 34.8423 8.37083 34.8423 9.225C34.8423 10.0792 34.543 10.8052 33.9443 11.4031C33.3456 12.001 32.6187 12.3 31.7635 12.3Z" fill="#FF0915"/></svg>,
    title: "Friendly Pricing", desc: "Transparent, affordable pricing built for early stage and growing businesses."
  },
  {
    icon: <svg width="40" height="51" viewBox="0 0 40 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.375 41.31L29.3125 25.5H19.3125L21.125 11.0288L9.5625 28.05H18.25L16.375 41.31ZM10 51L12.5 33.15H0L22.5 0H27.5L25 20.4H40L15 51H10Z" fill="#FF0915"/></svg>,
    title: "Fast Workflows", desc: "Beginner friendly tools to help you move at light speed."
  },
  {
    icon: <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5562 38.425C10.0621 37.375 7.88396 35.9417 6.02187 34.125C4.15979 32.3083 2.69062 30.1833 1.61437 27.75C0.538125 25.3167 0 22.725 0 19.975C0 17.225 0.538125 14.6417 1.61437 12.225C2.69062 9.80833 4.15979 7.69167 6.02187 5.875C7.88396 4.05833 10.0621 2.625 12.5562 1.575C15.0504 0.525 17.7069 0 20.5256 0C23.3444 0 25.9923 0.525 28.4694 1.575C30.9465 2.625 33.116 4.05833 34.9781 5.875C36.8402 7.69167 38.3094 9.80833 39.3856 12.225C40.4619 14.6417 41 17.225 41 19.975C41 22.725 40.4619 25.3167 39.3856 27.75C38.3094 30.1833 36.8402 32.3083 34.9781 34.125C33.116 35.9417 30.9465 37.375 28.4694 38.425C25.9923 39.475 23.3444 40 20.5256 40C17.7069 40 15.0504 39.475 12.5562 38.425ZM20.5 35.9C21.3883 34.7 22.1571 33.45 22.8062 32.15C23.4554 30.85 23.985 29.4667 24.395 28H16.605C17.015 29.4667 17.5446 30.85 18.1938 32.15C18.8429 33.45 19.6117 34.7 20.5 35.9ZM15.17 35.1C14.555 34 14.0169 32.8583 13.5556 31.675C13.0944 30.4917 12.71 29.2667 12.4025 28H6.355C7.34583 29.6667 8.58437 31.1167 10.0706 32.35C11.5569 33.5833 13.2567 34.5 15.17 35.1ZM25.83 35.1C27.7433 34.5 29.4431 33.5833 30.9294 32.35C32.4156 31.1167 33.6542 29.6667 34.645 28H28.5975C28.29 29.2667 27.9056 30.4917 27.4444 31.675C26.9831 32.8583 26.445 34 25.83 35.1ZM4.6125 24H11.5825C11.48 23.3333 11.4031 22.675 11.3519 22.025C11.3006 21.375 11.275 20.7 11.275 20C11.275 19.3 11.3006 18.625 11.3519 17.975C11.4031 17.325 11.48 16.6667 11.5825 16H4.6125C4.44167 16.6667 4.31354 17.325 4.22813 17.975C4.14271 18.625 4.1 19.3 4.1 20C4.1 20.7 4.14271 21.375 4.22813 22.025C4.31354 22.675 4.44167 23.3333 4.6125 24ZM15.6825 24H25.3175C25.42 23.3333 25.4969 22.675 25.5481 22.025C25.5994 21.375 25.625 20.7 25.625 20C25.625 19.3 25.5994 18.625 25.5481 17.975C25.4969 17.325 25.42 16.6667 25.3175 16H15.6825C15.58 16.6667 15.5031 17.325 15.4519 17.975C15.4006 18.625 15.375 19.3 15.375 20C15.375 20.7 15.4006 21.375 15.4519 22.025C15.5031 22.675 15.58 23.3333 15.6825 24ZM29.4175 24H36.3875C36.5583 23.3333 36.6865 22.675 36.7719 22.025C36.8573 21.375 36.9 20.7 36.9 20C36.9 19.3 36.8573 18.625 36.7719 17.975C36.6865 17.325 36.5583 16.6667 36.3875 16H29.4175C29.52 16.6667 29.5969 17.325 29.6481 17.975C29.6994 18.625 29.725 19.3 29.725 20C29.725 20.7 29.6994 21.375 29.6481 22.025C29.5969 22.675 29.52 23.3333 29.4175 24ZM28.5975 12H34.645C33.6542 10.3333 32.4156 8.88333 30.9294 7.65C29.4431 6.41667 27.7433 5.5 25.83 4.9C26.445 6 26.9831 7.14167 27.4444 8.325C27.9056 9.50833 28.29 10.7333 28.5975 12ZM16.605 12H24.395C23.985 10.5333 23.4554 9.15 22.8062 7.85C22.1571 6.55 21.3883 5.3 20.5 4.1C19.6117 5.3 18.8429 6.55 18.1938 7.85C17.5446 9.15 17.015 10.5333 16.605 12ZM6.355 12H12.4025C12.71 10.7333 13.0944 9.50833 13.5556 8.325C14.0169 7.14167 14.555 6 15.17 4.9C13.2567 5.5 11.5569 6.41667 10.0706 7.65C8.58437 8.88333 7.34583 10.3333 6.355 12Z" fill="#FF0915"/></svg>,
    title: "Global Infrastructure", desc: "Built and hosted for best performance, and secure local support."
  },
];

  return (
    <section style={{ padding: "48px 20px", background: "#F9F5F7", textAlign: "center" }}>
      <Tag noBg>Product Review</Tag>
      <h2 style={sectionTitle}>What is Nexgn?</h2>
      <p style={{ color: "#000", fontSize: 14, margin: "0 auto 36px", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7 }}>
        Nexgn is a digital signature platform built to simplify document signing while maintaining security, trust, and compliance.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {features.map((f, i) => (
          <div key={f.title}>
            {/* Card row */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 16, textAlign: "left" }}>
              <div style={{
                width: 80, height: 58, background: "#fff", borderRadius: 14,
boxShadow: "2px 5px 40.8px rgba(255,9,21,0.07)",
display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden",
              }}>
                <div style={{ transform: "scale(0.65)", transformOrigin: "center center", lineHeight: 0 }}>{f.icon}</div>
              </div>
              <div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 15, color: "#000", marginBottom: 6 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "#000", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>{f.desc}</p>
              </div>
            </div>

            {/* Connector between cards */}
            {i < features.length - 1 && (
              <div style={{ width: 82.95, display: "flex", flexDirection: "column", alignItems: "center", margin: "-4px 0", justifyContent: "center" }}>  
                <svg width="2" height="20" viewBox="0 0 2 20" fill="none">
                  <line x1="1" y1="0" x2="1" y2="20" stroke="#FF0915" strokeWidth="1.5" strokeDasharray="2 2"/>
                </svg>
                <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" fill="#FF0915"/>
                </svg>
                <svg width="2" height="20" viewBox="0 0 2 20" fill="none">
                  <line x1="1" y1="0" x2="1" y2="20" stroke="#FF0915" strokeWidth="1.5" strokeDasharray="2 2"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Global Section ───────────────────────────────────────────────────────────

function GlobalSection() {
  return (
    <section style={{ padding: "16px 16px", background: "#F9F5F7" }}>
      <div style={{
        borderRadius: 12, overflow: "hidden",
        background: "#fff",
        position: "relative",
        height: 244,
        padding: "28px 20px",
      }}>
        {/* Map background */}
        <img
          src={worldMap}
          alt=""
          style={{
            position: "absolute",
            top: 0, left: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: "right center",
            left: "40%",
top: "10%",
width: "65%",
height: "90%",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
        {/* Text overlay */}
        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "65%",
          background: "linear-gradient(to right, rgba(255,255,255,0.95) 70%, transparent 100%)",
          paddingRight: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 10 }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={BRAND} strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span style={{ fontSize: 8, fontWeight: 700, color: BRAND, letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
              A Brand New Digital Experience
            </span>
          </div>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 24, color: "#1a0a0d", marginBottom: 12, lineHeight: 1.2 }}>
            Built in India,<br/>For the world.
          </h2>
          <p style={{ fontSize: 12, color: "#444", lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
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
    { icon: <svg width="55" height="69" viewBox="0 0 55 69" fill="none"><path d="M22.3438 44.85H32.6562L30.6797 33.7238C31.8255 33.1488 32.7279 32.315 33.3867 31.2225C34.0456 30.13 34.375 28.9225 34.375 27.6C34.375 25.7025 33.7018 24.0781 32.3555 22.7269C31.0091 21.3756 29.3906 20.7 27.5 20.7C25.6094 20.7 23.9909 21.3756 22.6445 22.7269C21.2982 24.0781 20.625 25.7025 20.625 27.6C20.625 28.9225 20.9544 30.13 21.6133 31.2225C22.2721 32.315 23.1745 33.1488 24.3203 33.7238L22.3438 44.85ZM27.5 69C19.5365 66.9875 12.9622 62.4019 7.77734 55.2431C2.59245 48.0844 0 40.135 0 31.395V10.35L27.5 0L55 10.35V31.395C55 40.135 52.4076 48.0844 47.2227 55.2431C42.0378 62.4019 35.4635 66.9875 27.5 69ZM27.5 61.755C33.4583 59.8575 38.3854 56.0625 42.2812 50.37C46.1771 44.6775 48.125 38.3525 48.125 31.395V15.0938L27.5 7.33125L6.875 15.0938V31.395C6.875 38.3525 8.82292 44.6775 12.7188 50.37C16.6146 56.0625 21.5417 59.8575 27.5 61.755Z" fill="#FF0915"/></svg>, title: "Secure by Design", desc: "End-to-end encryption, robust access control and compliance at every level." },
    { icon: <svg width="55" height="55" viewBox="0 0 55 55" fill="none"><path d="M1.58323 33.6875L21.2703 53.35C21.821 53.9 22.4406 54.3125 23.1289 54.5875C23.8173 54.8625 24.5056 55 25.194 55C25.8824 55 26.5707 54.8625 27.2591 54.5875C27.9474 54.3125 28.567 53.9 29.1176 53.35L53.4168 29.0812C53.9216 28.5771 54.3116 27.9927 54.587 27.3281C54.8623 26.6635 55 25.9646 55 25.2313V5.5C55 3.9875 54.4608 2.69271 53.3824 1.61563C52.3039 0.538542 51.0075 0 49.4931 0H29.7372C29.0029 0 28.2916 0.148958 27.6033 0.446875C26.9149 0.744792 26.3183 1.14583 25.8135 1.65L1.58323 25.9188C1.03254 26.4688 0.630997 27.0875 0.378597 27.775C0.126202 28.4625 0 29.15 0 29.8375C0 30.525 0.126202 31.201 0.378597 31.8656C0.630997 32.5302 1.03254 33.1375 1.58323 33.6875ZM25.194 49.5L5.50688 29.8375L29.806 5.5H49.4931V25.1625L25.194 49.5ZM42.6095 16.5C41.4622 16.5 40.4871 16.099 39.684 15.2969C38.8809 14.4948 38.4793 13.5208 38.4793 12.375C38.4793 11.2292 38.8809 10.2552 39.684 9.45312C40.4871 8.65104 41.4622 8.25 42.6095 8.25C43.7568 8.25 44.732 8.65104 45.535 9.45312C46.3381 10.2552 46.7397 11.2292 46.7397 12.375C46.7397 13.5208 46.3381 14.4948 45.535 15.2969C44.732 16.099 43.7568 16.5 42.6095 16.5Z" fill="#FF0915"/></svg>, title: "Friendly Pricing", desc: "Transparent, affordable pricing built for early stage and growing businesses." },
    { icon: <svg width="55" height="69" viewBox="0 0 55 69" fill="none"><path d="M22.5156 55.89L40.3047 34.5H26.5547L29.0469 14.9213L13.1484 37.95H25.0938L22.5156 55.89ZM13.75 69L17.1875 44.85H0L30.9375 0H37.8125L34.375 27.6H55L20.625 69H13.75Z" fill="#FF0915"/></svg>, title: "Fast Workflows", desc: "Beginner friendly tools to help you move at light speed." },
    { icon: <svg width="55" height="55" viewBox="0 0 55 55" fill="none"><path d="M16.8438 52.8344C13.4979 51.3906 10.576 49.4198 8.07812 46.9219C5.58021 44.424 3.60938 41.5021 2.16563 38.1562C0.721875 34.8104 0 31.2469 0 27.4656C0 23.6844 0.721875 20.1323 2.16563 16.8094C3.60938 13.4865 5.58021 10.576 8.07812 8.07812C10.576 5.58021 13.4979 3.60938 16.8438 2.16563C20.1896 0.721875 23.7531 0 27.5344 0C31.3156 0 34.8677 0.721875 38.1906 2.16563C41.5135 3.60938 44.424 5.58021 46.9219 8.07812C49.4198 10.576 51.3906 13.4865 52.8344 16.8094C54.2781 20.1323 55 23.6844 55 27.4656C55 31.2469 54.2781 34.8104 52.8344 38.1562C51.3906 41.5021 49.4198 44.424 46.9219 46.9219C44.424 49.4198 41.5135 51.3906 38.1906 52.8344C34.8677 54.2781 31.3156 55 27.5344 55C23.7531 55 20.1896 54.2781 16.8438 52.8344ZM27.5 49.3625C28.6917 47.7125 29.7229 45.9938 30.5938 44.2063C31.4646 42.4188 32.175 40.5167 32.725 38.5H22.275C22.825 40.5167 23.5354 42.4188 24.4062 44.2063C25.2771 45.9938 26.3083 47.7125 27.5 49.3625ZM20.35 48.2625C19.525 46.75 18.8031 45.1802 18.1844 43.5531C17.5656 41.926 17.05 40.2417 16.6375 38.5H8.525C9.85417 40.7917 11.5156 42.7854 13.5094 44.4813C15.5031 46.1771 17.7833 47.4375 20.35 48.2625ZM34.65 48.2625C37.2167 47.4375 39.4969 46.1771 41.4906 44.4813C43.4844 42.7854 45.1458 40.7917 46.475 38.5H38.3625C37.95 40.2417 37.4344 41.926 36.8156 43.5531C36.1969 45.1802 35.475 46.75 34.65 48.2625ZM6.1875 33H15.5375C15.4 32.0833 15.2969 31.1781 15.2281 30.2844C15.1594 29.3906 15.125 28.4625 15.125 27.5C15.125 26.5375 15.1594 25.6094 15.2281 24.7156C15.2969 23.8219 15.4 22.9167 15.5375 22H6.1875C5.95833 22.9167 5.78646 23.8219 5.67188 24.7156C5.55729 25.6094 5.5 26.5375 5.5 27.5C5.5 28.4625 5.55729 29.3906 5.67188 30.2844C5.78646 31.1781 5.95833 32.0833 6.1875 33ZM21.0375 33H33.9625C34.1 32.0833 34.2031 31.1781 34.2719 30.2844C34.3406 29.3906 34.375 28.4625 34.375 27.5C34.375 26.5375 34.3406 25.6094 34.2719 24.7156C34.2031 23.8219 34.1 22.9167 33.9625 22H21.0375C20.9 22.9167 20.7969 23.8219 20.7281 24.7156C20.6594 25.6094 20.625 26.5375 20.625 27.5C20.625 28.4625 20.6594 29.3906 20.7281 30.2844C20.7969 31.1781 20.9 32.0833 21.0375 33ZM39.4625 33H48.8125C49.0417 32.0833 49.2135 31.1781 49.3281 30.2844C49.4427 29.3906 49.5 28.4625 49.5 27.5C49.5 26.5375 49.4427 25.6094 49.3281 24.7156C49.2135 23.8219 49.0417 22.9167 48.8125 22H39.4625C39.6 22.9167 39.7031 23.8219 39.7719 24.7156C39.8406 25.6094 39.875 26.5375 39.875 27.5C39.875 28.4625 39.8406 29.3906 39.7719 30.2844C39.7031 31.1781 39.6 32.0833 39.4625 33ZM38.3625 16.5H46.475C45.1458 14.2083 43.4844 12.2146 41.4906 10.5188C39.4969 8.82292 37.2167 7.5625 34.65 6.7375C35.475 8.25 36.1969 9.81979 36.8156 11.4469C37.4344 13.074 37.95 14.7583 38.3625 16.5ZM22.275 16.5H32.725C32.175 14.4833 31.4646 12.5813 30.5938 10.7937C29.7229 9.00625 28.6917 7.2875 27.5 5.6375C26.3083 7.2875 25.2771 9.00625 24.4062 10.7937C23.5354 12.5813 22.825 14.4833 22.275 16.5ZM8.525 16.5H16.6375C17.05 14.7583 17.5656 13.074 18.1844 11.4469C18.8031 9.81979 19.525 8.25 20.35 6.7375C17.7833 7.5625 15.5031 8.82292 13.5094 10.5188C11.5156 12.2146 9.85417 14.2083 8.525 16.5Z" fill="#FF0915"/></svg>, title: "Global Infrastructure", desc: "Built and hosted for best performance, and secure local support." },
  ];

  return (
    <section style={{ padding: "48px 20px", background: "#F9F5F7", textAlign: "center" }}>
      <Tag noBg>Benefits</Tag>
      <h2 style={sectionTitle}>Built for Enterprises, Ready for the Globe.</h2>

      {/* 2×2 grid */}
      <div style={{
display: "grid",
gridTemplateColumns: "173px 173px",
gap: 12,
margin: "32px auto 0",
justifyContent: "center",
      }}>
        {features.map(f => (
          <div key={f.title} style={{
            borderRadius: 8,
padding: "16px 12px",
background: "rgba(249,245,247,0.20)",
border: "1px solid #E6E5E5",
textAlign: "center",
boxShadow: "0 4px 35.4px rgba(0,0,0,0.06)",
display: "flex", flexDirection: "column",
alignItems: "center", justifyContent: "center",
boxSizing: "border-box",
width: 173, height: 162, padding: "20px 12px",
          }}>
            <div style={{ transform: "scale(0.7)", transformOrigin: "center center",}}>{f.icon}</div>
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 13, color: "#1a0a0d", marginBottom: 6 }}>{f.title}</h3>
            <p style={{ fontSize: 11, color: "#000000", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>{f.desc}</p>
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
    <section style={{ padding: "20px 16px", background: "#F9F5F7" }}>
      <div style={{
        background: "rgba(255,220,220,0.31)",
        borderRadius: 8,
        padding: "32px 20px",
        border: "1px solid rgba(255,9,21,0.30)",
        display: "flex", flexDirection: "column", alignItems: "center",
      }}>
        {/* Circle icon */}
        <div style={{ width: 160, height: 160, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0px 2px 16.8px rgba(0,0,0,0.07)", position: "relative", marginBottom: 24 }}>
          <svg width="110" height="110" viewBox="0 0 139 139" fill="none">
            <path d="M32.9319 65.5279C41.157 65.5279 47.8248 58.8601 47.8248 50.635C47.8248 42.4099 41.157 35.7422 32.9319 35.7422C24.7068 35.7422 18.0391 42.4099 18.0391 50.635C18.0391 58.8601 24.7068 65.5279 32.9319 65.5279Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M106.236 66.8506C114.918 66.8506 121.956 59.8124 121.956 51.1304C121.956 42.4483 114.918 35.4102 106.236 35.4102C97.5538 35.4102 90.5156 42.4483 90.5156 51.1304C90.5156 59.8124 97.5538 66.8506 106.236 66.8506Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M37.2349 97.7394V108.551H102.102V97.7394C102.102 92.0048 100.149 86.5051 96.6733 82.4502C93.1976 78.3952 88.4836 76.1172 83.5682 76.1172H55.7682C50.8529 76.1172 46.1389 78.3952 42.6632 82.4502C39.1875 86.5051 37.2349 92.0048 37.2349 97.7394Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M33.0142 103.917V97.2425C33.0142 91.2446 34.9817 85.4924 38.484 81.2512C40.3099 79.0402 42.7392 77.2437 45.0952 76.1172H20.522C15.9578 76.1172 11.5805 78.0698 8.35305 81.5455C5.12564 85.0212 3.3125 89.7352 3.3125 94.6505V103.917H33.0142Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M105.658 103.917V97.2425C105.658 91.2446 103.69 85.4924 100.188 81.2512C98.362 79.0402 95.9327 77.2437 93.5766 76.1172H118.15C122.714 76.1172 127.091 78.0698 130.319 81.5455C133.546 85.0212 135.359 89.7352 135.359 94.6505V103.917H105.658Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M69.0021 66.8518C79.2378 66.8518 87.5354 58.5542 87.5354 48.3185C87.5354 38.0828 79.2378 29.7852 69.0021 29.7852C58.7664 29.7852 50.4688 38.0828 50.4688 48.3185C50.4688 58.5542 58.7664 66.8518 69.0021 66.8518Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{ position: "absolute", bottom: 8, right: 8, width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" style={{ position: "absolute" }}><circle cx="24" cy="24" r="24" fill="#F90000"/></svg>
            <svg width="20" height="21" viewBox="0 0 25 26" fill="none" style={{ position: "relative", zIndex: 1 }}><path d="M12.5328 26L0.721785 14.43L7.28346 6.5H17.7822L24.3438 14.43L12.5328 26ZM2.78871 6.5L0 3.7375L1.87008 1.9175L4.65879 4.68L2.78871 6.5ZM11.2205 3.9V0H13.8451V3.9H11.2205ZM22.2113 6.5L20.3412 4.6475L23.1299 1.885L25 3.7375L22.2113 6.5ZM12.5328 22.36L19.4226 15.6H5.64304L12.5328 22.36ZM8.53018 9.1L5.28215 13H19.7835L16.5354 9.1H8.53018Z" fill="white"/></svg>
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: BRAND, letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>Early Access Benefits</span>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 22, color: "#1a0a0d", margin: "8px 0 20px" }}>Why Join Early?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
            {perks.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#1C1B1F"/><path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6Z" fill="#E8334A"/></svg>
                <span style={{ fontSize: 14, color: "#444", fontFamily: "'Inter', sans-serif" }}>{p}</span>
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
    <section style={{ padding: "60px 20px", background: "#F9F5F7", textAlign: "center" }}>
      <span style={{
        display: "inline-block", color: BRAND, fontSize: 11, fontWeight: 700,
        letterSpacing: "1.5px", textTransform: "uppercase",
        fontFamily: "'Inter', sans-serif", marginBottom: 32,
      }}>Launching In</span>

      <div style={{ display: "grid", gridTemplateColumns: "109px 109px", justifyContent: "center", gap: 10 }}>
        {units.map(([label, val]) => (
  <div key={label} style={{
    position: "relative",
    width: 109,
    height: 128,
    background: "rgba(255,222,222,0.12)",
    boxShadow: "0px 4px 13.1px rgba(255,9,21,0.16)",
    borderRadius: 13,
  }}>
    {/* Rectangle top */}
    <div style={{
      position: "absolute",
      width: 109, height: 65,
      left: 0, top: 0,
      background: "#FEF7F6",
      boxShadow: "0px 2px 9.8px rgba(255,157,166,0.25)",
      borderRadius: 10,
    }} />

    {/* Rectangle bottom */}
    <div style={{
      position: "absolute",
      width: 109, height: 65,
      left: 0, top: 63,
      background: "#FEF7F6",
      boxShadow: "0px 0px 9.8px rgba(255,157,166,0.18)",
      borderRadius: 10,
    }} />

    {/* Number — centered in full card */}
<div style={{
  position: "absolute",
  top: 0, left: 0, width: 109, height: 128,
  zIndex: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: 28, 
}}>
  <span style={{
    fontFamily: "'Inter', sans-serif",
    fontWeight: 560,
    fontSize: 64,
    lineHeight: 1,
    color: "#F8545E",
  }}>
    {String(val).padStart(2, "0")}
  </span>
</div>

    {/* Label */}
    <div style={{
      position: "absolute",
      top: 93, left: 0, right: 0,
      display: "flex",
      justifyContent: "center",
      zIndex: 3,
    }}>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "15px",
        textTransform: "uppercase",
        color: "#666666",
      }}>{label}</span>
    </div>
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
    icon: <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30 61C25.85 61 21.95 60.2004 18.3 58.6011C14.65 57.0019 11.475 54.8315 8.775 52.0899C6.075 49.3483 3.9375 46.1244 2.3625 42.4182C0.7875 38.712 0 34.752 0 30.5381C0 26.7303 0.725 22.9988 2.175 19.3433C3.625 15.6879 5.65 12.4259 8.25 9.55743C10.85 6.68893 13.975 4.3789 17.625 2.62734C21.275 0.87578 25.275 0 29.625 0C30.675 0 31.75 0.0507699 32.85 0.15231C33.95 0.253849 35.075 0.431544 36.225 0.685393C35.775 2.97004 35.925 5.12776 36.675 7.15855C37.425 9.18935 38.55 10.8774 40.05 12.2228C41.55 13.5682 43.3375 14.4948 45.4125 15.0025C47.4875 15.5102 49.625 15.3833 51.825 14.6217C50.525 17.6171 50.7125 20.4856 52.3875 23.2272C54.0625 25.9688 56.55 27.3903 59.85 27.4919C59.9 28.0504 59.9375 28.5707 59.9625 29.0531C59.9875 29.5354 60 30.0558 60 30.6142C60 34.7774 59.2125 38.6993 57.6375 42.3801C56.0625 46.061 53.925 49.2849 51.225 52.0518C48.525 54.8188 45.35 57.0019 41.7 58.6011C38.05 60.2004 34.15 61 30 61ZM25.5 24.4457C26.75 24.4457 27.8125 24.0015 28.6875 23.113C29.5625 22.2245 30 21.1457 30 19.8764C30 18.6072 29.5625 17.5283 28.6875 16.6398C27.8125 15.7514 26.75 15.3071 25.5 15.3071C24.25 15.3071 23.1875 15.7514 22.3125 16.6398C21.4375 17.5283 21 18.6072 21 19.8764C21 21.1457 21.4375 22.2245 22.3125 23.113C23.1875 24.0015 24.25 24.4457 25.5 24.4457ZM19.5 39.6767C20.75 39.6767 21.8125 39.2324 22.6875 38.3439C23.5625 37.4555 24 36.3766 24 35.1074C24 33.8381 23.5625 32.7593 22.6875 31.8708C21.8125 30.9823 20.75 30.5381 19.5 30.5381C18.25 30.5381 17.1875 30.9823 16.3125 31.8708C15.4375 32.7593 15 33.8381 15 35.1074C15 36.3766 15.4375 37.4555 16.3125 38.3439C17.1875 39.2324 18.25 39.6767 19.5 39.6767ZM39 42.7229C39.85 42.7229 40.5625 42.4309 41.1375 41.8471C41.7125 41.2632 42 40.5397 42 39.6767C42 38.8136 41.7125 38.0901 41.1375 37.5062C40.5625 36.9224 39.85 36.6305 39 36.6305C38.15 36.6305 37.4375 36.9224 36.8625 37.5062C36.2875 38.0901 36 38.8136 36 39.6767C36 40.5397 36.2875 41.2632 36.8625 41.8471C37.4375 42.4309 38.15 42.7229 39 42.7229ZM30 54.9076C36.1 54.9076 41.5125 52.7753 46.2375 48.5106C50.9625 44.2459 53.55 38.8136 54 32.2135C51.5 31.0965 49.5375 29.5735 48.1125 27.6442C46.6875 25.7149 45.725 23.5572 45.225 21.171C41.375 20.6126 38.075 18.9372 35.325 16.1448C32.575 13.3525 30.875 10.0017 30.225 6.09238C26.225 5.99085 22.7125 6.72701 19.6875 8.30087C16.6625 9.87474 14.1375 11.8928 12.1125 14.3552C10.0875 16.8175 8.5625 19.4956 7.5375 22.3895C6.5125 25.2834 6 27.9996 6 30.5381C6 37.2905 8.3375 43.0402 13.0125 47.7871C17.6875 52.5341 23.35 54.9076 30 54.9076Z" fill="#1C1B1F"/></svg>,
    title: "Cookies", label: "filler text"
  },
  {
    icon: <svg width="65" height="60" viewBox="0 0 65 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.45739 25.9125C7.74337 25.1875 7.38636 24.3 7.38636 23.25C7.38636 22.2 7.74337 21.3125 8.45739 20.5875C9.1714 19.8625 10.0455 19.5 11.0795 19.5C12.1136 19.5 12.9877 19.8625 13.7017 20.5875C14.4157 21.3125 14.7727 22.2 14.7727 23.25C14.7727 24.3 14.4157 25.1875 13.7017 25.9125C12.9877 26.6375 12.1136 27 11.0795 27C10.0455 27 9.1714 26.6375 8.45739 25.9125ZM51.2983 25.9125C50.5843 25.1875 50.2273 24.3 50.2273 23.25C50.2273 22.2 50.5843 21.3125 51.2983 20.5875C52.0123 19.8625 52.8864 19.5 53.9205 19.5C54.9545 19.5 55.8286 19.8625 56.5426 20.5875C57.2566 21.3125 57.6136 22.2 57.6136 23.25C57.6136 24.3 57.2566 25.1875 56.5426 25.9125C55.8286 26.6375 54.9545 27 53.9205 27C52.8864 27 52.0123 26.6375 51.2983 25.9125ZM8.86364 60H2.95455V48H14.7727C11.5227 48 8.74053 46.825 6.42614 44.475C4.11174 42.125 2.95455 39.3 2.95455 36H8.86364C8.86364 37.65 9.44223 39.0625 10.5994 40.2375C11.7566 41.4125 13.1477 42 14.7727 42V33H22.75L19.9432 21.375C18.8106 16.775 16.3854 13.0625 12.6676 10.2375C8.94981 7.4125 4.72727 6 0 6V0C6.05682 0 11.4858 1.825 16.2869 5.475C21.0881 9.125 24.2027 13.925 25.6307 19.875L29.4716 35.25C29.7178 36.2 29.5455 37.0625 28.9545 37.8375C28.3636 38.6125 27.5758 39 26.5909 39H20.6818V48C20.6818 49.65 20.1032 51.0625 18.946 52.2375C17.7888 53.4125 16.3977 54 14.7727 54H8.86364V60ZM62.0455 60H56.1364V54H50.2273C48.6023 54 47.2112 53.4125 46.054 52.2375C44.8968 51.0625 44.3182 49.65 44.3182 48V39H38.4091C37.4242 39 36.6364 38.6 36.0455 37.8C35.4545 37 35.3068 36.1 35.6023 35.1L39.3693 19.875C40.9451 14.125 44.072 9.375 48.75 5.625C53.428 1.875 58.8447 0 65 0V6C60.322 6 56.1241 7.425 52.4063 10.275C48.6884 13.125 46.2633 16.825 45.1307 21.375L42.25 33H50.2273V42C51.8523 42 53.2434 41.4125 54.4006 40.2375C55.5578 39.0625 56.1364 37.65 56.1364 36H62.0455C62.0455 39.3 60.8883 42.125 58.5739 44.475C56.2595 46.825 53.4773 48 50.2273 48H62.0455V60Z" fill="#1C1B1F"/></svg>,
    title: "SOC 2", label: "Compliant"
  },
  {
    icon: <svg width="75" height="74" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="37.5" cy="37" rx="32.5" ry="32" stroke="black" strokeWidth="10" strokeDasharray="4 4"/></svg>,
    title: "GDPR", label: "Compliant"
  },
  {
    icon: <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.75 77C44.6833 77 39.3313 75.1917 34.6938 71.575C30.0563 67.9583 26.9792 63.35 25.4625 57.75C28.0875 57.8667 30.6833 57.6042 33.25 56.9625C35.8167 56.3208 38.2667 55.4167 40.6 54.25H54.95C55.0083 53.6083 55.0521 52.9813 55.0812 52.3688C55.1104 51.7563 55.125 51.1292 55.125 50.4875C55.125 49.9625 55.1104 49.4229 55.0812 48.8688C55.0521 48.3146 55.0083 47.775 54.95 47.25H49.7875C50.7208 46.2 51.5813 45.0917 52.3688 43.925C53.1563 42.7583 53.8708 41.5333 54.5125 40.25H66.85C65.6833 38.5 64.2833 36.9688 62.65 35.6562C61.0167 34.3438 59.1792 33.3375 57.1375 32.6375C57.4292 31.4708 57.6188 30.275 57.7063 29.05C57.7938 27.825 57.8083 26.6292 57.75 25.4625C63.35 26.9792 67.9583 30.0563 71.575 34.6938C75.1917 39.3313 77 44.6833 77 50.75C77 58.0417 74.4479 64.2396 69.3438 69.3438C64.2396 74.4479 58.0417 77 50.75 77ZM42.4375 68.075C42.0292 66.9083 41.6646 65.7708 41.3438 64.6625C41.0229 63.5542 40.7458 62.4167 40.5125 61.25H34.65C35.6417 62.7083 36.7938 64.0208 38.1063 65.1875C39.4188 66.3542 40.8625 67.3167 42.4375 68.075ZM50.75 69.3C51.45 68.0167 52.0479 66.7042 52.5438 65.3625C53.0396 64.0208 53.4625 62.65 53.8125 61.25H47.6875C48.0375 62.65 48.475 64.0208 49 65.3625C49.525 66.7042 50.1083 68.0167 50.75 69.3ZM59.0625 68.075C60.6375 67.3167 62.0813 66.3542 63.3938 65.1875C64.7063 64.0208 65.8583 62.7083 66.85 61.25H60.9875C60.6958 62.4167 60.4042 63.5542 60.1125 64.6625C59.8208 65.7708 59.4708 66.9083 59.0625 68.075ZM61.95 54.25H69.65C69.7667 53.6667 69.8542 53.0979 69.9125 52.5438C69.9708 51.9896 70 51.3917 70 50.75C70 50.1083 69.9708 49.5104 69.9125 48.9562C69.8542 48.4021 69.7667 47.8333 69.65 47.25H61.95C62.0083 47.775 62.0521 48.3146 62.0813 48.8688C62.1104 49.4229 62.125 49.9625 62.125 50.4875C62.125 51.1292 62.1104 51.7563 62.0813 52.3688C62.0521 52.9813 62.0083 53.6083 61.95 54.25ZM26.25 52.5C18.9583 52.5 12.7604 49.9479 7.65625 44.8438C2.55208 39.7396 0 33.5417 0 26.25C0 18.9583 2.55208 12.7604 7.65625 7.65625C12.7604 2.55208 18.9583 0 26.25 0C33.5417 0 39.7396 2.55208 44.8438 7.65625C49.9479 12.7604 52.5 18.9583 52.5 26.25C52.5 33.5417 49.9479 39.7396 44.8438 44.8438C39.7396 49.9479 33.5417 52.5 26.25 52.5ZM26.25 45.5C31.5583 45.5 36.0938 43.6187 39.8563 39.8563C43.6187 36.0938 45.5 31.5583 45.5 26.25C45.5 20.9417 43.6187 16.4062 39.8563 12.6438C36.0938 8.88125 31.5583 7 26.25 7C20.9417 7 16.4062 8.88125 12.6438 12.6438C8.88125 16.4062 7 20.9417 7 26.25C7 31.5583 8.88125 36.0938 12.6438 39.8563C16.4062 43.6187 20.9417 45.5 26.25 45.5ZM17.5 24.5C18.4917 24.5 19.3229 24.1646 19.9937 23.4937C20.6646 22.8229 21 21.9917 21 21C21 20.0083 20.6646 19.1771 19.9937 18.5063C19.3229 17.8354 18.4917 17.5 17.5 17.5C16.5083 17.5 15.6771 17.8354 15.0062 18.5063C14.3354 19.1771 14 20.0083 14 21C14 21.9917 14.3354 22.8229 15.0062 23.4937C15.6771 24.1646 16.5083 24.5 17.5 24.5ZM26.25 39.9C29.05 39.9 31.5437 39.1125 33.7313 37.5375C35.9188 35.9625 37.5083 33.95 38.5 31.5H14C14.9917 33.95 16.5813 35.9625 18.7688 37.5375C20.9563 39.1125 23.45 39.9 26.25 39.9ZM35 24.5C35.9917 24.5 36.8229 24.1646 37.4938 23.4937C38.1646 22.8229 38.5 21.9917 38.5 21C38.5 20.0083 38.1646 19.1771 37.4938 18.5063C36.8229 17.8354 35.9917 17.5 35 17.5C34.0083 17.5 33.1771 17.8354 32.5063 18.5063C31.8354 19.1771 31.5 20.0083 31.5 21C31.5 21.9917 31.8354 22.8229 32.5063 23.4937C33.1771 24.1646 34.0083 24.5 35 24.5Z" fill="#1C1B1F"/></svg>,
    title: "Data Encryption", label: "Secure & Local"
  },
];

  return (
    <section style={{ padding: "20px 16px", background: "#F9F5F7" }}>
      <div style={{
        background: "rgba(255,220,220,0.31)", borderRadius: 8, padding: "24px 16px",
        border: "1px solid rgba(255,9,21,0.30)",
        display: "flex", flexDirection: "column", gap: 24,
      }}>
        <div>
          <span style={{ fontSize: 11, fontWeight: 700, color: BRAND, letterSpacing: "1.5px", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>Trust & Security</span>
          <h2 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 20, color: "#1a0a0d", margin: "8px 0 8px" }}>Your Data, Always Protected.</h2>
          <p style={{ color: "#000000", fontSize: 13, fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            We follow industry best practices to ensure your data and infrastructure are always secure and private.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "100px 100px", gap: 16, justifyContent: "center" }}>
  {stats.map(s => (
    <div key={s.title} style={{ textAlign: "center" }}>
      <div style={{
  width: 100,
  height: 90,
  background: "#fff",
  borderRadius: 16,
  boxShadow: "2px 5px 40.8px rgba(255,9,21,0.07)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 8,
  overflow: "hidden",
}}>
        <div style={{ transform: "scale(0.7)", transformOrigin: "center center", lineHeight: 0 }}>
          {s.icon}
        </div>
      </div>
      <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 14, color: "#1a0a0d" }}>{s.title}</div>
      <div style={{ fontSize: 12, color: "#000000", fontFamily: "'Inter', sans-serif", marginTop: 2 }}>{s.label}</div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function LandingPageMobile() {
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