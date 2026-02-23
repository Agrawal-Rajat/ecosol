import React from "react";

function Leadership() {
  const leaders = [
    {
      name: "Senior Engineering Leadership",
      role: "Power Systems & Electrical Design",
      experience:
        "20+ years of experience in power generation, transmission, substations, and industrial electrical systems.",
      details: [
        "Generation",
        "Transmission",
        "Substations",
        "Industrial Systems",
      ],
    },
    {
      name: "Engineering & Project Oversight",
      role: "Protection, Safety & Compliance",
      experience:
        "Extensive experience in protection coordination, arc flash studies, grounding systems, and international standards compliance.",
      details: [
        "Protection Coordination",
        "Arc Flash",
        "Grounding",
        "IEEE/IEC Compliance",
      ],
    },
  ];

  return (
    <>
      <style>
        {`
          .leadership-section {
            padding: 120px 0;
            background-color: #ffffff;
            background-image: radial-gradient(#e2e8f0 0.8px, transparent 0.8px);
            background-size: 24px 24px;
            position: relative;
          }

          .leadership-container {
            max-width: var(--container-width);
            margin: 0 auto;
            padding: 0 40px;
          }

          .leadership-header {
            margin-bottom: 80px;
            max-width: 800px;
          }

          .leadership-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }

          .expert-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            padding: 60px 45px;
            display: flex;
            flex-direction: column;
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            position: relative;
          }

          .expert-card:hover {
            transform: translateY(-8px);
            border-color: var(--color-accent-green);
            box-shadow: 0 30px 60px rgba(0,0,68,0.06);
          }

          .expert-meta {
            font-family: monospace;
            font-size: 11px;
            color: var(--color-accent-green);
            letter-spacing: 3px;
            font-weight: 700;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .expert-meta::after {
            content: "";
            flex: 1;
            height: 1px;
            background: #f1f5f9;
          }

          .expert-name {
            font-size: 24px;
            font-weight: 800;
            color: var(--color-primary);
            margin-bottom: 12px;
          }

          .expert-role {
            font-size: 15px;
            color: var(--color-accent-green);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 25px;
          }

          .expert-bio {
            font-size: 16px;
            color: #64748b;
            line-height: 1.7;
            margin-bottom: 35px;
            flex: 1;
          }

          .expertise-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding-top: 25px;
            border-top: 1px solid #f1f5f9;
          }

          .tech-tag {
            font-size: 11px;
            background: #f8fafc;
            color: #94a3b8;
            padding: 4px 10px;
            font-weight: 600;
            text-transform: uppercase;
          }

          @media (max-width: 1024px) {
            .leadership-grid { grid-template-columns: 1fr; }
            .leadership-section { padding: 100px 24px; }
            .expert-card { padding: 40px 30px; }
          }
        `}
      </style>

      <section className="leadership-section">
        <div className="leadership-container">
          <div className="leadership-header">
            <div
              style={{
                color: "var(--color-accent-green)",
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "4px",
                marginBottom: "15px",
              }}
            >
              Technical Governance
            </div>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "900",
                color: "var(--color-primary)",
                lineHeight: "1.1",
                marginBottom: "30px",
                letterSpacing: "-1.5px",
              }}
            >
              Senior Engineering Leadership
            </h2>
            <p
              style={{ fontSize: "18px", color: "#64748b", lineHeight: "1.7" }}
            >
              Ecosol is led by professionals with over two decades of experience
              delivering complex electrical engineering solutions. Every
              deliverable is reviewed by our senior technical team to ensure
              absolute integrity.
            </p>
          </div>

          <div className="leadership-grid">
            {leaders.map((leader, index) => (
              <div key={index} className="expert-card">
                <div className="expert-meta">AUTH_LEVEL_0{index + 1}</div>
                <h3 className="expert-name">{leader.name}</h3>
                <p className="expert-role">{leader.role}</p>
                <p className="expert-bio">{leader.experience}</p>

                <div className="expertise-tags">
                  {leader.details.map((tag, i) => (
                    <span key={i} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Leadership;
