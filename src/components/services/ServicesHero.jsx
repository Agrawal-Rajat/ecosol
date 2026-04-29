import React from "react";

function ServicesHero() {
  return (
    <>
      <style>
        {`
          :root {
            --accent-glow: rgba(0, 102, 255, 0.12);
            --tech-grid: rgba(0, 32, 96, 0.04);
            --line-color: rgba(0, 32, 96, 0.08);
          }

          .ecosol-services-hero-scope {
            background-color: #ffffff;
            /* Syncing background with AboutHero's radial focal point approach */
            background-image: 
              radial-gradient(circle at 50% 50%, var(--accent-glow) 0%, transparent 70%),
              linear-gradient(var(--tech-grid) 1px, transparent 1px),
              linear-gradient(90deg, var(--tech-grid) 1px, transparent 1px);
            background-size: 100% 100%, 50px 50px, 50px 50px;
            padding: 160px 0 140px 0;
            position: relative;
            overflow: hidden;
            font-family: var(--font-primary, 'Inter', sans-serif);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          /* --- Matching Corner Frame Accents --- */
          .ecosol-services-hero-scope::before,
          .ecosol-services-hero-scope::after {
            content: '';
            position: absolute;
            width: 150px;
            height: 150px;
            pointer-events: none;
            opacity: 0.5;
            z-index: 1;
          }

          .ecosol-services-hero-scope::before {
            top: 60px;
            left: 60px;
            border-top: 1.5px solid var(--color-logo-navy, #002060);
            border-left: 1.5px solid var(--color-logo-navy, #002060);
          }

          .ecosol-services-hero-scope::after {
            bottom: 60px;
            right: 60px;
            border-bottom: 1.5px solid var(--color-logo-navy, #002060);
            border-right: 1.5px solid var(--color-logo-navy, #002060);
          }

          .scan-line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--color-electric-blue, #0066ff), transparent);
            opacity: 0.15;
            animation: scan 10s linear infinite;
            z-index: 1;
          }

          @keyframes scan {
            0% { top: -5%; }
            100% { top: 105%; }
          }

          .hero-container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 5;
          }

          .hero-badge {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(0, 32, 96, 0.05);
            color: var(--color-electric-blue, #0066ff);
            border: 1px solid var(--line-color);
            /* Matching AboutHero Tag size */
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 4px;
            margin-bottom: 25px;
            border-radius: 4px;
          }

          .hero-heading {
            /* Updated to match AboutHero exactly: clamp(40px, 5vw, 62px) */
            font-size: clamp(40px, 5vw, 62px);
            font-weight: 900;
            color: var(--color-logo-navy, #002060);
            line-height: 0.95;
            letter-spacing: -2.5px;
            margin-bottom: 35px;
            text-transform: uppercase;
          }

          .hero-heading span {
            color: var(--color-electric-blue, #0066ff);
            display: block; 
          }

          .hero-text {
            /* Updated to match AboutHero lead text: 18px */
            font-size: 18px;
            line-height: 1.6;
            color: var(--color-text-main, #4a5568);
            max-width: 700px;
            margin: 0 auto 50px auto;
            border-left: 3px solid var(--color-electric-blue, #0066ff);
            padding-left: 25px;
            text-align: justify;
            display: inline-block;
          }

          .cta-wrapper {
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .hero-cta {
            display: inline-flex;
            align-items: center;
            padding: 17px 38px;
            background-color: var(--color-logo-navy, #002060);
            color: #ffffff;
            text-decoration: none;
            font-weight: 800;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            border: 1px solid var(--color-logo-navy, #002060);
          }

          .hero-cta:hover {
            background-color: var(--color-electric-blue, #0066ff);
            border-color: var(--color-electric-blue, #0066ff);
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 102, 255, 0.25);
          }

          .hero-cta svg {
            margin-left: 12px;
            transition: transform 0.3s ease;
          }

          .hero-cta:hover svg {
            transform: translateX(5px);
          }

          @media (max-width: 768px) {
            .ecosol-services-hero-scope { padding: 120px 0; }
            .ecosol-services-hero-scope::before,
            .ecosol-services-hero-scope::after { display: none; }
            .hero-heading { letter-spacing: -2px; }
            .hero-text { border-left: none; padding-left: 0; text-align: center; }
          }
        `}
      </style>

      <section className="ecosol-services-hero-scope">
        <div className="scan-line"></div>

        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">Expert Engineering Consultancy</span>

            <h1 className="hero-heading">
              ENGINEERING
              <span>PRECISION REDEFINED.</span>
            </h1>

            <div style={{ textAlign: "center" }}>
              <p className="hero-text">
                Ecosol Projects delivers high-fidelity power engineering
                solutions. From concept to commissioning, we bridge the gap
                between complex grid requirements and operational excellence.
              </p>
            </div>

            <div className="cta-wrapper">
              <a href="/services/power-system-analysis" className="hero-cta">
                Explore Our Services
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesHero;
