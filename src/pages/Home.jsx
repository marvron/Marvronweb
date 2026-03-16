import React, { useState } from "react";
import { Link } from "react-router-dom";
import EarthFromSpaceBackground from "../components/EarthFromSpaceBackground";
import Header from "../components/Header"; // <-- import the new Header
import DownloadModal from "../components/DownloadModal";

const Home = () => {
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
    <div className="site">
      <DownloadModal isOpen={showModal} onClose={closeModal} />

      {/* ══════ MOBILE NAV DRAWER (unchanged) ══════ */}
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

      {/* ══════ HEADER (now using the component) ══════ */}
      <Header
        openModal={openModal}
        onHamburgerClick={() => setShowDrawer(true)}
        scrollToContact={scrollToContact}
      />

      <main>
        {/* ══════ HERO (unchanged) ══════ */}
        <section
          id="home"
          style={{
            position: "relative",
            minHeight: "540px",
            overflow: "visible",
          }}
        >
          <EarthFromSpaceBackground className="hero-canvas" fit="parent" />
          <div className="hero-inner">
            <div className="hero-copy">
              <h1
                style={{
                  color: "#fff",
                  fontWeight: "800",
                  fontSize: "clamp(1.3rem,2.6vw,2rem)",
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                RELIABLE ENTERPRISE GROUP COOPERATION
              </h1>
              <p
                style={{
                  color: "rgba(255,255,255,.85)",
                  fontSize: ".9rem",
                  lineHeight: 1.65,
                  marginBottom: "28px",
                }}
              >
                Driving energy, advancing technology, and setting trends in
                style across Africa — this is <strong>Marvron</strong>.
              </p>
              <button
                onClick={openModal}
                style={{
                  background: "linear-gradient(135deg,#f97316,#ea580c)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "28px",
                  padding: "12px 32px",
                  fontWeight: "700",
                  fontSize: ".97rem",
                  cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(249,115,22,.45)",
                }}
              >
                Explore Business
              </button>
            </div>
            <div className="hero-phone">
              <img src="/images/phone_img.png" alt="Marvron mobile app" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              padding: "24px 40px 36px",
              position: "relative",
              zIndex: 2,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                cursor: "pointer",
                color: "#ffffff",
                textDecoration: "underline",
                fontWeight: "600",
                fontSize: "1rem",
              }}
              onClick={openModal}
            >
              Download our Mobile App
            </span>
            <span className="app-strip-icons" style={{ gap: "16px" }}>
              <button
                onClick={openModal}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <img
                  src="/images/playstore_image.png"
                  alt="Google Play"
                  style={{ height: "42px" }}
                />
              </button>
              <button
                onClick={openModal}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <img
                  src="/images/apple_image.png"
                  alt="App Store"
                  style={{ height: "42px" }}
                />
              </button>
            </span>
          </div>
        </section>

        {/* ══════ FEATURES (unchanged) ══════ */}
        <section
          id="product"
          style={{
            backgroundColor: "#060e3f",
            paddingTop: "100px",
            paddingBottom: "60px",
            position: "relative",
            overflow: "hidden",
            padding:"120px 73px",
          }}
        >
          <EarthFromSpaceBackground className="features-canvas" fit="parent" />
          <div className="feature-grid">
            {[
              {
                src: "/images/Verify_image.png",
                title: "Verify",
                color: "#f97316",
                glowRgb: "249,115,22",
                desc: "Authenticate Our Products and confirm the quality with precision on our our mobile app",
              },
              {
                src: "/images/Track_image.png",
                title: "Track",
                color: "#f59e0b",
                glowRgb: "245,158,11",
                desc: "Track your shipment and orders easily on our mobile app",
              },
              {
                src: "/images/Buy_image.png",
                title: "Buy",
                color: "#f59e0b",
                glowRgb: "245,158,11",
                desc: "If you like quality products, Always shop with Marvron Cooperation",
              },
            ].map((card) => (
              <div
                key={card.title}
                onClick={openModal}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 0 48px rgba(${card.glowRgb},.28),inset 0 1px 0 rgba(255,255,255,.05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 0 28px rgba(${card.glowRgb},.12),inset 0 1px 0 rgba(255,255,255,.05)`;
                }}
                style={{
                  backgroundColor: "rgba(6,14,63,.9)",
                  border: `1px solid rgba(${card.glowRgb},.25)`,
                  borderRadius: "12px",
                  padding: "90px 32px 40px",
                  textAlign: "center",
                  position: "relative",
                  overflow: "visible",
                  boxShadow: `0 0 28px rgba(${card.glowRgb},.12),inset 0 1px 0 rgba(255,255,255,.05)`,
                  cursor: "pointer",
                  transition: "transform .2s, box-shadow .2s",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: "140px",
                    height: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-18px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "160px",
                      height: "40px",
                      borderRadius: "50%",
                      background: `rgba(${card.glowRgb},.35)`,
                      filter: "blur(22px)",
                      animation: "glowPulse 2.6s ease-in-out infinite",
                      zIndex: 0,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-8px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "80px",
                      height: "18px",
                      borderRadius: "50%",
                      background: `rgba(${card.glowRgb},.75)`,
                      filter: "blur(8px)",
                      animation: "glowPulse 2.6s ease-in-out infinite",
                      zIndex: 0,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      width: "130px",
                      height: "130px",
                      borderRadius: "50%",
                      background: `radial-gradient(circle,rgba(${card.glowRgb},.28) 0%,transparent 70%)`,
                      filter: "blur(6px)",
                      zIndex: 0,
                    }}
                  />
                  <img
                    src={card.src}
                    alt={card.title}
                    style={{
                      width: "130px",
                      height: "130px",
                      objectFit: "contain",
                      position: "relative",
                      zIndex: 1,
                      animation: "iconPulse 2.6s ease-in-out infinite",
                      filter: `drop-shadow(0 0 10px rgba(${card.glowRgb},.8)) drop-shadow(0 0 24px rgba(${card.glowRgb},.45))`,
                    }}
                  />
                </div>
                <h3
                  style={{
                    color: card.color,
                    fontWeight: "700",
                    fontSize: "1.7rem",
                    marginBottom: "16px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,.82)",
                    fontSize: ".95rem",
                    lineHeight: 1.7,
                    marginBottom: "28px",
                  }}
                >
                  {card.desc}
                </p>
                <button
                  onClick={openModal}
                  style={{
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: ".97rem",
                    textDecoration: "underline",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Partners (unchanged) */}
        <section
          style={{
            backgroundColor: "#060e3f",
            borderTop: "1px solid rgba(255,255,255,.1)",
            padding: "32px 40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src="/images/QuickPoint_logo.png"
              alt="QuickPoint"
              style={{ height: "62px", objectFit: "contain" }}
            />
            <img
              src="/images/afronika_logo.png"
              alt="Afronika"
              style={{ height: "62px", objectFit: "contain" }}
            />
          </div>
        </section>
      </main>

      {/* ══════ FOOTER / CONTACT (unchanged) ══════ */}
      <footer
        id="contact"
        style={{
          backgroundColor: "#050c35",
          borderTop: "1px solid rgba(255,255,255,.08)",
          padding: "56px 40px 32px",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              gap: "60px",
              flexWrap: "wrap",
              marginBottom: "48px",
            }}
          >
            <div style={{ flex: "1", minWidth: "240px" }}>
              <img
                src="/images/Marvron_logo.png"
                alt="Marvron"
                style={{
                  height: "44px",
                  marginBottom: "20px",
                  display: "block",
                }}
              />
              <p
                style={{
                  color: "rgba(255,255,255,.6)",
                  fontSize: ".9rem",
                  lineHeight: 1.75,
                  marginBottom: "20px",
                }}
              >
                Driving energy, advancing technology, and setting trends in
                style across Africa.
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,.5)",
                  fontSize: ".88rem",
                  lineHeight: 1.9,
                }}
              >
                📧 info@marvron.com
                <br />
                📞 +234 000 000 0000
                <br />
                📍 Africa
              </p>
            </div>
            <div style={{ flex: "1", minWidth: "240px" }}>
              <p
                style={{
                  color: "#f97316",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontWeight: "700",
                  fontSize: ".8rem",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Download Our App
              </p>
              <h3
                style={{
                  color: "#fff",
                  fontWeight: "800",
                  fontSize: "1.2rem",
                  marginBottom: "8px",
                }}
              >
                Get the Marvron App
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,.5)",
                  fontSize: ".87rem",
                  marginBottom: "22px",
                }}
              >
                Verify products, track orders and shop — all from your phone.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
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
          <nav
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              marginBottom: "28px",
            }}
          >
            <Link
              to="/about"
              style={{
                color: "rgba(255,255,255,.6)",
                textDecoration: "none",
                fontSize: ".9rem",
              }}
            >
              About
            </Link>
            <Link
              to="/product-services"
              style={{
                color: "rgba(255,255,255,.6)",
                textDecoration: "none",
                fontSize: ".9rem",
              }}
            >
              Product Service
            </Link>
            <button
              onClick={openModal}
              style={{
                color: "rgba(255,255,255,.6)",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: ".9rem",
                padding: 0,
              }}
            >
              Contact Us
            </button>
          </nav>
          <div
            style={{
              height: "1px",
              background: "rgba(255,255,255,.08)",
              marginBottom: "20px",
            }}
          />
          <div
            style={{
              color: "rgba(255,255,255,.35)",
              fontSize: ".83rem",
              textAlign: "center",
            }}
          >
            @2026 Marvron international limited &nbsp;&nbsp; All right reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
