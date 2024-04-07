import React from "react";

function CommingSoon() {
  return (
    <div className=" relative">
      <img src="/bg/comming-soon.svg" alt="" />
      <div className="max-w-[944px] mx-auto w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className=" flex justify-center">
          <h1 className=" text-[80px] leading-[120px] font-bold">
            Coming Soon
          </h1>
        </div>
        <p className=" text-xl font-medium text-center mb-[30px]">
          Get Notified When We Launch
        </p>
        <div className="relative">
          <div className="flex justify-center ">
            <input
              type="text"
              placeholder="Enter your email address"
              className="customInput relative"
              name=""
              id=""
            />
            <div className=" absolute right-[210px] top-[9px]">
              <button className="py-2 px-4 bg-black text-white dark-btn">
              Notify Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommingSoon;
