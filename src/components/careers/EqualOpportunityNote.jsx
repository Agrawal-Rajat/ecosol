import React from "react";

function EqualOpportunityNote() {
  return (
    <>
      <style>
        {`
          .eoe-minimal-section {
            background-color: var(--color-white);
            padding: 80px 0;
            font-family: var(--font-primary);
            text-align: center;
          }

          .eoe-wrapper {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 24px;
            position: relative;
          }

          /* Architectural Divider */
          .eoe-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 25px;
          }

          .eoe-line {
            height: 1px;
            background: #e2e8f0;
            width: 60px;
          }

          .eoe-diamond {
            width: 8px;
            height: 8px;
            background: var(--color-accent-green);
            transform: rotate(45deg);
          }

          .eoe-statement {
            font-size: 15px;
            line-height: 1.8;
            color: #64748b;
            font-weight: 400;
            font-style: italic; /* Gives it a formal 'note' feel */
          }

          .eoe-brand {
            display: block;
            font-weight: 800;
            color: var(--color-primary);
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 12px;
            margin-top: 20px;
            font-style: normal;
          }

          @media (max-width: 768px) {
            .eoe-minimal-section { padding: 60px 0; }
            .eoe-statement { font-size: 13.5px; }
          }
        `}
      </style>

      <section className="eoe-minimal-section">
        <div className="eoe-wrapper">
          <div className="eoe-divider">
            <div className="eoe-line"></div>
            <div className="eoe-diamond"></div>
            <div className="eoe-line"></div>
          </div>

          <p className="eoe-statement">
            "Ecosol Projects Pvt. Ltd. is committed to providing equal
            opportunity and maintaining a professional, merit-based work
            environment for all employees and applicants."
          </p>

          <span className="eoe-brand">Ecosol Standards & Ethics</span>
        </div>
      </section>
    </>
  );
}

export default EqualOpportunityNote;
