import { QuestionsSection } from "@/components/Utility/CommonComponent";
import AboutHero from "@/components/pages/About/AboutHero";
import WhyChooseUs from "@/components/pages/About/WhyChooseUs";
import React from "react";

function page() {
  return (
    <div>
      <AboutHero />
      <WhyChooseUs/>
      <div className="container py-10 md:pb-[100px]">
        <QuestionsSection
          title={
            <>
              <h2 className=" text-[26px] leading-[35px] md:text-[42px] md:leading-[63px] font-semibold mb-6 md:mb-[37px]">
                “Growing your business is hard. Finding Talent shouldn’t be.”
              </h2>
            </>
          }
          buttonText="Contact Us"
        />
      </div>
    </div>
  );
}

export default page;
