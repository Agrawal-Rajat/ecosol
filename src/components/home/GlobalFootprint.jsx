import React from "react";
// Ensure this path matches your project structure
import WorldMapImage from "../../../public/world-map.png";

function GlobalFootprint() {
  return (
    <>
      <style>
        {`
          /* Scoped to prevent global CSS leaks */
          .ecosol-footprint-scope {
            padding: 100px 0;
            background-color: var(--color-bg-white);
            position: relative;
            overflow: hidden;
            border-top: 1px solid var(--color-bg-light-grey);
          }

          /* --- BACKGROUND GRID --- */
          .ecosol-footprint-scope::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: 
              linear-gradient(var(--color-bg-light-grey) 1.5px, transparent 1.5px),
              linear-gradient(90deg, var(--color-bg-light-grey) 1.5px, transparent 1.5px);
            background-size: 50px 50px;
            opacity: 0.8;
            pointer-events: none;
            z-index: 0;
          }

          .ecosol-footprint-scope::after {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(circle at center, transparent 0%, var(--color-bg-white) 90%);
            pointer-events: none;
            z-index: 1;
          }

          .ecosol-footprint-scope .horizon-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
          }

          /* --- HEADER STYLES (Aligned with CoreServices) --- */
          .ecosol-footprint-scope .horizon-header {
            display: flex;
            flex-direction: column;
            align-items: center; /* Centered to match CoreServices layout preference */
            text-align: center;
            margin-bottom: 60px;
          }

          .ecosol-footprint-scope .eyebrow {
            color: var(--color-steel-grey);
            font-weight: 800;
            letter-spacing: 3px;
            font-size: 12px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
          }
          
          .ecosol-footprint-scope .eyebrow::before,
          .ecosol-footprint-scope .eyebrow::after {
            content: "";
            display: block;
            width: 12px; height: 2px;
            background: var(--color-electric-blue);
          }

          .ecosol-footprint-scope .main-heading {
            /* EXACT MATCH to CoreServices heading size */
            font-size: clamp(32px, 4vw, 42px);
            font-weight: 900;
            color: var(--color-logo-navy);
            line-height: 1.2;
            margin: 0;
            letter-spacing: -1px;
          }

          .ecosol-footprint-scope .accent-text {
            color: var(--color-electric-blue);
          }

          /* --- MAP CONTAINER STYLES --- */
          .ecosol-footprint-scope .map-display-frame {
            position: relative;
            width: 100%;
            padding: 30px;
            background: var(--color-bg-white);
            border: 1px solid var(--color-bg-light-grey);
            border-radius: 2px;
            box-shadow: 0 15px 40px -12px rgba(0, 0, 0, 0.05);
            overflow: hidden;
          }

          .ecosol-footprint-scope .global-map-image {
            width: 100%;
            max-width: 1000px;
            height: auto;
            display: block;
            margin: 0 auto;
            position: relative;
            z-index: 2;
            filter: drop-shadow(0 10px 20px rgba(11, 17, 32, 0.1));
          }

          /* --- TECH CORNERS --- */
          .ecosol-footprint-scope .tech-corner {
            position: absolute;
            width: 20px; height: 20px;
            border-color: var(--color-logo-blue);
            border-style: solid;
            opacity: 0.3;
            z-index: 5;
          }
          .ecosol-footprint-scope .tl { top: 20px; left: 20px; border-width: 2px 0 0 2px; }
          .ecosol-footprint-scope .tr { top: 20px; right: 20px; border-width: 2px 2px 0 0; }
          .ecosol-footprint-scope .bl { bottom: 20px; left: 20px; border-width: 0 0 2px 2px; }
          .ecosol-footprint-scope .br { bottom: 20px; right: 20px; border-width: 0 2px 2px 0; }

          /* --- RESPONSIVE --- */
          @media (max-width: 768px) {
            .ecosol-footprint-scope { padding: 80px 0; }
            .ecosol-footprint-scope .horizon-container { padding: 0 24px; }
            
            .ecosol-footprint-scope .map-display-frame {
              padding: 0;
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
              display: block;
            }

            .ecosol-footprint-scope .global-map-image {
              min-width: 500px;
              width: 500px; 
              max-width: none;
            }
          }
        `}
      </style>

      <section className="ecosol-footprint-scope">
        <div className="horizon-container">
          <div className="horizon-header">
            <div className="eyebrow">Global Reach</div>
            <h2 className="main-heading">
              Multi-Regional <br />
              <span className="accent-text">Impact Network.</span>
            </h2>
          </div>

          <div className="map-display-frame">
            <div className="tech-corner tl"></div>
            <div className="tech-corner tr"></div>
            <div className="tech-corner bl"></div>
            <div className="tech-corner br"></div>

            <img
              src={WorldMapImage}
              alt="Global footprint world map"
              className="global-map-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default GlobalFootprint;
