import SideCard from "@/components/elements/SideCard";
import React from "react";

function ProcessSection() {
  const stepPositions = [
    { left: "left-[250px]", top: "top-[25px]" },
    { left: "left-[520px]", top: "top-[-20px]" },
    { left: "left-[820px]", top: "top-[-8px]" },
    { left: "left-[1110px]", top: "top-[20px]" },
  ];

  const ProcessSteps = [
    {
      title: "Brief",
      desc: "We work with you to create a tailored brief to meet your senior talent requirements, ensuring a perfect match for your team.",
      step: 1,
      mt:'mt-20',
      mb:'mb-0'
    },
    {
      title: "Headhunt",
      desc: "We tap into our extensive network of professionals ensuring we find you only best candidates for your role.",
      step: 2,
      mt:'mt-0',
      mb:"mb-20"
    },
    {
      title: "Shortlist",
      desc: "We present you with an initial candidate shortlist, brief realignment , then you decide who you want to take forward to interview. ",
      step: 3,
      mt:'mt-6',
      mb:"mb-0"
    },
    {
      title: "Offer & Beyond",
      desc: "We manage the offer process and follow us with monthly placement after care to ensure the smoothest onboarding process",
      step: 4,
      mt:'mt-12',
      mb:"mb-0"
    },
  ];
  return (
    <div className=" bg-lightGreen">
      <div className="">
        <div className="container py-10 md:py-[84px]">
          <div className="max-w-[776px] mx-auto">
            <div className=" flex justify-center items-center hidden lg:block">
              <h2 className="md-text text-center">
                The{" "}
                <span className="gradiant-text-2 md-text">Perfect Process</span>{" "}
                To Help You Achieve Your Mission
              </h2>
            </div>
            <h2 className="text-center text-3xl font-bold">Perfect Process</h2>
          </div>
        </div>
        <div className="mt-1 relative hidden lg:block">
          <div className=" flex justify-center items-center">
            <img src="/bg/color-line.svg" alt="" />
          </div>
          {stepPositions.map((position, index) => (
            <div
              key={index}
              className={`absolute ${position.left} ${position.top} `}
            >
              <div className="w-[72px] h-[72px] rounded-full bg-border-100 relative">
                <div className="w-[56px] h-[56px] rounded-full gradiant-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[32px] font-semibold">
                    {index + 1}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container py-2 md:py-[18px] hidden lg:block">
          <div className=" gap-6 flex md:flex-row flex-col">
          {ProcessSteps.map((data: any) => {
              return (
                <div className={`${data.mt} ${data.mb}`} key={data.step}>
                  <SideCard title={data.title} desc={data.desc}/>
                </div>
              );
            })}
          
          </div>
        </div>

        <div className="container block lg:hidden">
          <div className=" grid grid-cols-3 gap-0">
            <div className=" col-span-1 ">
              <div className="flex flex-col  justify-center items-center">
                {ProcessSteps.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="w-[64px] h-[64px] rounded-full bg-border relative">
                      <div className="w-[49px] h-[49px] rounded-full gradiant-bg  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                        <span className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[32px] font-semibold">
                          {step.step}
                        </span>
                      </div>
                    </div>
                    {index !== stepPositions.length - 1 && (
                      <div className="h-[140px] w-[4px] bg-border"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className=" col-span-2">
              <div className="flex flex-col">
                {ProcessSteps.map((data: any) => {
                  return (
                    <div className=" max-w-[256px]" key={data.step}>
                      <div className="px-2 py-4">
                        <div className=" font-normal text-xl mb-2">
                          {data.title}
                        </div>
                        <p className="text-base font-[300]">{data.desc}</p>
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

export default ProcessSection;
