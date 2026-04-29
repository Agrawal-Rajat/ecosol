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
            padding: 120px 0;
            background-color: var(--color-bg-white);
            position: relative;
            overflow: hidden;
            border-top: 1px solid var(--color-bg-light-grey);
          }

          /* Architectural Blueprint Grid */
          .pillars-horizon-section::before {
            content: "";
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background-image: 
              linear-gradient(var(--color-bg-light-grey) 1.5px, transparent 1.5px),
              linear-gradient(90deg, var(--color-bg-light-grey) 1.5px, transparent 1.5px);
            background-size: 60px 60px;
            opacity: 0.8;
            pointer-events: none;
          }

          .pillars-horizon-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
          }

          .pillars-horizon-header {
            text-align: center;
            margin-bottom: 70px;
          }

          .pillars-horizon-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }

          .horizon-card {
            position: relative;
            background: var(--color-deep-blue);
            min-height: 420px;
            display: flex;
            flex-direction: column;
            transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 2px; /* Engineering sharp edges */
          }

          .card-image-bg {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0.3;
            filter: grayscale(100%);
            transition: transform 1.2s ease, opacity 0.5s ease, filter 0.5s ease;
            z-index: 1;
          }

          .card-overlay {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(
              to bottom, 
              rgba(11, 17, 32, 0.95) 0%, 
              rgba(11, 17, 32, 0.7) 50%, 
              rgba(11, 17, 32, 0.95) 100%
            );
            z-index: 2;
          }

          .card-content {
            position: relative;
            z-index: 3;
            padding: 50px 40px;
            flex: 1;
            display: flex;
            flex-direction: column;
          }

          .horizon-card:hover {
            transform: translateY(-10px);
            border-color: var(--color-logo-blue);
            box-shadow: 0 30px 60px rgba(11, 17, 32, 0.3);
          }

          .horizon-card:hover .card-image-bg {
            transform: scale(1.1);
            opacity: 0.4;
            filter: grayscale(0%);
          }

          .horizon-index {
            font-family: var(--font-primary);
            font-size: 11px;
            color: var(--color-electric-blue); /* High-tech blue instead of green */
            font-weight: 800;
            letter-spacing: 4px;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .horizon-index::after {
            content: "";
            flex: 1;
            height: 1px;
            background: rgba(255, 255, 255, 0.1);
          }

          .horizon-title {
            font-size: 28px;
            font-weight: 800;
            color: var(--color-bg-white);
            margin-bottom: 20px;
            line-height: 1.2;
            letter-spacing: -0.5px;
          }

          .horizon-desc {
            font-size: 15px;
            color: var(--color-steel-grey); /* Technical grey for descriptions */
            line-height: 1.7;
            text-align: justify;
          }

          .horizon-marker {
            margin-top: auto;
            align-self: flex-end;
            width: 20px;
            height: 20px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.1);
            border-right: 2px solid rgba(255, 255, 255, 0.1);
            transition: all 0.4s ease;
          }

          .horizon-card:hover .horizon-marker {
            border-color: var(--color-electric-blue);
            width: 35px;
            height: 35px;
          }

          @media (max-width: 1024px) {
            .pillars-horizon-grid { grid-template-columns: 1fr; }
            .horizon-card { min-height: 400px; }
            .pillars-horizon-section { padding: 80px 24px; }
          }
        `}
      </style>

      <section className="pillars-horizon-section">
        <div className="pillars-horizon-container">
          <div className="pillars-horizon-header">
            <div
              style={{
                color: "var(--color-steel-grey)",
                fontSize: "12px",
                fontWeight: "800",
                textTransform: "uppercase",
                letterSpacing: "4px",
                marginBottom: "12px",
              }}
            >
              Operational Foundations
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 42px)",
                fontWeight: "900",
                color: "var(--color-logo-navy)",
                lineHeight: "1.1",
                letterSpacing: "-1px",
              }}
            >
              Consultancy Built on{" "}
              <span style={{ color: "var(--color-electric-blue)" }}>
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
                  <div className="horizon-index"></div>
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
