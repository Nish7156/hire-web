import { stepsData } from "@/components/lib/constant";
import React from "react";

function StaffingProcess() {
  const StaffingProcessList = [
    {
      step: 1,
      title: "Reach Out",
      desc: "Tell us what you are looking for",
    },
    {
      step: 2,
      title: "Connect",
      desc: "Your dedicated Hiring Partner reaches out to discuss your unique needs",
    },
    {
      step: 3,
      title: "Review Candidates",
      desc: "We search, screen, & share a curated list of the most qualified candidates",
    },
    {
      step: 4,
      title: "Interview & Offer",
      desc: "We’ll schedule or conduct interviews, & help you extend an offer",
    },
    {
      step: 5,
      title: "Hire & Onboard",
      desc: "Hire your perfect candidate, & let us take care of the onboarding",
    },
  ];
  return (
    <div className="md:bg-lightGreen bg-white">
      <div className="container py-10 md:py-[106px]">
        <div className="flex justify-center items-center">
          <h2 className="md-text">Our Staffing Process</h2>
        </div>
        <div className="mt-[75px] hidden md:block">
          <div className="flex items-center justify-center">
            {StaffingProcessList.map((step, index) => (
              <React.Fragment key={index}>
                <div className="w-[72px] h-[72px] rounded-full bg-border relative">
                  <div className="w-[56px] h-[56px] rounded-full gradiant-bg  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <span className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[32px] font-semibold">
                      {step.step}
                    </span>
                  </div>
                </div>
                {index !== StaffingProcessList.length - 1 && (
                  <div className="h-2 w-[160px] bg-border"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 md:mt-[26px] hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-19">
            {StaffingProcessList.map((step, index) => (
              <div className="text-start md:text-center" key={index}>
                <h2 className=" text-xl font-medium mb-3">{step.title}</h2>
                <div className="text-start md:text-center">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="container block lg:hidden mt-8">
          <div className=" grid grid-cols-3 gap-0">
            <div className=" col-span-1 ">
              <div className="flex flex-col  justify-center items-center">
                {StaffingProcessList.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="w-[49px] h-[49px] rounded-full bg-border relative">
                      <div className="w-[38px] h-[38px] rounded-full gradiant-bg  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                        <span className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[32px] font-semibold">
                          {step.step}
                        </span>
                      </div>
                    </div>
                    {index !== StaffingProcessList.length - 1 && (
                      <div className="h-[100px] w-[4px] bg-border"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className=" col-span-2">
              <div className="flex flex-col">
                {StaffingProcessList.map((data: any) => {
                  return (
                    <div className=" max-w-[256px]" key={data.step}>
                      <div className="px-2 py-4">
                        <div className="font-bold text-xl mb-2">
                          {data.title}
                        </div>
                        <p className="text-base">{data.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffingProcess;
