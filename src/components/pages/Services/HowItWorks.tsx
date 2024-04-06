import { stepsData } from "@/components/lib/constant";
import React from "react";

function HowItWorks() {
  return (
    <div className="bg-lightGreen">
      <div className="container pt-10 md:pt-[79px] md:pb-[112px] pb-10">
        <h2 className="heading2-text">How it works</h2>
        <div className="mt-[75px] hidden md:block">
          <div className="flex items-center justify-center">
            {stepsData.map((step, index) => (
              <React.Fragment key={index}>
                <div className="w-[75px] h-[75px] rounded-full bg-white relative">
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px] font-medium">
                    {step.step}
                  </span>
                </div>
                {index !== stepsData.length - 1 && (
                  <div className="h-2 w-[220px] bg-white"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-[58px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-24">
            {stepsData.map((step, index) => (
              <div className="text-start md:text-center" key={index}>
                {step.description}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
