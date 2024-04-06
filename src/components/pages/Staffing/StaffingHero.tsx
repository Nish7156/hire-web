import CustomButton from "@/components/elements/CustomButton";
import Image from "next/image";
import React from "react";

function StaffingHero() {
  return (
    <div className=" relative ">
      {/* <div className=" absolute top-0 right-0">
        <Image src="/bg/gradientbg.svg" width={350} height={350} alt="" />
      </div> */}
      <div className="container py-10 md:py-[130px]">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="">
            <h1 className=" text-textLight font-bold text-xl">ONE STOP SOLUTION</h1>
            <h2 className="heading-text">Looking to Recruit Talent for your</h2>
            <h2 className="gradient-text heading-text">Company</h2>
            <div className=" md:max-w-[459px] mt-4">
              <p className="normal-text">
                Lorem ipsum dolor sit amet consectetur. Purus magna quam gravida
                feugiat orci{" "}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
              <CustomButton>Contact Us</CustomButton>
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
