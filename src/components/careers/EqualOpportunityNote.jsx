import React from "react";

function EqualOpportunityNote() {
  return (
    <>
      <style>
        {`
          /* Scoped to prevent global CSS leaks */
          .ecosol-eoe-scope {
            background-color: var(--color-bg-white);
            padding: 100px 0;
            font-family: var(--font-primary);
            text-align: center;
            border-top: 1px solid var(--color-bg-light-grey);
          }

          .ecosol-eoe-scope .eoe-wrapper {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 24px;
            position: relative;
          }

          /* --- Engineering Divider (Status Line) --- */
          .ecosol-eoe-scope .eoe-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin-bottom: 30px;
          }

          .ecosol-eoe-scope .eoe-line {
            height: 1px;
            background: var(--color-bg-light-grey);
            width: 80px;
          }

          /* Technical Status Marker */
          .ecosol-eoe-scope .eoe-marker {
            width: 12px;
            height: 2px;
            background: var(--color-electric-blue);
          }

          .ecosol-eoe-scope .eoe-statement {
            font-size: 16px;
            line-height: 1.8;
            color: var(--color-text-main);
            font-weight: 400;
            /* Maintaining a formal, respectful tone */
            font-style: italic; 
            max-width: 650px;
            margin: 0 auto;
          }

          .ecosol-eoe-scope .eoe-brand {
            display: block;
            font-weight: 800;
            color: var(--color-logo-navy);
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 11px;
            margin-top: 25px;
            font-style: normal;
          }

          @media (max-width: 768px) {
            .ecosol-eoe-scope { padding: 60px 0; }
            .ecosol-eoe-scope .eoe-statement { font-size: 14px; }
            .ecosol-eoe-scope .eoe-line { width: 40px; }
          }
        `}
      </style>

      <section className="ecosol-eoe-scope">
        <div className="eoe-wrapper">
          <div className="eoe-divider">
            <div className="eoe-line"></div>
            <div className="eoe-marker"></div>
            <div className="eoe-line"></div>
          </div>

          <p className="eoe-statement">
            "Ecosol Projects Pvt. Ltd. is committed to providing equal
            opportunity and maintaining a professional, merit-based work
            environment for all employees and applicants."
          </p>

          <span className="eoe-brand">
            Ecosol Standards & Engineering Ethics
          </span>
        </div>
      </section>
    </>
  );
}

export default EqualOpportunityNote;
