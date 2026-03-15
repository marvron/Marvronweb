import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; // <-- import the Header component
import DownloadModal from "../components/DownloadModal";

const About = () => {
  // State for modal and drawer (same as Home)
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const scrollToContact = () => {
    setShowDrawer(false);
    setTimeout(
      () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
      100,
    );
  };

  const openModal = () => {
    setShowDrawer(false);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <div className="page-shell">
      <DownloadModal isOpen={showModal} onClose={closeModal} />

      {/* ══════ MOBILE NAV DRAWER (copied from Home) ══════ */}
      {showDrawer && (
        <>
          <div
            className="drawer-overlay"
            onClick={() => setShowDrawer(false)}
          />
          <div className="nav-drawer">
            <div className="drawer-header">
              <Link
                to="/"
                onClick={() => setShowDrawer(false)}
                className="drawer-logo-link"
              >
                <img
                  src="/images/Marvron_logo.png"
                  alt="Marvron"
                  style={{ height: "40px" }}
                />
              </Link>
              <button
                onClick={() => setShowDrawer(false)}
                className="drawer-close-btn"
              >
                ✕
              </button>
            </div>
            <Link
              to="/"
              className="drawer-link"
              onClick={() => setShowDrawer(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="drawer-link"
              onClick={() => setShowDrawer(false)}
            >
              About
            </Link>
            <Link
              to="/product-services"
              className="drawer-link"
              onClick={() => setShowDrawer(false)}
            >
              Product Service
            </Link>
            <button onClick={openModal} className="drawer-contact-btn">
              Contact Us
            </button>
            <button onClick={openModal} className="drawer-cta-btn">
              Get Started
            </button>
            <div className="drawer-app-wrap">
              <p className="drawer-app-caption">Download the App</p>
              <div className="drawer-app-list">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noreferrer"
                  className="app-btn"
                >
                  <img
                    src="/images/playstore_image.png"
                    alt="Google Play"
                    className="app-btn-icon"
                  />
                  <div>
                    <span className="app-btn-sub">GET IT ON</span>
                    <span className="app-btn-main">Google Play</span>
                  </div>
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer"
                  className="app-btn"
                >
                  <img
                    src="/images/apple_image.png"
                    alt="App Store"
                    className="app-btn-icon"
                  />
                  <div>
                    <span className="app-btn-sub">DOWNLOAD ON THE</span>
                    <span className="app-btn-main">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ══════ HEADER — now using the reusable component ══════ */}
      <Header
        openModal={openModal}
        onHamburgerClick={() => setShowDrawer(true)}
        scrollToContact={scrollToContact}
      />

      {/* ══════════════════════════════════════════
          PAGE HERO BANNER (unchanged)
      ══════════════════════════════════════════ */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0a1a6b 0%, #060e3f 60%, #0d1a4a 100%)",
          padding: "56px 40px 48px",
          textAlign: "center",
          borderBottom: "1px solid rgba(249,115,22,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            width: "400px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <p
          style={{
            color: "#f97316",
            fontWeight: "600",
            fontSize: "0.85rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          WHO WE ARE
        </p>
        <h1
          style={{
            color: "#fff",
            fontWeight: "800",
            fontSize: "clamp(1.8rem,4vw,2.8rem)",
            marginBottom: "16px",
            lineHeight: 1.15,
          }}
        >
          About Marvron
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1rem",
            maxWidth: "520px",
            margin: "0 auto",
          }}
        >
          Energy · Technology · Style — powering progress across Africa and
          beyond.
        </p>
      </div>

      {/* ══════════════════════════════════════════
          MAIN CONTENT (unchanged)
      ══════════════════════════════════════════ */}
      <main
        style={{ padding: "60px 40px", maxWidth: "960px", margin: "0 auto" }}
      >
        {/* Intro */}
        <div style={{ marginBottom: "56px" }}>
          <SectionLabel>Our Story</SectionLabel>
          <p style={bodyText}>
            Marvron is a forward-thinking enterprise committed to delivering
            excellence across multiple industries including Oil &amp; Gas,
            Energy, Technology, and Fashion. Built on a foundation of
            innovation, reliability, and entrepreneurial vision, Marvron aims to
            create value by connecting essential industries that power modern
            life.
          </p>
          <p style={bodyText}>
            In the oil and gas sector, Marvron focuses on supporting energy
            solutions that drive economic growth and industrial development. We
            are dedicated to providing reliable services and opportunities
            within the energy market while maintaining high standards of
            professionalism and efficiency.
          </p>
          <p style={bodyText}>
            Through our technology and gadget division, Marvron brings
            cutting-edge devices and smart solutions closer to people and
            businesses. We believe technology should improve everyday life,
            increase productivity, and make modern tools accessible to everyone.
          </p>
          <p style={bodyText}>
            Marvron also embraces fashion and lifestyle, delivering products
            that combine quality, style, and confidence. Our fashion segment is
            designed for individuals who value modern trends, comfort, and
            personal expression.
          </p>
          <p style={bodyText}>
            At Marvron, our vision is to build a diversified enterprise that
            bridges energy, innovation, and lifestyle, creating sustainable
            opportunities and empowering communities. We strive to continuously
            grow, adapt to global trends, and provide products and services that
            meet the evolving needs of our customers.
          </p>
        </div>

        {/* Mission / Vision cards */}
        <div className="mission-cards-OD">
          <InfoCard title="Our Mission" accent="#f97316">
            To deliver reliable energy solutions, innovative technology, and
            quality lifestyle products while maintaining excellence, integrity,
            and customer satisfaction.
          </InfoCard>
          <InfoCard title="Our Vision" accent="#f59e0b">
            To become a trusted global enterprise recognized for connecting
            energy, technology, and lifestyle industries through innovation and
            entrepreneurial leadership.
          </InfoCard>
        </div>

        {/* Core values */}
        <div style={{ margin: "50px 0px" }}>
          <SectionLabel>Core Values</SectionLabel>
          <div className="core-values-OD">
            {[
              {
                icon: "💡",
                label: "Innovation",
                desc: "Continuously improving and embracing new ideas.",
              },
              {
                icon: "✅",
                label: "Authenticity",
                desc: "Delivering authentic products and services.",
              },
              {
                icon: "🤝",
                label: "Integrity",
                desc: "Operating with honesty and transparency.",
              },
              {
                icon: "⭐",
                label: "Quality",
                desc: "Products and services that meet high standards.",
              },
              {
                icon: "🎯",
                label: "Customer Focus",
                desc: "Putting customer satisfaction at the centre.",
              },
              {
                icon: "📈",
                label: "Growth",
                desc: "Building sustainable opportunities across industries.",
              },
            ].map((v) => (
              <div
                key={v.label}
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "24px 20px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.8rem", marginBottom: "10px" }}>
                  {v.icon}
                </div>
                <p
                  style={{
                    color: "#f97316",
                    fontWeight: "700",
                    fontSize: "0.95rem",
                    marginBottom: "8px",
                  }}
                >
                  {v.label}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: "0.85rem",
                    lineHeight: 1.55,
                  }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", paddingTop: "8px" }}>
          <button
            style={{
              background: "linear-gradient(135deg,#f97316,#ea580c)",
              color: "#fff",
              border: "none",
              borderRadius: "28px",
              padding: "14px 44px",
              fontWeight: "700",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 4px 24px rgba(249,115,22,0.45)",
              letterSpacing: "0.02em",
            }}
            onClick={openModal}
          >
            Explore Business
          </button>
        </div>
      </main>

      {/* Footer (unchanged) */}
      <footer
        id="contact"
        style={{
          backgroundColor: "#050c35",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "40px 40px 24px",
        }}
      >
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "36px",
          }}
        >
          <Link
            to="/about"
            style={{
              color: "#fff",
              textDecoration: "underline",
              fontSize: "0.92rem",
            }}
          >
            About
          </Link>
          <Link
            to="/product-services"
            style={{
              color: "#fff",
              textDecoration: "underline",
              fontSize: "0.92rem",
            }}
          >
            Product Service
          </Link>
          <span
            onClick={openModal}
            style={{
              color: "#fff",
              textDecoration: "underline",
              fontSize: "0.92rem",
            }}
          >
            Contact Us
          </span>
        </nav>
        <div
          style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "0.85rem",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "18px",
          }}
        >
          @2026 Marvron international limited &nbsp;&nbsp; All right reserved
        </div>
      </footer>
    </div>
  );
};

/* ── Small reusable helpers (unchanged) ── */
const bodyText = {
  color: "rgba(255,255,255,0.78)",
  fontSize: "0.97rem",
  lineHeight: 1.8,
  marginBottom: "18px",
};

const SectionLabel = ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "14px",
      marginBottom: "24px",
    }}
  >
    <div
      style={{
        width: "4px",
        height: "28px",
        borderRadius: "2px",
        background: "linear-gradient(#f97316,#ea580c)",
      }}
    />
    <h2
      style={{
        color: "#fff",
        fontWeight: "700",
        fontSize: "1.4rem",
        margin: 0,
      }}
    >
      {children}
    </h2>
  </div>
);

const InfoCard = ({ title, accent, children }) => (
  <div
    style={{
      backgroundColor: "rgba(255,255,255,0.04)",
      border: `1px solid ${accent}44`,
      borderTop: `3px solid ${accent}`,
      borderRadius: "10px",
      padding: "28px 24px",
      boxShadow: `0 0 24px ${accent}18`,
    }}
  >
    <h3
      style={{
        color: accent,
        fontWeight: "700",
        fontSize: "1.15rem",
        marginBottom: "14px",
      }}
    >
      {title}
    </h3>
    <p
      style={{
        color: "rgba(255,255,255,0.75)",
        fontSize: "0.95rem",
        lineHeight: 1.75,
        margin: 0,
      }}
    >
      {children}
    </p>
  </div>
);

export default About;
