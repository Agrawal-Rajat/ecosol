import React from "react";

function MissionVision() {
  return (
    <>
      <style>
        {`
          .ecosol-mv-scope {
            /* Tightened vertical padding to eliminate empty space */
            padding: 60px 0;
            background-color: var(--color-bg-white);
            position: relative;
            overflow: hidden;
            font-family: var(--font-primary);
          }

          /* Layered Grid Texture - Matches the Overview component */
          .ecosol-mv-scope::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(var(--color-bg-light-grey) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-bg-light-grey) 1px, transparent 1px);
            background-size: 60px 60px;
            opacity: 0.4;
            pointer-events: none;
          }

          .ecosol-mv-scope .mv-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
          }

          .ecosol-mv-scope .mv-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          /* --- Professional Technical Cards --- */
          .ecosol-mv-scope .mv-card {
            background: var(--color-bg-white);
            border: 1px solid var(--color-bg-light-grey);
            /* Electric Blue Top Border */
            border-top: 4px solid var(--color-electric-blue);
            padding: 45px;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            position: relative;
          }

          .ecosol-mv-scope .mv-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(11, 17, 32, 0.06);
            border-top-color: var(--color-logo-navy);
          }

          .ecosol-mv-scope .mv-meta-group {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 25px;
          }

          /* Technical Status Indicator */
          .ecosol-mv-scope .mv-indicator {
            width: 12px;
            height: 2px;
            background-color: var(--color-electric-blue);
          }

          .ecosol-mv-scope .mv-label {
            font-family: monospace;
            font-size: 10px;
            font-weight: 800;
            color: var(--color-steel-grey);
            letter-spacing: 3px;
            text-transform: uppercase;
          }

          .ecosol-mv-scope .mv-title {
            font-size: clamp(32px, 4vw, 42px);
            font-weight: 900;
            color: var(--color-logo-navy);
            line-height: 1.1;
            margin-bottom: 20px;
            letter-spacing: -1.5px;
            text-transform: uppercase;
          }

          .ecosol-mv-scope .mv-title span {
            color: var(--color-electric-blue);
          }

          .ecosol-mv-scope .mv-body {
            font-size: 15px;
            color: var(--color-text-main);
            line-height: 1.7;
            margin: 0;
          }

          @media (max-width: 900px) {
            .ecosol-mv-scope .mv-grid { grid-template-columns: 1fr; }
            .ecosol-mv-scope { padding: 40px 0; }
            .ecosol-mv-scope .mv-card { padding: 35px 25px; }
            .ecosol-mv-scope .mv-title { font-size: 32px; }
          }
        `}
      </style>

      <section className="ecosol-mv-scope">
        <div className="mv-container">
          <div className="mv-grid">
            {/* Mission Card */}
            <div className="mv-card">
              <div className="mv-meta-group">
                <div className="mv-indicator" />
                <span className="mv-label">MISSION_REF_01</span>
              </div>
              <h2 className="mv-title">
                Functional <br />
                <span>Excellence.</span>
              </h2>
              <p className="mv-body">
                To deliver reliable, safe, and standards-compliant electrical
                engineering solutions that support our clients’ operational,
                safety, and business objectives.
              </p>
            </div>

            {/* Vision Card */}
            <div className="mv-card">
              <div className="mv-meta-group">
                <div className="mv-indicator" />
                <span className="mv-label">VISION_REF_02</span>
              </div>
              <h2 className="mv-title">
                Global <br />
                <span>Integrity.</span>
              </h2>
              <p className="mv-body">
                To be a globally trusted power engineering consultancy
                recognized for technical excellence, engineering integrity, and
                consistent project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MissionVision;
