import React from "react";

function MissionVision() {
  return (
    <>
      <style>
        {`
          .mv-viewport-centered {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
            position: relative;
            overflow: hidden;
            padding: 80px 24px;
          }

          /* Correctly Applied Technical Grid Texture */
          .mv-viewport-centered::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: 
              linear-gradient(#e2e8f0 1.2px, transparent 1.2px),
              linear-gradient(90deg, #e2e8f0 1.2px, transparent 1.2px);
            background-size: 40px 40px;
            opacity: 0.4;
            pointer-events: none;
          }

          .mv-centered-wrapper {
            max-width: 1100px;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            position: relative;
            z-index: 2;
          }

          .mv-pro-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-top: 6px solid var(--color-accent-green);
            padding: 60px 45px;
            box-shadow: 0 15px 40px rgba(0, 0, 68, 0.04);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .mv-pro-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 30px 60px rgba(0, 0, 68, 0.08);
          }

          .mv-header-group {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 30px;
          }

          .mv-marker {
            width: 10px;
            height: 10px;
            background-color: var(--color-accent-green);
            transform: rotate(45deg);
          }

          .mv-label-pro {
            font-family: monospace;
            font-size: 11px;
            font-weight: 700;
            color: #94a3b8;
            letter-spacing: 3px;
            text-transform: uppercase;
          }

          .mv-display-title {
            font-size: 48px;
            font-weight: 900;
            color: var(--color-primary);
            line-height: 1;
            margin-bottom: 25px;
            letter-spacing: -2px;
          }

          .mv-body-text {
            font-size: 16px;
            color: #64748b;
            line-height: 1.8;
            font-weight: 500;
          }

          @media (max-width: 900px) {
            .mv-centered-wrapper { grid-template-columns: 1fr; }
            .mv-viewport-centered { min-height: auto; padding: 100px 24px; }
            .mv-display-title { font-size: 38px; }
            .mv-pro-card { padding: 40px 30px; }
          }
        `}
      </style>

      <section className="mv-viewport-centered">
        <div className="mv-centered-wrapper">
          {/* Mission Card */}
          <div className="mv-pro-card">
            <div className="mv-header-group">
              <div className="mv-marker" />
              <span className="mv-label-pro">MISSION_STATEMENT</span>
            </div>
            <h2 className="mv-display-title">
              Functional <br />
              <span style={{ color: "var(--color-accent-green)" }}>
                Excellence.
              </span>
            </h2>
            <p className="mv-body-text">
              To deliver reliable, safe, and standards-compliant electrical
              engineering solutions that support our clients’ operational,
              safety, and business objectives.
            </p>
          </div>

          {/* Vision Card */}
          <div className="mv-pro-card">
            <div className="mv-header-group">
              <div className="mv-marker" />
              <span className="mv-label-pro">VISION_OBJECTIVE</span>
            </div>
            <h2 className="mv-display-title">
              Global <br />
              <span style={{ color: "var(--color-accent-green)" }}>
                Integrity.
              </span>
            </h2>
            <p className="mv-body-text">
              To be a globally trusted power engineering consultancy recognized
              for technical excellence, engineering integrity, and consistent
              project delivery.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MissionVision;
