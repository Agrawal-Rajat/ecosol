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
          .impact-section {
            padding: 80px 0;
            background: #ffffff;
          }

          .impact-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 30px;
          }

          /* Metrics Grid */
          .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            text-align: center;
            border-bottom: 1px solid #f1f5f9;
            padding-bottom: 80px;
            margin-bottom: 80px;
          }

          .metric-value {
            font-size: 48px;
            font-weight: 900;
            color: #000033;
            margin-bottom: 10px;
            display: block;
          }

          .metric-label {
            font-size: 14px;
            font-weight: 700;
            color: #10b981;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          /* Insights Section */
          .insights-header {
            margin-bottom: 50px;
          }

          .insights-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
          }

          .insight-card {
            background: #f8fafc;
            padding: 40px;
            border-left: 4px solid #10b981;
            transition: all 0.3s ease;
            cursor: pointer;
            text-decoration: none;
            display: block;
          }

          .insight-card:hover {
            background: #ffffff;
            box-shadow: 0 20px 40px rgba(0,0,51,0.08);
            transform: translateY(-5px);
          }

          .insight-cat {
            font-size: 11px;
            font-weight: 800;
            color: #10b981;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 15px;
            display: block;
          }

          .insight-title {
            font-size: 20px;
            font-weight: 800;
            color: #000033;
            line-height: 1.4;
            margin-bottom: 15px;
          }

          .insight-desc {
            font-size: 15px;
            color: #64748b;
            line-height: 1.6;
          }

          @media (max-width: 768px) {
            .impact-section { padding: 60px 0; }
            .metric-value { font-size: 36px; }
            .insight-card { padding: 30px; }
          }
        `}
      </style>

      <section className="impact-section">
        <div className="impact-container">
          {/* Project Impact Metrics */}
          <div className="metrics-grid">
            {metrics.map((m, i) => (
              <div key={i} className="metric-item">
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Insights Section (Thought Leadership) */}
          <div className="insights-header">
            <span
              style={{
                color: "#10b981",
                fontWeight: "800",
                fontSize: "12px",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Thought Leadership
            </span>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "900",
                color: "#000033",
                marginTop: "10px",
              }}
            >
              Engineering Insights.
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
