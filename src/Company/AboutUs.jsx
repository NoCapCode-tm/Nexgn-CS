import React, { useState } from "react";
import "./AboutUs.css";
import ribbonBg from "../assets/privacy-bg-ribbon.png";
import globeImage from "../assets/globe-image.png";
import promiseShield from "../assets/promise-shield.png";
import FooterSection from "../FooterSection";

function Navbar() {
  const [dark, setDark] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <path
            d="M36.499 0C40.3359 0 43.4463 3.11041 43.4463 6.94727V36.499C43.4463 36.6885 43.4358 36.8759 43.4209 37.0615L32.6826 26.5566C31.3112 25.2156 29.0995 25.2276 27.7432 26.584L25.5107 28.8174C24.1546 30.1738 24.1663 32.3607 25.5371 33.7021L35.498 43.4463H7.1543L34.7979 16.4053C36.169 15.0637 36.1807 12.877 34.8242 11.5205L32.5918 9.28711C31.2353 7.93089 29.0237 7.91858 27.6523 9.25977L0 36.3096V7.89941L10.7188 18.3857C12.0901 19.727 14.3017 19.7147 15.6582 18.3584L17.8906 16.125C19.2471 14.7685 19.2355 12.5818 17.8643 11.2402L6.39746 0.0234375C6.57891 0.00922816 6.76217 0 6.94727 0H36.499Z"
            fill="#E22A2A"
          />
        </svg>
        <div className="navbar__logo-text">
          <span className="navbar__logo-name">Nexgn</span>
          <span className="navbar__logo-sub">Smart Signing</span>
        </div>
      </div>
      <div className="navbar__links">
        <a href="#" className="navbar__link">
          Home
        </a>
        <a href="#" className="navbar__link">
          Product
        </a>
        <a href="#" className="navbar__link">
          Pricing
        </a>
      </div>
      <div className="navbar__actions">
        <a href="#" className="navbar__login">
          Log in
        </a>

        <button className="navbar__cta">Get Started</button>
      </div>
    </nav>
  );
}

export default function AboutUs() {
  return (
    <div className="nexgn-page-wrapper">
      <Navbar />

      {/* ── RIBBON ── */}
      <img
        src={ribbonBg}
        alt=""
        className="nexgn-hero-ribbon"
        aria-hidden="true"
      />

      {/* ── ABOUT NEXGN LABEL ── */}
      <span className="nexgn-about-label">About Nexgn</span>

      {/* ── HERO TITLE ── */}
      <h1 className="aboutus-hero-title">
        Designed for Trust Engineered for the World
      </h1>

      {/* ── HERO BODY ── */}
      <p className="nexgn-hero-body">
        The modern business moves at the speed of the internet, yet the tools we
        use to sign, secure, and manage our most critical agreements have been
        left in the past. They are slow, bloated, and needlessly complex.
      </p>

      {/* ── HERO TAGLINE ── */}
      <p className="nexgn-hero-tagline">We built Nexgn to change that.</p>

      {/* ── HERO DESCRIPTION ── */}
      <p className="nexgn-hero-description">
        What began as a vision for better security in New Mexico has rapidly
        evolved into a global infrastructure for digital trust. We believe that
        securing your documents shouldn't be complicated, and compliance
        shouldn't slow you down. By combining enterprise-grade encryption with
        an aggressively optimized, user-first interface, we are building the
        intelligent backbone for a faster, smarter, and more connected future.
      </p>

      {/* ── HERO SUBTEXT ── */}
      <p className="nexgn-hero-subtext">
        Whether you are a fast-growing startup or an established multinational,
        Nexgn provides the uncompromised security and lightning-fast workflows
        you need to close deals, manage agreements, and scale seamlessly across
        borders.
      </p>

      {/* ── HERO GLOBE IMAGE ── */}
      <img
        src={globeImage}
        alt="Nexgn global security globe"
        className="nexgn-hero-globe"
      />

      {/* ── CORE VALUES LABEL ── */}
      <span className="nexgn-core-values-label">Our Core Values</span>

      {/* ── CORE VALUES TITLE ── */}
      <h2 className="nexgn-core-values-title">
        Built on Principles. Driven by Purpose.
      </h2>

      {/* ── CORE VALUES CARD 1 ── */}
      <div className="nexgn-core-card nexgn-core-card--1">
        <div className="nexgn-core-card-icon">
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 30V32.0967"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M41.6641 20V29.1"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50 30.1967V23.3333C50 22.4493 49.6488 21.6014 49.0237 20.9763C48.3986 20.3512 47.5507 20 46.6667 20H23.3333C22.4493 20 21.6014 20.3512 20.9763 20.9763C20.3512 21.6014 20 22.4493 20 23.3333V46.6667C20 47.5507 20.3512 48.3986 20.9763 49.0237C21.6014 49.6488 22.4493 50 23.3333 50H32.9167"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M51.6693 44.1664C51.6693 48.3314 48.7526 50.4148 45.2859 51.6231C45.1044 51.6846 44.9072 51.6817 44.7276 51.6148C41.2526 50.4148 38.3359 48.3314 38.3359 44.1648V38.3331C38.3364 38.1124 38.4244 37.9008 38.5806 37.7449C38.7368 37.589 38.9485 37.5014 39.1693 37.5014C40.8359 37.5014 42.9193 36.5014 44.3693 35.2348C44.5478 35.0883 44.7714 35.0081 45.0023 35.0078C45.2332 35.0075 45.4571 35.0871 45.6359 35.2331C47.0943 36.5081 49.1693 37.4998 50.8359 37.4998C51.057 37.4998 51.2689 37.5876 51.4252 37.7438C51.5815 37.9001 51.6693 38.1121 51.6693 38.3331V44.1664Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 40H31.6667"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 30H40.2367"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.3359 40V50"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.3359 20V30"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="nexgn-core-card-title">Security by Design</h3>
        <div className="nexgn-core-card-divider"></div>
        <p className="nexgn-core-card-text">
          We don't bolt security on at the end. It is the invisible foundation
          of every line of code we write, protecting your data before you even
          click send
        </p>
      </div>

      {/* ── CORE VALUES CARD 2 ── */}
      <div className="nexgn-core-card nexgn-core-card--2">
        <div className="nexgn-core-card-icon">
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.6645 38.3325C21.3491 38.3335 21.0399 38.2451 20.7728 38.0774C20.5057 37.9098 20.2916 37.6697 20.1555 37.3852C20.0193 37.1007 19.9667 36.7834 20.0037 36.4702C20.0407 36.157 20.1658 35.8607 20.3645 35.6158L36.8645 18.6158C36.9883 18.4729 37.157 18.3764 37.3428 18.342C37.5287 18.3076 37.7207 18.3375 37.8874 18.4266C38.0541 18.5158 38.1855 18.659 38.2601 18.8326C38.3347 19.0063 38.348 19.2002 38.2979 19.3825L35.0979 29.4158C35.0035 29.6683 34.9718 29.94 35.0055 30.2075C35.0392 30.475 35.1373 30.7303 35.2914 30.9515C35.4454 31.1728 35.6508 31.3533 35.89 31.4777C36.1292 31.6021 36.3949 31.6667 36.6645 31.6658H48.3312C48.6466 31.6647 48.9558 31.7532 49.2229 31.9208C49.4901 32.0885 49.7041 32.3285 49.8403 32.613C49.9764 32.8975 50.029 33.2148 49.992 33.528C49.955 33.8412 49.8299 34.1375 49.6312 34.3825L33.1312 51.3825C33.0074 51.5253 32.8388 51.6219 32.6529 51.6562C32.467 51.6906 32.275 51.6608 32.1083 51.5716C31.9416 51.4825 31.8102 51.3393 31.7356 51.1656C31.6611 50.9919 31.6477 50.7981 31.6979 50.6158L34.8979 40.5825C34.9922 40.3299 35.0239 40.0583 34.9902 39.7908C34.9565 39.5233 34.8584 39.268 34.7044 39.0468C34.5503 38.8255 34.3449 38.6449 34.1057 38.5205C33.8666 38.3961 33.6008 38.3316 33.3312 38.3325H21.6645Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="nexgn-core-card-title">Frictionless Velocity</h3>
        <div className="nexgn-core-card-divider"></div>
        <p className="nexgn-core-card-text">
          Time is your most valuable asset. We engineer our workflows to remove
          barriers, saving you critical seconds on every signature.
        </p>
      </div>

      {/* ── OUR PROMISE BANNER ── */}
      <div className="nexgn-promise-banner">
        <img
          src={promiseShield}
          alt="Our Promise shield"
          className="nexgn-promise-image"
        />
        <div className="nexgn-promise-content">
          <h3 className="nexgn-promise-title">Our Promise</h3>
          <p className="nexgn-promise-text">
            We are more than just a digital signature platform. We are your
            partner in building a more secure, efficient, and trustworthy
            digital world.
          </p>
        </div>
      </div>

      {/* ── CORE VALUES CARD 3 ── */}
      <div className="nexgn-core-card nexgn-core-card--3">
        <div className="nexgn-core-card-icon">
          <svg
            width="90"
            height="90"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.0026 51.6654C44.2073 51.6654 51.6693 44.2034 51.6693 34.9987C51.6693 25.794 44.2073 18.332 35.0026 18.332C25.7979 18.332 18.3359 25.794 18.3359 34.9987C18.3359 44.2034 25.7979 51.6654 35.0026 51.6654Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.3359 34.9987C28.3359 28.7933 30.723 22.8256 35.0026 18.332C39.2822 22.8256 41.6693 28.7933 41.6693 34.9987C41.6693 41.2041 39.2822 47.1718 35.0026 51.6654C30.723 47.1718 28.3359 41.2041 28.3359 34.9987Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.3359 35H51.6693"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="nexgn-core-card-title">Global Sovereignty</h3>
        <div className="nexgn-core-card-divider"></div>
        <p className="nexgn-core-card-text">
          We respect the privacy of your data with strict international
          compliance, ensuring you remain in absolute control, no matter where
          your business takes you.
        </p>
      </div>
      {/* ── FOOTER ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <FooterSection dark={false} />
      </div>
    </div>
  );
}
