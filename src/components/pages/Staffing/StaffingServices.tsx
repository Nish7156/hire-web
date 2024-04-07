import StaffingIcon1 from "@/components/Utility/icons/StaffingIcon1";
import CustomButton from "@/components/elements/CustomButton";
import React from "react";

function StaffingServices() {
  const StaffingServicesData = [
    {
      title: "Client Engagement & Requirement Understanding",
      desc: "We initiate communication, gather comprehensive job specifications, and establish clear contract terms to lay the groundwork for a successful partnership.",
    },
    {
      title: "Candidate sourcing & shortlisting",
      desc: "Our candidate sourcing and shortlisting strategy involves diverse channels, thorough screening, and meticulous evaluation, resulting in a refined shortlist of the candidates for the next selection stage.",
    },
    {
      title: "Interview & selection process",
      desc: "We manage interview coordination, gather feedback for refinement, and facilitate offer negotiation to ensure a seamless transition for the chosen candidate.",
    },
    {
      title: "Onboarding & contract management",
      desc: "We finalise contracts, guide seamless candidate onboarding, monitor performance, and discuss contract renewal or conclusion for a smooth transition.",
    },
  ];

  const QuestionCardData = [
    {
      title: "Looking to hirree?",
      desc: "Source visionary engineers, innovative designers, and critical industry experts to gain a competitive edge in today's rapidly evolving technology landscape.",
    },
    {
      title: "Find Talent",
      desc: "Lorem ipsum dolor sit amet consectetur. Nisl nec viverra placerat aliquet lacus enim ipsum. Condimentum ornare lacus nisl nullam facilisi.",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="flex justify-center ">
          <h2 className="md-text md:max-w-[799px] text-center">
            Why our contract service is great for clients
          </h2>
        </div>
        <div className="flex justify-center">
          <div className=" md:max-w-[750px]">
            <p className="text-center pt-6">
              Our streamlined contract service encompasses effective client
              engagement, candidate sourcing and shortlisting, interview
              coordination, seamless onboarding, performance monitoring, and
              contract management for a comprehensive and smooth transition.
            </p>
          </div>
        </div>
        <div className="mt-12 md:px-24">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-14">
            {StaffingServicesData.map((data: any, index: number) => {
              return (
                <div className="" key={index}>
                  <div className="card-shadow py-7 px-[43px]">
                    <div className="flex justify-center">
                      <StaffingIcon1 />
                    </div>
                    <div className="flex justify-center mt-5">
                      <h2 className="text-center text-xl md:max-w-[287px] font-medium">
                        {data.title}
                      </h2>
                    </div>
                    <div className="flex justify-center my-2.5">
                      <div className="h-1 rounded-lg bg-red-900 w-[60px]"></div>
                    </div>
                    <div className="flex justify-center">
                      <p className=" text-center">{data.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" my-10 md:my-24">
          <div className="grid grid-cols-2 gap-6">
            {QuestionCardData.map((data: any, index: number) => {
              return (
                <div
                  key={index}
                  className=" pt-[55px] pl-[35px] pr-[42px] pb-[39px] leader-card-gradiant rounded-2xl"
                >
                  <h3 className="md-text text-center">{data.title}</h3>
                  <p className="pt-[14px] text-center">{data.desc}</p>
                  <div className="flex justify-center px-0 md:px-[88px] mt-5">
                    <CustomButton>Checkout Product</CustomButton>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffingServices;
