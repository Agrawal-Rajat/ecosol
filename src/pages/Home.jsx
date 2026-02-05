import HomeHero from "../components/home/HomeHero";
import TrustIndicators from "../components/home/TrustIndicators";
import CoreServices from "../components/home/CoreServices";
import IndustriesServed from "../components/home/IndustriesServed";
import WhyEcosol from "../components/home/WhyEcosol";
import ClientsGrid from "../components/home/ClientsGrid";
import PrimaryCTA from "../components/home/PrimaryCTA";
import ServicePillars from "../components/home/ServicePillars";
import GlobalFootprint from "../components/home/GlobalFootprint";

function Home() {
  return (
    <>
      <HomeHero />
      <ServicePillars />
      {/* <TrustIndicators /> */}
      <CoreServices />
      <IndustriesServed />
      <GlobalFootprint />
      <WhyEcosol />
      <ClientsGrid />
      <PrimaryCTA />
    </>
  );
}

export default Home;
