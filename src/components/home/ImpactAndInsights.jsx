import React from "react";

function ImpactAndInsights() {
  const metrics = [
    { label: "Power System Studies", value: "100+" },
    { label: "Grounding Design Studies", value: "50+" },
    { label: "Utility-Scale Projects", value: "Multiple" },
    { label: "Sectors Supported", value: "Global" },
  ];

  const insights = [
    {
      category: "Grounding",
      title: "Importance of Grounding Design in High Voltage Substations",
      desc: "Analyzing fault current dissipation and personnel safety in HV environments.",
    },
    {
      category: "Renewables",
      title: "Power System Studies for Renewable Integration",
      desc: "Ensuring grid stability during the transition to sustainable energy sources.",
    },
    {
      category: "Interference",
      title: "Managing Electromagnetic Interference in Transmission Corridors",
      desc: "Mitigation strategies for high-voltage interaction with nearby infrastructure.",
    },
  ];

  return (
    <>
      <style>
        {`
          /* Scoping all styles to prevent global CSS leaks */
          .ecosol-impact-scope {
            padding: 100px 0;
            background: var(--color-bg-white);
            border-top: 1px solid var(--color-bg-light-grey);
          }

          .ecosol-impact-scope .impact-inner-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
          }

          /* --- Metrics Grid --- */
          .ecosol-impact-scope .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
            text-align: center;
            border-bottom: 1px solid var(--color-bg-light-grey);
            padding-bottom: 80px;
            margin-bottom: 80px;
          }

          .ecosol-impact-scope .metric-value {
            font-size: 52px;
            font-weight: 900;
            color: var(--color-logo-navy);
            margin-bottom: 8px;
            display: block;
            letter-spacing: -2px;
          }

          .ecosol-impact-scope .metric-label {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-steel-grey);
            text-transform: uppercase;
            letter-spacing: 2px;
          }

          /* --- Insights Section --- */
          .ecosol-impact-scope .insights-header {
            margin-bottom: 60px;
          }

          .ecosol-impact-scope .insights-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
          }

          .ecosol-impact-scope .insight-card {
            background: var(--color-bg-light-grey);
            padding: 45px 40px;
            border-left: 3px solid var(--color-logo-blue);
            border-radius: 2px;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            cursor: pointer;
            text-decoration: none;
            display: block;
            border-right: 1px solid transparent;
            border-top: 1px solid transparent;
            border-bottom: 1px solid transparent;
          }

          .ecosol-impact-scope .insight-card:hover {
            background: var(--color-bg-white);
            box-shadow: 0 25px 50px rgba(11, 17, 32, 0.08);
            transform: translateY(-8px);
            border-color: var(--color-bg-light-grey);
            border-left-color: var(--color-electric-blue);
          }

          .ecosol-impact-scope .insight-cat {
            font-size: 11px;
            font-weight: 800;
            color: var(--color-electric-blue);
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 20px;
            display: block;
          }

          .ecosol-impact-scope .insight-title {
            font-size: 22px;
            font-weight: 800;
            color: var(--color-logo-navy);
            line-height: 1.3;
            margin-bottom: 18px;
            letter-spacing: -0.5px;
          }

          .ecosol-impact-scope .insight-desc {
            font-size: 15px;
            color: var(--color-text-main);
            line-height: 1.7;
          }

          @media (max-width: 768px) {
            .ecosol-impact-scope { padding: 80px 0; }
            .ecosol-impact-scope .impact-inner-container { padding: 0 24px; }
            .ecosol-impact-scope .metric-value { font-size: 42px; }
          }
        `}
      </style>

      <section className="ecosol-impact-scope">
        <div className="impact-inner-container">
          <div className="metrics-grid">
            {metrics.map((m, i) => (
              <div key={i} className="metric-item">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="insights-header">
            <span
              style={{
                color: "var(--color-steel-grey)",
                fontWeight: "800",
                fontSize: "12px",
                letterSpacing: "4px",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "10px",
              }}
            >
              Technical Expertise
            </span>
            <h2
              style={{
                /* Standardized heading size for consistency */
                fontSize: "clamp(32px, 4vw, 42px)",
                fontWeight: "900",
                color: "var(--color-logo-navy)",
                letterSpacing: "-1.5px",
                lineHeight: "1.2",
                margin: "0",
              }}
            >
              Engineering{" "}
              <span style={{ color: "var(--color-electric-blue)" }}>
                Insights.
              </span>
            </h2>
          </div>

          <div className="insights-grid">
            {insights.map((insight, i) => (
              <a href="#" key={i} className="insight-card">
                <span className="insight-cat">{insight.category}</span>
                <h3 className="insight-title">{insight.title}</h3>
                <p className="insight-desc">{insight.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ImpactAndInsights;
