import HomeHero from "../components/home/HomeHero";
import TrustIndicators from "../components/home/TrustIndicators";
import CoreServices from "../components/home/CoreServices";
import IndustriesServed from "../components/home/IndustriesServed";
import WhyEcosol from "../components/home/WhyEcosol";
import ClientsGrid from "../components/home/ClientsGrid";
import PrimaryCTA from "../components/home/PrimaryCTA";
import ServicePillars from "../components/home/ServicePillars";
import GlobalFootprint from "../components/home/GlobalFootprint";
import EngineeringToolsBar from "../components/home/EngineeringToolsBar";
import ImpactAndInsights from "../components/home/ImpactAndInsights";

function Home() {
  return (
    <div className="home-page-compact">
      <style>
        {`
          .home-page-compact .hero-section {
            min-height: 48vh !important;
            padding-top: 20px !important;
            padding-bottom: 8px !important;
          }

          .home-page-compact .tools-bar-section,
          .home-page-compact .services-engineering-section,
          .home-page-compact .pillars-horizon-section,
          .home-page-compact .why-section,
          .home-page-compact .ecosol-sectors-scope,
          .home-page-compact .ecosol-footprint-scope,
          .home-page-compact .clients-section,
          .home-page-compact .ecosol-impact-scope {
            padding: 24px 0 !important;
          }

          .home-page-compact .ecosol-cta-scope {
            min-height: auto !important;
            padding: 28px 16px !important;
          }

          .home-page-compact .services-engineering-section {
            padding-bottom: 8px !important;
          }

          .home-page-compact .pillars-horizon-section {
            padding-top: 8px !important;
          }

          .home-page-compact .why-section {
            padding-bottom: 32px !important;
          }

          .home-page-compact .clients-section {
            padding-top: 32px !important;
          }

          .home-page-compact .tools-container,
          .home-page-compact .services-container,
          .home-page-compact .pillars-horizon-container,
          .home-page-compact .why-container,
          .home-page-compact .sectors-container,
          .home-page-compact .horizon-container,
          .home-page-compact .impact-inner-container,
          .home-page-compact .clients-section .container {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }

          .home-page-compact .clients-section .intro-header-card {
            margin-bottom: 24px !important;
            padding: 20px 24px !important;
          }

          .home-page-compact .clients-section .metrics-strip {
            margin-bottom: 24px !important;
          }

          @media (max-width: 768px) {
            .home-page-compact .hero-section {
              min-height: 42vh !important;
              padding-top: 16px !important;
              padding-bottom: 8px !important;
            }

            .home-page-compact .tools-bar-section,
            .home-page-compact .services-engineering-section,
            .home-page-compact .pillars-horizon-section,
            .home-page-compact .why-section,
            .home-page-compact .ecosol-sectors-scope,
            .home-page-compact .ecosol-footprint-scope,
            .home-page-compact .clients-section,
            .home-page-compact .ecosol-impact-scope,
            .home-page-compact .ecosol-cta-scope {
              padding-top: 20px !important;
              padding-bottom: 20px !important;
            }

            .home-page-compact .tools-container,
            .home-page-compact .services-container,
            .home-page-compact .pillars-horizon-container,
            .home-page-compact .why-container,
            .home-page-compact .sectors-container,
            .home-page-compact .horizon-container,
            .home-page-compact .impact-inner-container,
            .home-page-compact .clients-section .container {
              padding-left: 16px !important;
              padding-right: 16px !important;
            }

            .home-page-compact .clients-section .intro-header-card {
              margin-bottom: 16px !important;
              padding: 16px !important;
            }

            .home-page-compact .clients-section .metrics-strip {
              margin-bottom: 20px !important;
            }

            .home-page-compact .services-engineering-section {
              padding-bottom: 6px !important;
            }

            .home-page-compact .pillars-horizon-section {
              padding-top: 6px !important;
            }

            .home-page-compact .why-section {
              padding-bottom: 24px !important;
            }

            .home-page-compact .clients-section {
              padding-top: 24px !important;
            }
          }
        `}
      </style>

      <HomeHero />

      {/* <TrustIndicators /> */}
      <CoreServices />
      <ServicePillars />
      <WhyEcosol />

      {/* <GlobalFootprint /> */}

      <ClientsGrid />
      {/* <ImpactAndInsights /> */}
      <PrimaryCTA />
    </div>
  );
}

export default Home;
