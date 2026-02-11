import React from "react";
import { Link } from "react-router-dom";

function ServicesCTA() {
  return (
    <>
      <style>
        {`
          .cta-section {
            background-color: #ffffff;
            padding: 100px 0;
            position: relative;
            /* Faint dotted grid to keep the technical feel without the heavy navy */
            background-image: radial-gradient(#cbd5e1 0.5px, transparent 0.5px);
            background-size: 30px 30px;
          }

          .cta-wrapper {
            max-width: 1100px;
            margin: 0 auto;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            display: grid;
            grid-template-columns: 1.5fr 1fr;
            align-items: center;
            position: relative;
            z-index: 2;
            box-shadow: 0 20px 50px rgba(0,0,68,0.05);
          }

          /* Contrast side-bar for technical info */
          .cta-info-side {
            padding: 60px;
            border-right: 1px solid #e2e8f0;
          }

          .cta-action-side {
            padding: 60px;
            background-color: var(--color-bg); /* Very light gray/blue */
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .cta-label {
            font-family: 'Courier New', monospace;
            font-size: 11px;
            font-weight: 700;
            color: var(--color-accent-green);
            text-transform: uppercase;
            letter-spacing: 3px;
            display: block;
            margin-bottom: 20px;
          }

          .cta-heading {
            font-size: 36px;
            font-weight: 800;
            color: var(--color-primary);
            line-height: 1.2;
            text-transform: uppercase;
            letter-spacing: -1px;
            margin-bottom: 20px;
          }

          .cta-text {
            font-size: 16px;
            color: #64748b;
            line-height: 1.7;
            margin: 0;
          }

          .cta-button {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 16px 32px;
            background-color: var(--color-primary);
            color: #ffffff;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-decoration: none;
            transition: all 0.3s ease;
            border: 1px solid var(--color-primary);
          }

          .cta-button:hover {
            background-color: var(--color-accent-green);
            border-color: var(--color-accent-green);
            transform: translateY(-3px);
          }

          .cta-sub-note {
            margin-top: 15px;
            font-size: 12px;
            color: #94a3b8;
            font-weight: 500;
          }

          @media (max-width: 992px) {
            .cta-wrapper { grid-template-columns: 1fr; }
            .cta-info-side { border-right: none; border-bottom: 1px solid #e2e8f0; padding: 40px; }
            .cta-action-side { padding: 40px; }
          }

          @media (max-width: 768px) {
            .cta-section { padding: 60px 20px; }
            .cta-heading { font-size: 28px; }
          }
        `}
      </style>

      <section className="cta-section">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-info-side">
              {/* <span className="cta-label">03 // Project Consultation</span> */}
              <h2 className="cta-heading">
                Discuss Your <br />
                <span style={{ color: "var(--color-accent-green)" }}>
                  Engineering
                </span>{" "}
                Scope
              </h2>
              <p className="cta-text">
                Engage with our engineering team to evaluate your project
                requirements and define a technically sound, standards-compliant
                solution for your critical infrastructure.
              </p>
            </div>

            <div className="cta-action-side">
              <Link to="/contact" className="cta-button">
                Get Started <span>→</span>
              </Link>
              <p className="cta-sub-note">Available for global consultancy</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesCTA;
