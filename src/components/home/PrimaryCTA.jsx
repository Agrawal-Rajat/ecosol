import React from "react";
import { Link } from "react-router-dom";

function PrimaryCTA() {
  return (
    <>
      <style>
        {`
          .cta-viewport-section {
            /* Full screen height to allow perfect centering */
            min-height: 100vh; 
            width: 100%;
            background-color: #ffffff;
            /* Engineering Dot-Grid Texture */
            background-image: radial-gradient(#e2e8f0 0.8px, transparent 0.8px);
            background-size: 24px 24px;
            
            /* Flexbox Centering */
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 24px;
            position: relative;
          }

          .cta-centered-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid #e2e8f0;
            padding: 100px 60px;
            border-radius: 2px;
            max-width: 1100px;
            width: 100%;
            text-align: center;
            position: relative;
            transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
            box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          }

          .cta-centered-card:hover {
            border-color: var(--color-accent-green);
            transform: translateY(-5px);
            box-shadow: 0 40px 80px rgba(0,0,68,0.08);
          }

          .cta-btn-modern {
            display: inline-block;
            padding: 22px 50px;
            background: var(--color-accent-green);
            color: #ffffff;
            font-size: 14px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2.5px;
            text-decoration: none;
            transition: all 0.4s ease;
            border: none;
            cursor: pointer;
            margin-top: 10px;
          }

          .cta-btn-modern:hover {
            transform: scale(1.05);
            box-shadow: 0 15px 30px rgba(68, 158, 29, 0.3);
            filter: brightness(1.1);
          }

          @media (max-width: 768px) {
            .cta-centered-card { 
              padding: 80px 24px; 
              border: none; 
              background: transparent; 
              backdrop-filter: none;
            }
            .cta-display-heading { font-size: 36px !important; }
            .cta-btn-modern { width: 100%; }
            .cta-viewport-section { min-height: 80vh; }
          }
        `}
      </style>

      <section className="cta-viewport-section">
        <div className="cta-centered-card">
          <div
            style={{
              color: "var(--color-accent-green)",
              fontSize: "12px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "5px",
              marginBottom: "30px",
            }}
          >
            Project Consultation
          </div>

          <h2
            className="cta-display-heading"
            style={{
              fontSize: "56px",
              fontWeight: "900",
              color: "var(--color-primary)",
              marginBottom: "30px",
              lineHeight: "1.05",
              letterSpacing: "-2px",
            }}
          >
            Discuss Your <br />
            <span style={{ color: "var(--color-accent-green)" }}>
              Engineering Requirement
            </span>
          </h2>

          <p
            style={{
              fontSize: "20px",
              color: "#64748b",
              marginBottom: "50px",
              maxWidth: "700px",
              margin: "0 auto 50px auto",
              lineHeight: "1.7",
            }}
          >
            Engage with our senior engineering team to evaluate your project
            needs and define a technically sound, standards-compliant solution.
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
