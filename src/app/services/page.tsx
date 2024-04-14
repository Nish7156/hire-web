import { QuestionsSection } from "@/components/Utility/CommonComponent";
import { ServiceDataList } from "@/components/lib/data/ProductDesignService";
import StillHaveQuestions from "@/components/pages/Home/StillHaveQuestions";
import AgileTeam from "@/components/pages/Services/AgileTeam";
import FeactursSection from "@/components/pages/Services/FeactursSection";
import HowItWorks from "@/components/pages/Services/HowItWorks";
import MyComponent from "@/components/pages/Services/ServiceHero";
import ServiceHero from "@/components/pages/Services/ServiceHero";
import React from "react";

function page() {
  return (
    <div>
      <MyComponent />
      {ServiceDataList.map((data: any, index: any) => {
        return (
          <div key={index} className="">
            <FeactursSection data={data} />
          </div>
        );
      })}

      <AgileTeam />
      <HowItWorks />

      <div className="container py-10 md:py-[99px]">
        <QuestionsSection
          title={
            <h1 className=" text-2xl md:text-[42px] md:leading-[60px] font-semibold mb-6">
              Have a project in mind? <br />
              Let’s work together.
            </h1>
          }
          buttonText="Contact Us"
        />
      </div>
    </div>
  );
}

export default page;
