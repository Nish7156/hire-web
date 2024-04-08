import IdeaIcon from "@/components/Utility/icons/IdeaIcon";
import InterfaceIcon from "@/components/Utility/icons/InterfaceIcon";
import PencileIcon from "@/components/Utility/icons/PencileIcon";
import React from "react";

function FeactursSection({ data }: any) {
  const Feats = [
    {
      icon: <IdeaIcon />,
      title: "Design Sprint",
      desc: "Products based on real-world data will out-perform others every time. We combine qualitative and quantitative research and market analysis in order to build a robust, scientific foundation for your success.",
      categories: [
        {
          category_name: "DISCOVERY WORKSHOP",
        },
        {
          category_name: "AUDIT",
        },
        {
          category_name: "PROJECT PLANNING",
        },
        {
          category_name: "USER PERSONA",
        },
        {
          category_name: "COMPETITOR ANALYSIS",
        },
      ],
    },
    {
      icon: <PencileIcon />,
      title: "User Experience Design",
      desc: "We keep relentless focus on your business goals and user’s needs, while we meticulously cover all the possible user flows during the low‑fidelity and high‑fidelity wireframes phase.",
      categories: [
        {
          category_name: "INFORMATION ARCHITECTURE",
        },
        {
          category_name: "USER FLOW",
        },
        {
          category_name: "WIREFRAMING",
        },
        {
          category_name: "PROTOTYPING",
        },
        {
          category_name: "USABILITY TESTING",
        },
      ],
    },
    {
      icon: <InterfaceIcon />,
      title: "User Interface Design",
      desc: "Beautiful is good. At least that’s what our brains are hardwired to think. Our skilled designers know how to use this to your advantage and to design products users will not just use, but enjoy.        ",
      categories: [
        {
          category_name: "VISUAL DESIGN",
        },
        {
          category_name: "BRANDING",
        },
        {
          category_name: "ILLUSTRATIONS",
        },
        {
          category_name: "INTERACTION DESIGN",
        },
        {
          category_name: "DESIGN SYSTEMS",
        },
      ],
    },
  ];
  return (
    <div className={`${data.bg}`}>
      <div className="container">
        <div className="md:pt-[75px] md:pb-[81px] pt-10 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className=" content-center max-w-[431px]">
              <h2 className=" text-[40px]">{data.serviceTitle}</h2>
              <p className="normal-text pt-[32px]">{data.serviceDescription}</p>
            </div>
            <div className=" relative">
              <div className=" relative z-10">
                <img src={`${data.serviceImage}`} alt="" />
              </div>
              <div className=" hidden xl:block absolute top-[-297px] right-[-150px]">
                <img src="/bg/ringbg.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.Services.map((data: any, index: number) => {
                return (
                  <div className="" key={index}>
                    {data.icon}
                    <h2 className="py-4 gradient-text font-bold text-2xl">
                      {data.serviceListTitle}
                    </h2>
                    <div className="h-1 w-full bg-border"></div>
                    <p className="py-5 text-sm  text-light-100 font-normal">
                      {data.serviceListDescription}
                    </p>
                    <div className="">
                      <ul>
                        {data.ServicesBullets.map(
                          (item: any, index: number) => {
                            return (
                              <li
                                key={index}
                                className="text-sm font-normal text-light mb-3"
                              >
                                {item}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeactursSection;
