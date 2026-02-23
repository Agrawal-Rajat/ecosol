import React from "react";

function CurrentOpportunities() {
  const jobs = [
    {
      title: "Electrical Design Engineer",
      experience: "3–8 Years Experience",
      details: [
        "Preparation of single line diagrams and electrical layouts",
        "Equipment sizing and specification",
        "Coordination with multidisciplinary teams",
        "Compliance with IEEE / IEC standards",
      ],
    },
    {
      title: "Power System Studies Engineer",
      experience: "3–10 Years Experience",
      details: [
        "Load flow and short circuit analysis",
        "Protection coordination studies",
        "Arc flash and grounding studies",
        "Use of ETAP / DIgSILENT / PSCAD",
      ],
    },
    {
      title: "Graduate Engineer Trainee",
      experience: "0–2 Years Experience",
      details: [
        "Support in engineering calculations",
        "Preparation of technical documentation",
        "Assistance in system studies and design tasks",
        "Learning under senior engineering supervision",
      ],
    },
  ];

  return (
    <>
      <style>
        {`
          .opportunities-section {
            background-color: var(--color-white);
            padding: 100px 0;
            font-family: var(--font-primary);
          }

          .opportunities-container {
            max-width: var(--container-width);
            margin: 0 auto;
            padding: 0 40px;
          }

          .opps-header {
            margin-bottom: 70px;
          }

          .opps-title {
            /* Optimized clamp for better mobile scaling */
            font-size: clamp(38px, 8vw, 56px); 
            font-weight: 900;
            color: var(--color-primary);
            text-transform: uppercase;
            margin-bottom: 20px;
            letter-spacing: -2px;
            line-height: 0.95; /* Tighter line height for large text */
          }

          .opps-title span {
            color: var(--color-accent-green);
          }

          .opps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
          }

          .job-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            padding: 40px 30px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: all 0.3s ease;
          }

          .job-card:hover {
            border-color: var(--color-primary);
            box-shadow: 0 15px 30px rgba(0, 0, 102, 0.05);
          }

          .job-header {
            margin-bottom: 25px;
          }

          .job-title-text {
            font-size: 22px;
            font-weight: 800;
            color: var(--color-primary);
            margin-bottom: 10px;
            line-height: 1.2;
            text-transform: uppercase;
          }

          .job-exp-tag {
            font-size: 13px;
            font-weight: 700;
            color: var(--color-accent-green);
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .job-req-list {
            margin: 0 0 35px 0;
            padding: 0;
            list-style: none;
          }

          .job-req-list li {
            font-size: 14.5px;
            color: #64748b;
            padding: 10px 0;
            border-bottom: 1px solid #f1f5f9;
            display: flex;
            align-items: flex-start;
          }

          .job-req-list li::before {
            content: "→";
            color: var(--color-accent-green);
            font-weight: bold;
            margin-right: 12px;
          }

          .apply-link {
            display: block;
            text-align: center;
            padding: 16px;
            background-color: var(--color-primary);
            color: #ffffff !important;
            text-decoration: none;
            font-size: 14px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: background-color 0.3s ease;
          }

          .apply-link:hover {
            background-color: var(--color-accent-green);
          }

          .general-query {
            margin-top: 60px;
            font-size: 15px;
            color: #64748b;
            text-align: center;
            padding: 25px;
            background: var(--color-bg);
          }

          .general-query b {
            color: var(--color-primary);
          }

          @media (max-width: 768px) {
            .opportunities-container { padding: 0 24px; }
            .opps-header { margin-bottom: 45px; }
            
            /* Enhanced mobile heading scale */
            .opps-title { 
              font-size: 42px; 
              letter-spacing: -1.5px;
              line-height: 1; 
            }
            
            .opps-grid { grid-template-columns: 1fr; }
            .job-card { padding: 30px 20px; }
          }
        `}
      </style>

      <section className="opportunities-section" id="careers-list">
        <div className="opportunities-container">
          <header className="opps-header">
            <h2 className="opps-title">
              Current <span>Opportunities</span>
            </h2>
          </header>

          <div className="opps-grid">
            {jobs.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-content-wrap">
                  <div className="job-header">
                    <h3 className="job-title-text">{job.title}</h3>
                    <span className="job-exp-tag">{job.experience}</span>
                  </div>

                  <ul className="job-req-list">
                    {job.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>

                <a href="#contact" className="apply-link">
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          <p className="general-query">
            Don't see a suitable role? Share your profile at{" "}
            <b>info@ecosol.com</b>.
          </p>
        </div>
      </section>
    </>
  );
}

export default CurrentOpportunities;
