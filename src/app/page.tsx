import AgileTeam from "@/components/pages/Home/AgileTeam";
import HeroSection from "@/components/pages/Home/HeroSection";
import OurServices from "@/components/pages/Home/OurServices";
import ProcessSection from "@/components/pages/Home/ProcessSection";
import StillHaveQuestions from "@/components/pages/Home/StillHaveQuestions";
import ValuesSection from "@/components/pages/Home/ValuesSection";
import IndustriesSlider from "@/components/pages/Staffing/IndustriesSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuesSection/>
      <OurServices />
      <ProcessSection/>
       <IndustriesSlider/>
      <AgileTeam />
      <StillHaveQuestions />
    </>
  );
}
