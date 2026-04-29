import React from "react";

function GlobalPresenceContact() {
  const regions = [
    "India",
    "Middle East & North Africa",
    "Europe",
    "South East Asia",
  ];

  return (
    <>
      <style>
        {`
          /* Scoped to prevent global CSS leaks */
          .ecosol-presence-scope {
            background-color: var(--color-bg-white);
            padding: 100px 0; /* Slightly reduced padding for tighter vertical flow */
            font-family: var(--font-primary);
            text-align: center;
            border-top: 1px solid var(--color-bg-light-grey);
            position: relative;
            overflow: hidden;
          }

          /* Subtle Blueprint Overlay */
          .ecosol-presence-scope::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(var(--color-bg-light-grey) 1px, transparent 1px);
            background-size: 30px 30px;
            opacity: 0.5;
            z-index: 1;
          }

          .ecosol-presence-scope .global-container {
            max-width: var(--container-width, 1400px);
            margin: 0 auto;
            padding: 0 40px;
            position: relative;
            z-index: 2;
          }

          /* --- Appropriately Large Heading (Refined Scale) --- */
          .ecosol-presence-scope .global-heading-clean {
            /* Reduced from 64px max to 48px for better balance */
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 900;
            color: var(--color-logo-navy);
            text-transform: uppercase;
            letter-spacing: -1.5px;
            margin-bottom: 20px;
            line-height: 1.1;
          }

          .ecosol-presence-scope .global-heading-clean span {
            color: var(--color-electric-blue);
          }

          .ecosol-presence-scope .global-intro {
            font-size: 17px;
            color: var(--color-text-main);
            max-width: 750px;
            margin: 0 auto 90px auto;
            line-height: 1.7;
          }

          /* --- The Engineering Grid Line --- */
          .ecosol-presence-scope .market-track {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            position: relative;
            padding-top: 50px;
            border-top: 2px solid var(--color-bg-light-grey);
          }

          .ecosol-presence-scope .market-point {
            position: relative;
            flex: 1;
            padding: 0 20px;
          }

          /* The Technical Node (Power Grid Marker) */
          .ecosol-presence-scope .market-point::before {
            content: '';
            position: absolute;
            top: -61px; 
            left: 50%;
            transform: translateX(-50%);
            width: 18px;
            height: 18px;
            background: var(--color-bg-white);
            border: 4px solid var(--color-electric-blue);
            border-radius: 50%;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            box-shadow: 0 0 15px rgba(14, 165, 233, 0.2);
          }

          .ecosol-presence-scope .market-point:hover::before {
            background: var(--color-electric-blue);
            box-shadow: 0 0 25px rgba(14, 165, 233, 0.5);
            transform: translateX(-50%) scale(1.2);
          }

          .ecosol-presence-scope .market-name {
            font-size: 13px;
            font-weight: 800;
            color: var(--color-logo-navy);
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-top: 15px;
            transition: color 0.3s ease;
          }

          .ecosol-presence-scope .market-point:hover .market-name {
            color: var(--color-electric-blue);
          }

          @media (max-width: 900px) {
            .ecosol-presence-scope .market-track {
              flex-direction: column;
              border-top: none;
              border-left: 2px solid var(--color-bg-light-grey);
              padding-top: 0;
              padding-left: 40px;
              gap: 40px;
              text-align: left;
              margin-left: 20px;
            }

            .ecosol-presence-scope .market-point::before {
              top: 0;
              left: -50px;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .ecosol-presence-scope { padding: 80px 0; }
            /* Mobile scaling aligned with other section headers */
            .ecosol-presence-scope .global-heading-clean { 
              font-size: 36px !important; 
              letter-spacing: -1px !important;
            }
            .ecosol-presence-scope .global-intro { font-size: 16px; margin-bottom: 50px; }
          }
        `}
      </style>

      <section className="ecosol-presence-scope">
        <div className="global-container">
          <h2 className="global-heading-clean">
            Global <span>Engineering</span> Reach.
          </h2>

          <p className="global-intro">
            Providing specialized consultancy through project-based support
            models and technical excellence across major international markets.
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
