import React from "react";

function EngineeringToolsBar() {
  const tools = [
    "ETAP",
    "DIgSILENT PowerFactory",
    "PSCAD",
    "CDEGS",
    "Paladin DesignBase",
    "Cymcap",
    "AutoCAD Electrical",
  ];

  return (
    <>
      <style>
        {`
        .tools-bar-section {
          width: 100%;
          background: var(--color-bg-white);
          padding: 100px 0;
          overflow: hidden;
          position: relative;
          border-bottom: 1px solid var(--color-bg-light-grey);
        }

        .tools-container {
          max-width: var(--container-width, 1400px);
          margin: 0 auto;
          padding: 0 40px;
        }

        .tools-header-box {
          margin-bottom: 50px;
          text-align: center;
        }

        .tools-subtitle {
          /* Changed from Green to Steel Grey for a technical feel */
          color: var(--color-steel-grey); 
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 12px;
          display: block;
        }

        .tools-main-title {
          font-size: clamp(32px, 4vw, 42px);
          font-weight: 900;
          /* Using the logo navy for corporate authority */
          color: var(--color-logo-navy); 
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .tools-marquee-area {
          position: relative;
          width: 100%;
          margin: 40px 0;
        }

        .tools-wrapper {
          display: flex;
          align-items: center;
          gap: 100px; 
          width: max-content;
          animation: scroll 40s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .tool-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .tool-line {
          width: 12px;
          height: 2px;
          /* Using Steel Grey for a subtle, hardware-like divider */
          background: var(--color-steel-grey);
          opacity: 0.3;
        }

        .tool-text {
          font-family: var(--font-primary);
          font-size: 22px;
          font-weight: 600;
          /* Slightly darker grey for better readability against white */
          color: var(--color-text-main);
          white-space: nowrap;
          letter-spacing: -0.5px;
        }

        .fade-mask {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .tools-caption {
          font-size: 14px;
          color: var(--color-steel-grey);
          text-align: center;
          max-width: 600px;
          margin: 50px auto 0;
          line-height: 1.6;
          border-top: 1px solid var(--color-bg-light-grey);
          padding-top: 30px;
        }

        @media (max-width: 768px) {
          .tools-bar-section { padding: 60px 0; }
          .tool-text { font-size: 18px; }
          .tools-wrapper { gap: 60px; }
        }
        `}
      </style>

      <section className="tools-bar-section">
        <div className="tools-container">
          <div className="tools-header-box">
            <span className="tools-subtitle">Simulation Capabilities</span>
            <h2 className="tools-main-title">
              Precision Engineering{" "}
              <span style={{ color: "var(--color-electric-blue)" }}>
                Ecosystem.
              </span>
            </h2>
          </div>

          <div className="fade-mask">
            <div className="tools-marquee-area">
              <div className="tools-wrapper">
                {/* Doubling the array for seamless infinite scroll */}
                {[...tools, ...tools].map((tool, index) => (
                  <div key={index} className="tool-item">
                    <div className="tool-line" />
                    <span className="tool-text">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tools-caption">
            <p>
              Industry-standard computational platforms utilized for rigorous
              power system modeling and analysis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default EngineeringToolsBar;
