import SideCard from "@/components/elements/SideCard";
import React from "react";

function ProcessSection() {
  const stepPositions = [
    { left: 250, top: 25 },
    { left: 520, top: -20 },
    { left: 820, top: -8 },
    { left: 1110, top: 20 }
  ];
  return (
    <div className=" bg-lightGreen">
      <div className="">
        <div className="container py-10 md:py-[84px]">
          <div className="max-w-[776px] mx-auto">
            <div className=" flex justify-center items-center">
              <h2 className="md-text text-center">
                The{" "}
                <span className="gradiant-text-2 md-text">Perfect Process</span>{" "}
                To Help You Achieve Your Mission
              </h2>
            </div>
          </div>
        </div>
        <div className="mt-1 relative hidden lg:block">
          <div className=" flex justify-center items-center">
            <img src="/bg/color-line.svg" alt="" />
          </div>
          {stepPositions.map((position, index) => (
            <div
              key={index}
              className={`absolute left-[${position.left}px] top-[${position.top}px] `}
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
        <div className="container py-2 md:py-[18px]">
          <div className=" gap-6 flex md:flex-row flex-col">
            <div className="mt-20">
              <SideCard />
            </div>
            <div className="mb-20">
              <SideCard />
            </div>
            <div className="mt-6">
              <SideCard />
            </div>
            <div className="mt-12">
              <SideCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
