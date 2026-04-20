import React from "react";

function Leadership() {
  const leaders = [
    {
      name: "Power Systems Leadership",
      role: "Power Systems & Electrical Design",
      experience:
        "20+ years of expertise in power generation, transmission, substations, and industrial electrical systems globally.",
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
        "Specialized in protection coordination, arc flash studies, grounding systems, and international IEEE/IEC standards.",
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
          .ecosol-leadership-scope {
            /* Tightened vertical flow */
            padding: 80px 0 100px 0;
            background-color: var(--color-bg-white);
            position: relative;
            overflow: hidden;
            font-family: var(--font-primary);
          }

          /* Layered Grid Texture - Matches AboutHero and Overview */
          .ecosol-leadership-scope::before {
            content: "";
            position: absolute;
            inset: 0;
            background-image: 
              radial-gradient(var(--color-bg-light-grey) 1.2px, transparent 1.2px),
              linear-gradient(var(--color-bg-light-grey) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-bg-light-grey) 1px, transparent 1px);
            background-size: 30px 30px, 120px 120px, 120px 120px;
            z-index: 1;
            opacity: 0.4;
            pointer-events: none;
          }

          .ecosol-leadership-scope .leadership-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
          }

          .ecosol-leadership-scope .leadership-header {
            margin-bottom: 60px;
            max-width: 850px;
            border-left: 4px solid var(--color-electric-blue);
            padding-left: 25px;
          }

          .ecosol-leadership-scope .header-tag {
            color: var(--color-electric-blue);
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 4px;
            margin-bottom: 15px;
            display: block;
          }

          .ecosol-leadership-scope .header-title {
            font-size: clamp(32px, 5vw, 48px); /* Standardized Scale */
            font-weight: 900;
            color: var(--color-logo-navy);
            line-height: 1.1;
            margin-bottom: 25px;
            letter-spacing: -1.5px;
            text-transform: uppercase;
          }

          .ecosol-leadership-scope .header-desc {
            font-size: 17px;
            color: var(--color-text-main);
            line-height: 1.7;
            max-width: 700px;
          }

          /* --- Technical Expert Cards --- */
          .ecosol-leadership-scope .leadership-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .ecosol-leadership-scope .expert-card {
            background: var(--color-bg-white);
            border: 1px solid var(--color-bg-light-grey);
            padding: 50px 40px;
            display: flex;
            flex-direction: column;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            position: relative;
            border-radius: 2px;
          }

          .ecosol-leadership-scope .expert-card:hover {
            transform: translateY(-5px);
            border-color: var(--color-logo-blue);
            box-shadow: 0 20px 40px rgba(11, 17, 32, 0.06);
          }

          .ecosol-leadership-scope .expert-name {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-logo-navy);
            margin-bottom: 10px;
            letter-spacing: -0.5px;
            text-transform: uppercase;
          }

          .ecosol-leadership-scope .expert-role {
            font-size: 12px;
            color: var(--color-electric-blue);
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 25px;
          }

          .ecosol-leadership-scope .expert-bio {
            font-size: 15px;
            color: var(--color-text-main);
            line-height: 1.7;
            margin-bottom: 35px;
            flex: 1;
          }

          /* --- Expertise Tags --- */
          .ecosol-leadership-scope .expertise-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding-top: 25px;
            border-top: 1px solid var(--color-bg-light-grey);
          }

          .ecosol-leadership-scope .tech-tag {
            font-size: 9px;
            background: var(--color-bg-light-grey);
            color: var(--color-logo-navy);
            padding: 5px 12px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 2px;
          }

          @media (max-width: 1024px) {
            .ecosol-leadership-scope .leadership-grid { grid-template-columns: 1fr; }
            .ecosol-leadership-scope { padding: 60px 0; }
            .ecosol-leadership-scope .expert-card { padding: 40px 30px; }
          }
        `}
      </style>

      <section className="ecosol-leadership-scope">
        <div className="leadership-container">
          <div className="leadership-header">
            <span className="header-tag">Technical Governance</span>
            <h2 className="header-title">Senior Engineering Leadership</h2>
            <p className="header-desc">
              Ecosol is led by professionals with over two decades of global
              experience. Every deliverable is subjected to a multi-stage
              technical review to ensure absolute engineering integrity.
            </p>
          </div>

          <div className="leadership-grid">
            {leaders.map((leader, index) => (
              <div key={index} className="expert-card">
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
