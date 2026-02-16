import React from "react";

function WhyWorkWithEcosol() {
  const values = [
    {
      title: "Global Projects",
      description:
        "Contribute to engineering assignments across India, MENA, and international projects.",
    },
    {
      title: "Technical Depth",
      description:
        "Work on advanced power system studies and detailed electrical design.",
    },
    {
      title: "Standards Driven",
      description:
        "Practices aligned with IEEE, IEC, NFPA, and international standards.",
    },
    {
      title: "Mentorship",
      description:
        "Work under professionals with over two decades of power system experience.",
    },
    {
      title: "Excellence Growth",
      description:
        "Professional growth driven by technical competence and engineering excellence.",
    },
  ];

  return (
    <>
      <style>
        {`
          .orbit-section {
            background-color: var(--color-bg);
            padding: 100px 0;
            font-family: var(--font-primary);
            overflow: hidden;
            display: flex;
            justify-content: center;
          }

          .orbit-container {
            width: 100%;
            max-width: 1200px;
            height: 800px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .orbit-hub {
            width: 280px;
            height: 280px;
            background: var(--color-primary);
            color: var(--color-white);
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 30px;
            z-index: 20;
            border: 4px solid var(--color-accent-green);
            box-shadow: 0 0 50px rgba(0, 0, 102, 0.2);
          }

          .hub-label {
            font-family: 'Courier New', monospace;
            font-size: 11px;
            letter-spacing: 4px;
            color: var(--color-accent-green);
            margin-bottom: 15px;
            text-transform: uppercase;
            font-weight: 700;
          }

          .hub-title {
            font-size: 38px;
            font-weight: 900;
            line-height: 1;
            text-transform: uppercase;
            letter-spacing: -1px;
          }

          .orbit-ring {
            position: absolute;
            width: 750px;
            height: 750px;
            border: 1px dashed rgba(203, 213, 225, 0.6);
            border-radius: 50%;
            z-index: 1;
            pointer-events: none;
          }

          .orbit-card {
            position: absolute;
            width: 260px;
            background: #ffffff;
            padding: 30px 24px;
            z-index: 10;
            /* Animation transition removed for hover movement */
            
            clip-path: polygon(
              0% 0%, 
              85% 0%, 
              100% 15%, 
              100% 100%, 
              0% 100%
            );
            border: 1px solid #e2e8f0;
          }

          .orbit-card::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 40px;
            height: 40px;
            background: var(--color-accent-green);
            clip-path: polygon(100% 0, 100% 100%, 0 0);
            opacity: 0.1;
            transition: opacity 0.3s ease;
          }

          /* Hover effect movement and scaling removed */
          .orbit-card:hover::before {
            opacity: 0.8;
          }

          .pos-0 { transform: rotate(-90deg) translate(380px) rotate(90deg); }
          .pos-1 { transform: rotate(-18deg) translate(380px) rotate(18deg); }
          .pos-2 { transform: rotate(54deg) translate(380px) rotate(-54deg); }
          .pos-3 { transform: rotate(126deg) translate(380px) rotate(-126deg); }
          .pos-4 { transform: rotate(198deg) translate(380px) rotate(-198deg); }

          .card-title {
            font-size: 17px;
            font-weight: 800;
            color: var(--color-primary);
            margin-bottom: 10px;
            text-transform: uppercase;
          }

          .card-desc {
            font-size: 14px;
            color: #64748b;
            line-height: 1.6;
          }

          @media (max-width: 1100px) {
            .orbit-container {
              height: auto;
              flex-direction: column;
              padding: 0 24px;
            }
            .orbit-ring { display: none; }
            .orbit-card {
              position: static;
              transform: none !important;
              width: 100%;
              max-width: 600px;
              margin-top: 20px;
              clip-path: none;
              border-left: 5px solid var(--color-accent-green);
            }
            .orbit-hub {
              margin-bottom: 40px;
              width: 240px;
              height: 240px;
            }
          }
        `}
      </style>

      <section className="orbit-section">
        <div className="orbit-container">
          <div className="orbit-ring" />

          <div className="orbit-hub">
            <span className="hub-label">JOIN THE EXPERTS</span>
            <h2 className="hub-title" style={{ color: "#ffffff" }}>
              WHY <br />
              <span style={{ color: "#ffffff", fontSize: "32px" }}>
                ECOSOL?
              </span>
            </h2>
          </div>

          {values.map((value, index) => (
            <div key={index} className={`orbit-card pos-${index}`}>
              <h3 className="card-title">{value.title}</h3>
              <p className="card-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default WhyWorkWithEcosol;
