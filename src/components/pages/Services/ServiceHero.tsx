import CustomButton from "@/components/elements/CustomButton";
import React from "react";

function ServiceHero() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 grid-cols-1 py-[74px]">
        <div className="">
          <div className="flex gap-6 ">
            <div className="flex flex-col gap-4">
              <div>
                <img src="/images/service-hero-1.svg" alt="service-hero-1" />
              </div>
              <div>
                <img src="/images/service-hero-2.svg" alt="service-hero-2" />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-[100px]">
              <div>
                <img src="/images/service-hero-3.svg" alt="service-hero-3" />
              </div>
              <div>
                <img src="/images/service-hero-4.svg" alt="service-hero-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[100px]">
          <h1 className="heading-text ">
            Elevate Your Business with{" "}
            <span className="gradient-text">Hirree's Expertise</span>
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
