import React from "react";

function ServicesHero() {
  return (
    <>
      <style>
        {`
          .services-hero {
            background-color: #ffffff;
            /* Matching your blueprint grid texture */
            background-image: radial-gradient(#e2e8f0 0.8px, transparent 0.8px);
            background-size: 30px 30px;
            padding: 120px 0 80px 0;
            position: relative;
            border-bottom: 1px solid #e2e8f0;
          }

          /* Architectural Corner Accent */
          .services-hero::after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            width: 100px;
            height: 100px;
            background: linear-gradient(135deg, transparent 50%, var(--color-accent-green) 50%);
            opacity: 0.1;
          }

          .hero-flex {
            display: flex;
            gap: 60px;
            align-items: flex-start;
          }

          .hero-content {
            flex: 2;
          }

          .hero-sidebar {
            flex: 1;
            border-left: 1px solid #e2e8f0;
            padding-left: 40px;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .spec-tag {
            font-family: 'Courier New', Courier, monospace;
            font-size: 12px;
            font-weight: 700;
            color: var(--color-accent-green);
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          .hero-heading {
            font-size: 64px;
            font-weight: 800;
            color: var(--color-primary);
            line-height: 1;
            letter-spacing: -2px;
            margin-bottom: 40px;
            text-transform: uppercase;
          }

          .hero-text {
            font-size: 18px;
            color: #475569;
            line-height: 1.8;
            max-width: 750px;
            margin-bottom: 24px;
          }

          .stat-box {
            padding: 20px;
            background: rgba(255,255,255,0.8);
            border-bottom: 3px solid var(--color-primary);
          }

          .stat-label {
            display: block;
            font-size: 11px;
            font-weight: 700;
            color: #94a3b8;
            text-transform: uppercase;
            margin-bottom: 5px;
          }

          .stat-value {
            font-size: 14px;
            font-weight: 700;
            color: var(--color-primary);
          }

          @media (max-width: 1024px) {
            .hero-flex { flex-direction: column; gap: 40px; }
            .hero-sidebar { border-left: none; padding-left: 0; border-top: 1px solid #e2e8f0; padding-top: 40px; width: 100%; }
            .hero-heading { font-size: 48px; }
          }

          @media (max-width: 768px) {
            .services-hero { padding: 80px 24px 60px 24px; }
            .hero-heading { font-size: 38px; }
            .hero-text { font-size: 16px; }
          }
        `}
      </style>

      <section className="services-hero">
        <div className="container">
          <div className="hero-flex">
            <div className="hero-content">
              <h1 className="hero-heading">
                Our <br />
                <span style={{ color: "var(--color-accent-green)" }}>
                  Engineering
                </span>{" "}
                <br />
                Services
              </h1>

              <p className="hero-text">
                Ecosol Projects Pvt. Ltd. provides specialized electrical power
                engineering consultancy services across the complete project
                lifecycle. Our services are focused on delivering safe,
                reliable, and standards-compliant engineering solutions for
                utility, industrial, and renewable energy projects worldwide.
              </p>

              <p
                className="hero-text"
                style={{ fontSize: "16px", opacity: 0.8 }}
              >
                As an independent engineering consultant, we deliver technically
                sound and unbiased solutions aligned with international
                standards and client requirements.
              </p>
            </div>

            <div className="hero-sidebar">
              <div className="stat-box">
                <span className="stat-label">Standards Compliance</span>
                <span className="stat-value">IEEE / IEC / NFPA / IS</span>
              </div>
              <div
                className="stat-box"
                style={{ borderBottomColor: "var(--color-accent-green)" }}
              >
                <span className="stat-label">Sectors</span>
                <span className="stat-value">
                  Utility, Industrial, Renewable
                </span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Project Scope</span>
                <span className="stat-value">Complete Lifecycle Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesHero;
