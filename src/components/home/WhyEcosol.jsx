import React from "react";

function WhyEcosol() {
  const points = [
    {
      title: "Standards-Driven Engineering",
      desc: "All engineering deliverables are developed in compliance with IEEE, IEC, and NFPA standards.",
    },
    {
      title: "Senior Engineering-Led Team",
      desc: "Engineering work is led and reviewed by professionals with over two decades of industry experience.",
    },
    {
      title: "Global Project Exposure",
      desc: "Experience across India, MENA, Europe, and international power and industrial projects.",
    },
    {
      title: "Time-Bound & Cost-Effective Delivery",
      desc: "Structured engineering execution aligned with client schedules and optimized cost outcomes.",
    },
    {
      title: "Safety & Compliance Focus",
      desc: "Strong emphasis on system safety, protection, grounding, and regulatory compliance.",
    },
  ];

  return (
    <>
      <style>
        {`
          .why-ecosol-textured {
            background-color: #ffffff;
            /* Subtle Grid Texture */
            background-image: radial-gradient(#e2e8f0 0.8px, transparent 0.8px);
            background-size: 24px 24px;
            padding: 120px 0;
            position: relative;
            overflow: hidden;
          }

          /* Subtle Blueprint Crosshair Accents */
          .why-ecosol-textured::before {
            content: '+';
            position: absolute;
            top: 20px;
            left: 20px;
            color: #cbd5e1;
            font-family: monospace;
            font-size: 20px;
          }

          .textured-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            position: relative;
            z-index: 2;
          }

          .textured-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid #e2e8f0;
            padding: 50px 40px;
            border-radius: 0; /* Sharp, professional edges */
            transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
            display: flex;
            flex-direction: column;
            position: relative;
          }

          .textured-card:hover {
            transform: translateY(-8px);
            background: #ffffff;
            border-color: var(--color-accent-green);
            box-shadow: 0 20px 40px rgba(0,0,68,0.06);
          }

          .card-index {
            font-family: 'Courier New', Courier, monospace;
            color: var(--color-accent-green);
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 25px;
            display: block;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 10px;
          }

          .textured-card:hover .card-index {
            border-bottom-color: var(--color-accent-green);
          }

          @media (max-width: 1024px) {
            .textured-grid { grid-template-columns: repeat(2, 1fr); }
          }

          @media (max-width: 768px) {
            .textured-grid { grid-template-columns: 1fr; }
            .textured-heading { font-size: 42px !important; }
            .why-ecosol-textured { padding: 80px 24px; }
          }
        `}
      </style>

      <section className="why-ecosol-textured">
        <div
          style={{
            maxWidth: "var(--container-width)",
            margin: "0 auto",
            padding: "0 40px",
          }}
        >
          <div
            style={{
              marginBottom: "80px",
              borderLeft: "6px solid var(--color-accent-green)",
              paddingLeft: "30px",
            }}
          >
            <div
              style={{
                color: "var(--color-primary)",
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
                letterSpacing: "3px",
                marginBottom: "15px",
              }}
            >
              Technical Value
            </div>
            <h2
              className="textured-heading"
              style={{
                fontSize: "52px",
                fontWeight: "800",
                color: "var(--color-primary)",
                lineHeight: "1.1",
                letterSpacing: "-1.5px",
              }}
            >
              Engineering <br />
              <span style={{ color: "var(--color-accent-green)" }}>
                Without Compromise.
              </span>
            </h2>
          </div>

          <div className="textured-grid">
            {points.map((p, i) => (
              <div key={i} className="textured-card">
                <span className="card-index">SPEC_0{i + 1}</span>
                <h3
                  style={{
                    color: "var(--color-primary)",
                    fontSize: "22px",
                    fontWeight: "700",
                    marginBottom: "18px",
                    lineHeight: "1.3",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "16px",
                    lineHeight: "1.6",
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyEcosol;
