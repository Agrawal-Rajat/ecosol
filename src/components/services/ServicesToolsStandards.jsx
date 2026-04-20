import React from "react";

function ServicesToolsStandards() {
  return (
    <>
      <style>
        {`
          .ecosol-tools-scope {
            background-color: var(--color-bg-white);
            /* Technical Blueprint Texture */
            background-image: radial-gradient(var(--color-bg-light-grey) 1.2px, transparent 1.2px);
            background-size: 30px 30px;
            padding: 100px 0;
            border-top: 1px solid var(--color-bg-light-grey);
            font-family: var(--font-primary);
          }

          .ecosol-tools-scope .tech-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
          }

          .ecosol-tools-scope .tech-flex {
            display: flex;
            gap: 80px;
            align-items: flex-start;
          }

          .ecosol-tools-scope .tech-header {
            flex: 1;
            position: sticky;
            top: 120px; /* Adjust based on your navbar height */
          }

          .ecosol-tools-scope .tech-label {
            font-size: 11px;
            font-weight: 800;
            color: var(--color-electric-blue);
            text-transform: uppercase;
            letter-spacing: 4px;
            margin-bottom: 20px;
            display: block;
          }

          .ecosol-tools-scope .tech-heading {
            font-size: clamp(32px, 4vw, 48px);
            font-weight: 900;
            color: var(--color-logo-navy);
            line-height: 1.1;
            text-transform: uppercase;
            margin-bottom: 30px;
            letter-spacing: -1.5px;
          }

          .ecosol-tools-scope .tech-accent {
            color: var(--color-electric-blue);
          }

          .ecosol-tools-scope .tech-description {
            font-size: 17px;
            color: var(--color-text-main);
            line-height: 1.8;
            max-width: 480px;
          }

          .ecosol-tools-scope .tech-grid {
            flex: 1.4;
            display: grid;
            gap: 30px;
          }

          .ecosol-tools-scope .tech-block {
            background: #ffffff;
            border: 1px solid var(--color-bg-light-grey);
            /* Engineering accent line on the left */
            border-left: 4px solid var(--color-logo-navy);
            padding: 45px;
            box-shadow: 10px 10px 0px var(--color-bg-light-grey);
            transition: all 0.4s ease;
          }

          .ecosol-tools-scope .tech-block:hover {
            transform: translateX(5px);
            box-shadow: 15px 15px 0px rgba(14, 165, 233, 0.1);
          }

          .ecosol-tools-scope .tech-block-heading {
            font-size: 13px;
            font-weight: 900;
            color: var(--color-logo-navy);
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 30px;
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .ecosol-tools-scope .tech-block-heading::after {
            content: '';
            flex: 1;
            height: 1px;
            background: var(--color-bg-light-grey);
          }

          .ecosol-tools-scope .tags-container {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
          }

          .ecosol-tools-scope .tech-tag {
            font-family: monospace;
            font-size: 13px;
            font-weight: 700;
            background: var(--color-bg-light-grey);
            color: var(--color-logo-navy);
            padding: 10px 20px;
            border: 1px solid transparent;
            transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1);
          }

          .ecosol-tools-scope .tech-tag:hover {
            border-color: var(--color-electric-blue);
            color: var(--color-electric-blue);
            background: #ffffff;
            transform: translateY(-3px);
          }

          @media (max-width: 1024px) {
            .ecosol-tools-scope .tech-flex { flex-direction: column; gap: 60px; }
            .ecosol-tools-scope .tech-header { position: static; }
            .ecosol-tools-scope .tech-grid { width: 100%; }
          }

          @media (max-width: 768px) {
            .ecosol-tools-scope { padding: 80px 0; }
            .ecosol-tools-scope .tech-container { padding: 0 24px; }
            .ecosol-tools-scope .tech-heading { font-size: 38px; }
            .ecosol-tools-scope .tech-block { padding: 35px 25px; }
          }
        `}
      </style>

      <section className="ecosol-tools-scope">
        <div className="tech-container">
          <div className="tech-flex">
            <div className="tech-header">
              <span className="tech-label">Technical Precision</span>
              <h2 className="tech-heading">
                Engineering <br />
                Tools & <br />
                <span className="tech-accent">Standards.</span>
              </h2>
              <p className="tech-description">
                Our consultancy operations are backed by high-fidelity software
                simulations and strict adherence to international regulatory
                codes, ensuring safety and compliance for every project.
              </p>
            </div>

            <div className="tech-grid">
              <div className="tech-block">
                <h3 className="tech-block-heading">Power Systems Simulation</h3>
                <div className="tags-container">
                  {[
                    "ETAP",
                    "DIgSILENT PowerFactory",
                    "PSCAD",
                    "CDEGS",
                    "MATLAB",
                    "PVSyst",
                  ].map((tool) => (
                    <span key={tool} className="tech-tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="tech-block"
                style={{ borderLeftColor: "var(--color-electric-blue)" }}
              >
                <h3 className="tech-block-heading">
                  Regulatory Codes & Standards
                </h3>
                <div className="tags-container">
                  {["IEEE", "IEC", "NFPA 70E", "NEC", "BS Standards"].map(
                    (std) => (
                      <span key={std} className="tech-tag">
                        {std}
                      </span>
                    ),
                  )}
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
