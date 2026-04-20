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
            padding: 56px 0 44px 0;
          }

          .about-page-compact .ecosol-about-hero-scope .hero-container {
            gap: 44px;
          }

          .about-page-compact .ecosol-overview-scope {
            padding: 56px 0 64px 0;
          }

          .about-page-compact .ecosol-overview-scope .module-header {
            margin-bottom: 40px;
          }

          .about-page-compact .ecosol-overview-scope .module-card {
            padding: 40px 30px;
          }

          .about-page-compact .ecosol-presence-scope {
            padding: 56px 0;
          }

          .about-page-compact .ecosol-presence-scope .global-intro {
            margin-bottom: 56px;
          }

          .about-page-compact .ecosol-mv-scope {
            padding: 48px 0;
          }

          .about-page-compact .ecosol-mv-scope .mv-grid {
            gap: 24px;
          }

          .about-page-compact .ecosol-mv-scope .mv-card {
            padding: 36px;
          }

          .about-page-compact .ecosol-leadership-scope {
            padding: 60px 0 72px 0;
          }

          .about-page-compact .ecosol-leadership-scope .leadership-header {
            margin-bottom: 44px;
          }

          .about-page-compact .ecosol-leadership-scope .leadership-grid {
            gap: 24px;
          }

          .about-page-compact .ecosol-leadership-scope .expert-card {
            padding: 40px 30px;
          }

          @media (max-width: 768px) {
            .about-page-compact .ecosol-about-hero-scope {
              padding: 44px 0 36px 0;
            }

            .about-page-compact .ecosol-overview-scope,
            .about-page-compact .ecosol-presence-scope,
            .about-page-compact .ecosol-mv-scope,
            .about-page-compact .ecosol-leadership-scope {
              padding-top: 44px;
              padding-bottom: 44px;
            }

            .about-page-compact .ecosol-overview-scope .module-header,
            .about-page-compact .ecosol-leadership-scope .leadership-header {
              margin-bottom: 30px;
            }

            .about-page-compact .ecosol-overview-scope .module-card,
            .about-page-compact .ecosol-mv-scope .mv-card,
            .about-page-compact .ecosol-leadership-scope .expert-card {
              padding: 30px 24px;
            }

            .about-page-compact .ecosol-presence-scope .global-intro {
              margin-bottom: 36px;
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
