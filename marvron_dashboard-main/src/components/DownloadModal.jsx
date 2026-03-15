import React from "react";

const DownloadModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "20px",
            background: "none",
            border: "none",
            color: "rgba(255,255,255,.5)",
            fontSize: "1.4rem",
            cursor: "pointer",
          }}
          aria-label="Close download modal"
        >
          ✕
        </button>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="/images/Marvron_logo.png"
            alt="Marvron"
            style={{ height: "48px" }}
          />
        </div>
        <h2
          style={{
            color: "#fff",
            fontWeight: "800",
            fontSize: "1.2rem",
            textAlign: "center",
            marginBottom: "6px",
          }}
        >
          Download Marvron App
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,.5)",
            fontSize: ".85rem",
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          Available on Android and iOS
        </p>
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg,transparent,rgba(249,115,22,.5),transparent)",
            marginBottom: "28px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
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
        <p
          style={{
            color: "rgba(255,255,255,.3)",
            fontSize: ".78rem",
            textAlign: "center",
            marginTop: "22px",
          }}
        >
          Tap a store to continue
        </p>
      </div>
    </div>
  );
};

export default DownloadModal;
