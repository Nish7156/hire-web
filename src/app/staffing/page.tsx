import StaffingHero from "@/components/pages/Staffing/StaffingHero";
import StaffingTeam from "@/components/pages/Staffing/StaffingTeam";
import Leaders from "@/components/pages/Staffing/Leaders";
import React from "react";

function page() {
  return (
    <div>
      <StaffingHero />
      <StaffingTeam />
      <Leaders/>
    </div>
  );
}

export default page;
