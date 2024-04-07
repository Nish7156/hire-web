import CustomButton from "@/components/elements/CustomButton";
import * as React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="">
      <div className="flex gap-5 justify-between  bg-white max-lg:flex-wrap ">
        <div className=" pl-6 pr-6 md:pr-0 lg:pl-[184px] ml-auto pt-[73px]">
          <div className="text-[40px] md:text-[60px] leading-[50px] md:leading-[80px] font-semibold ">
            Unlock Growth
            <br />
            <p className="leverage-expertise  text-[40px] md:text-[60px] leading-[50px] md:leading-[80px] font-semibold">
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
          className="w-full aspect-[1.05]  "
        />
      </div>
    </div>
  );
};

export default HeroSection;
