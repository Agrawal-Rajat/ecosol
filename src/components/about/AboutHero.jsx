import React from "react";

function AboutHero() {
  return (
    <>
      <style>
        {`
          .ecosol-about-hero-scope {
            background-color: var(--color-bg-white);
            /* Added a subtle radial gradient to create a focal point */
            background: radial-gradient(circle at 20% 30%, #ffffff 0%, #f8f9fa 100%);
            padding: 80px 0 60px 0; 
            position: relative;
            overflow: hidden;
            font-family: var(--font-primary);
          }

          /* --- LAYER 1: Noise & Grain (Texture) --- */
          .ecosol-about-hero-scope::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0.03;
            pointer-events: none;
            z-index: 2;
            background-image: url("https://www.transparenttextures.com/patterns/carbon-fibre.png");
          }

          /* --- LAYER 2: Technical Schematics Image --- */
          .ecosol-about-hero-scope .bg-image-overlay {
            position: absolute;
            right: -5%;
            top: 0;
            width: 50%;
            height: 100%;
            /* Replace the URL below with a high-res schematic or power grid line art */
            background-image: url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1000');
            background-size: cover;
            background-position: center;
            opacity: 0.07;
            filter: grayscale(100%);
            z-index: 1;
            mask-image: linear-gradient(to left, black, transparent);
          }

          /* --- LAYER 3: Technical Blueprint Grid --- */
          .ecosol-about-hero-scope .bg-grid {
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(var(--color-bg-light-grey) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-bg-light-grey) 1px, transparent 1px);
            background-size: 50px 50px;
            z-index: 1;
            opacity: 0.4;
          }

          .ecosol-about-hero-scope .bg-block-accent {
            position: absolute;
            background: var(--color-electric-blue);
            z-index: 1;
            opacity: 0.05;
          }

          .ecosol-about-hero-scope .block-1 { width: 400px; height: 1px; top: 15%; left: 0; }
          .ecosol-about-hero-scope .block-2 { width: 1px; height: 100%; top: 0; left: 10%; }

          .ecosol-about-hero-scope .hero-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 5; 
            display: grid;
            grid-template-columns: 1.1fr 0.9fr; 
            gap: 60px;
            align-items: center;
          }

          /* --- Content Styles --- */
          .ecosol-about-hero-scope .hero-tag {
            font-size: 11px;
            font-weight: 800;
            color: var(--color-electric-blue);
            text-transform: uppercase;
            letter-spacing: 4px;
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
          }

          .ecosol-about-hero-scope .hero-title {
            font-size: clamp(40px, 5vw, 62px);
            font-weight: 900;
            color: var(--color-logo-navy);
            line-height: 0.95;
            letter-spacing: -2.5px;
            margin-bottom: 25px;
            text-transform: uppercase;
          }

          .ecosol-about-hero-scope .hero-title span {
            color: var(--color-electric-blue);
            display: block;
          }

          .ecosol-about-hero-scope .hero-lead {
            font-size: 18px;
            line-height: 1.6;
            color: var(--color-text-main);
            max-width: 520px;
            border-left: 3px solid var(--color-electric-blue);
            padding-left: 25px;
            margin: 0;
            text-align: justify;
          }

          /* --- Right Panel: Enhanced Glassmorphism --- */
          .ecosol-about-hero-scope .spec-panel {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0, 0, 0, 0.05);
            padding: 45px; 
            position: relative;
            box-shadow: 20px 20px 0px rgba(0, 0, 0, 0.03);
            clip-path: polygon(0% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%);
          }

          .ecosol-about-hero-scope .spec-item {
            margin-bottom: 25px;
            padding-bottom: 15px;
            border-bottom: 1px dashed #d1d5db;
          }

          .ecosol-about-hero-scope .spec-item:last-child {
            margin-bottom: 0;
            border-bottom: none;
          }

          .ecosol-about-hero-scope .spec-label {
            font-size: 10px;
            font-weight: 800;
            color: var(--color-electric-blue);
            text-transform: uppercase;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 6px;
          }

          .ecosol-about-hero-scope .spec-value {
            font-size: 14px;
            font-weight: 700;
            color: var(--color-logo-navy);
            line-height: 1.4;
            text-transform: uppercase;
          }

          @media (max-width: 1024px) {
            .ecosol-about-hero-scope .bg-block-accent, 
            .ecosol-about-hero-scope .bg-image-overlay { display: none; }
            .ecosol-about-hero-scope .hero-container {
              grid-template-columns: 1fr;
              gap: 40px;
            }
          }
        `}
      </style>

      <section className="ecosol-about-hero-scope">
        <div className="bg-grid" />
        <div className="bg-image-overlay" />
        <div className="bg-block-accent block-1" />
        <div className="bg-block-accent block-2" />

        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tag">Design Methodology</span>
            <h1 className="hero-title">
              Precision <br />
              Engineering <span>Reliability.</span>
            </h1>
            <p className="hero-lead">
              Ecosol Projects Pvt. Ltd. provides specialized consultancy,
              delivering high-fidelity power system studies and industrial
              design for critical energy infrastructure globally.
            </p>
          </div>

          <div className="spec-panel">
            <div className="spec-item">
              <span className="spec-label">Domain Expertise</span>
              <span className="spec-value">
                Electrical Power System Analysis
              </span>
            </div>

            <div className="spec-item">
              <span className="spec-label">Standardization</span>
              <span className="spec-value">IEEE • IEC • NFPA Standards</span>
            </div>

            <div className="spec-item">
              <span className="spec-label">Operational Hub</span>
              <span className="spec-value">India • MENA • Europe • Africa</span>
            </div>

            <div className="spec-item">
              <span className="spec-label">Consultancy Model</span>
              <span className="spec-value">
                Technical Support & On-Site Engagement
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHero;
