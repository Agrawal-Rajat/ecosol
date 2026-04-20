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
            min-height: 72vh !important;
          }

          .home-page-compact .tools-bar-section,
          .home-page-compact .services-engineering-section,
          .home-page-compact .pillars-horizon-section,
          .home-page-compact .why-section,
          .home-page-compact .ecosol-sectors-scope,
          .home-page-compact .ecosol-footprint-scope,
          .home-page-compact .clients-section,
          .home-page-compact .ecosol-impact-scope {
            padding: 72px 0 !important;
          }

          .home-page-compact .ecosol-cta-scope {
            min-height: auto !important;
            padding: 64px 24px !important;
          }

          .home-page-compact .tools-container,
          .home-page-compact .services-container,
          .home-page-compact .pillars-horizon-container,
          .home-page-compact .why-container,
          .home-page-compact .sectors-container,
          .home-page-compact .horizon-container,
          .home-page-compact .impact-inner-container,
          .home-page-compact .clients-section .container {
            padding-left: 32px !important;
            padding-right: 32px !important;
          }

          .home-page-compact .clients-section .intro-header-card {
            margin-bottom: 56px !important;
            padding: 36px 32px !important;
          }

          .home-page-compact .clients-section .metrics-strip {
            margin-bottom: 72px !important;
          }

          @media (max-width: 768px) {
            .home-page-compact .hero-section {
              min-height: 64vh !important;
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
              padding-top: 56px !important;
              padding-bottom: 56px !important;
            }

            .home-page-compact .tools-container,
            .home-page-compact .services-container,
            .home-page-compact .pillars-horizon-container,
            .home-page-compact .why-container,
            .home-page-compact .sectors-container,
            .home-page-compact .horizon-container,
            .home-page-compact .impact-inner-container,
            .home-page-compact .clients-section .container {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }

            .home-page-compact .clients-section .intro-header-card {
              margin-bottom: 40px !important;
              padding: 28px 22px !important;
            }

            .home-page-compact .clients-section .metrics-strip {
              margin-bottom: 48px !important;
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
