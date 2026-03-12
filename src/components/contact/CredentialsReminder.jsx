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
          /* Scoped to prevent global CSS leaks */
          .ecosol-credentials-scope {
            background-color: var(--color-bg-white);
            padding: 100px 0;
            font-family: var(--font-primary);
            border-top: 1px solid var(--color-bg-light-grey);
          }

          .ecosol-credentials-scope .credentials-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
            text-align: center;
          }

          /* --- Heading (Aligned to 48px Scale) --- */
          .ecosol-credentials-scope .credentials-heading-bold {
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 900;
            color: var(--color-logo-navy);
            text-transform: uppercase;
            letter-spacing: -1.5px;
            line-height: 1.1;
            margin-bottom: 15px;
          }

          .ecosol-credentials-scope .credentials-heading-bold span {
            color: var(--color-electric-blue);
          }

          .ecosol-credentials-scope .credentials-subheading {
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 4px;
            color: var(--color-steel-grey);
            display: block;
            margin-bottom: 60px;
          }

          /* --- Stats Row (Dashboard Style) --- */
          .ecosol-credentials-scope .stats-horizontal-row {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 60px;
            margin-bottom: 40px;
          }

          .ecosol-credentials-scope .stat-cell {
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
          }

          .ecosol-credentials-scope .stat-v {
            font-size: clamp(26px, 4vw, 32px);
            font-weight: 900;
            color: var(--color-logo-navy);
            margin-bottom: 8px;
            letter-spacing: -1px;
          }

          .ecosol-credentials-scope .stat-l {
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            color: var(--color-steel-grey);
            max-width: 180px;
            line-height: 1.4;
          }

          .ecosol-credentials-scope .stat-divider {
            width: 1px;
            height: 50px;
            background: var(--color-bg-light-grey);
          }

          .ecosol-credentials-scope .credentials-para {
            font-size: 16px;
            color: var(--color-text-main);
            max-width: 700px;
            margin: 40px auto 0 auto;
            line-height: 1.8;
          }

          @media (max-width: 1024px) {
            .ecosol-credentials-scope .stats-horizontal-row { gap: 30px; }
          }

          @media (max-width: 768px) {
            .ecosol-credentials-scope { padding: 80px 0; }
            .ecosol-credentials-scope .credentials-container { padding: 0 24px; }
            
            .ecosol-credentials-scope .stats-horizontal-row { 
              flex-direction: column; 
              gap: 40px; 
            }
            
            .ecosol-credentials-scope .stat-divider { 
               width: 50px; 
               height: 1.5px; 
               background: var(--color-electric-blue);
               opacity: 0.3;
            }
            
            .ecosol-credentials-scope .credentials-heading-bold { 
              font-size: 36px !important; 
              letter-spacing: -1px !important;
            }
          }
        `}
      </style>

      <section className="ecosol-credentials-scope">
        <div className="credentials-container">
          <h2 className="credentials-heading-bold">
            Engineering Capability At <span>Scale.</span>
          </h2>
          <span className="credentials-subheading">
            Technical Leadership & Grid Infrastructure
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
            regulatory compliance across global energy, utility, and
            high-voltage industrial infrastructure.
          </p>
        </div>
      </section>
    </>
  );
}

export default CredentialsReminder;
