import BrainIcon from "@/components/Utility/icons/BrainIcon";
import CustomizeIcon from "@/components/Utility/icons/CustomizeIcon";
import MedalIcon from "@/components/Utility/icons/MedalIcon";
import PersonIcon from "@/components/Utility/icons/PersonIcon";
import QualityIcon from "@/components/Utility/icons/QualityIcon";
import React from "react";

function WhyChooseUs() {
  const WhyChooseUsData = [
    {
      icon: <BrainIcon />,
      title: "Expertise",
      desc: "Our team comprises industry experts with years of experience in recruitment, product development, and staffing.",
    },
    {
      icon: <CustomizeIcon />,
      title: "Customization",
      desc: "We understand that every business is unique. That's why we tailor our solutions to meet your specific requirements.",
    },
    {
      icon: <PersonIcon />,
      title: "Partnership",
      desc: "We believe in building strong, collaborative relationships with our clients, working together towards shared success.",
    },
    {
      icon: <MedalIcon />,
      title: "Quality",
      desc: "We are committed to delivering excellence in everything we do, from candidate selection to product development to customer service.",
    },
  ];
  return (
    <div>
      <div className="container py-10 md:py-[63px] relative">
        <div className=" hidden md:block absolute right-[-160px]">
            <img src="/bg/circle-ring-2.svg" alt="" />
        </div>
        <div className=" md:max-w-[783px]">
          <h2 className="choose-us text-[36px] font-medium leading-[54px]">
            Why Choose Us?
          </h2>
          <h3 className="md-text font-medium">We’re ready to grow your business with us</h3>
        </div>
        <div className=" mt-12 md:mt-[77px]">
          <div className="flex justify-between md:flex-row flex-col-reverse">
            <div className="flex-1">
              {WhyChooseUsData.map((data: any, index: number) => {
                return (
                  <div className=" col-span-2 mb-8" key={index}>
                    <div className="flex ">
                      <div className="mr-5 md:mr-[50px]">{data.icon}</div>
                      <div className=" md:max-w-[594px]">
                        <h4 className=" text-[32px] font-medium text-black">
                          {data.title}
                        </h4>
                        <p className="text-md">{data.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-span-1 mb-12 md:mb-0 z-10">
              <img src="/images/about-img-1.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
