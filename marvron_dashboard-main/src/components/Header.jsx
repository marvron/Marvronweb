import React from "react";
import { Link } from "react-router-dom";

const Header = ({ openModal, onHamburgerClick, scrollToContact }) => {
  return (
    <>
      <header
        style={{ backgroundColor: "#0a1a6b", padding: "0", width: "100%" }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 28px",
          }}
        >
          <Link
            to="/"
            aria-label="Go to homepage"
            style={{ display: "inline-flex" }}
          >
            <img
              src="/images/Marvron_logo.png"
              alt="Marvron"
              style={{ height: "54px", display: "block" }}
            />
          </Link>

          <span
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: "1.05rem",
              letterSpacing: ".07em",
              textTransform: "uppercase",
              textAlign: "center",
              flex: 1,
            }}
          >
            MARVRON COOPERATION
          </span>

          {/* Desktop icons — each opens download modal */}
          <div
            className="header-icons"
            style={{ alignItems: "center", gap: "8px" }}
          >
            <button
              className="hdr-icon-btn"
              onClick={openModal}
              title="Download App"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <button
              className="hdr-icon-btn"
              onClick={openModal}
              title="Download App"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>

            <button
              className="hdr-icon-btn"
              onClick={openModal}
              title="Download App"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="mobile-only"
            onClick={onHamburgerClick}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "block",
                width: "26px",
                height: "2.5px",
                backgroundColor: "#fff",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                display: "block",
                width: "26px",
                height: "2.5px",
                backgroundColor: "#fff",
                borderRadius: "2px",
              }}
            />
            <span
              style={{
                display: "block",
                width: "26px",
                height: "2.5px",
                backgroundColor: "#fff",
                borderRadius: "2px",
              }}
            />
          </button>
        </div>

        {/* Nav row — desktop only */}
        <div
          className="desktop-only"
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            padding: "0 28px 12px",
          }}
        >
          <nav style={{ display: "flex", gap: "40px" }}>
            <Link
              to="/"
              style={{
                color: "#fff",
                fontWeight: "700",
                textDecoration: "none",
                fontSize: ".97rem",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                color: "#fff",
                fontWeight: "500",
                textDecoration: "none",
                fontSize: ".97rem",
              }}
            >
              About
            </Link>
            <Link
              to="/product-services"
              className="nav-product-link"
              style={{
                color: "#fff",
                fontWeight: "500",
                textDecoration: "none",
                fontSize: ".97rem",
              }}
            >
              Product Service
            </Link>
            <button
              onClick={openModal}
              style={{
                color: "#fff",
                fontWeight: "500",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: ".97rem",
                padding: 0,
              }}
            >
              Contact Us
            </button>
          </nav>
          <button
            className="nav-get-started"
            onClick={openModal}
            style={{
              position: "absolute",
              right: "28px",
              background: "linear-gradient(135deg,#f97316,#ea580c)",
              color: "#fff",
              border: "none",
              borderRadius: "24px",
              padding: "9px 26px",
              fontWeight: "700",
              fontSize: ".92rem",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Subbar */}
      <div
        style={{
          backgroundColor: "#0d1f7a",
          padding: "9px 28px",
          textAlign: "center",
          borderTop: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <span
          style={{
            color: "#f97316",
            fontWeight: "600",
            fontSize: ".93rem",
            letterSpacing: ".04em",
          }}
        >
          Marvron &mdash; Oil, Gas , Energy, Technology &amp; Style
        </span>
      </div>
    </>
  );
};

export default Header;
