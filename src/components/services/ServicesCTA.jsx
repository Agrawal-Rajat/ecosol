import React from "react";
import { Link } from "react-router-dom";

function ServicesCTA() {
  return (
    <>
      <style>
        {`
          .ecosol-services-cta-scope {
            background-color: var(--color-bg-white);
            padding: 80px 0 120px 0;
            position: relative;
            /* Technical Blueprint Texture */
            background-image: radial-gradient(var(--color-bg-light-grey) 1.2px, transparent 1.2px);
            background-size: 40px 40px;
            font-family: var(--font-primary);
          }

          .ecosol-services-cta-scope .cta-wrapper {
            max-width: 1100px;
            margin: 0 auto;
            background: var(--color-bg-white);
            border: 1px solid var(--color-bg-light-grey);
            display: grid;
            grid-template-columns: 1.6fr 1fr;
            align-items: center;
            position: relative;
            z-index: 2;
            box-shadow: 20px 20px 0px var(--color-bg-light-grey);
            border-radius: 2px;
          }

          /* --- Technical Info Section --- */
          .ecosol-services-cta-scope .cta-info-side {
            padding: 60px;
            border-right: 1px solid var(--color-bg-light-grey);
          }

          /* --- Action Section --- */
          .ecosol-services-cta-scope .cta-action-side {
            padding: 60px;
            background-color: var(--color-bg-light-grey); 
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            height: 100%;
            justify-content: center;
          }

          .ecosol-services-cta-scope .cta-label {
            font-size: 11px;
            font-weight: 800;
            color: var(--color-electric-blue);
            text-transform: uppercase;
            letter-spacing: 4px;
            display: block;
            margin-bottom: 20px;
          }

          .ecosol-services-cta-scope .cta-heading {
            font-size: clamp(28px, 4vw, 38px);
            font-weight: 900;
            color: var(--color-logo-navy);
            line-height: 1.1;
            text-transform: uppercase;
            letter-spacing: -1.5px;
            margin-bottom: 20px;
          }

          .ecosol-services-cta-scope .cta-heading span {
            color: var(--color-electric-blue);
          }

          .ecosol-services-cta-scope .cta-text {
            font-size: 16px;
            color: var(--color-text-main);
            line-height: 1.7;
            margin: 0;
            text-align: justify;
          }

          .ecosol-services-cta-scope .cta-button {
            display: inline-flex;
            align-items: center;
            gap: 15px;
            padding: 20px 40px;
            background-color: var(--color-logo-navy);
            color: #ffffff !important;
            font-size: 12px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            border-radius: 2px;
          }

          .ecosol-services-cta-scope .cta-button:hover {
            background-color: var(--color-logo-blue);
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(11, 17, 32, 0.2);
          }

          .ecosol-services-cta-scope .cta-button span {
            font-size: 18px;
            transition: transform 0.3s ease;
          }

          .ecosol-services-cta-scope .cta-button:hover span {
            transform: translateX(5px);
          }

          .ecosol-services-cta-scope .cta-sub-note {
            margin-top: 20px;
            font-size: 11px;
            color: var(--color-steel-grey);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          @media (max-width: 992px) {
            .ecosol-services-cta-scope .cta-wrapper { grid-template-columns: 1fr; box-shadow: 10px 10px 0px var(--color-bg-light-grey); }
            .ecosol-services-cta-scope .cta-info-side { border-right: none; border-bottom: 1px solid var(--color-bg-light-grey); padding: 45px 30px; }
            .ecosol-services-cta-scope .cta-action-side { padding: 45px 30px; }
          }

          @media (max-width: 768px) {
            .ecosol-services-cta-scope { padding: 60px 24px; }
            .ecosol-services-cta-scope .cta-heading { font-size: 32px; }
            .ecosol-services-cta-scope .cta-button { width: 100%; justify-content: center; }
          }
        `}
      </style>

      <section className="ecosol-services-cta-scope">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-info-side">
              <span className="cta-label">Project Integration</span>
              <h2 className="cta-heading">
                Define Your Technical <span>Scope.</span>
              </h2>
              <p className="cta-text">
                Engage with our lead technical consultants to evaluate your
                infrastructure requirements and define a standards-compliant
                framework for your next engineering milestone.
              </p>
            </div>

            <div className="cta-action-side">
              <Link to="/contact" className="cta-button">
                Get Started <span>→</span>
              </Link>
              <p className="cta-sub-note">
                Global Consultancy Support Available
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesCTA;
