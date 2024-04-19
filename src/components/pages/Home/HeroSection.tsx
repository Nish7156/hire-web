import CustomButton from "@/components/elements/CustomButton";
import * as React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-full blue-gradiant">
      <div className="">
        <div className="flex gap-5 justify-between lg:flex-row flex-col ">
          <div className=" px-6 lg:mx-auto lg:mr-[36px] py-10 lg:py-[73px] ">
            <div className="">
              <div className="text-[32px] text-center md:text-left md:text-[60px] leading-[50px] md:leading-[80px] font-semibold ">
                Unlock Growth
                <br />
                <p className="leverage-expertise  text-[32px] md:text-[60px] leading-[50px] md:leading-[80px] font-semibold">
                  Leverage Expertise
                </p>
              </div>
              <p className=" lg:max-w-[445px] mt-6">
                Lorem ipsum dolor sit amet consectetur. Purus magna quam gravida
                feugiat orci Lorem ipsum dolor sit amet consectetur. Purus magna
                quam gravida feugiat orci{" "}
              </p>
              <div className=" mt-10 lg:mt-[38px] flex justify-center md:justify-start">
                <div className="  max-w-[181px] md:max-w-[228px]">
                  <CustomButton>Contact Us</CustomButton>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="">
              <img
                loading="lazy"
                src="/images/home-hero-img.svg"
                alt="Decorative image"
                className="w-full px-4 lg:px-0 lg:h-[587px] aspect-[1.05]  "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
