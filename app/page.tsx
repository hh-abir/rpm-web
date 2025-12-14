import IntelligenceSection from "@/components/dashboard/IntelligenceSection";
import HeroSection from "@/components/hero/HeroSection";
import ImpactSection from "@/components/impact/ImpactSection";
import Footer from "@/components/layout/Footer";
import MissionSection from "@/components/mission/MissionSection";
import FeaturedProjectsSection from "@/components/projects/FeaturedProjectsSection";
import CouncilSection from "@/components/team/CouncilSection";
import TracksSection from "@/components/tracks/TracksSection";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      {/* Navbar would go here */}
      <HeroSection />
      <MissionSection />
      <TracksSection />
      <ImpactSection />
      <FeaturedProjectsSection />
      <CouncilSection />
      <IntelligenceSection />
      <Footer />
    </main>
  );
}