import React from "react";

function ServicesHero() {
  return (
    <>
      <style>
        {`
          :root {
            --accent-glow: rgba(0, 102, 255, 0.15);
            --tech-grid: rgba(0, 32, 96, 0.04);
            --line-color: rgba(0, 32, 96, 0.1);
          }

          .ecosol-services-hero-scope {
            background-color: #ffffff;
            background-image: 
              radial-gradient(circle at 2% 2%, var(--accent-glow) 0%, transparent 40%),
              linear-gradient(var(--tech-grid) 1px, transparent 1px),
              linear-gradient(90deg, var(--tech-grid) 1px, transparent 1px);
            background-size: 100% 100%, 40px 40px, 40px 40px;
            padding: 120px 0;
            position: relative;
            overflow: hidden;
            font-family: var(--font-primary, 'Inter', sans-serif);
          }

          /* --- Decorative Technical Elements --- */
          .ecosol-services-hero-scope::before {
            content: '';
            position: absolute;
            top: 40px;
            left: 40px;
            width: 100px;
            height: 100px;
            border-top: 1px solid var(--line-color);
            border-left: 1px solid var(--line-color);
            pointer-events: none;
          }

          .scan-line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--color-electric-blue, #0066ff), transparent);
            opacity: 0.1;
            animation: scan 8s linear infinite;
          }

          @keyframes scan {
            0% { top: 0%; }
            100% { top: 100%; }
          }

          /* --- Layout --- */
          .ecosol-services-hero-scope .hero-container {
            max-width: var(--container-width, 1280px);
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
          }

          .ecosol-services-hero-scope .hero-flex {
            display: grid;
            grid-template-columns: 1.4fr 1fr;
            gap: 100px;
            align-items: center;
          }

          /* --- Content & Typography --- */
          .ecosol-services-hero-scope .hero-badge {
            display: inline-block;
            padding: 6px 12px;
            background: var(--color-logo-navy, #002060);
            color: white;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 24px;
            border-radius: 2px;
          }

          .ecosol-services-hero-scope .hero-heading {
            font-size: clamp(40px, 5vw, 68px);
            font-weight: 800;
            color: var(--color-logo-navy, #002060);
            line-height: 0.95;
            letter-spacing: -3px;
            margin-bottom: 30px;
          }

          .ecosol-services-hero-scope .hero-heading span {
            color: var(--color-electric-blue, #0066ff);
          }

          .ecosol-services-hero-scope .hero-text {
            font-size: clamp(17px, 2vw, 20px);
            color: #4a5568;
            line-height: 1.6;
            max-width: 600px;
            margin-bottom: 40px;
            border-left: 3px solid var(--color-electric-blue, #0066ff);
            padding-left: 25px;
          }

          /* --- Enhanced CTA Button --- */
          .ecosol-services-hero-scope .hero-cta {
            display: inline-flex;
            align-items: center;
            padding: 18px 38px;
            background-color: var(--color-logo-navy, #002060);
            color: #ffffff;
            text-decoration: none;
            font-weight: 800;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
            border: 1px solid var(--color-logo-navy, #002060);
            position: relative;
          }

          .ecosol-services-hero-scope .hero-cta:hover {
            background-color: var(--color-electric-blue, #0066ff);
            border-color: var(--color-electric-blue, #0066ff);
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 102, 255, 0.2);
          }

          .ecosol-services-hero-scope .hero-cta svg {
            margin-left: 12px;
            transition: transform 0.3s ease;
          }

          .ecosol-services-hero-scope .hero-cta:hover svg {
            transform: translateX(5px);
          }

          /* --- Sidebar --- */
          .ecosol-services-hero-scope .tech-card-stack {
            position: relative;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid var(--line-color);
            padding: 40px;
            box-shadow: 30px 30px 0px rgba(0, 32, 96, 0.03);
          }

          .ecosol-services-hero-scope .tech-item {
            margin-bottom: 30px;
          }

          .ecosol-services-hero-scope .tech-label {
            font-family: monospace;
            font-size: 11px;
            color: var(--color-electric-blue, #0066ff);
            display: block;
            margin-bottom: 8px;
            text-transform: uppercase;
            font-weight: bold;
          }

          .ecosol-services-hero-scope .tech-value {
            font-size: 18px;
            font-weight: 700;
            color: var(--color-logo-navy, #002060);
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .ecosol-services-hero-scope .tech-value::before {
            content: '';
            width: 8px;
            height: 8px;
            background: var(--color-electric-blue, #0066ff);
            border-radius: 50%;
          }

          @media (max-width: 1024px) {
            .ecosol-services-hero-scope .hero-flex { grid-template-columns: 1fr; gap: 60px; }
            .ecosol-services-hero-scope .hero-heading { font-size: 52px; }
          }

          @media (max-width: 640px) {
            .ecosol-services-hero-scope { padding: 80px 0; }
            .ecosol-services-hero-scope .hero-container { padding: 0 24px; }
          }
        `}
      </style>

      <section className="ecosol-services-hero-scope">
        <div className="scan-line"></div>

        <div className="hero-container">
          <div className="hero-flex">
            <div className="hero-content">
              <span className="hero-badge">Expert Consultancy</span>
              <h1 className="hero-heading">
                ENGINEERING <br />
                <span>PRECISION</span> <br />
                REDEFINED.
              </h1>

              <p className="hero-text">
                Ecosol Projects delivers high-fidelity power engineering
                solutions. From concept to commissioning, we bridge the gap
                between complex grid requirements and operational excellence.
              </p>

              <div style={{ display: "flex" }}>
                <a href="services" className="hero-cta">
                  Explore Services
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

            <div className="hero-sidebar">
              <div className="tech-card-stack">
                <div className="tech-item">
                  <span className="tech-label">01 // STANDARDS</span>
                  <div className="tech-value">IEEE • IEC • NFPA</div>
                </div>
                <div className="tech-item">
                  <span className="tech-label">02 // SECTORS</span>
                  <div className="tech-value">Utility & Industrial</div>
                </div>
                <div className="tech-item">
                  <span className="tech-label">03 // CAPACITY</span>
                  <div className="tech-value">Full Lifecycle Support</div>
                </div>

                <div
                  style={{
                    marginTop: "20px",
                    paddingTop: "20px",
                    borderTop: "1px dashed var(--line-color)",
                    fontSize: "10px",
                    fontFamily: "monospace",
                    color: "#999",
                    letterSpacing: "1px",
                  }}
                >
                  Ecosol Global Operations // 2026_REF
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesHero;
