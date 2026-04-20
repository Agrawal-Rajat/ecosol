import React, { useState } from "react";

function IndustriesServed() {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      label: "Power Utilities",
      desc: "Engineering consultancy services supporting electric utilities with power system studies, grid stability analysis, and substation infrastructure design.",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
      code: "SEC_UTIL_01",
    },
    {
      label: "Renewable Energy Developers",
      desc: "Technical engineering studies supporting renewable energy projects including grid integration analysis, power system studies, and electrical infrastructure design.",
      img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200",
      code: "SEC_REN_02",
    },
    {
      label: "Industrial Manufacturing Facilities",
      desc: "Electrical engineering support for complex industrial facilities including power distribution design, grounding engineering, and system reliability analysis.",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1200",
      code: "SEC_IND_03",
    },
    {
      label: "EPC Companies",
      desc: "Independent engineering advisory and technical consulting services supporting EPC contractors during project design, procurement, and technical evaluation phases.",
      img: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=1200",
      code: "SEC_EPC_04",
    },
    /*
    {
      label: "Transmission Infrastructure Projects",
      desc: "Advanced engineering analysis for high-voltage transmission systems including electromagnetic studies, grounding design, and transmission corridor analysis.",
      img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?auto=format&fit=crop&q=80&w=1200",
      code: "SEC_TRN_04",
    },
    */
  ];

  return (
    <>
      <style>
        {`
          /* Scoped to prevent global CSS leaks */
          .ecosol-sectors-scope {
            padding: 100px 0;
            background-color: var(--color-bg-white);
            overflow: hidden;
            position: relative;
            border-bottom: 1px solid var(--color-bg-light-grey);
          }

          .ecosol-sectors-scope .sectors-grid-bg {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: linear-gradient(var(--color-bg-light-grey) 1px, transparent 1px), 
                              linear-gradient(90deg, var(--color-bg-light-grey) 1px, transparent 1px);
            background-size: 50px 50px;
            opacity: 0.8;
            pointer-events: none;
          }

          .ecosol-sectors-scope .sectors-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
            display: grid;
            grid-template-columns: 400px 1fr;
            gap: 60px;
            position: relative;
            z-index: 2;
          }

          /* --- HEADING STYLES (Aligned with CoreServices) --- */
          .ecosol-sectors-scope .eyebrow {
            color: var(--color-steel-grey);
            font-weight: 800;
            letter-spacing: 3px;
            font-size: 12px;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 15px;
          }
          
          .ecosol-sectors-scope .eyebrow::before {
            content: "";
            display: block;
            width: 12px; height: 2px;
            background: var(--color-electric-blue);
          }

          .ecosol-sectors-scope .main-heading {
            /* EXACT MATCH to CoreServices heading scale */
            font-size: clamp(32px, 4vw, 42px);
            font-weight: 900;
            color: var(--color-logo-navy);
            letter-spacing: -1px;
            line-height: 1.2;
            margin: 0;
          }

          .ecosol-sectors-scope .heading-accent {
            color: var(--color-electric-blue);
          }

          /* --- NAV BUTTONS --- */
          .ecosol-sectors-scope .sector-nav {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .ecosol-sectors-scope .sector-btn {
            background: var(--color-bg-white);
            border: 1px solid var(--color-bg-light-grey);
            padding: 22px 28px;
            text-align: left;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            position: relative;
            border-radius: 2px;
          }

          .ecosol-sectors-scope .sector-btn:hover {
            border-color: var(--color-logo-blue);
            background: var(--color-bg-light-grey);
          }

          .ecosol-sectors-scope .sector-btn.active {
            background: var(--color-logo-navy);
            border-color: var(--color-logo-navy);
            transform: translateX(10px);
            box-shadow: 0 10px 30px rgba(0, 0, 102, 0.15);
          }

          .ecosol-sectors-scope .sector-btn.active::after {
            content: "";
            position: absolute;
            left: 0; top: 20%; bottom: 20%;
            width: 3px;
            background: var(--color-electric-blue);
          }

          .ecosol-sectors-scope .sector-label {
            font-size: 15px;
            font-weight: 700;
            color: var(--color-text-main);
            transition: color 0.3s;
          }

          .ecosol-sectors-scope .sector-btn.active .sector-label {
            color: var(--color-bg-white);
          }

          .ecosol-sectors-scope .sector-code {
            font-family: monospace;
            font-size: 10px;
            color: var(--color-steel-grey);
            letter-spacing: 1px;
            opacity: 0.6;
          }

          .ecosol-sectors-scope .sector-btn.active .sector-code {
            color: var(--color-electric-blue);
            opacity: 1;
          }

          /* --- DISPLAY CARD --- */
          .ecosol-sectors-scope .sector-display-card {
            background: var(--color-bg-white);
            border: 1px solid var(--color-bg-light-grey);
            height: 550px;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            border-radius: 2px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.03);
          }

          .ecosol-sectors-scope .sector-image-area {
            flex: 1;
            overflow: hidden;
            position: relative;
            background: var(--color-deep-blue);
          }

          .ecosol-sectors-scope .sector-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.9;
            filter: grayscale(20%);
            transition: transform 1.2s ease, filter 0.8s ease;
          }

          .ecosol-sectors-scope .sector-display-card:hover .sector-img {
            transform: scale(1.05);
            filter: grayscale(0%);
          }

          .ecosol-sectors-scope .sector-info-overlay {
            padding: 40px;
            background: var(--color-bg-white);
            border-top: 1px solid var(--color-bg-light-grey);
            position: relative;
          }

          .ecosol-sectors-scope .sector-info-overlay::before {
             content: "";
             position: absolute;
             top: -1px; left: 0; width: 60px; height: 3px;
             background: var(--color-logo-blue);
          }

          .ecosol-sectors-scope .sector-title-large {
            font-size: 26px;
            font-weight: 900;
            color: var(--color-logo-navy);
            margin-bottom: 15px;
            letter-spacing: -0.5px;
          }

          .ecosol-sectors-scope .sector-desc-large {
            font-size: 15px;
            color: var(--color-text-main);
            line-height: 1.7;
            max-width: 650px;
          }

          @media (max-width: 1100px) {
            .ecosol-sectors-scope { padding: 60px 0; }
            .ecosol-sectors-scope .sectors-container { grid-template-columns: 1fr; gap: 40px; padding: 0 24px; }
            .ecosol-sectors-scope .sector-btn.active { transform: translateY(-5px) translateX(0); }
            .ecosol-sectors-scope .sector-display-card { height: auto; }
          }
        `}
      </style>

      <section className="ecosol-sectors-scope">
        <div className="sectors-grid-bg" />

        <div className="sectors-container">
          {/* Left: Interactive Navigation */}
          <div className="sector-nav-wrapper">
            <div style={{ marginBottom: "40px" }}>
              <div className="eyebrow">Operational Domains</div>
              <h2 className="main-heading">
                Market <span className="heading-accent">Sectors.</span>
              </h2>
            </div>

            <div className="sector-nav">
              {industries.map((ind, index) => (
                <button
                  key={index}
                  className={`sector-btn ${activeTab === index ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="sector-label">{ind.label}</span>
                  <span className="sector-code">{ind.code}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Display Card */}
          <div className="sector-display-card">
            <div className="sector-image-area">
              <img
                src={industries[activeTab].img}
                alt={industries[activeTab].label}
                className="sector-img"
              />
            </div>
            <div className="sector-info-overlay">
              <h3 className="sector-title-large">
                {industries[activeTab].label}
              </h3>
              <p className="sector-desc-large">{industries[activeTab].desc}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndustriesServed;
