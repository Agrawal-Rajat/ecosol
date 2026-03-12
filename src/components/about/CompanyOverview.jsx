import React from "react";

function CompanyOverview() {
  const dataPoints = [
    {
      label: "IDENTITY",
      title: "Pure-Play Consultancy",
      text: "A specialized power engineering firm providing high-end technical design for complex electrical systems globally.",
    },
    {
      label: "FOCUS",
      title: "Core Competency",
      text: "Dedicated expertise in power system studies, protection coordination, and detailed engineering for utility and industrial scales.",
    },
    {
      label: "OPERATIONS",
      title: "Global Execution",
      text: "Operating through structured engineering workflows that ensure compliance with IEEE/IEC standards across diverse jurisdictions.",
    },
  ];

  return (
    <>
      <style>
        {`
          .ecosol-overview-scope {
            /* Tightened padding to sit closer to Hero */
            padding: 80px 0 100px 0;
            background-color: var(--color-bg-white);
            position: relative;
            overflow: hidden;
            font-family: var(--font-primary);
          }

          /* Layered Grid Texture */
          .ecosol-overview-scope::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: radial-gradient(var(--color-bg-light-grey) 1.2px, transparent 1.2px);
            background-size: 30px 30px;
            opacity: 0.6;
            pointer-events: none;
          }

          .ecosol-overview-scope .module-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
          }

          /* --- Standardized Heading Scale --- */
          .ecosol-overview-scope .module-header {
            margin-bottom: 60px;
            border-left: 4px solid var(--color-electric-blue);
            padding-left: 25px;
          }

          .ecosol-overview-scope .header-eyebrow {
            color: var(--color-steel-grey);
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 4px;
            display: block;
            margin-bottom: 10px;
            text-transform: uppercase;
          }

          .ecosol-overview-scope .header-title {
            font-size: clamp(32px, 5vw, 48px); /* Aligned to 48px scale */
            font-weight: 900;
            color: var(--color-logo-navy);
            margin: 0;
            letter-spacing: -1.5px;
            text-transform: uppercase;
          }

          /* --- Engineering Grid --- */
          .ecosol-overview-scope .module-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1px;
            background-color: var(--color-bg-light-grey); /* Technical Hairline Divider */
            border: 1px solid var(--color-bg-light-grey);
          }

          .ecosol-overview-scope .module-card {
            background-color: var(--color-bg-white);
            padding: 50px 40px;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            position: relative;
            display: flex;
            flex-direction: column;
          }

          .ecosol-overview-scope .module-card:hover {
            background-color: var(--color-bg-light-grey);
          }

          /* Technical Serial Code replaces large numbers */
          .ecosol-overview-scope .card-serial {
            font-family: monospace;
            font-size: 10px;
            color: var(--color-steel-grey);
            margin-bottom: 25px;
            display: block;
            opacity: 0.7;
          }

          .ecosol-overview-scope .card-label {
            font-size: 10px;
            font-weight: 800;
            color: var(--color-electric-blue);
            letter-spacing: 3px;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            text-transform: uppercase;
          }

          .ecosol-overview-scope .card-title {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-logo-navy);
            margin-bottom: 15px;
            line-height: 1.2;
            letter-spacing: -0.5px;
          }

          .ecosol-overview-scope .card-text {
            font-size: 15px;
            color: var(--color-text-main);
            line-height: 1.7;
          }

          @media (max-width: 1024px) {
            .ecosol-overview-scope .module-grid { grid-template-columns: 1fr; gap: 20px; background: none; border: none;}
            .ecosol-overview-scope .module-card { 
              padding: 40px 30px; 
              border: 1px solid var(--color-bg-light-grey);
            }
            .ecosol-overview-scope { padding: 60px 0; }
          }
        `}
      </style>

      <section className="ecosol-overview-scope">
        <div className="module-container">
          <div className="module-header">
            <span className="header-eyebrow">Structured Framework</span>
            <h2 className="header-title">Company Overview</h2>
          </div>

          <div className="module-grid">
            {dataPoints.map((item, index) => (
              <div key={index} className="module-card">
                <span className="card-serial">REF_00{index + 1}</span>
                <span className="card-label">{item.label}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CompanyOverview;
