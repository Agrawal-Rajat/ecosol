import React from "react";

function GlobalPresenceContact() {
  const regions = ["India", "Middle East & North Africa", "Europe", "Africa"];

  return (
    <>
      <style>
        {`
          .global-presence-section {
            background-color: var(--color-white);
            padding: 120px 0;
            font-family: var(--font-primary);
            text-align: center;
          }

          .global-container {
            max-width: var(--container-width);
            margin: 0 auto;
            padding: 0 40px;
          }

          .global-heading-clean {
            font-size: clamp(38px, 6vw, 64px);
            font-weight: 900;
            color: var(--color-primary);
            text-transform: uppercase;
            letter-spacing: -2px;
            margin-bottom: 25px;
            line-height: 1;
          }

          .global-heading-clean span {
            color: var(--color-accent-green);
          }

          .global-intro {
            font-size: 18px;
            color: #64748b;
            max-width: 800px;
            margin: 0 auto 80px auto;
            line-height: 1.6;
          }

          /* The Engineering Grid Line */
          .market-track {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            position: relative;
            padding-top: 40px;
            border-top: 2px solid #f1f5f9; /* The "Grid" line */
          }

          .market-point {
            position: relative;
            flex: 1;
            padding: 0 20px;
          }

          /* The Node on the line */
          .market-point::before {
            content: '';
            position: absolute;
            top: -49px; /* Aligns perfectly with the 2px border */
            left: 50%;
            transform: translateX(-50%);
            width: 16px;
            height: 16px;
            background: #ffffff;
            border: 3px solid var(--color-accent-green);
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .market-point:hover::before {
            background: var(--color-accent-green);
            box-shadow: 0 0 0 8px rgba(47, 163, 107, 0.1);
          }

          .market-name {
            font-size: 14px;
            font-weight: 800;
            color: var(--color-primary);
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-top: 10px;
          }

          @media (max-width: 900px) {
            .market-track {
              flex-direction: column;
              border-top: none;
              border-left: 2px solid #f1f5f9;
              padding-top: 0;
              padding-left: 40px;
              gap: 50px;
              text-align: left;
              margin-left: 20px;
            }

            .market-point {
              padding: 0;
            }

            .market-point::before {
              top: 0;
              left: -49px;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .global-presence-section { padding: 80px 0; }
            .global-heading-clean { font-size: 38px; }
            .global-intro { font-size: 16px; margin-bottom: 50px; }
          }
        `}
      </style>

      <section className="global-presence-section">
        <div className="global-container">
          <h2 className="global-heading-clean">
            Global <span>Engineering</span> Reach
          </h2>

          <p className="global-intro">
            Providing specialized consultancy through project-based support
            models and remote engineering excellence across major international
            markets.
          </p>

          <div className="market-track">
            {regions.map((region) => (
              <div key={region} className="market-point">
                <h3 className="market-name">{region}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GlobalPresenceContact;
