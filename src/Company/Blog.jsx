import React, { useState } from "react";
import "./Blog.css";
import ribbonBg from "../assets/privacy-bg-ribbon.png";
import blogIllustration from "../assets/Blog.png";
import blogFeatured from "../assets/Blog-featured.png";
import FooterSection from "../FooterSection";

function Navbar() {
  const [dark, setDark] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path d="M36.499 0C40.3359 0 43.4463 3.11041 43.4463 6.94727V36.499C43.4463 36.6885 43.4358 36.8759 43.4209 37.0615L32.6826 26.5566C31.3112 25.2156 29.0995 25.2276 27.7432 26.584L25.5107 28.8174C24.1546 30.1738 24.1663 32.3607 25.5371 33.7021L35.498 43.4463H7.1543L34.7979 16.4053C36.169 15.0637 36.1807 12.877 34.8242 11.5205L32.5918 9.28711C31.2353 7.93089 29.0237 7.91858 27.6523 9.25977L0 36.3096V7.89941L10.7188 18.3857C12.0901 19.727 14.3017 19.7147 15.6582 18.3584L17.8906 16.125C19.2471 14.7685 19.2355 12.5818 17.8643 11.2402L6.39746 0.0234375C6.57891 0.00922816 6.76217 0 6.94727 0H36.499Z" fill="#E22A2A"/>
        </svg>
        <div className="navbar__logo-text">
          <span className="navbar__logo-name">Nexgn</span>
          <span className="navbar__logo-sub">Smart Signing</span>
        </div>
     </div>
      <div className="navbar__links">
        <a href="#" className="navbar__link">Home</a>
        <a href="#" className="navbar__link">Product</a>
        <a href="#" className="navbar__link">Pricing</a>
      </div>
      <div className="navbar__actions">
      <a href="#" className="navbar__login">Log in</a>
        <svg className="navbar__headset"width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_492_18490" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="29" height="29">
            <rect width="29" height="29" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_492_18490)">
            <path d="M14.5 27.792V25.3753H22.9583V24.167H18.125V14.5003H22.9583V13.292C22.9583 10.9559 22.1326 8.96213 20.4813 7.31074C18.8299 5.65935 16.8361 4.83366 14.5 4.83366C12.1639 4.83366 10.1701 5.65935 8.51875 7.31074C6.86736 8.96213 6.04167 10.9559 6.04167 13.292V14.5003H10.875V24.167H6.04167C5.37708 24.167 4.80816 23.9304 4.3349 23.4571C3.86163 22.9838 3.625 22.4149 3.625 21.7503V13.292C3.625 11.8017 3.91198 10.397 4.48594 9.07793C5.0599 7.75883 5.84028 6.60588 6.82708 5.61908C7.81389 4.63227 8.96684 3.85189 10.2859 3.27793C11.605 2.70397 13.0097 2.41699 14.5 2.41699C15.9903 2.41699 17.395 2.70397 18.7141 3.27793C20.0332 3.85189 21.1861 4.63227 22.1729 5.61908C23.1597 6.60588 23.9401 7.75883 24.5141 9.07793C25.088 10.397 25.375 11.8017 25.375 13.292V25.3753C25.375 26.0399 25.1384 26.6088 24.6651 27.0821C24.1918 27.5554 23.6229 27.792 22.9583 27.792H14.5ZM6.04167 21.7503H8.45833V16.917H6.04167V21.7503ZM20.5417 21.7503H22.9583V16.917H20.5417V21.7503Z" fill="black"/>
          </g>
       </svg>
        <button className="navbar__cta">Get Started</button>
      </div>
    </nav>
  );
}

export default function Blog() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <div className="blog-hero-wrapper">
        <div className="blog-hero">
          <span className="blog-hero__label">BLOG</span>
          <h1 className="blog-hero__title">Nexgn Blog</h1>
          <p className="blog-hero__sub">Insights on digital trust, secure infrastructure, and the future of document automation.</p>
        </div>
        <img src={blogIllustration} alt="Blog illustration" className="blog-hero__illustration" />
      </div>

      {/* ── FILTER TABS ── */}
      <div className="blog-filters">
        <button className="blog-filter blog-filter--active">All</button>
        <button className="blog-filter">Security</button>
        <button className="blog-filter">Engineering</button>
        <button className="blog-filter">Operations</button>
        <button className="blog-filter">ESG</button>
        <div className="blog-filter__search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="#000" strokeWidth="2"/>
            <path d="M16.5 16.5L21 21" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* ── BLOG CARDS ── */}
      <div className="blog-cards-section">
        <div className="blog-cards-grid">
          {[
            { category: "Security", color: "#FF0000", bg: "#FFE3E4", title: "Zero-Trust Architecture for E-Signature Platforms", time: "5 min read", date: "May 20, 2026" },
            { category: "Security", color: "#FF0000", bg: "#FFE3E4", title: "Building Trust at Scale: The Arcitecture Behind ...", time: "6 min read", date: "May 18, 2026" },
            { category: "Engineering", color: "#B45309", bg: "#FEF3C7", title: "Designing Cryptographic Integrity for High-Volume ...", time: "7 min read", date: "May 15, 2026" },
          ].map((card, i) => (
            <div className="blog-card" key={i}>
              <div className="blog-card__img">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M7.5 28.5C6.675 28.5 6 27.825 6 27V9C6 8.175 6.675 7.5 7.5 7.5H28.5C29.325 7.5 30 8.175 30 9V27C30 27.825 29.325 28.5 28.5 28.5H7.5ZM7.5 27H28.5V9H7.5V27ZM9 25.5H27L21.75 18.75L17.25 24.375L14.25 20.625L9 25.5Z" fill="#C5C5C5"/></svg>
              </div>
              <span className="blog-card__tag" style={{ color: card.color, background: card.bg }}>{card.category}</span>
              <h3 className="blog-card__title">{card.title}</h3>
              <div className="blog-card__meta">
                <span className="blog-card__time">⏱ {card.time}</span>
                <span className="blog-card__date">{card.date}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="blog-load-more">Load More Articles</button>
      </div>

      {/* ── FEATURED + POPULAR ── */}
     <div className="blog-featured-section">
        <div className="blog-featured-row">
          <div className="blog-featured-card">
            <span className="blog-featured__label">FEATURED</span>
            <img src={blogFeatured} alt="Featured" className="blog-featured__img" />
            <span className="blog-featured__tag">Security</span>
            <h2 className="blog-featured__title">Building Trust at Scale: The Arcitecture Behind Secure Document Signing</h2>
            <div className="blog-featured__meta">
              <span>⏱ 6 min read</span>
              <span>May 18, 2026</span>
            </div>
          </div>
<div className="blog-popular-and-newsletter">
            <div className="blog-popular-card">
              <span className="blog-popular__label">POPULAR ARTICLES</span>
              {[
                { title: "Zero-Trust Architecture for E-Signature Platforms", date: "May 20, 2026" },
                { title: "Zero-Trust Architecture for E-Signature Platforms", date: "May 20, 2026" },
                { title: "Zero-Trust Architecture for E-Signature Platforms", date: "May 20, 2026" },
              ].map((item, i) => (
                <div className="blog-popular__item" key={i}>
                  <div className="blog-popular__thumb"></div>
                  <div className="blog-popular__info">
                    <h3 className="blog-popular__title">{item.title}</h3>
                    <p className="blog-popular__date">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="blog-newsletter-wrapper">
              <div className="blog-newsletter-card">
                <h3 className="blog-newsletter__title">Stay ahead with the latest insights</h3>
                <p className="blog-newsletter__sub">Get updates on security, engineering best practice and product news</p>
                <input className="blog-newsletter__input" type="email" placeholder="Enter your email" />
                <button className="blog-newsletter__btn">Subscribe</button>
                <p className="blog-newsletter__privacy">We respect your privacy. Unsubscribe anytime</p>
              </div>
            </div>
          </div>
      </div>
        <div className="blog-newsletter-full">
          <div className="blog-newsletter-card">
            <h3 className="blog-newsletter__title">Stay ahead with the latest insights</h3>
            <p className="blog-newsletter__sub">Get updates on security, engineering best practice and product news</p>
            <input className="blog-newsletter__input" type="email" placeholder="Enter your email" />
            <button className="blog-newsletter__btn">Subscribe</button>
            <p className="blog-newsletter__privacy">We respect your privacy. Unsubscribe anytime</p>
          </div>
        </div>
      </div>

      {/* ── RIBBON ── */}
      <img
        src={ribbonBg}
        alt=""
        className="nexgn-hero-ribbon"
        aria-hidden="true"
      />

      {/* ── FOOTER ── */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <FooterSection dark={false} />
      </div>
    </>
  );
}