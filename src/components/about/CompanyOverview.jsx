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
          .overview-module {
            padding: 140px 0;
            background-color: #ffffff;
            position: relative;
            overflow: hidden;
          }

          /* Subtle Engineering Grid Background */
          .overview-module::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: radial-gradient(#e2e8f0 1.2px, transparent 1.2px);
            background-size: 40px 40px;
            opacity: 0.5;
            pointer-events: none;
          }

          .module-container {
            max-width: 1300px;
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
          }

          .module-header {
            margin-bottom: 80px;
            border-left: 5px solid var(--color-accent-green);
            padding-left: 30px;
          }

          .module-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2px;
            background-color: #f1f5f9; /* Creates the hairline divider */
          }

          .module-card {
            background-color: #ffffff;
            padding: 60px 40px;
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            position: relative;
            display: flex;
            flex-direction: column;
          }

          .module-card:hover {
            background-color: #fcfdfe;
            box-shadow: inset 0 -4px 0 var(--color-accent-green);
          }

          .card-number {
            font-size: 60px;
            font-weight: 900;
            color: #f1f5f9;
            line-height: 1;
            margin-bottom: 20px;
            transition: color 0.4s ease;
          }

          .module-card:hover .card-number {
            color: rgba(68, 158, 29, 0.1);
          }

          .card-label {
            font-family: monospace;
            font-size: 11px;
            font-weight: 800;
            color: var(--color-accent-green);
            letter-spacing: 3px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .card-label::after {
            content: "";
            height: 1px;
            width: 20px;
            background: var(--color-accent-green);
          }

          .card-title {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-primary);
            margin-bottom: 20px;
            line-height: 1.2;
          }

          .card-text {
            font-size: 16px;
            color: #64748b;
            line-height: 1.7;
          }

          @media (max-width: 1024px) {
            .module-grid { grid-template-columns: 1fr; }
            .module-card { padding: 40px; }
            .overview-module { padding: 80px 24px; }
          }
        `}
      </style>

      <section className="overview-module">
        <div className="module-container">
          <div className="module-header">
            <span
              style={{
                color: "#94a3b8",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "4px",
                display: "block",
                marginBottom: "10px",
              }}
            >
              STRUCTURED FRAMEWORK
            </span>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "900",
                color: "var(--color-primary)",
                margin: 0,
                letterSpacing: "-1.5px",
              }}
            >
              Company Overview
            </h2>
          </div>

          <div className="module-grid">
            {dataPoints.map((item, index) => (
              <div key={index} className="module-card">
                <div className="card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
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
