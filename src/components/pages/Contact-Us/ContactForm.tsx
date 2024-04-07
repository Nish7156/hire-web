import React from "react";
import CustomButton from "@/components/elements/CustomButton";

function ContactForm() {
  const BuildingTypes = [
    {
      title: "Mobile App",
      checked: false,
      value: "",
    },
    {
      title: "Website",
      checked: false,
      value: "",
    },
    {
      title: "Web App",
      checked: true,
      value: "",
    },
    {
      title: "Others",
      checked: false,
      value: "",
    },
  ];
  const ServiceTypes = [
    {
      title: "Product Design",
      value: "",
      checked: false,
    },
    {
      title: "Development",
      value: "",
      checked: false,
    },
    {
      title: "Marketing",
      value: "",
      checked: false,
    },
    {
      title: "AI/ML",
      value: "",
      checked: false,
    },
    {
      title: "Staffing Solutions",
      value: "",
      checked: false,
    },
  ];

  const BudgetList = [
    {
      title: "10k-20k",
      value: "10-20",
    },
    {
      title: "20k-50k",
      value: "20-50",
    },
    {
      title: "50k-100k",
      value: "50-100",
    },
    {
      title: "+100k",
      value: "101",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="py-10 md:py-[72px]">
          <CustomText>What are you building?</CustomText>
          <div className="pt-10 md:pt-14">
            <div className="flex gap-6 flex-wrap">
              {BuildingTypes.map((data: any, index: number) => {
                return (
                  <div className="py-3 px-[27px] border-[1px] cursor-pointer border-black dark-btn">
                    <div className="flex items-center gap-[19px]">
                      <input type="checkbox" className="w-6 h-6 rounded-lg" />
                      <p className=" text-2xl font-normal">{data.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pb-10 md:pb-[72px] md:max-w-[990px]">
          <CustomText>What services do you need?</CustomText>
          <div className="pt-10 md:pt-14">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
              {ServiceTypes.map((data: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="py-[29px] px-[33px] border-[1px] cursor-pointer border-black rounded-xl"
                  >
                    <div className="flex justify-center">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 32C11.268 32 5 25.732 5 18C5 10.268 11.268 4 19 4C26.732 4 33 10.268 33 18"
                          stroke="url(#paint0_linear_17_772)"
                          stroke-width="4"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M44 18H18V44H44V18Z"
                          stroke="url(#paint1_linear_17_772)"
                          stroke-width="4"
                          stroke-linejoin="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_17_772"
                            x1="5"
                            y1="4"
                            x2="36.4429"
                            y2="27.3672"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#1AD9DF" />
                            <stop offset="1" stop-color="#A824FE" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_17_772"
                            x1="18"
                            y1="18"
                            x2="47.197"
                            y2="39.6981"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#1AD9DF" />
                            <stop offset="1" stop-color="#A824FE" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex items-center gap-[19px] mt-2 justify-center">
                      <input type="checkbox" className="w-6 h-6 rounded-lg" />
                      <p className=" text-2xl font-normal">{data.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pb-10 md:pb-[72px] md:max-w-[990px]">
          <CustomText>Expected Budget?</CustomText>
          <div className="pt-10 md:pt-14">
            <div className="flex gap-6 flex-wrap">
              {BudgetList.map((data: any, index: number) => {
                return (
                  <div className="py-3 px-[27px] border-[1px] cursor-pointer border-black dark-btn">
                    <div className="flex items-center gap-[19px]">
                      <input type="checkbox" className="w-6 h-6 rounded-lg" />
                      <p className=" text-2xl font-normal">{data.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="py-10 md:py-[72px]">
          <CustomText>Your details</CustomText>
          <div className=" mt-10 md:mt-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="input-with-placeholder">
                <input type="text" id="username" required />
                <label htmlFor="username">Full name*</label>
              </div>
              <div className="input-with-placeholder mt-6 md:mt-0">
                <input type="text" id="Phone" required />
                <label htmlFor="Phone">Phone*</label>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-12 md:mt-[80px]">
              <div className="input-with-placeholder">
                <input type="text" id="emailId" required />
                <label htmlFor="emailId">Email ID*</label>
              </div>
            </div>
            <div className="grid grid-cols-1 mt-12 md:mt-[80px]">
              <div className="input-with-placeholder">
                <input type="text" id="Message" required />
                <label htmlFor="Message">Message</label>
              </div>
            </div>
            <div className="">
              <div className="flex gap-5 my-[86px] text-xl max-md:flex-wrap max-md:mt-10">
                <input
                  type="checkbox"
                  id="privacy-policy"
                  name="privacyPolicy"
                  className="shrink-0 w-6 h-6 rounded border border-black border-solid"
                />
                <label
                  htmlFor="privacy-policy"
                  className="flex-auto max-md:max-w-full"
                >
                  I have read , understood and agree with the privacy and data
                  processing policy
                </label>
              </div>
            </div>
            <div className=" md:max-w-[271px]">
              <CustomButton>Send Message</CustomButton>
            </div>
            <div className="mt-[61px] md:max-w-[438px]">
              <p>
                Simply fill out the form above, or email us at
                cgsfdsvd@hirree.com if you prefer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

const CustomText = ({ children }: any) => {
  return <h2 className="heading2-text">{children}</h2>;
};
