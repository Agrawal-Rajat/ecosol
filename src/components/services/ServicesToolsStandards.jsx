import React from "react";

function ServicesToolsStandards() {
  return (
    <>
      <style>
        {`
          .tools-standards-section {
            background-color: var(--color-bg);
            background-image: radial-gradient(#cbd5e1 0.5px, transparent 0.5px);
            background-size: 30px 30px;
            padding: 100px 0;
            border-top: 1px solid #e2e8f0;
          }

          .tech-flex {
            display: flex;
            gap: 60px;
            align-items: flex-start;
          }

          .tech-header {
            flex: 1;
            position: sticky;
            top: 100px;
          }

          .tech-label {
            font-size: 12px;
            font-weight: 700;
            color: var(--color-accent-green);
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 20px;
            display: block;
          }

          .tech-heading {
            font-size: 42px;
            font-weight: 800;
            color: var(--color-primary);
            line-height: 1.1;
            text-transform: uppercase;
            margin-bottom: 30px;
          }

          /* Green Highlight Style */
          .tech-accent {
            color: var(--color-accent-green);
          }

          .tech-description {
            font-size: 16px;
            color: #64748b;
            line-height: 1.8;
            max-width: 450px;
          }

          .tech-grid {
            flex: 1.5;
            display: grid;
            gap: 40px;
          }

          .tech-block {
            background: #ffffff;
            border-left: 5px solid var(--color-primary);
            padding: 40px;
            box-shadow: 0 10px 30px rgba(0,0,68,0.03);
          }

          .tech-block-heading {
            font-size: 14px;
            font-weight: 800;
            color: var(--color-primary);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .tech-block-heading::after {
            content: '';
            flex: 1;
            height: 1px;
            background: #e2e8f0;
          }

          .tags-container {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }

          .tech-tag {
            font-family: 'Courier New', monospace;
            font-size: 13px;
            font-weight: 700;
            background: #f1f5f9;
            color: var(--color-primary);
            padding: 8px 16px;
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
          }

          .tech-tag:hover {
            border-color: var(--color-accent-green);
            color: var(--color-accent-green);
            background: #ffffff;
            transform: translateY(-2px);
          }

          @media (max-width: 1024px) {
            .tech-flex { flex-direction: column; gap: 60px; }
            .tech-header { position: static; }
            .tech-grid { width: 100%; }
          }

          @media (max-width: 768px) {
            .tools-standards-section { padding: 80px 24px; }
            .tech-heading { font-size: 32px; }
            .tech-block { padding: 30px; }
          }
        `}
      </style>

      <section className="tools-standards-section">
        <div className="container">
          <div className="tech-flex">
            <div className="tech-header">
              <span className="tech-label">Rigorous Compliance</span>
              <h2 className="tech-heading">
                Engineering <br />
                Tools & <br />
                <span className="tech-accent">Standards</span>
              </h2>
              <p className="tech-description">
                Our services are supported by industry-recognized software tools
                and international standards to ensure accuracy, safety, and
                regulatory compliance across all project deliverables.
              </p>
            </div>

            <div className="tech-grid">
              <div className="tech-block">
                <h3 className="tech-block-heading">
                  Analysis & Simulation Tools
                </h3>
                <div className="tags-container">
                  {["ETAP", "DIgSILENT PowerFactory", "PSCAD", "CDEGS"].map(
                    (tool) => (
                      <span key={tool} className="tech-tag">
                        {tool}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div
                className="tech-block"
                style={{ borderLeftColor: "var(--color-accent-green)" }}
              >
                <h3 className="tech-block-heading">
                  Regulatory Codes & Standards
                </h3>
                <div className="tags-container">
                  {["IEEE", "IEC", "NFPA", "NEC", "BS"].map((std) => (
                    <span key={std} className="tech-tag">
                      {std}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesToolsStandards;
