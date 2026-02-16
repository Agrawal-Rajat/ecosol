import React from "react";

function CredentialsReminder() {
  const stats = [
    { value: "400 kV", label: "Substation Projects" },
    { value: "700 MVA", label: "Plant Capacity Experience" },
    { value: "20+ Years", label: "Senior Engineering Expertise" },
  ];

  return (
    <>
      <style>
        {`
          .credentials-section {
            background-color: #ffffff;
            padding: 100px 0;
            font-family: var(--font-primary);
          }

          .credentials-container {
            max-width: var(--container-width);
            margin: 0 auto;
            padding: 0 40px;
            text-align: center;
          }

          .credentials-heading-bold {
            /* Scaled heading for high impact */
            font-size: clamp(32px, 5vw, 54px);
            font-weight: 900;
            color: var(--color-primary);
            text-transform: uppercase;
            letter-spacing: -2px;
            line-height: 1;
            margin-bottom: 20px;
          }

          .credentials-heading-bold span {
            color: var(--color-accent-green);
          }

          .credentials-subheading {
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: #94a3b8;
            display: block;
            margin-bottom: 60px;
          }

          .stats-horizontal-row {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 80px;
            margin-bottom: 60px;
          }

          .stat-cell {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .stat-v {
            font-size: clamp(28px, 4vw, 36px);
            font-weight: 800;
            color: var(--color-primary);
            margin-bottom: 8px;
            letter-spacing: -0.5px;
          }

          .stat-l {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #64748b;
            max-width: 160px;
            line-height: 1.4;
          }

          .stat-divider {
            width: 1px;
            height: 40px;
            background: #e2e8f0;
          }

          .credentials-para {
            font-size: 16px;
            color: #64748b;
            max-width: 700px;
            margin: 40px auto 0 auto;
            line-height: 1.7;
          }

          @media (max-width: 1024px) {
            .stats-horizontal-row { gap: 40px; }
          }

          @media (max-width: 768px) {
            .credentials-section { padding: 80px 0; }
            .credentials-container { padding: 0 24px; }
            .stats-horizontal-row { flex-direction: column; gap: 40px; }
            .stat-divider { 
               width: 40px; 
               height: 1px; 
            }
            .credentials-heading-bold { font-size: 38px; }
          }
        `}
      </style>

      <section className="credentials-section">
        <div className="credentials-container">
          <h2 className="credentials-heading-bold">
            Engineering Capability At <span>Scale</span>
          </h2>
          <span className="credentials-subheading">
            Infrastructure & Technical Excellence
          </span>

          <div className="stats-horizontal-row">
            <div className="stat-cell">
              <span className="stat-v">{stats[0].value}</span>
              <span className="stat-l">{stats[0].label}</span>
            </div>

            <div className="stat-divider" />

            <div className="stat-cell">
              <span className="stat-v">{stats[1].value}</span>
              <span className="stat-l">{stats[1].label}</span>
            </div>

            <div className="stat-divider" />

            <div className="stat-cell">
              <span className="stat-v">{stats[2].value}</span>
              <span className="stat-l">{stats[2].label}</span>
            </div>
          </div>

          <p className="credentials-para">
            Delivering technical excellence with a focus on safety and
            regulatory compliance across the global energy and industrial
            sectors.
          </p>
        </div>
      </section>
    </>
  );
}

export default CredentialsReminder;
