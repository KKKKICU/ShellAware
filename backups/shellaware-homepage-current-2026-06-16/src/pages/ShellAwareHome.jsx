import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import OceanWorldLayer from "../components/ui/OceanWorldLayer";
import CampaignHero from "../components/sections/CampaignHero";
import MissionSection from "../components/sections/MissionSection";
import ThreatEducationSection from "../components/sections/ThreatEducationSection";
import PublicActionsSection from "../components/sections/PublicActionsSection";
import InsightShellySection from "../components/sections/InsightShellySection";
import CampaignCTASection from "../components/sections/CampaignCTASection";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function ShellAwareHome() {
  useRevealOnScroll();

  return (
    <div className="shellaware-page">
      <OceanWorldLayer />

      <Navbar />

      <main>
        <CampaignHero />
        <MissionSection />
        <ThreatEducationSection />
        <PublicActionsSection />
        <InsightShellySection />
        <CampaignCTASection />
      </main>

      <Footer />
    </div>
  );
}

export default ShellAwareHome;
