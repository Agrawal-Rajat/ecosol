import React from "react";

function AboutHero() {
  return (
    <>
      <style>
        {`
          .about-hero-section {
            min-height: 80vh;
            display: flex;
            align-items: center;
            background-color: #ffffff;
            /* Maintaining the Engineering Dot-Grid Texture */
            background-image: radial-gradient(#e2e8f0 0.8px, transparent 0.8px);
            background-size: 24px 24px;
            padding: 120px 0;
            position: relative;
            overflow: hidden;
          }

          .about-hero-wrapper {
            display: flex;
            align-items: center;
            gap: 80px;
            width: 100%;
          }

          .about-content-left {
            flex: 1.2;
          }

          .about-meta-right {
            flex: 0.8;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            border: 1px solid #e2e8f0;
            padding: 50px;
            border-radius: 2px;
            position: relative;
            box-shadow: 0 30px 60px rgba(0,0,68,0.05);
          }

          .about-meta-right::before {
            content: '';
            position: absolute;
            top: 0; left: 0;
            width: 4px;
            height: 100%;
            background: var(--color-accent-green);
          }

          .meta-item {
            margin-bottom: 30px;
          }

          .meta-item:last-child { margin-bottom: 0; }

          .meta-label {
            font-family: monospace;
            font-size: 11px;
            color: var(--color-accent-green);
            text-transform: uppercase;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 8px;
          }

          .meta-value {
            font-size: 16px;
            font-weight: 700;
            color: var(--color-primary);
            line-height: 1.4;
          }

          @media (max-width: 1024px) {
            .about-hero-wrapper { flex-direction: column; gap: 60px; }
            .about-hero-section { padding: 100px 24px; min-height: auto; }
            .about-content-left { width: 100%; }
            .about-meta-right { width: 100%; padding: 40px 30px; }
          }

          @media (max-width: 768px) {
            .about-display-heading { font-size: 42px !important; }
          }
        `}
      </style>

      <section className="about-hero-section">
        <div
          style={{
            maxWidth: "var(--container-width)",
            margin: "0 auto",
            padding: "0 40px",
            width: "100%",
          }}
        >
          <div className="about-hero-wrapper">
            {/* Left Side: Corporate Identity */}
            <div className="about-content-left">
              <div
                style={{
                  color: "var(--color-accent-green)",
                  fontSize: "13px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "4px",
                  marginBottom: "24px",
                }}
              >
                Established Engineering
              </div>
              <h1
                className="about-display-heading"
                style={{
                  fontSize: "64px",
                  fontWeight: "900",
                  color: "var(--color-primary)",
                  lineHeight: "1.05",
                  letterSpacing: "-2px",
                  marginBottom: "32px",
                }}
              >
                Ecosol Projects <br />
                <span style={{ color: "var(--color-accent-green)" }}>
                  Pvt. Ltd.
                </span>
              </h1>
              <p
                style={{
                  fontSize: "20px",
                  color: "#64748b",
                  lineHeight: "1.7",
                  maxWidth: "600px",
                }}
              >
                A specialized power engineering consultancy delivering precision
                electrical design and system studies for utility, industrial,
                and renewable energy sectors worldwide.
              </p>
            </div>

            {/* Right Side: Technical Meta-Summary */}
            <div className="about-meta-right">
              <div className="meta-item">
                <span className="meta-label">Domain Expertise</span>
                <span className="meta-value">
                  Power System Studies & Electrical Design Engineering
                </span>
              </div>

              <div className="meta-item">
                <span className="meta-label">Standards Compliance</span>
                <span className="meta-value">
                  IEEE • IEC • NFPA • Regulatory Frameworks
                </span>
              </div>

              <div className="meta-item">
                <span className="meta-label">Operational Reach</span>
                <span className="meta-value">
                  India • MENA • Europe • Global Utilities
                </span>
              </div>

              <div className="meta-item">
                <span className="meta-label">Leadership</span>
                <span className="meta-value">
                  Senior-Led Technical Review Teams
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHero;
