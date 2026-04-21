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
            padding: 48px 0 30px;
          }

          .services-page-compact .tools-bar-section {
            padding: 30px 0;
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
            padding: 30px 0;
          }

          .services-page-compact .ecosol-sectors-scope .sectors-container {
            gap: 32px;
          }

          .services-page-compact .ecosol-services-grid-scope {
            padding: 34px 0 30px;
          }

          .services-page-compact .ecosol-services-grid-scope .section-header {
            margin-bottom: 32px;
          }

          .services-page-compact .ecosol-tools-scope {
            padding: 32px 0;
          }

          .services-page-compact .ecosol-tools-scope .tech-flex {
            gap: 32px;
          }

          .services-page-compact .ecosol-services-cta-scope {
            padding: 28px 0 40px;
          }

          .services-page-compact .ecosol-services-cta-scope .cta-info-side,
          .services-page-compact .ecosol-services-cta-scope .cta-action-side {
            padding: 34px;
          }

          @media (max-width: 768px) {
            .services-page-compact .ecosol-services-hero-scope {
              padding: 40px 0 26px;
            }

            .services-page-compact .tools-bar-section {
              padding: 24px 0;
            }

            .services-page-compact .tools-header-box {
              margin-bottom: 20px;
            }

            .services-page-compact .tools-marquee-area {
              margin: 14px 0;
            }

            .services-page-compact .ecosol-sectors-scope {
              padding: 24px 0;
            }

            .services-page-compact .ecosol-services-grid-scope {
              padding: 30px 0 26px;
            }

            .services-page-compact .ecosol-services-grid-scope .section-header {
              margin-bottom: 24px;
            }

            .services-page-compact .ecosol-tools-scope {
              padding: 26px 0;
            }

            .services-page-compact .ecosol-services-cta-scope {
              padding: 22px 0 30px;
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
