import CareersHero from "../components/careers/CareersHero";
import WhyWorkWithEcosol from "../components/careers/WhyWorkWithEcosol";
import EngineeringCulture from "../components/careers/EngineeringCulture";
import CurrentOpportunities from "../components/careers/CurrentOpportunities";
import SubmitYourProfile from "../components/careers/SubmitYourProfile";
import EqualOpportunityNote from "../components/careers/EqualOpportunityNote";

function Careers() {
  return (
    <div className="careers-page-compact">
      <style>
        {`
          .careers-page-compact .ecosol-careers-hero-scope {
            padding: 20px 0 72px 0;
          }

          .careers-page-compact .ecosol-career-orbit {
            padding: 76px 0;
          }

          .careers-page-compact .orbit-container {
            height: 700px;
          }

          .careers-page-compact .ecosol-culture-scope {
            padding: 88px 0;
          }

          .careers-page-compact .ecosol-culture-scope .section-header-compact {
            margin-bottom: 52px;
          }

          .careers-page-compact .ecosol-culture-scope .culture-visual-grid {
            gap: 12px;
          }

          .careers-page-compact .ecosol-opps-scope {
            padding: 88px 0;
          }

          .careers-page-compact .ecosol-opps-scope .opps-header {
            margin-bottom: 52px;
          }

          .careers-page-compact .ecosol-opps-scope .opps-grid {
            gap: 24px;
          }

          .careers-page-compact .ecosol-submit-scope {
            padding: 88px 0;
          }

          .careers-page-compact .ecosol-submit-scope .submit-text {
            margin-bottom: 36px;
          }

          .careers-page-compact .ecosol-eoe-scope {
            padding: 72px 0;
          }

          @media (max-width: 1100px) {
            .careers-page-compact .orbit-container {
              height: auto;
            }
          }

          @media (max-width: 768px) {
            .careers-page-compact .ecosol-careers-hero-scope {
              padding: 12px 0 56px 0;
            }

            .careers-page-compact .ecosol-career-orbit,
            .careers-page-compact .ecosol-culture-scope,
            .careers-page-compact .ecosol-opps-scope,
            .careers-page-compact .ecosol-submit-scope,
            .careers-page-compact .ecosol-eoe-scope {
              padding-top: 56px;
              padding-bottom: 56px;
            }

            .careers-page-compact .ecosol-culture-scope .section-header-compact,
            .careers-page-compact .ecosol-opps-scope .opps-header {
              margin-bottom: 36px;
            }

            .careers-page-compact .ecosol-culture-scope .culture-visual-grid,
            .careers-page-compact .ecosol-opps-scope .opps-grid {
              gap: 16px;
            }

            .careers-page-compact .ecosol-submit-scope .submit-text {
              margin-bottom: 28px;
            }
          }
        `}
      </style>

      <CareersHero />
      <WhyWorkWithEcosol />
      <EngineeringCulture />
      <CurrentOpportunities />
      <SubmitYourProfile />
      <EqualOpportunityNote />
    </div>
  );
}

export default Careers;
