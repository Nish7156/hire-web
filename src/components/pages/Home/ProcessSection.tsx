import SideCard from "@/components/elements/SideCard";
import React from "react";

function ProcessSection() {
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
        <div className="mt-1 relative">
            <div className=" flex justify-center items-center">
                <img src="/bg/color-line.svg" alt="" />
            </div>
        </div>
        <div className="container py-10 md:py-[94px]">
            <SideCard/>
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
