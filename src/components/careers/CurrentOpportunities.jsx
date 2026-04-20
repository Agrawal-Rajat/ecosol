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
          /* Scoped to prevent global CSS leaks */
          .ecosol-opps-scope {
            background-color: var(--color-bg-white);
            padding: 120px 0;
            font-family: var(--font-primary);
            border-top: 1px solid var(--color-bg-light-grey);
          }

          .ecosol-opps-scope .opportunities-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
          }

          /* --- Desktop Heading --- */
          .ecosol-opps-scope .opps-header {
            margin-bottom: 70px;
            text-align: left;
          }

          .ecosol-opps-scope .opps-title {
            font-size: clamp(38px, 6vw, 64px); 
            font-weight: 900;
            color: var(--color-logo-navy);
            text-transform: uppercase;
            margin: 0;
            letter-spacing: -2.5px;
            line-height: 1.1;
          }

          .ecosol-opps-scope .opps-title span {
            color: var(--color-electric-blue);
          }

          /* --- Job Grid & Cards --- */
          .ecosol-opps-scope .opps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
            gap: 30px;
          }

          .ecosol-opps-scope .job-card {
            background: var(--color-bg-white);
            border: 1px solid var(--color-bg-light-grey);
            padding: 50px 40px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            border-radius: 2px;
          }

          .ecosol-opps-scope .job-card:hover {
            border-color: var(--color-logo-blue);
            box-shadow: 0 20px 40px rgba(11, 17, 32, 0.06);
            transform: translateY(-5px);
          }

          .ecosol-opps-scope .job-title-text {
            font-size: 22px;
            font-weight: 900;
            color: var(--color-logo-navy);
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: -0.5px;
          }

          .ecosol-opps-scope .job-exp-tag {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-electric-blue);
            text-transform: uppercase;
            letter-spacing: 2px;
            display: block;
            margin-bottom: 25px;
          }

          .ecosol-opps-scope .job-req-list {
            margin: 0 0 40px 0;
            padding: 0;
            list-style: none;
          }

          .ecosol-opps-scope .job-req-list li {
            font-size: 15px;
            color: var(--color-text-main);
            padding: 12px 0;
            border-bottom: 1px solid var(--color-bg-light-grey);
            display: flex;
            align-items: flex-start;
          }

          .ecosol-opps-scope .job-req-list li::before {
            content: "—"; 
            color: var(--color-electric-blue);
            font-weight: bold;
            margin-right: 15px;
          }

          .ecosol-opps-scope .apply-link {
            display: block;
            text-align: center;
            padding: 18px;
            background-color: var(--color-logo-navy);
            color: #ffffff !important;
            text-decoration: none;
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.3s ease;
            border-radius: 2px;
          }

          .ecosol-opps-scope .apply-link:hover {
            background-color: var(--color-logo-blue);
          }

          /* --- MOBILE RESPONSIVE UPDATES --- */
          @media (max-width: 768px) {
            .ecosol-opps-scope { padding: 80px 0; }
            .ecosol-opps-scope .opportunities-container { padding: 0 24px; }
            
            .ecosol-opps-scope .opps-header { 
              margin-bottom: 45px; 
              text-align: center; /* Centered for better mobile balance */
            }
            
            .ecosol-opps-scope .opps-title { 
              /* Adjusted size and spacing for mobile readability */
              font-size: 42px !important; 
              line-height: 1.05 !important;
              letter-spacing: -1.5px !important;
              max-width: 100%;
            }
            
            .ecosol-opps-scope .job-card { padding: 35px 25px; }
            .ecosol-opps-scope .apply-link { padding: 20px; }

            .ecosol-opps-scope .general-query {
              margin-top: 50px;
              font-size: 14px;
              padding: 25px 20px;
            }
          }
        `}
      </style>

      <section className="ecosol-opps-scope" id="careers-list">
        <div className="opportunities-container">
          <header className="opps-header">
            <h2 className="opps-title">
              Current <span>Opportunities.</span>
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
                  Technical Application
                </a>
              </div>
            ))}
          </div>

          <p className="general-query">
            Don't see a suitable role? Share your technical profile at{" "}
            <b>hr@ecosolprojects.com</b>
          </p>
        </div>
      </section>
    </>
  );
}

export default CurrentOpportunities;
