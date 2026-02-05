import React, { useState } from "react";

function IndustriesServed() {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      label: "Power & Utilities",
      desc: "Grid modernization, substation engineering, and transmission network studies for national and regional utility providers. We ensure high-voltage stability and seamless power distribution.",
      img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200",
      code: "SEC_UTIL_01",
    },
    {
      label: "Oil & Gas",
      desc: "Comprehensive electrical infrastructure for upstream and downstream operations. We specialize in hazardous area classification and robust power systems for offshore and onshore rigs.",
      img: "https://images.unsplash.com/photo-1516195851888-6f1a981a8a2a?auto=format&fit=crop&q=80&w=1200",
      code: "SEC_O&G_02",
    },
    {
      label: "Petrochemicals",
      desc: "Engineering for complex chemical processing plants. Our focus is on continuous power reliability, motor starting studies, and EMI mitigation in sensitive processing environments.",
      img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=1200",
      code: "SEC_CHEM_03",
    },
    {
      label: "Manufacturing & Process",
      desc: "Optimization of industrial plant electrical systems. We deliver protection coordination, arc flash studies, and energy efficiency audits for large-scale manufacturing facilities.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200",
      code: "SEC_MANU_04",
    },
    {
      label: "Renewables",
      desc: "Technical consultancy for Solar PV, Wind energy integration, and Battery Energy Storage Systems (BESS). We bridge the gap between intermittent generation and grid requirements.",
      img: "https://images.unsplash.com/photo-1509391366360-fe5bb6583e29?auto=format&fit=crop&q=80&w=1200",
      code: "SEC_RENE_05",
    },
    {
      label: "Infrastructure",
      desc: "Power engineering for transportation networks, data centers, and critical public infrastructure. Ensuring safety and compliance with international standards (IEEE/IEC).",
      img: "https://images.unsplash.com/photo-1517089534706-3d5efebb2492?auto=format&fit=crop&q=80&w=1200",
      code: "SEC_INFR_06",
    },
  ];

  return (
    <>
      <style>
        {`
          :root {
            --color-primary: #0f172a;
            --color-accent-green: #10b981;
            --color-grid: #e2e8f0;
          }

          .sectors-section {
            padding: 100px 0; /* Reduced from 140px */
            background-color: #f8fafc;
            overflow: hidden;
            position: relative;
          }

          .sectors-grid-bg {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px);
            background-size: 40px 40px; /* Smaller grid cells */
            opacity: 0.4;
            pointer-events: none;
          }

          .sectors-container {
            max-width: 1280px; /* Slightly tighter container */
            margin: 0 auto;
            padding: 0 40px;
            display: grid;
            grid-template-columns: 380px 1fr; /* Reduced column width from 450px */
            gap: 60px; /* Reduced gap from 80px */
            position: relative;
            z-index: 2;
          }

          /* --- HEADING STYLES --- */
          .eyebrow {
            color: var(--color-accent-green);
            font-weight: 800;
            letter-spacing: 3px;
            font-size: 12px; /* Reduced from 13px */
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
          }
          
          .eyebrow::before {
            content: "";
            display: block;
            width: 6px; height: 6px;
            background: var(--color-accent-green);
            border-radius: 50%;
            box-shadow: 0 0 8px var(--color-accent-green);
          }

          .main-heading {
            font-size: 48px; /* Reduced from 56px */
            font-weight: 900;
            color: var(--color-primary);
            letter-spacing: -2px;
            line-height: 1.1;
            margin: 0;
          }

          .heading-accent {
            color: var(--color-accent-green);
          }

          /* --- NAV BUTTONS --- */
          .sector-nav {
            display: flex;
            flex-direction: column;
            gap: 8px; /* Reduced gap */
          }

          .sector-btn {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            padding: 20px 24px; /* Reduced padding from 25px 30px */
            text-align: left;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
          }

          .sector-btn:hover {
            border-color: var(--color-accent-green);
            background: #f1f5f9;
          }

          .sector-btn.active {
            background: var(--color-primary);
            border-color: var(--color-primary);
            transform: translateX(15px); /* Reduced movement */
            box-shadow: -15px 15px 30px rgba(0,0,51,0.1);
          }

          .sector-label {
            font-size: 16px; /* Reduced from 18px */
            font-weight: 700;
            color: var(--color-primary);
            transition: color 0.3s;
          }

          .sector-btn.active .sector-label {
            color: #ffffff;
          }

          .sector-code {
            font-family: monospace;
            font-size: 10px;
            color: #94a3b8;
            letter-spacing: 1px;
          }

          .sector-btn.active .sector-code {
            color: var(--color-accent-green);
          }

          /* --- DISPLAY CARD --- */
          .sector-display-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            height: 500px; /* Reduced from 600px */
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            border-radius: 4px;
          }

          .sector-image-area {
            flex: 1;
            overflow: hidden;
            position: relative;
          }

          .sector-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s ease;
          }

          .sector-display-card:hover .sector-img {
            transform: scale(1.05);
          }

          .sector-info-overlay {
            padding: 35px; /* Reduced from 50px */
            background: #ffffff;
            border-top: 3px solid var(--color-accent-green);
          }

          .sector-title-large {
            font-size: 28px; /* Reduced from 32px */
            font-weight: 900;
            color: var(--color-primary);
            margin-bottom: 15px;
            letter-spacing: -1px;
          }

          .sector-desc-large {
            font-size: 15px; /* Reduced from 17px */
            color: #64748b;
            line-height: 1.7;
            max-width: 650px;
          }

          @media (max-width: 1100px) {
            .sectors-section { padding: 60px 0; }
            .sectors-container { grid-template-columns: 1fr; gap: 40px; }
            .sector-btn.active { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
            .sector-display-card { height: auto; }
            .main-heading { font-size: 36px; }
          }
        `}
      </style>

      <section className="sectors-section">
        <div className="sectors-grid-bg" />

        <div className="sectors-container">
          {/* Left: Interactive Navigation */}
          <div className="sector-nav-wrapper">
            {/* UPDATED HEADING BLOCK */}
            <div style={{ marginBottom: "40px" }}>
              <div className="eyebrow">Operational Domains</div>
              <h2 className="main-heading">
                Industries <span className="heading-accent">Served.</span>
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
