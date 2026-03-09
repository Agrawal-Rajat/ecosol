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
          background: #ffffff;
          padding: 100px 0; /* Matches CoreServices padding */
          overflow: hidden;
          position: relative;
        }

        .tools-container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 30px;
        }

        .tools-header-box {
          margin-bottom: 50px;
          text-align: center;
        }

        .tools-subtitle {
          color: #10b981; /* Matches var(--color-accent-green) */
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 3px;
          marginBottom: 12px;
          display: block;
        }

        .tools-main-title {
          /* Exactly matching CoreServices font size and weight */
          font-size: clamp(35px, 5vw, 42px);
          font-weight: 900;
          color: #000033; /* Matches var(--color-primary) */
          line-height: 1.2;
          margin-bottom: 20px;
          white-space: nowrap; /* Forces one line */
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
          width: 10px;
          height: 2px;
          background: #10b981;
          opacity: 0.5;
        }

        .tool-text {
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #64748b;
          white-space: nowrap;
          letter-spacing: -0.5px;
        }

        .fade-mask {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        .tools-caption {
          font-size: 14px;
          color: #94a3b8;
          text-align: center;
          max-width: 600px;
          margin: 50px auto 0;
          line-height: 1.6;
          border-top: 1px solid #f1f5f9;
          padding-top: 30px;
        }

        @media (max-width: 768px) {
          .tools-bar-section { padding: 60px 0; }
          .tools-main-title { white-space: normal; } /* Allow wrap on mobile only */
          .tool-text { font-size: 16px; }
          .tools-wrapper { gap: 60px; }
        }
        `}
      </style>

      <section className="tools-bar-section">
        <div className="tools-container">
          <div className="tools-header-box">
            <span className="tools-subtitle">Credibility Strip</span>
            <h2 className="tools-main-title">
              Precision Simulation{" "}
              <span style={{ color: "#10b981" }}>Ecosystem.</span>
            </h2>
          </div>

          <div className="fade-mask">
            <div className="tools-marquee-area">
              <div className="tools-wrapper">
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
              Advanced engineering simulation platforms used for accurate power
              system and grounding analysis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default EngineeringToolsBar;
