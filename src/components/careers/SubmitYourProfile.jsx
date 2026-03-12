import React from "react";

function SubmitYourProfile() {
  return (
    <>
      <style>
        {`
          /* Scoped to prevent global CSS leaks */
          .ecosol-submit-scope {
            position: relative;
            padding: 120px 0;
            font-family: var(--font-primary);
            background-color: var(--color-logo-navy);
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          /* Industrial Background Image with Technical Overlay */
          .ecosol-submit-scope .submit-bg {
            position: absolute;
            inset: 0;
            /* Using a high-voltage substation image for an engineering feel */
            background-image: url('https://images.unsplash.com/photo-1548345680-f5475ea90f14?auto=format&fit=crop&q=80&w=1600');
            background-size: cover;
            background-position: center;
            opacity: 0.15; 
            filter: grayscale(100%) contrast(1.2);
            z-index: 1;
          }

          .ecosol-submit-scope .submit-container {
            position: relative;
            z-index: 10;
            max-width: 900px;
            margin: 0 auto;
            padding: 0 40px;
          }

          .ecosol-submit-scope .submit-heading {
            /* Large-scale heading to match the rest of the site */
            font-size: clamp(38px, 6vw, 64px);
            font-weight: 900;
            color: var(--color-bg-white);
            text-transform: uppercase;
            letter-spacing: -2.5px;
            line-height: 1.05;
            margin-bottom: 30px;
          }

          .ecosol-submit-scope .submit-heading span {
            color: var(--color-electric-blue);
          }

          .ecosol-submit-scope .submit-text {
            font-size: clamp(16px, 2vw, 19px);
            color: var(--color-steel-grey);
            line-height: 1.7;
            margin-bottom: 48px;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
          }

          .ecosol-submit-scope .cv-button {
            display: inline-flex;
            align-items: center;
            gap: 15px;
            padding: 22px 50px;
            background-color: var(--color-electric-blue);
            color: var(--color-bg-white) !important;
            text-decoration: none;
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
            border-radius: 2px; /* Engineering sharp edges */
          }

          .ecosol-submit-scope .cv-button:hover {
            background-color: var(--color-bg-white);
            color: var(--color-logo-navy) !important;
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .ecosol-submit-scope .cv-button span {
            font-size: 18px;
            transition: transform 0.3s ease;
          }
          
          .ecosol-submit-scope .cv-button:hover span {
            transform: translateX(5px);
          }

          @media (max-width: 768px) {
            .ecosol-submit-scope { padding: 80px 0; }
            .ecosol-submit-scope .submit-container { padding: 0 24px; }
            
            .ecosol-submit-scope .submit-heading { 
              font-size: 48px !important; 
              letter-spacing: -1.5px !important; 
            }
            
            .ecosol-submit-scope .cv-button { 
              width: 100%; 
              justify-content: center; 
              padding: 20px; 
            }
          }
        `}
      </style>

      <section className="ecosol-submit-scope" id="contact">
        <div className="submit-bg" />

        <div className="submit-container">
          <h2 className="submit-heading">
            Submit Your <span>Profile</span>
          </h2>

          <p className="submit-text">
            Interested in joining Ecosol Projects? Share your updated CV and
            technical portfolio specifying your core engineering expertise and
            project history.
          </p>

          <a href="mailto:info@ecosolprojects.com" className="cv-button">
            Send Your CV <span>→</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default SubmitYourProfile;
