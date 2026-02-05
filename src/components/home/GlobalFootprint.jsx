import React from "react";
// TODO: Ensure this path is correct for your build system.
// If using Next.js/CRA and the file is in public, you might just need src="/world-map.png"
import WorldMapImage from "../../../public/world-map.png";

function GlobalFootprint() {
  return (
    <>
      <style>
        {`
          :root {
            --color-primary: #0f172a;
            --color-accent-green: #10b981;
            --color-grid: #e2e8f0;
          }

          .horizon-section {
            padding: 120px 0;
            background-color: #ffffff;
            position: relative;
            overflow: hidden;
          }

          /* --- BACKGROUND GRID --- */
          .horizon-section::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: 
              linear-gradient(var(--color-grid) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-grid) 1px, transparent 1px);
            background-size: 40px 40px;
            opacity: 0.6;
            pointer-events: none;
            z-index: 0;
          }

          /* Fade the grid at the edges */
          .horizon-section::after {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(circle at center, transparent 0%, #ffffff 90%);
            pointer-events: none;
            z-index: 1;
          }

          .horizon-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
          }

          /* --- HEADER STYLES --- */
          .horizon-header {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 60px;
            padding-bottom: 40px;
            border-bottom: 1px solid var(--color-grid);
          }

          .header-content-block {
            max-width: 800px;
          }

          .eyebrow {
            color: var(--color-accent-green);
            font-weight: 800;
            letter-spacing: 3px;
            font-size: 13px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .eyebrow::before {
            content: "";
            display: block;
            width: 8px; height: 8px;
            background: var(--color-accent-green);
            border-radius: 50%;
            box-shadow: 0 0 10px var(--color-accent-green);
          }

          .main-heading {
            font-size: 56px;
            font-weight: 900;
            color: var(--color-primary);
            margin-top: 20px;
            letter-spacing: -2px;
            line-height: 1.05;
          }

          .accent-text {
            color: var(--color-accent-green);
          }

          /* --- MAP CONTAINER STYLES --- */
          .map-display-frame {
            position: relative;
            width: 100%;
            padding: 40px;
            background: rgba(255, 255, 255, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border-radius: 24px;
            box-shadow: 
              0 20px 50px -12px rgba(0, 0, 0, 0.1),
              0 0 0 1px rgba(0,0,0,0.02);
            overflow: hidden;
            transition: transform 0.5s ease;
          }

          .map-glow {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 60%; height: 60%;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
            filter: blur(40px);
            z-index: 0;
            pointer-events: none;
          }

          .global-map-image {
            width: 100%;
            height: auto;
            position: relative;
            z-index: 2;
            filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
          }

          /* --- TECH CORNERS --- */
          .tech-corner {
            position: absolute;
            width: 20px;
            height: 20px;
            border-color: var(--color-accent-green);
            border-style: solid;
            transition: all 0.3s ease;
            opacity: 0.6;
            z-index: 5;
            pointer-events: none; /* Allows scrolling touch through corners */
          }
          
          .tl { top: 20px; left: 20px; border-width: 2px 0 0 2px; }
          .tr { top: 20px; right: 20px; border-width: 2px 2px 0 0; }
          .bl { bottom: 20px; left: 20px; border-width: 0 0 2px 2px; }
          .br { bottom: 20px; right: 20px; border-width: 0 2px 2px 0; }

          .map-display-frame:hover .tech-corner {
            width: 30px; height: 30px;
            opacity: 1;
          }

          /* --- SCANNERS & ANIMATIONS --- */
          .scan-line {
            position: absolute;
            top: 0; left: 0; right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--color-accent-green), transparent);
            opacity: 0.3;
            z-index: 3;
            animation: scan 8s linear infinite;
            pointer-events: none;
          }

          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 0.5; }
            90% { opacity: 0.5; }
            100% { top: 100%; opacity: 0; }
          }

          /* --- RESPONSIVE --- */
          @media (max-width: 900px) {
            .main-heading { font-size: 42px; }
            .map-display-frame { padding: 20px; }
          }
          
          @media (max-width: 600px) {
            .main-heading { font-size: 36px; }
            .horizon-section { padding: 60px 0; }
            .horizon-container { padding: 0 20px; }
            .scan-line { display: none; } 
            
            /* --- MOBILE SCROLLING UPDATES --- */
            .map-display-frame {
              padding: 0; /* Remove padding to maximize space */
              overflow-x: auto; /* Enable horizontal scrolling */
              -webkit-overflow-scrolling: touch; /* Smooth scroll on iOS */
              display: block; /* Ensure block layout for scrolling */
            }

            .global-map-image {
              /* Force image to be wide enough to be legible */
              min-width: 700px;
              width: 700px; 
              max-width: none; /* Disable 100% constraint */
              height: auto;
              margin: 0;
            }

            /* Adjust corners to sit inside the scrollable area edges */
            .tech-corner {
               width: 15px; height: 15px;
               opacity: 0.8; 
            }
            .tl { top: 10px; left: 10px; }
            .tr { top: 10px; right: 10px; }
            .bl { bottom: 10px; left: 10px; }
            .br { bottom: 10px; right: 10px; }
          }
        `}
      </style>

      <section className="horizon-section">
        <div className="horizon-container">
          {/* Header */}
          <div className="horizon-header">
            <div className="header-content-block">
              <div className="eyebrow">Global Footprint</div>
              <h2 className="main-heading">
                Multi-Regional <br />
                <span className="accent-text">Impact Network.</span>
              </h2>
            </div>
          </div>

          {/* Map Display */}
          <div className="map-display-frame">
            <div className="tech-corner tl"></div>
            <div className="tech-corner tr"></div>
            <div className="tech-corner bl"></div>
            <div className="tech-corner br"></div>

            <div className="map-glow"></div>
            <div className="scan-line"></div>

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
