import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesToolsStandards from "../components/services/ServicesToolsStandards";
import ServicesCTA from "../components/services/ServicesCTA";
import EngineeringToolsBar from "../components/home/EngineeringToolsBar";
import IndustriesServed from "../components/home/IndustriesServed";

function Services() {
  return (
    <div className="services-page-compact">
      <style>
        {`
          .services-page-compact .ecosol-services-hero-scope {
            padding: 72px 0 56px;
          }

          .services-page-compact .tools-bar-section {
            padding: 56px 0;
          }

          .services-page-compact .tools-header-box {
            margin-bottom: 28px;
          }

          .services-page-compact .tools-marquee-area {
            margin: 20px 0;
          }

          .services-page-compact .tools-caption {
            margin-top: 24px;
            padding-top: 18px;
          }

          .services-page-compact .ecosol-sectors-scope {
            padding: 56px 0;
          }

          .services-page-compact .ecosol-sectors-scope .sectors-container {
            gap: 40px;
          }

          .services-page-compact .ecosol-services-grid-scope {
            padding: 64px 0 56px;
          }

          .services-page-compact .ecosol-services-grid-scope .section-header {
            margin-bottom: 40px;
          }

          .services-page-compact .ecosol-tools-scope {
            padding: 60px 0;
          }

          .services-page-compact .ecosol-tools-scope .tech-flex {
            gap: 40px;
          }

          .services-page-compact .ecosol-services-cta-scope {
            padding: 48px 0 64px;
          }

          .services-page-compact .ecosol-services-cta-scope .cta-info-side,
          .services-page-compact .ecosol-services-cta-scope .cta-action-side {
            padding: 40px;
          }

          @media (max-width: 768px) {
            .services-page-compact .ecosol-services-hero-scope {
              padding: 60px 0 44px;
            }

            .services-page-compact .tools-bar-section {
              padding: 44px 0;
            }

            .services-page-compact .tools-header-box {
              margin-bottom: 20px;
            }

            .services-page-compact .tools-marquee-area {
              margin: 14px 0;
            }

            .services-page-compact .ecosol-sectors-scope {
              padding: 44px 0;
            }

            .services-page-compact .ecosol-services-grid-scope {
              padding: 52px 0 44px;
            }

            .services-page-compact .ecosol-services-grid-scope .section-header {
              margin-bottom: 30px;
            }

            .services-page-compact .ecosol-tools-scope {
              padding: 48px 0;
            }

            .services-page-compact .ecosol-services-cta-scope {
              padding: 40px 0 52px;
            }

            .services-page-compact .ecosol-services-cta-scope .cta-info-side,
            .services-page-compact .ecosol-services-cta-scope .cta-action-side {
              padding: 30px 20px;
            }
          }
        `}
      </style>

      <ServicesHero />
      <EngineeringToolsBar />
      <IndustriesServed />
      <ServicesGrid />
      <ServicesToolsStandards />
      <ServicesCTA />
    </div>
  );
}

export default Services;
