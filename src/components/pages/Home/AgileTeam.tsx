import CustomButton from "@/components/elements/CustomButton";
import * as React from "react";

const AgileTeam: React.FC = () => {
  return (
    <div>
      <div className="container">
        <div className="md:pt-24 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <div className=" md:max-w-[481px]">
                <h2 className="heading2-text md:max-w-[368px] font-semibold">
                  Agile Team On Demand
                </h2>
                <div className=" pt-8">
                  <p>
                    We assemble the perfect team to create your product, saving
                    you a lot of hassle and unnecessary overhead. By hiring and
                    managing talented people with skills specific to your
                    project, we build you a team that’s accomplished, agile and
                    scalable in both directions
                  </p>
                  {/* <p className="pt-6">
                    Best of all, your product team will be working in a
                    productive, motivational environment for a company that has
                    a 95% employee retention rate and a top 5 employer in
                    Croatia award under its belt.
                  </p> */}
                </div>
                <div className=" mt-4 md:mt-10 max-w-[299px] ">
                  <CustomButton>See How It Works</CustomButton>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" flex justify-center gap-4 flex-col md:flex-row">
                <div className=" mt-[92px]">
                  <img
                    src="/images/agile-team-1.svg"
                    className="w-full md:w-auto"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    src="/images/agile-team-2.svg"
                    className="w-full md:w-auto"
                    alt=""
                  />
                </div>
                <div className="mt-[56px]">
                  <img
                    src="/images/agile-team-3.svg"
                    className="w-full md:w-auto"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgileTeam;
