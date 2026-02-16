import React from "react";

function SubmitYourProfile() {
  return (
    <>
      <style>
        {`
          .submit-profile-section {
            position: relative;
            padding: 120px 0;
            font-family: var(--font-primary);
            background-color: var(--color-primary);
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          /* Industrial Background Image with Dark Overlay */
          .submit-bg {
            position: absolute;
            inset: 0;
            background-image: url('https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1600');
            background-size: cover;
            background-position: center;
            opacity: 0.25; /* Subtle visibility */
            filter: grayscale(100%);
            z-index: 1;
          }

          .submit-container {
            position: relative;
            z-index: 10;
            max-width: 900px;
            margin: 0 auto;
            padding: 0 40px;
          }

          .submit-heading {
            /* Scaled heading to match the rest of the Careers page */
            font-size: clamp(38px, 8vw, 64px);
            font-weight: 900;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: -2px;
            line-height: 0.95;
            margin-bottom: 30px;
          }

          .submit-heading span {
            color: var(--color-accent-green);
          }

          .submit-text {
            font-size: clamp(16px, 2vw, 20px);
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
            margin-bottom: 40px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }

          .cv-button {
            display: inline-flex;
            align-items: center;
            gap: 15px;
            padding: 20px 45px;
            background-color: var(--color-accent-green);
            color: var(--color-primary) !important;
            text-decoration: none;
            font-size: 16px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: all 0.3s ease;
          }

          .cv-button:hover {
            background-color: #ffffff;
            transform: translateY(-5px);
          }

          .cv-button span {
            font-size: 20px;
          }

          @media (max-width: 768px) {
            .submit-profile-section { padding: 80px 0; }
            .submit-container { padding: 0 24px; }
            .submit-heading { font-size: 42px; letter-spacing: -1.5px; }
            .submit-text { font-size: 16px; margin-bottom: 30px; }
            .cv-button { width: 100%; justify-content: center; padding: 18px; }
          }
        `}
      </style>

      <section className="submit-profile-section" id="contact">
        <div className="submit-bg" />

        <div className="submit-container">
          <h2 className="submit-heading">
            Submit Your <span>Profile</span>
          </h2>

          <p className="submit-text">
            Interested in joining Ecosol Projects? Share your updated CV and
            brief introduction specifying your target position and relevant
            experience.
          </p>

          <a href="mailto:careers@ecosolprojects.com" className="cv-button">
            Send Your CV <span>→</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default SubmitYourProfile;
