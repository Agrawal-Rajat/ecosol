import React from "react";
import { Link } from "react-router-dom";

function PrimaryCTA() {
  return (
    <>
      <style>
        {`
          .cta-viewport-section {
            min-height: 90vh; 
            width: 100%;
            background-color: #ffffff;
            /* Subtler Engineering Grid */
            background-image: radial-gradient(#cbd5e1 0.5px, transparent 0.5px);
            background-size: 30px 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 60px 24px;
            position: relative;
            overflow: hidden;
          }

          /* Animated background blobs for a premium feel */
          .cta-bg-blob {
            position: absolute;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%);
            border-radius: 50%;
            z-index: 0;
          }

          .cta-centered-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(226, 232, 240, 0.8);
            padding: 120px 60px;
            border-radius: 24px; /* More modern rounded corners */
            max-width: 1000px;
            width: 100%;
            text-align: center;
            position: relative;
            z-index: 1;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          }

          /* Hover: Elevation and Border Glow */
          .cta-centered-card:hover {
            transform: translateY(-8px);
            border-color: #10b981;
            box-shadow: 0 40px 100px -20px rgba(15, 23, 42, 0.1);
          }

          .cta-btn-modern {
            position: relative;
            display: inline-block;
            padding: 24px 60px;
            background: #0f172a; /* Navy Blue base */
            color: #ffffff;
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 3px;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            z-index: 1;
            border-radius: 4px;
          }

          /* Modern Button Hover: Slide-up green background */
          .cta-btn-modern::before {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 100%;
            background: #10b981; /* Accent Green */
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: -1;
          }

          .cta-btn-modern:hover {
            color: #ffffff;
            letter-spacing: 4px;
            box-shadow: 0 20px 40px rgba(16, 185, 129, 0.25);
          }

          .cta-btn-modern:hover::before {
            top: 0;
          }

          .cta-display-heading {
            font-size: clamp(36px, 6vw, 64px);
            line-height: 1.1;
            transition: all 0.3s ease;
          }

          /* Responsive Tweaks */
          @media (max-width: 768px) {
            .cta-viewport-section { min-height: auto; padding: 100px 20px; }
            .cta-centered-card { padding: 60px 24px; border-radius: 0; border: none; background: transparent; }
            .cta-btn-modern { width: 100%; padding: 20px; }
          }
        `}
      </style>

      <section className="cta-viewport-section">
        {/* Decorative Background Elements */}
        <div className="cta-bg-blob" style={{ top: "-10%", left: "10%" }}></div>
        <div
          className="cta-bg-blob"
          style={{ bottom: "-10%", right: "10%" }}
        ></div>

        <div className="cta-centered-card">
          <div
            style={{
              color: "#10b981",
              fontSize: "13px",
              fontWeight: "800",
              textTransform: "uppercase",
              letterSpacing: "6px",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <span
              style={{ width: "30px", height: "1px", background: "#10b981" }}
            ></span>
            Project Consultation
            <span
              style={{ width: "30px", height: "1px", background: "#10b981" }}
            ></span>
          </div>

          <h2
            className="cta-display-heading"
            style={{
              fontWeight: "900",
              color: "#0f172a",
              marginBottom: "32px",
              letterSpacing: "-2.5px",
            }}
          >
            Ready to Start Your <br />
            <span
              style={{
                color: "#10b981",
                background: "linear-gradient(to right, #10b981, #059669)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Engineering Journey?
            </span>
          </h2>

          <p
            style={{
              fontSize: "19px",
              color: "#64748b",
              marginBottom: "56px",
              maxWidth: "680px",
              margin: "0 auto 56px auto",
              lineHeight: "1.8",
              fontWeight: "400",
            }}
          >
            Partner with Ecosol for world-class technical expertise. From
            initial feasibility to final compliance, we ensure engineering
            excellence at every stage.
          </p>

          <Link to="/contact" className="cta-btn-modern">
            Contact Ecosol Expertise
          </Link>
        </div>
      </section>
    </>
  );
}

export default PrimaryCTA;
