import CustomButton from "@/components/elements/CustomButton";
import CustomImageAuto from "@/components/elements/CustomImageAuto";
import Image from "next/image";
import React from "react";

function StaffingHero() {
  return (
    <div className=" relative ">
      <div className=" absolute top-0 right-0 md:block hidden">
        <Image src="/bg/full-gradiant-bg.svg" height={800} width={955} alt="" />
      </div>
      <div className=" absolute bottom-0 right-0 md:block hidden">
        <Image src="/bg/trangle.svg" height={561} width={925} alt="" />
      </div>
      <div className="container py-10 md:py-[130px] z-20 relative">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="">
            <h1 className=" text-textLight font-bold text-xl">
              ONE STOP SOLUTION
            </h1>
            <h2 className="heading-text">Looking to Recruit Talent for your</h2>
            <h2 className="gradient-text heading-text">Company</h2>
            <div className=" md:max-w-[459px] mt-4">
              <p className="normal-text">
                Lorem ipsum dolor sit amet consectetur. Purus magna quam gravida
                feugiat orci{" "}
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
            <div className="max-w-[181px] md:max-w-[228px] mt-10">
              <CustomButton isContact>Contact Us</CustomButton>
            </div>

            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="flex justify-end">
              <Image
                src={"/images/stafing-hero-banner.svg"}
                width={494}
                height={412}
                alt="staffing-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffingHero;
