import CustomButton from "@/components/elements/CustomButton";
import React from "react";

function ServiceHero() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 grid-cols-1 py-[74px]">
        <div className="">1</div>
        <div className="">
          <h1 className="heading-text">
            Elevate Your Business with Hirree's Expertise
          </h1>
          <div className=" pt-4 lg:max-w-[445px]">
            <p>
              Lorem ipsum dolor sit amet consectetur. Purus magna quam gravida
              feugiat orci Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className=" pt-8 grid grid-cols-1 md:grid-cols-2">
            <CustomButton>Contact Us</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHero;
