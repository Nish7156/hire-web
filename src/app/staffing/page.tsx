import StaffingHero from "@/components/pages/Staffing/StaffingHero";
import StaffingTeam from "@/components/pages/Staffing/StaffingTeam";
import Leaders from "@/components/pages/Staffing/Leaders";
import React from "react";
import IndustriesSlider from "@/components/pages/Staffing/IndustriesSlider";
import StaffingProcess from "@/components/pages/Staffing/StaffingProcess";
import WeGotYouSection from "@/components/pages/Staffing/WeGotYouSection";

function page() {
  return (
    <div>
      <StaffingHero />
      <StaffingTeam />
      <Leaders/>
      <IndustriesSlider/>
      <StaffingProcess/>
      <WeGotYouSection/>
    </div>
  );
}

export default page;
