import React from "react";
import { Link } from "react-router-dom";

function PrimaryCTA() {
  return (
    <>
      <style>
        {`
          /* Scoped to prevent global CSS leaks */
          .ecosol-cta-scope {
            min-height: 85vh; 
            width: 100%;
            background-color: var(--color-bg-white);
            /* Technical Blueprint Grid */
            background-image: 
              linear-gradient(var(--color-bg-light-grey) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-bg-light-grey) 1px, transparent 1px);
            background-size: 50px 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 80px 24px;
            position: relative;
            overflow: hidden;
            border-top: 1px solid var(--color-bg-light-grey);
          }

          /* Subtle Engineering Glow */
          .ecosol-cta-scope .cta-tech-glow {
            position: absolute;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(14, 165, 233, 0.03) 0%, transparent 70%);
            border-radius: 50%;
            z-index: 0;
            pointer-events: none;
          }

          .ecosol-cta-scope .cta-centered-card {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid var(--color-bg-light-grey);
            padding: 100px 60px;
            border-radius: 4px; /* Sharp Edges */
            max-width: 1100px;
            width: 100%;
            text-align: center;
            position: relative;
            z-index: 1;
            transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
          }

          .ecosol-cta-scope .cta-centered-card:hover {
            transform: translateY(-5px);
            border-color: var(--color-logo-blue);
            box-shadow: 0 40px 80px rgba(11, 17, 32, 0.08);
          }

          .ecosol-cta-scope .cta-display-heading {
            font-size: clamp(36px, 5.5vw, 60px);
            line-height: 1.1;
            color: var(--color-logo-navy);
            font-weight: 900;
            letter-spacing: -2px;
            margin-bottom: 32px;
          }

          .ecosol-cta-scope .cta-btn-modern {
            position: relative;
            display: inline-block;
            padding: 22px 55px;
            background: var(--color-logo-navy);
            color: var(--color-bg-white) !important;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            overflow: hidden;
            z-index: 1;
            border-radius: 2px; /* Sharper */
          }

          .ecosol-cta-scope .cta-btn-modern::before {
            content: '';
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--color-logo-blue);
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            z-index: -1;
          }

          .ecosol-cta-scope .cta-btn-modern:hover {
            letter-spacing: 3px;
            box-shadow: 0 15px 30px rgba(26, 95, 180, 0.3);
          }

          .ecosol-cta-scope .cta-btn-modern:hover::before {
            top: 0;
          }

          @media (max-width: 768px) {
            .ecosol-cta-scope { min-height: auto; padding: 80px 24px; }
            .ecosol-cta-scope .cta-centered-card { padding: 60px 24px; border: none; background: transparent; }
            
            .ecosol-cta-scope .cta-display-heading { 
              font-size: 48px !important; 
              line-height: 1.05 !important;
            }

            .ecosol-cta-scope .cta-btn-modern { width: 100%; padding: 20px; }
          }
        `}
      </style>

      <section className="ecosol-cta-scope">
        {/* Decorative Background Elements */}
        <div
          className="cta-tech-glow"
          style={{ top: "-10%", left: "10%" }}
        ></div>
        <div
          className="cta-tech-glow"
          style={{ bottom: "-10%", right: "10%" }}
        ></div>

        <div className="cta-centered-card">
          <div
            style={{
              color: "var(--color-steel-grey)",
              fontSize: "12px",
              fontWeight: "800",
              textTransform: "uppercase",
              letterSpacing: "5px",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <span
              style={{
                width: "20px",
                height: "2px",
                background: "var(--color-electric-blue)",
              }}
            ></span>
            Technical Advisory
            <span
              style={{
                width: "20px",
                height: "2px",
                background: "var(--color-electric-blue)",
              }}
            ></span>
          </div>

          <h2 className="cta-display-heading">
            Need Engineering Support <br />
            <span style={{ color: "var(--color-electric-blue)" }}>
              for Your Power Project?
            </span>
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "var(--color-text-main)",
              marginBottom: "50px",
              maxWidth: "700px",
              margin: "0 auto 50px auto",
              lineHeight: "1.7",
            }}
          >
            Engage with our specialists to discuss detailed power system
            studies, grounding engineering, or grid infrastructure design.
          </p>

          <Link to="/contact" className="cta-btn-modern">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

export default PrimaryCTA;
