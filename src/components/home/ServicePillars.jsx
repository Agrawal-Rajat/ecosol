import React from "react";

function ServicePillars() {
  const pillars = [
    {
      id: "01",
      title: "Experience",
      description:
        "Led by senior power engineering professionals with over 20 years of field-proven expertise in global utility and industrial energy sectors.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "02",
      title: "Innovation",
      description:
        "Utilizing advanced computational modeling and specialized software to define future-ready grid stability and renewable integration.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "03",
      title: "Global Reach",
      description:
        "Providing standards-compliant electrical design across diverse jurisdictions, from India and MENA to Europe and North America.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <>
      <style>
        {`
          .pillars-horizon-section {
            padding: 120px 0; /* Reduced from 160px for a tighter vertical feel */
            background-color: #ffffff;
            position: relative;
            overflow: hidden;
          }

          /* Global Architectural Grid */
          .pillars-horizon-section::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: 
              linear-gradient(#f1f5f9 1.5px, transparent 1.5px),
              linear-gradient(90deg, #f1f5f9 1.5px, transparent 1.5px);
            background-size: 50px 50px;
            opacity: 0.6;
            pointer-events: none;
          }

          .pillars-horizon-container {
            max-width: 1150px; /* Reduced from 1300px to prevent "stretched" cards */
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
          }

          .pillars-horizon-header {
            text-align: center;
            margin-bottom: 60px; /* Tighter header spacing */
          }

          .pillars-horizon-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px; /* Slightly tighter gap for a more cohesive unit */
          }

          .horizon-card {
            position: relative;
            background: #0f172a;
            min-height: 400px; /* Optimized height for better vertical proportion */
            display: flex;
            flex-direction: column;
            transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
            overflow: hidden;
            border: 1px solid #e2e8f0;
          }

          .card-image-bg {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0.35;
            transition: transform 1s ease, opacity 0.5s ease;
            z-index: 1;
          }

          .card-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(
              to bottom, 
              rgba(15, 23, 42, 0.9) 0%, 
              rgba(15, 23, 42, 0.6) 50%, 
              rgba(15, 23, 42, 0.9) 100%
            );
            z-index: 2;
          }

          .card-content {
            position: relative;
            z-index: 3;
            padding: 45px 35px; /* Refined padding for smaller cards */
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .horizon-card:hover {
            transform: translateY(-8px);
            border-color: var(--color-accent-green);
            box-shadow: 0 25px 50px rgba(0, 51, 0, 0.12);
          }

          .horizon-card:hover .card-image-bg {
            transform: scale(1.08);
            opacity: 0.5;
          }

          .horizon-index {
            font-family: monospace;
            font-size: 11px;
            color: var(--color-accent-green);
            font-weight: 700;
            letter-spacing: 3px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .horizon-index::after {
            content: "";
            flex: 1;
            height: 1px;
            background: rgba(255, 255, 255, 0.15);
          }

          .horizon-title {
            font-size: 26px; /* Scaled down for tighter card size */
            font-weight: 800;
            color: #ffffff;
            margin-bottom: 18px;
            line-height: 1.2;
            letter-spacing: -0.5px;
          }

          .horizon-desc {
            font-size: 15px; /* Optimized for readability in smaller cards */
            color: rgba(255, 255, 255, 0.75);
            line-height: 1.6;
          }

          .horizon-marker {
            margin-top: auto;
            align-self: flex-end;
            width: 20px;
            height: 20px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
            border-right: 2px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
          }

          .horizon-card:hover .horizon-marker {
            border-color: var(--color-accent-green);
            width: 30px;
            height: 30px;
          }

          @media (max-width: 1024px) {
            .pillars-horizon-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
            .horizon-card { min-height: 380px; }
            .pillars-horizon-section { padding: 80px 24px; }
          }
        `}
      </style>

      <section className="pillars-horizon-section">
        <div className="pillars-horizon-container">
          <div className="pillars-horizon-header">
            <div
              style={{
                color: "var(--color-accent-green)",
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "4px",
                marginBottom: "12px",
              }}
            >
              Core Operational Framework
            </div>
            <h2
              style={{
                fontSize: "42px",
                fontWeight: "900",
                color: "var(--color-primary)",
                lineHeight: "1.1",
                letterSpacing: "-1.5px",
              }}
            >
              Engineered for{" "}
              <span style={{ color: "var(--color-accent-green)" }}>
                Integrity.
              </span>
            </h2>
          </div>

          <div className="pillars-horizon-grid">
            {pillars.map((pillar, index) => (
              <div key={index} className="horizon-card">
                <div
                  className="card-image-bg"
                  style={{ backgroundImage: `url(${pillar.image})` }}
                />
                <div className="card-overlay" />

                <div className="card-content">
                  <div className="horizon-index">METRIC_0{index + 1}</div>
                  <h3 className="horizon-title">{pillar.title}</h3>
                  <p className="horizon-desc">{pillar.description}</p>
                  <div className="horizon-marker" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicePillars;
