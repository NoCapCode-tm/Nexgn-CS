import React, { useState, useEffect } from "react";
import "./HelpCenter.css";
import ribbonBg from "../assets/privacy-bg-ribbon.png";
import ribbonBgDark from "../assets/helpcenter-dark-ribbon.png";
import headsetImg from "../assets/headset.png";
import heroBannerImg from "../assets/HelpCenter.png";
import heroBannerDark from "../assets/dark-helpcenter.png";
import darkBgImg from "../assets/dark-bg-helpcenter.jpg";
import darkHeadsetImg from "../assets/dark-headset.png";
import FooterSection from "../FooterSection";

const categories = [
  {
    name: "Core Platform & Capabilities",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8265 2.18036C12.566 2.06151 12.2829 2 11.9965 2C11.7102 2 11.4271 2.06151 11.1665 2.18036L2.59655 6.08036C2.4191 6.1586 2.26823 6.28676 2.16231 6.44921C2.05639 6.61167 2 6.80142 2 6.99536C2 7.18929 2.05639 7.37904 2.16231 7.5415C2.26823 7.70396 2.4191 7.83211 2.59655 7.91036L11.1765 11.8204C11.4371 11.9392 11.7202 12.0007 12.0065 12.0007C12.2929 12.0007 12.576 11.9392 12.8365 11.8204L21.4165 7.92036C21.594 7.84211 21.7449 7.71396 21.8508 7.5515C21.9567 7.38904 22.0131 7.19929 22.0131 7.00536C22.0131 6.81142 21.9567 6.62167 21.8508 6.45921C21.7449 6.29676 21.594 6.1686 21.4165 6.09036L12.8265 2.18036Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12C1.99953 12.1913 2.05392 12.3787 2.15672 12.5399C2.25952 12.7012 2.40642 12.8297 2.58 12.91L11.18 16.82C11.4392 16.9374 11.7205 16.9981 12.005 16.9981C12.2895 16.9981 12.5708 16.9374 12.83 16.82L21.41 12.92C21.587 12.8404 21.737 12.7111 21.8418 12.5477C21.9466 12.3844 22.0015 12.1941 22 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 17C1.99953 17.1913 2.05392 17.3787 2.15672 17.5399C2.25952 17.7012 2.40642 17.8297 2.58 17.91L11.18 21.82C11.4392 21.9374 11.7205 21.9981 12.005 21.9981C12.2895 21.9981 12.5708 21.9374 12.83 21.82L21.41 17.92C21.587 17.8404 21.737 17.7111 21.8418 17.5477C21.9466 17.3844 22.0015 17.1941 22 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "The Signer Experience",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="24"
        height="24"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    name: "Security & Compliance",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="24"
        height="24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: "Account & Billing",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        width="24"
        height="24"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    name: "Enterprise, API & Customization",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5H3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 19H3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 3V7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12H12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 19H16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 5H14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10V14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12H3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Sustainability & ESG Impact",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0056 20C9.24965 20.0053 7.55585 19.3505 6.26011 18.1654C4.96438 16.9803 4.16136 15.3515 4.01033 13.6021C3.8593 11.8527 4.37128 10.1104 5.44474 8.72074C6.5182 7.33112 8.07472 6.3957 9.80559 6.1C15.5056 5 17.0056 4.48 19.0056 2C20.0056 4 21.0056 6.18 21.0056 10C21.0056 15.5 16.2256 20 11.0056 20Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 21C2 18 3.85 15.64 7.08 15C9.5 14.52 12 13 13 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const faqs = [
  {
    title: "Core Platform & Capabilities",
    questions: [
      {
        q: "What is Nexgn?",
        a: "Nexgn is a next-generation digital signature and document infrastructure platform. Originating in New Mexico and built for the global enterprise, we provide a frictionless, highly secure environment to send, sign, and manage legally binding agreements.",
      },
      {
        q: "Who is Nexgn built for?",
        a: "Nexgn is designed for enterprises, legal teams, financial institutions, and any organization that needs a secure, auditable, and compliant workflow for document signing at scale.",
      },
      {
        q: "Which file formats are supported?",
        a: "Nexgn supports PDF, DOCX, XLSX, PPTX, and image formats (PNG, JPEG). All documents are converted to a standardized format for consistent rendering across devices.",
      },
      {
        q: "Is Nexgn optimized for mobile devices?",
        a: "Yes. Nexgn's signing experience is fully responsive and optimized for mobile browsers. Native iOS and Android apps are also available for on-the-go workflows.",
      },
      {
        q: "Can I save documents as reusable templates?",
        a: "Absolutely. You can save any document as a reusable template, pre-placing signature fields and data fields so future sends require just a few clicks.",
      },
      {
        q: "Can I send a document to multiple signers at once?",
        a: "Yes. Nexgn supports sequential and parallel signing workflows, so you can define the exact order in which signers receive and complete the document.",
      },
      {
        q: 'What is "Bulk Send" and how does it work?',
        a: "Bulk Send lets you upload a CSV of recipients and send a personalized version of a document to each one simultaneously — ideal for NDAs, onboarding forms, and policy acknowledgements.",
      },
    ],
  },
  {
    title: "The Signer Experience",
    questions: [
      {
        q: "Do signers need a Nexgn account?",
        a: "No. Recipients can sign documents directly from their email without creating an account, making the experience frictionless for external parties.",
      },
      {
        q: "How do signers verify their identity?",
        a: "Nexgn offers email-based verification, SMS OTP, knowledge-based authentication (KBA), and ID document verification depending on the compliance level required.",
      },
      {
        q: "Can signers decline or reassign a document?",
        a: "Yes. Signers can decline with a reason or reassign to another authorized party. Senders are notified immediately in either case.",
      },
    ],
  },
  {
    title: "Advanced Security & Legal Compliance",
    questions: [
      {
        q: "Are Nexgn signatures legally binding?",
        a: "Yes. Nexgn signatures comply with eIDAS (EU), ESIGN & UETA (US), and other international e-signature laws, making them legally enforceable in 180+ countries.",
      },
      {
        q: "How is data encrypted?",
        a: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Each document is stored with a unique key and a tamper-evident audit trail.",
      },
    ],
  },

  {
    title: "Enterprise, API & Customization",
    questions: [
      {
        q: "Does Nexgn offer an API?",
        a: "Yes. Nexgn provides a full-featured REST API that allows you to embed signing workflows directly into your product, automate document generation, and manage users programmatically.",
      },
      {
        q: "Can I white-label the signing experience?",
        a: "Enterprise customers can fully white-label Nexgn — custom domains, branded email notifications, and a customized signer interface that reflects your brand identity.",
      },
      {
        q: "What webhook events are available?",
        a: "Nexgn emits webhook events for document sent, viewed, signed, declined, completed, and expired — giving you real-time visibility into every step of the signing process.",
      },
    ],
  },
  {
    title: "Account Management & Billing",
    questions: [
      {
        q: "What plans does Nexgn offer?",
        a: "Nexgn offers Starter, Professional, and Enterprise tiers. All plans include unlimited signers; higher tiers unlock advanced authentication, API access, and dedicated support.",
      },
      {
        q: "Can I cancel at any time?",
        a: "Yes. Monthly plans can be cancelled at any time with no penalties. Annual plans are non-refundable after 30 days but remain active until the period ends.",
      },
    ],
  },
  {
    title: "Sustainability & Environmental Impact (ESG)",
    questions: [
      {
        q: "How does Nexgn contribute to sustainability?",
        a: "Every document signed digitally through Nexgn eliminates the need for printing, shipping, and physical storage — directly reducing paper waste and carbon emissions across your organization.",
      },
      {
        q: "Does Nexgn track ESG metrics?",
        a: "Yes. Nexgn's ESG dashboard provides real-time reporting on trees saved, CO₂ reduced, and paper eliminated — giving your sustainability team auditable data for ESG reporting.",
      },
      {
        q: "Is Nexgn carbon neutral?",
        a: "Nexgn offsets 100% of its cloud infrastructure emissions through certified carbon credits and partners with reforestation programs to go beyond net zero.",
      },
    ],
  },
];

function Navbar({ dark, setDark }) {
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
        <button
          className="navbar__theme-toggle"
          onClick={() => setDark(!dark)}
          aria-label="Toggle dark mode"
        >
          {dark ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>
        <button className="navbar__cta">Get Started</button>
      </div>
    </nav>
  );
}

export default function HelpCenter() {
  const [dark, setDark] = useState(
    () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [activeCategory, setActiveCategory] = useState(0);
  const [openSection, setOpenSection] = useState(0);
  const [openQuestion, setOpenQuestion] = useState("0-0");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
  }, [dark]);

  return (
    <div className="nexgn-root">
      <Navbar dark={dark} setDark={setDark} />
      {/* ── RIBBON ── */}
      <img
        src={dark ? ribbonBgDark : ribbonBg}
        alt=""
        className="nexgn-hero-ribbon"
        aria-hidden="true"
      />

      {/* ── HERO ── */}
      <div className="nexgn-hero-section">
        <img
          src={dark ? heroBannerDark : heroBannerImg}
          alt=""
          className="nexgn-hero-banner"
          aria-hidden="true"
        />
        <div className="nexgn-hero-left">
          {dark ? (
            <div className="nexgn-hero-label">
              <svg
                width="119"
                height="12"
                viewBox="0 0 119 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.000266314 11.7959V0.159534H2.10822V5.08567H7.50027V0.159534H9.6139V11.7959H7.50027V6.85272H2.10822V11.7959H0.000266314ZM13.0265 11.7959V0.159534H20.5947V1.92658H15.1345V5.08567H20.2027V6.85272H15.1345V10.0289H20.6402V11.7959H13.0265ZM23.8653 11.7959V0.159534H25.9732V10.0289H31.0982V11.7959H23.8653ZM34.0478 11.7959V0.159534H38.4114C39.3053 0.159534 40.0553 0.326201 40.6614 0.659534C41.2713 0.992868 41.7315 1.4512 42.0421 2.03453C42.3565 2.61408 42.5137 3.27317 42.5137 4.01181C42.5137 4.75802 42.3565 5.4209 42.0421 6.00044C41.7277 6.57999 41.2637 7.03643 40.65 7.36976C40.0364 7.69931 39.2807 7.86408 38.383 7.86408H35.4909V6.13113H38.0989C38.6216 6.13113 39.0497 6.04022 39.383 5.8584C39.7163 5.67658 39.9625 5.42658 40.1216 5.1084C40.2845 4.79022 40.3659 4.42469 40.3659 4.01181C40.3659 3.59893 40.2845 3.23529 40.1216 2.9209C39.9625 2.6065 39.7144 2.36219 39.3773 2.18794C39.044 2.00991 38.6141 1.9209 38.0875 1.9209H36.1557V11.7959H34.0478ZM60.5136 4.08567H58.3886C58.328 3.73719 58.2163 3.42847 58.0534 3.15953C57.8905 2.88681 57.6879 2.65575 57.4454 2.46635C57.203 2.27696 56.9265 2.13491 56.6159 2.04022C56.3091 1.94173 55.9776 1.89249 55.6216 1.89249C54.989 1.89249 54.4284 2.05158 53.9398 2.36976C53.4511 2.68416 53.0685 3.14628 52.792 3.75613C52.5155 4.36219 52.3773 5.10272 52.3773 5.97772C52.3773 6.86787 52.5155 7.61787 52.792 8.22772C53.0723 8.83378 53.4549 9.29211 53.9398 9.60272C54.4284 9.90953 54.9871 10.0629 55.6159 10.0629C55.9644 10.0629 56.2901 10.0175 56.5932 9.92658C56.9 9.83188 57.1746 9.69363 57.417 9.51181C57.6632 9.32999 57.8697 9.1065 58.0363 8.84135C58.2068 8.5762 58.3242 8.27317 58.3886 7.93226L60.5136 7.94363C60.4341 8.49666 60.2617 9.0156 59.9966 9.50044C59.7352 9.98529 59.3924 10.4133 58.9682 10.7845C58.5439 11.152 58.0477 11.4398 57.4795 11.6482C56.9113 11.8527 56.2807 11.955 55.5875 11.955C54.5648 11.955 53.6519 11.7182 52.8488 11.2448C52.0458 10.7713 51.4132 10.0876 50.9511 9.19363C50.489 8.29969 50.2579 7.22772 50.2579 5.97772C50.2579 4.72393 50.4909 3.65196 50.9568 2.76181C51.4227 1.86787 52.0572 1.18416 52.8602 0.71067C53.6632 0.237186 54.5723 0.000443459 55.5875 0.000443459C56.2352 0.000443459 56.8375 0.0913525 57.3943 0.27317C57.9511 0.454989 58.4473 0.722035 58.8829 1.07431C59.3185 1.42279 59.6765 1.85082 59.9568 2.3584C60.2409 2.86219 60.4265 3.43794 60.5136 4.08567ZM63.564 11.7959V0.159534H71.1322V1.92658H65.672V5.08567H70.7402V6.85272H65.672V10.0289H71.1777V11.7959H63.564ZM83.9653 0.159534V11.7959H82.0903L76.6073 3.86976H76.5107V11.7959H74.4028V0.159534H76.2891L81.7664 8.09135H81.8687V0.159534H83.9653ZM86.8708 1.92658V0.159534H96.1549V1.92658H92.5583V11.7959H90.4674V1.92658H86.8708ZM99.0646 11.7959V0.159534H106.633V1.92658H101.173V5.08567H106.241V6.85272H101.173V10.0289H106.678V11.7959H99.0646ZM109.903 11.7959V0.159534H114.267C115.161 0.159534 115.911 0.314837 116.517 0.625443C117.127 0.936049 117.587 1.37166 117.898 1.93226C118.212 2.48908 118.369 3.1387 118.369 3.88113C118.369 4.62734 118.21 5.27506 117.892 5.82431C117.578 6.36976 117.114 6.79211 116.5 7.09135C115.886 7.38681 115.133 7.53453 114.239 7.53453H111.131V5.78453H113.955C114.477 5.78453 114.905 5.71256 115.239 5.56863C115.572 5.4209 115.818 5.20688 115.977 4.92658C116.14 4.64249 116.222 4.294 116.222 3.88113C116.222 3.46825 116.14 3.11597 115.977 2.82431C115.814 2.52885 115.566 2.30537 115.233 2.15385C114.9 1.99855 114.47 1.9209 113.943 1.9209H112.011V11.7959H109.903ZM115.915 6.52317L118.795 11.7959H116.443L113.614 6.52317H115.915Z"
                  fill="#DC2626"
                />
              </svg>
            </div>
          ) : (
            <span className="nexgn-hero-label">Help Center</span>
          )}
          <h1 className="nexgn-hero-title">
            Find answers.
            <br />
            Get things done.
          </h1>
          <p className="nexgn-hero-subtitle">
            Everything you need to know about Nexgn's platform, features,
            security, billing, and more.
          </p>

          <div className="nexgn-hero-search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="8"
                stroke={dark ? "white" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke={dark ? "white" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="nexgn-hero-search__text">
              Search for answers ...
            </span>
          </div>
        </div>
      </div>

      {/* ── FAQ + LOWER SECTION BG ── */}
      {dark && (
        <div className="nexgn-dark-lower-bg">
          <img src={darkBgImg} alt="" aria-hidden="true" />
        </div>
      )}

      {/* ── FAQ SECTION ── */}
      <section className="nexgn-faq">
        <aside className="nexgn-faq__sidebar">
          <p className="nexgn-faq__sidebar-label">Categories</p>
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`nexgn-cat-item${activeCategory === i ? " nexgn-cat-item--active" : ""}`}
              onClick={() => setActiveCategory(i)}
            >
              <div className="nexgn-cat-icon">{cat.icon}</div>
              <span className="nexgn-cat-name">
                {i + 1}. {cat.name}
              </span>
            </div>
          ))}
        </aside>

        <div className="nexgn-faq__content">
          {faqs.map((section, si) => (
            <div
              key={si}
              className={`nexgn-acc-section${openSection === si ? " nexgn-acc-section--open" : ""}`}
            >
              <div
                className="nexgn-acc-header"
                onClick={() => setOpenSection(openSection === si ? null : si)}
              >
                <div className="nexgn-acc-header-left">
                  <span className="nexgn-acc-num">{si + 1}</span>
                  <span className="nexgn-acc-title">{section.title}</span>
                </div>
                <svg
                  className="nexgn-acc-chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </div>
              {openSection === si && (
                <div className="nexgn-acc-body">
                  {section.questions.map((qa, qi) => {
                    const key = `${si}-${qi}`;
                    return (
                      <div
                        key={qi}
                        className={`nexgn-acc-qa${openQuestion === key ? " nexgn-acc-qa--open" : ""}`}
                      >
                        <div
                          className="nexgn-acc-q"
                          onClick={() =>
                            setOpenQuestion(openQuestion === key ? null : key)
                          }
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                          <span className="nexgn-acc-q-text">{qa.q}</span>
                        </div>
                        {openQuestion === key && (
                          <p className="nexgn-acc-answer">{qa.a}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── STILL NEED HELP BANNER ── */}
      <section className="nexgn-help-banner">
        <div className="nexgn-help-banner__image">
          <img src={dark ? darkHeadsetImg : headsetImg} alt="Support headset" />
        </div>
        <div className="nexgn-help-banner__body">
          <h2 className="nexgn-help-banner__title">Still need help?</h2>
          <p className="nexgn-help-banner__desc">
            Our team is here for you. Reach out and we'll get back to you as
            soon as possible.
          </p>
          <div className="nexgn-help-banner__actions">
            <button className="nexgn-help-btn nexgn-help-btn--primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Contact Support
            </button>
            <button className="nexgn-help-btn nexgn-help-btn--secondary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Visit Help Center
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <FooterSection dark={dark} />
      </div>
    </div>
  );
}
