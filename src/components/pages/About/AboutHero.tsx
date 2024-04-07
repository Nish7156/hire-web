import CustomButton from "@/components/elements/CustomButton";
import React from "react";

function AboutHero() {
  return (
    <>
      <div className="bg-pink">
        <div className="container">
          <div className="py-[99px]">
            <div className=" flex justify-between md:flex-row flex-col">
              <div className=" md:max-w-[590px]">
                <h1 className="heading-text font-semibold">
                  Onestep Solution for{" "}
                  <span className="gradiant-text-2">Product Design</span>
                </h1>
                <p className=" md:max-w-[459px] text-lg font-normal text-light">
                  Lorem ipsum dolor sit amet consectetur. Purus magna quam
                  gravida feugiat orci volutpat ullamcorper congue vitae.
                </p>
                <div className="pt-[63px] grid grid-cols-1 md:grid-cols-2">
                  <CustomButton>Contact Us</CustomButton>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <div className=" flex justify-center md:justify-end">
                  <img src={"/images/hero-img.svg"} alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
