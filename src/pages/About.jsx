import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import MissionVision from "../components/about/MissionVision";
import Leadership from "../components/about/Leadership";
import GlobalPresenceContact from "../components/contact/GlobalPresenceContact";

function About() {
  return (
    <div className="about-page-compact">
      <style>
        {`
          .about-page-compact .ecosol-about-hero-scope {
            padding: 36px 0 20px 0;
          }

          .about-page-compact .ecosol-about-hero-scope .hero-container {
            gap: 36px;
          }

          .about-page-compact .ecosol-overview-scope {
            padding: 22px 0 24px 0;
          }

          .about-page-compact .ecosol-overview-scope .module-header {
            margin-bottom: 32px;
          }

          .about-page-compact .ecosol-overview-scope .module-card {
            padding: 40px 30px;
          }

          .about-page-compact .ecosol-presence-scope {
            padding: 24px 0;
          }

          .about-page-compact .ecosol-presence-scope .global-intro {
            margin-bottom: 44px;
          }

          .about-page-compact .ecosol-mv-scope {
            padding: 22px 0;
          }

          .about-page-compact .ecosol-mv-scope .mv-grid {
            gap: 24px;
          }

          .about-page-compact .ecosol-mv-scope .mv-card {
            padding: 36px;
          }

          .about-page-compact .ecosol-leadership-scope {
            padding: 24px 0 30px 0;
          }

          .about-page-compact .ecosol-leadership-scope .leadership-header {
            margin-bottom: 36px;
          }

          .about-page-compact .ecosol-leadership-scope .leadership-grid {
            gap: 24px;
          }

          .about-page-compact .ecosol-leadership-scope .expert-card {
            padding: 40px 30px;
          }

          @media (max-width: 768px) {
            .about-page-compact .ecosol-about-hero-scope {
              padding: 28px 0 16px 0;
            }

            .about-page-compact .ecosol-overview-scope,
            .about-page-compact .ecosol-presence-scope,
            .about-page-compact .ecosol-mv-scope,
            .about-page-compact .ecosol-leadership-scope {
              padding-top: 20px;
              padding-bottom: 20px;
            }

            .about-page-compact .ecosol-overview-scope {
              padding-bottom: 18px;
            }

            .about-page-compact .ecosol-leadership-scope {
              padding-bottom: 24px;
            }

            .about-page-compact .ecosol-overview-scope .module-header,
            .about-page-compact .ecosol-leadership-scope .leadership-header {
              margin-bottom: 24px;
            }

            .about-page-compact .ecosol-overview-scope .module-card,
            .about-page-compact .ecosol-mv-scope .mv-card,
            .about-page-compact .ecosol-leadership-scope .expert-card {
              padding: 30px 24px;
            }

            .about-page-compact .ecosol-presence-scope .global-intro {
              margin-bottom: 28px;
            }
          }
        `}
      </style>

      <AboutHero />
      <CompanyOverview />
      <GlobalPresenceContact />
      <MissionVision />
      <Leadership />
    </div>
  );
}

export default About;
