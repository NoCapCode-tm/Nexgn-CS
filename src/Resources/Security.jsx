import React, { useState, useEffect } from "react";
import "./Security.css";
import ribbonBg from "../assets/privacy-bg-ribbon.png";
import ribbonBgDark from "../assets/helpcenter-dark-ribbon.png";
import heroImage from "../assets/trust-hero.png";
import heroImageDark from "../assets/security-dark.png";

import FooterSection from "../FooterSection";

export default function Security() {
  const [dark, setDark] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
  }, [dark]);
  return (
    <div className="trust-page-wrapper">
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
      </nav>
      {/* ── RIBBON ── */}
      <img
        src={dark ? ribbonBgDark : ribbonBg}
        alt=""
        className="nexgn-hero-ribbon"
        aria-hidden="true"
      />

      {/* ── HELP CENTER LABEL ── */}
      <span className="trust-help-center-label">Security</span>
      {/* ── MAIN HEADING ── */}
      <h1 className="trust-main-heading">Nexgn Trust &amp; Security Centre</h1>

      {/* ── HERO IMAGE ── */}
      <img
        src={dark ? heroImageDark : heroImage}
        alt="Nexgn Trust and Security"
        className="trust-hero-image"
      />

      {/* ── INFRA CARD GROUP (beside Infrastructure section at top: 800px) ── */}
      <div className="trust-infra-card-group">
        <div className="trust-card-row">
          <div className="trust-card-dot"></div>
          <p className="trust-card-text">
            <span className="trust-card-bold">
              Edge Defence &amp; DDoS Mitigation :
            </span>{" "}
            Our network periphery is continuously monitored and protected by an
            automated, multi-layered HTTP and network-layer Distributed Denial
            of Service (DDoS) mitigation ruleset. Malicious traffic and
            volumetric floods are intercepted at our global edge before
            impacting core signing services.
          </p>
        </div>
        <div className="trust-card-row">
          <div className="trust-card-dot"></div>
          <p className="trust-card-text">
            <span className="trust-card-bold">Zero-Trust Architecture :</span>{" "}
            Network access inside Nexgn boundaries is strictly governed by the
            Principle of Least Privilege. Mutual Transport Layer Security (mTLS)
            and cryptographically enforced client certificates protect
            server-to-server and client-to-API integrations.
          </p>
        </div>
        <div className="trust-card-row">
          <div className="trust-card-dot"></div>
          <p className="trust-card-text">
            <span className="trust-card-bold">
              Automated Threat &amp; Bot Intelligence :
            </span>{" "}
            Automated web assets and scrapers are analyzed via advanced Bot
            Fight configurations, keeping your infrastructure clean and ensuring
            that only authorized human signers and verified API integrations
            interact with your documents.
          </p>
        </div>
      </div>

      {/* ── APP SECURITY CARD GROUP (beside Application and Product Security at top: 1827px) ── */}
      <div className="trust-app-card-group">
        <div className="trust-card-row">
          <div className="trust-card-dot"></div>
          <p className="trust-card-text">
            <span className="trust-card-bold">
              Continuous Script Monitoring:
            </span>{" "}
            All production scripts and payloads are continuously scanned for
            unauthorized third-party modifications, shielding end-users from
            client-side injection during the signing process.
          </p>
        </div>
        <div className="trust-card-row">
          <div className="trust-card-dot"></div>
          <p className="trust-card-text">
            <span className="trust-card-bold">Secure Dependencies:</span>{" "}
            External elements are automatically checked against global databases
            of known exploits. Any insecure library is intercepted and swapped
            out for fully patched counterparts.
          </p>
        </div>
        <div className="trust-card-row">
          <div className="trust-card-dot"></div>
          <p className="trust-card-text">
            <span className="trust-card-bold">Credential Integrity:</span>{" "}
            Automated credential stuffing protections cross-reference
            authentication payloads with globally leaked credential registries
            to prevent account takeovers.
          </p>
        </div>
      </div>

      {/* ── DOC INTEGRITY CARD GROUP (beside Document Integrity section at top: 1349px) ── */}
      <div className="trust-doc-card-group">
        <div className="trust-card-row">
          <div className="trust-card-dot"></div>
          <p className="trust-card-text">
            <span className="trust-card-bold">
              Cryptographic Document Hashing:
            </span>{" "}
            Every document executed on Nexgn is secured with cryptographic
            hashing. This creates a tamper-evident audit trail, mathematically
            guaranteeing that a document has not been altered since the moment
            the digital signature was applied.
          </p>
        </div>
        <div className="trust-card-row">
          <div className="trust-card-dot"></div>
          <p className="trust-card-text">
            <span className="trust-card-bold">
              Encryption in Transit &amp; At Rest:
            </span>{" "}
            All communication with nexgn.cloud endpoints is strictly enforced
            over HTTPS utilizing TLS 1.3. Your documents and signature data are
            encrypted both in transit and at rest using modern cryptographic
            standards to prevent interception.
          </p>
        </div>
        <div className="trust-card-row">
          <div className="trust-card-dot"></div>
          <p className="trust-card-text">
            <span className="trust-card-bold">
              Global E-Signature Compliance:
            </span>{" "}
            Our architecture is designed to support global regulatory
            frameworks, ensuring digital signatures captured on our platform
            carry legal weight and compliance across international borders.
          </p>
        </div>
        <div className="trust-card-row">
          <div className="trust-card-dot"></div>
          <p className="trust-card-text">
            <span className="trust-card-bold">
              DNS &amp; Email Security Frameworks:
            </span>{" "}
            We strictly enforce domain spoofing protections using SPF, DKIM,
            DMARC, and DNSSEC. This ensures that signature request emails sent
            from Nexgn are verified, intercepting phishing variants trying to
            mimic our brand or intercept your workflows.
          </p>
        </div>
      </div>

      {/* ── OUR COMMITMENT TO YOU CARD ── */}
      <div className="trust-commitment-card">
        <div className="trust-commitment-left">
          <div className="trust-commitment-icon-box">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 13.0004C20 18.0004 16.5 20.5005 12.34 21.9505C12.1222 22.0243 11.8855 22.0207 11.67 21.9405C7.5 20.5005 4 18.0004 4 13.0004V6.00045C4 5.73523 4.10536 5.48088 4.29289 5.29334C4.48043 5.10581 4.73478 5.00045 5 5.00045C7 5.00045 9.5 3.80045 11.24 2.28045C11.4519 2.09945 11.7214 2 12 2C12.2786 2 12.5481 2.09945 12.76 2.28045C14.51 3.81045 17 5.00045 19 5.00045C19.2652 5.00045 19.5196 5.10581 19.7071 5.29334C19.8946 5.48088 20 5.73523 20 6.00045V13.0004Z"
                stroke="#D70506"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="#D70506"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="trust-commitment-text">
            <h3 className="trust-commitment-title">Our Commitment to You</h3>
            <p className="trust-commitment-body">
              If you operate in good faith, adhere to responsible disclosure
              principles, and allow us a reasonable window to remediate the
              vulnerability before publishing details externally, Nexgn commits
              to:
            </p>
          </div>
        </div>
        <div className="trust-commitment-columns">
          <div className="trust-commitment-col">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H12.1C11.7655 6.00328 11.4355 5.92261 11.1403 5.76538C10.8451 5.60815 10.594 5.37938 10.41 5.1L9.6 3.9C9.41789 3.62347 9.16997 3.39648 8.8785 3.2394C8.58702 3.08231 8.26111 3.00005 7.93 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20Z"
                stroke="#D70506"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="trust-commitment-col-title">Safe Harbor</p>
            <p className="trust-commitment-col-body">
              We will not initiate legal action or request law enforcement
              investigations against you.
            </p>
          </div>
          <div className="trust-commitment-col">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6"
                stroke="#D70506"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="#D70506"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                stroke="#D70506"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="trust-commitment-col-title">Timely Response</p>
            <p className="trust-commitment-col-body">
              Acknowledge your submission within 48 business hours and provide
              ongoing updates until remediation is complete.
            </p>
          </div>
          <div className="trust-commitment-col">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 21H21"
                stroke="#D70506"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.1739 6.81238C21.7026 6.2838 21.9997 5.56685 21.9998 4.81923C21.9999 4.07162 21.703 3.35459 21.1744 2.82588C20.6459 2.29717 19.9289 2.00009 19.1813 2C18.4337 1.99991 17.7166 2.2968 17.1879 2.82538L3.84193 16.1744C3.60975 16.4059 3.43805 16.6909 3.34193 17.0044L2.02093 21.3564C1.99509 21.4429 1.99314 21.5347 2.01529 21.6222C2.03743 21.7097 2.08285 21.7896 2.14673 21.8534C2.21061 21.9172 2.29055 21.9624 2.37809 21.9845C2.46563 22.0065 2.55749 22.0044 2.64393 21.9784L6.99693 20.6584C7.3101 20.5631 7.59511 20.3925 7.82693 20.1614L21.1739 6.81238Z"
                stroke="#D70506"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="trust-commitment-col-title">Recognition</p>
            <p className="trust-commitment-col-body">
              Document your contribution in our security researcher
              acknowledgements archive (if requested).
            </p>
          </div>
        </div>
      </div>

      {/* ── PRIVACY, COMPLIANCE, AND TECHNICAL CONTACTS SECTION ── */}
      <h3 className="trust-privacy-title">
        Privacy, Compliance, and Technical Contacts
      </h3>
      <p className="trust-privacy-desc">
        Nexgn operates under strict data minimization standards, ensuring
        structural transparency across all borders.
      </p>

      {/* ── CONTACTS TABLE ── */}
      <div className="trust-contacts-table">
        <div className="trust-contacts-row trust-contacts-header">
          <div className="trust-contacts-col trust-contacts-col-1">
            Target Resource
          </div>
          <div className="trust-contacts-col trust-contacts-col-2">
            Designated System / Contact Alias
          </div>
          <div className="trust-contacts-col trust-contacts-col-3">
            Compliance Focus
          </div>
        </div>
        <div className="trust-contacts-row">
          <div className="trust-contacts-col trust-contacts-col-1">
            Data Privacy &amp; GDPR
          </div>
          <div className="trust-contacts-col trust-contacts-col-2">
            <a
              href="mailto:privacy@nexgn.cloud"
              className="trust-contacts-email"
            >
              privacy@nexgn.cloud
            </a>
          </div>
          <div className="trust-contacts-col trust-contacts-col-3">
            Data subject access requests, encryption audits, compliance
            inquiries.
          </div>
        </div>
        <div className="trust-contacts-row">
          <div className="trust-contacts-col trust-contacts-col-1">
            System Security Operations
          </div>
          <div className="trust-contacts-col trust-contacts-col-2">
            <a
              href="mailto:security@nexgn.cloud"
              className="trust-contacts-email"
            >
              security@nexgn.cloud
            </a>
          </div>
          <div className="trust-contacts-col trust-contacts-col-3">
            Active threat intelligence, breach reports, vulnerability
            disclosures
          </div>
        </div>
        <div className="trust-contacts-row">
          <div className="trust-contacts-col trust-contacts-col-1">
            System Infrastructure
          </div>
          <div className="trust-contacts-col trust-contacts-col-2">
            <a
              href="mailto:postmaster@nexgn.cloud"
              className="trust-contacts-email"
            >
              postmaster@nexgn.cloud
            </a>
          </div>
          <div className="trust-contacts-col trust-contacts-col-3">
            Core SMTP relay configuration, delivery issues, network handshakes
          </div>
        </div>
        <div className="trust-contacts-row trust-contacts-row-last">
          <div className="trust-contacts-col trust-contacts-col-1">
            Abuse &amp; Spam Mitigation
          </div>
          <div className="trust-contacts-col trust-contacts-col-2">
            <a href="mailto:abuse@nexgn.cloud" className="trust-contacts-email">
              abuse@nexgn.cloud
            </a>
          </div>
          <div className="trust-contacts-col trust-contacts-col-3">
            Domain reputation management, spoof reporting, network compliance
          </div>
        </div>
        <div className="trust-contacts-divider trust-contacts-divider-1"></div>
        <div className="trust-contacts-divider trust-contacts-divider-2"></div>
      </div>

      {/* ── VDP REPORTING CARD (beside VDP section at top: 2142px) ── */}
      <div className="trust-vdp-reporting-card">
        <div className="trust-vdp-card-icon">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.6898 26.2507L20.0231 5.83407C19.7687 5.3852 19.3998 5.01184 18.9541 4.75208C18.5083 4.49233 18.0016 4.35547 17.4856 4.35547C16.9697 4.35547 16.463 4.49233 16.0172 4.75208C15.5714 5.01184 15.2025 5.3852 14.9481 5.83407L3.28145 26.2507C3.02432 26.6961 2.88949 27.2014 2.89063 27.7156C2.89177 28.2299 3.02884 28.7346 3.28794 29.1788C3.54704 29.623 3.91896 29.9908 4.36601 30.2449C4.81306 30.499 5.31934 30.6304 5.83354 30.6257H29.1669C29.6786 30.6252 30.1812 30.4901 30.6242 30.2339C31.0671 29.9777 31.4349 29.6094 31.6905 29.1661C31.9462 28.7228 32.0807 28.22 32.0805 27.7083C32.0804 27.1966 31.9457 26.6939 31.6898 26.2507Z"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 13.125V18.9583"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 24.791H17.5138"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="trust-vdp-card-content">
          <p className="trust-vdp-card-title">Reporting Guidelines</p>
          <p className="trust-vdp-card-body">
            If you believe you have discovered a vulnerability, configuration
            flaw, or exposed system within the Nexgn domain ecosystem, please
            report it immediately through our prioritized channel.
          </p>
          <p className="trust-vdp-card-email">
            Primary Security Inbox: security@nexgn.cloud
          </p>
          <p className="trust-vdp-card-note">
            When reporting, please include clear, reproducible steps,
            proof-of-concept material, and the potential impact of the flaw.
          </p>
        </div>
      </div>

      {/* ── VULNERABILITY DISCLOSURE POLICY SECTION ── */}
      <div className="trust-vdp-group">
        <div className="trust-icon-box">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20V11"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 7C15.0609 7 16.0783 7.42143 16.8284 8.17157C17.5786 8.92172 18 9.93913 18 11V14C18 15.5913 17.3679 17.1174 16.2426 18.2426C15.1174 19.3679 13.5913 20 12 20C10.4087 20 8.88258 19.3679 7.75736 18.2426C6.63214 17.1174 6 15.5913 6 14V11C6 9.93913 6.42143 8.92172 7.17157 8.17157C7.92172 7.42143 8.93913 7 10 7H14Z"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.1172 3.88L15.9972 2"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9975 21C20.9987 19.9712 20.6034 18.9816 19.8939 18.2367C19.1843 17.4918 18.2151 17.0489 17.1875 17"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.0031 5C21.002 5.98215 20.6396 6.92956 19.9849 7.66169C19.3302 8.39383 18.429 8.85951 17.4531 8.97"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 13H18"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 21C2.99884 19.9712 3.39409 18.9816 4.10362 18.2367C4.81315 17.4918 5.78241 17.0489 6.81 17"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 5C3.00113 5.98215 3.36357 6.92956 4.01825 7.66169C4.67293 8.39383 5.57408 8.85951 6.55 8.97"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 13H2"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 2L9.88 3.88"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 7.13V6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6V7.13"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="trust-section-text">
          <h3 className="trust-section-title">
            Vulnerability Disclosure Policy (VDP)
          </h3>
          <p className="trust-section-desc">
            Nexgn recognizes the vital role independent security researchers
            play in keeping the internet ecosystem secure. We welcome
            responsible disclosures regarding any security flaws found within
            our boundaries.
          </p>
        </div>
      </div>

      {/* ── APPLICATION AND PRODUCT SECURITY SECTION ── */}
      <div className="trust-app-security-group">
        <div className="trust-icon-box">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 9V10.258"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 3V8.46"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 9.118V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H10.75"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 17.4991C22 19.9981 20.25 21.2481 18.17 21.9731C18.0611 22.01 17.9428 22.0082 17.835 21.9681C15.75 21.2481 14 19.9981 14 17.4981V13.9991C14.0003 13.8666 14.0531 13.7397 14.1468 13.6462C14.2405 13.5526 14.3676 13.5001 14.5 13.5001C15.5 13.5001 16.75 12.9001 17.62 12.1401C17.7271 12.0522 17.8613 12.0041 17.9998 12.0039C18.1384 12.0037 18.2727 12.0515 18.38 12.1391C19.255 12.9041 20.5 13.4991 21.5 13.4991C21.6326 13.4991 21.7598 13.5518 21.8536 13.6455C21.9473 13.7393 22 13.8665 22 13.9991V17.4991Z"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 15H10"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 9H15.142"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 15V21"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 3V9"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="trust-section-text">
          <h3 className="trust-section-title">
            Application and Product Security
          </h3>
          <p className="trust-section-desc">
            We employ a continuous security lifecycle to catch vulnerabilities
            long before code reaches a production environment.
          </p>
        </div>
      </div>

      {/* ── DOCUMENT INTEGRITY SECTION ── */}
      <div className="trust-doc-integrity-group">
        <div className="trust-icon-box">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="trust-section-text">
          <h3 className="trust-section-title">
            Document Integrity, Data Protection, and Encryption
          </h3>
          <p className="trust-section-desc">
            Data privacy and contract integrity are absolute priorities. Nexgn
            enforces strict cryptographic protocols to ensure that every signed
            document is legally binding, private, and tamper-evident.
          </p>
        </div>
      </div>

      {/* ── INFRA SECTION ── */}
      <div className="trust-infra-group">
        <div className="trust-infra-icon-box">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20C17.5228 20 22 15.5228 22 10C22 4.47715 17.5228 0 12 0C6.47715 0 2 4.47715 2 10C2 15.5228 6.47715 20 12 20Z"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10C8 6.27670 9.43220 2.69615 12 0C14.5678 2.69615 16 6.27670 16 10C16 13.7233 14.5678 17.3038 12 20C9.43220 17.3038 8 13.7233 8 10Z"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 10H22"
              stroke="#D70506"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="trust-infra-text-group">
          <h3 className="trust-infra-title">
            Infrastructure and Network Security
          </h3>
          <p className="trust-infra-desc">
            Nexgn infrastructure relies on isolated, zero-trust network
            architectures designed to withstand sophisticated modern threats
            while maintaining globally optimized performance for seamless
            document execution.
          </p>
        </div>
      </div>

      {/* ── BODY TEXT ── */}
      <p className="trust-body-text">
        At Nexgn, trust is our foundational infrastructure. As a next-generation
        cloud infrastructure provider engineered specifically for digital
        document signing and secure workflow automation, security is not an
        afterthought or an isolated feature. It is architected into every line
        of code, network configuration, and system deployment.
      </p>
      <p className="trust-body-text-2">
        This document outlines our comprehensive defense-in-depth posture,
        safeguarding your legal documents, corporate data, and operational
        integrity across the globe.
      </p>
      {/* ── FOOTER ── */}
      <div
        className="trust-footer-wrapper"
        style={{ position: "relative", zIndex: 2 }}
      >
        <FooterSection dark={dark} />
      </div>
    </div>
  );
}
