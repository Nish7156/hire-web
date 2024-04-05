import CustomButton from "@/components/elements/CustomButton";
import * as React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="container">
      <div className="flex gap-5 justify-between  bg-white max-md:flex-wrap ">
        <div className="">
          <div className=" text-6xl font-semibold text-black bg-clip-text bg-[linear-gradient(127deg,#1AD9DF_0%,#A824FE_100%)] leading-[80px]  max-md:text-4xl max-md:leading-[59px] ">
            Unlock Growth
            <br />
            <p className="leverage-expertise  leading-[80px]  max-md:text-4xl max-md:leading-[59px]">
              Leverage Expertise
            </p>
          </div>

          <p className="mt-9 text-lg text-neutral-500  pr-0 lg:pr-[200px]">
            Lorem ipsum dolor sit amet consectetur. Purus magna quam gravida
            feugiat orci Lorem ipsum dolor sit amet consectetur. Purus magna
            quam gravida feugiat orci{" "}
          </p>
          <div className=" mt-6 md:mt-[40px] grid grid-cols-1 md:grid-cols-2">
            <CustomButton>Contact Us</CustomButton>
          </div>
        </div>
        <img
          loading="lazy"
          src="/images/home-hero-img.svg"
          alt="Decorative image"
          className="w-full aspect-[1.05] "
        />
      </div>
    </div>
  );
};

export default HeroSection;
