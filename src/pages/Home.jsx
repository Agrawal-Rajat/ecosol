import HomeHero from "../components/home/HomeHero";
import TrustIndicators from "../components/home/TrustIndicators";
import CoreServices from "../components/home/CoreServices";
import IndustriesServed from "../components/home/IndustriesServed";
import WhyEcosol from "../components/home/WhyEcosol";
import ClientsGrid from "../components/home/ClientsGrid";
import PrimaryCTA from "../components/home/PrimaryCTA";

function Home() {
  return (
    <>
      <HomeHero />
      <TrustIndicators />
      <CoreServices />
      <IndustriesServed />
      <WhyEcosol />
      <ClientsGrid />
      <PrimaryCTA />
    </>
  );
}

export default Home;
