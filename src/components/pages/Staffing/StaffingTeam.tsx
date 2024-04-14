import React from "react";

function StaffingTeam() {
  return (
    <div className=" bg-pink">
      <div className="container">
        <div className="md:py-24 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" order-last md:order-none">
              <div className=" flex justify-center gap-4 flex-row">
                <div className=" mt-10 md:mt-[92px]">
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
            <div className="order-1 md:order-none">
              <div className=" flex justify-end ">
                <div className="md:max-w-[442px]">
                  <h2 className="md:text-[48px]  font-semibold md:leading-[65px] text-3xl ">
                    Not an average staffing solution
                  </h2>
                  <div className=" pt-8">
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Tristique velit
                      dolor et non euismod fringilla congue ornare sapien. Odio
                      nisl facilisis sagittis elit platea massa arcu. Sed id eu
                      urna integer ac mattis euismod. Posuere sed viverra tempus
                      purus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffingTeam;
