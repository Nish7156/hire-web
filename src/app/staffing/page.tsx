import StaffingHero from "@/components/pages/Staffing/StaffingHero";
import StaffingTeam from "@/components/pages/Staffing/StaffingTeam";
import Leaders from "@/components/pages/Staffing/Leaders";
import React from "react";
import IndustriesSlider from "@/components/pages/Staffing/IndustriesSlider";
import StaffingProcess from "@/components/pages/Staffing/StaffingProcess";
import WeGotYouSection from "@/components/pages/Staffing/WeGotYouSection";
import StaffingServices from "@/components/pages/Staffing/StaffingServices";

function page() {
  return (
    <div>
      <StaffingHero />
      <StaffingTeam />
      <Leaders/>
      <IndustriesSlider/>
      <StaffingProcess/>
      <WeGotYouSection/>
      <StaffingServices/>
    </div>
  );
}

export default page;
