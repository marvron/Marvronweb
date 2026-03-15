import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header"; // <-- import the Header component
import DownloadModal from "../components/DownloadModal";

const ProductServices = () => {
  const [activeTab, setActiveTab] = useState("energy");
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

  const tabs = [
    { id: "energy", label: "Energy & Industrial" },
    { id: "tech", label: "Technology & Gadgets" },
    { id: "fashion", label: "Fashion & Lifestyle" },
    { id: "authenticity", label: "Product Authenticity" },
    { id: "customer", label: "Customer Commitment" },
  ];

  const services = {
    energy: {
      icon: "🔥",
      heading: "Oil & Gas Solutions",
      glowRgb: "249,115,22",
      color: "#f97316",
      intro:
        "Marvron provides energy supply solutions within the oil and gas sector, supporting businesses and organizations that depend on energy for growth and operations. Our goal is to contribute to a stable and efficient energy ecosystem.",
      subHeading: "Our Services Include",
      items: [
        "Supply of petroleum-related products",
        "Energy distribution support",
        "Energy consulting and sourcing",
        "Partnerships within the oil and gas supply chain",
      ],
      outro:
        "We work with trusted partners to ensure that our energy solutions meet industry standards and support reliable business operations.",
      extra: {
        heading: "Energy & Industrial Support",
        body: "Energy is the backbone of economic development. Marvron supports industries with services and products that help improve efficiency and operational reliability.",
        items: [
          "Energy-related equipment sourcing",
          "Industrial support services",
          "Energy logistics and distribution coordination",
          "Business partnerships within the energy ecosystem",
        ],
        outro:
          "Our energy services are designed to help organizations maintain productivity while adapting to the changing global energy landscape.",
      },
    },
    tech: {
      icon: "💻",
      heading: "Technology & Gadgets",
      glowRgb: "99,179,237",
      color: "#63b3ed",
      intro:
        "Marvron provides modern technology devices and gadgets that help individuals and businesses stay connected and productive in the digital age.",
      subHeading: "Our Technology Products",
      items: [
        "Smartphones and mobile devices",
        "Laptops and desktop computers",
        "Smart gadgets and accessories",
        "Refurbished and brand-new electronics",
        "Office technology equipment",
      ],
      outro:
        "We focus on delivering high-quality, reliable technology products that meet the needs of professionals, students, and everyday users.",
    },
    fashion: {
      icon: "👗",
      heading: "Fashion & Lifestyle Products",
      glowRgb: "236,72,153",
      color: "#ec4899",
      intro:
        "Marvron also operates within the fashion and lifestyle industry, offering stylish and high-quality products designed for comfort, confidence, and modern trends.",
      subHeading: "Our Fashion Products",
      items: [
        "Clothing and apparel",
        "Fashion accessories",
        "Lifestyle items",
        "Trend-focused fashion collections",
      ],
      outro:
        "Our fashion segment combines style, quality, and affordability, ensuring customers enjoy products that reflect modern lifestyles.",
    },
    authenticity: {
      icon: "✅",
      heading: "Product Authenticity & Verification",
      glowRgb: "52,211,153",
      color: "#34d399",
      intro:
        "At Marvron, every product we supply is backed by our commitment to quality, authenticity, and customer trust. We ensure all products are verified before reaching our customers.",
      subHeading: "Our Verification Process",
      items: [
        "Quality inspection at source",
        "Authentic supplier partnerships",
        "Product tracking and traceability",
        "Customer verification guarantee",
      ],
      outro:
        "We are committed to ensuring every product that reaches our customers meets the highest standards of quality and authenticity.",
    },
    customer: {
      icon: "🎯",
      heading: "Customer Commitment",
      glowRgb: "167,139,250",
      color: "#a78bfa",
      intro:
        "We are committed to transparency, authenticity, and long-term relationships. Our customer-focused approach ensures reliable support, clear communication, and trusted service across all categories.",
      subHeading: "Our Commitments",
      items: [
        "Transparent pricing and communication",
        "Dedicated after-sales support",
        "Fast and reliable delivery",
        "Long-term customer relationships",
        "Satisfaction guarantee on all products",
      ],
      outro:
        "Our customers are at the heart of everything we do. We strive to exceed expectations at every step of the journey.",
    },
  };

  const active = services[activeTab];

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
            width: "500px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 70%)",
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
          WHAT WE OFFER
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
          Our Products &amp; Services
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1rem",
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          From energy solutions to cutting-edge technology and fashion — explore
          everything Marvron offers.
        </p>
      </div>

      {/* ══════════════════════════════════════════
          INTRO STRIP (unchanged)
      ══════════════════════════════════════════ */}
      <div
        style={{ padding: "40px 40px 0", maxWidth: "960px", margin: "0 auto" }}
      >
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "0.97rem",
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          At Marvron, we operate across multiple industries to provide reliable
          products and innovative services that support modern businesses and
          lifestyles. Our operations cover Oil &amp; Gas, Energy Solutions,
          Technology &amp; Gadgets, and Fashion &amp; Lifestyle Products. Every
          product we supply is backed by our commitment to quality,
          authenticity, and customer trust.
        </p>
      </div>

      {/* ══════════════════════════════════════════
          TAB NAV (unchanged)
      ══════════════════════════════════════════ */}
      <div
        style={{ padding: "40px 40px 0", maxWidth: "960px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gap: "8px",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            flexWrap: "wrap",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
            paddingBottom: "0",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background:
                  activeTab === tab.id
                    ? "linear-gradient(135deg,#f97316,#ea580c)"
                    : "rgba(255,255,255,0.05)",
                color: "#fff",
                border:
                  activeTab === tab.id
                    ? "none"
                    : "1px solid rgba(255,255,255,0.1)",
                borderBottom: "none",
                borderRadius: "8px 8px 0 0",
                padding: "10px 20px",
                fontWeight: activeTab === tab.id ? "700" : "500",
                fontSize: "0.88rem",
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "0.02em",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          TAB CONTENT (unchanged)
      ══════════════════════════════════════════ */}
      <main
        style={{ padding: "0 40px 60px", maxWidth: "960px", margin: "0 auto" }}
      >
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderTop: `3px solid ${active.color}`,
            borderRadius: "0 0px 12px 12px",
            padding: "40px 36px",
            boxShadow: `0 0 40px rgba(${active.glowRgb},0.08)`,
          }}
        >
          {/* Icon + heading */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: `rgba(${active.glowRgb},0.15)`,
                border: `1px solid rgba(${active.glowRgb},0.3)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.6rem",
                boxShadow: `0 0 20px rgba(${active.glowRgb},0.25)`,
              }}
            >
              {active.icon}
            </div>
            <h2
              style={{
                color: active.color,
                fontWeight: "800",
                fontSize: "1.5rem",
                margin: 0,
              }}
            >
              {active.heading}
            </h2>
          </div>

          <p
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: "0.97rem",
              lineHeight: 1.8,
              marginBottom: "28px",
            }}
          >
            {active.intro}
          </p>

          {/* Sub-section */}
          <div style={{ marginBottom: "28px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  width: "3px",
                  height: "22px",
                  borderRadius: "2px",
                  background: `linear-gradient(${active.color}, transparent)`,
                }}
              />
              <h3
                style={{
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: "1.05rem",
                  margin: 0,
                }}
              >
                {active.subHeading}
              </h3>
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {active.items.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      marginTop: "3px",
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      flexShrink: 0,
                      background: `rgba(${active.glowRgb},0.2)`,
                      border: `1px solid rgba(${active.glowRgb},0.5)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2.5 2.5L8 3"
                        stroke={active.color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.78)",
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.93rem",
              lineHeight: 1.75,
              marginBottom: active.extra ? "36px" : "0",
            }}
          >
            {active.outro}
          </p>

          {/* Extra block (energy tab only) */}
          {active.extra && (
            <div
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "10px",
                padding: "28px 24px",
              }}
            >
              <h3
                style={{
                  color: active.color,
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  marginBottom: "12px",
                }}
              >
                {active.extra.heading}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  marginBottom: "18px",
                }}
              >
                {active.extra.body}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {active.extra.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        marginTop: "3px",
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        flexShrink: 0,
                        background: `rgba(${active.glowRgb},0.2)`,
                        border: `1px solid rgba(${active.glowRgb},0.5)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M2 5l2.5 2.5L8 3"
                          stroke={active.color}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.78)",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.92rem",
                  lineHeight: 1.75,
                  marginTop: "18px",
                  marginBottom: 0,
                }}
              >
                {active.extra.outro}
              </p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <button
            onClick={openModal}
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

export default ProductServices;
