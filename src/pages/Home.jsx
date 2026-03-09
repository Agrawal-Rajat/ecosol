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
    <>
      <HomeHero />
      <EngineeringToolsBar />
      {/* <TrustIndicators /> */}
      <CoreServices />
      <ServicePillars />
      <WhyEcosol />
      <IndustriesServed />
      <GlobalFootprint />

      <ClientsGrid />
      <ImpactAndInsights />
      <PrimaryCTA />
    </>
  );
}

export default Home;
