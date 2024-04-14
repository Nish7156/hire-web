import React from "react";

function CommingSoon() {
  return (
    <div className=" relative mb-20 md:mb-0">
      <div className="hidden md:block">
        <div className=" flex justify-center items-center">
          <img src="/bg/comming-soon.svg" alt="" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center items-center absolute top-0 z-10 md:hidden">
        <img src="/bg/comming-soon-phone.svg" alt="" />
      </div>
      <div className="flex justify-center items-center md:hidden">
        <img src="/bg/phone-glass.svg" alt="" />
      </div>
      <div className="max-w-[944px] z-20 mx-auto w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className=" flex justify-center">
          <h1 className=" text-[40px] md:text-[80px] leading-10 md:leading-[120px] font-bold leverage-expertise">
            Coming Soon
          </h1>
        </div>
        <p className=" text-md md:text-xl font-medium text-center mt-4 mb-4 md:mt-0 md:mb-[30px]">
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
            <div className=" absolute md:right-[210px] right-[60px] top-[4px] md:top-[9px]">
              <button
                disabled={true}
                className={`md:py-2 md:px-4 py-1 px-2 text-xs md:text-lg ${
                  true ? "bg-light" : "bg-black"
                } hover:bg-light text-white dark-btn ${
                  true ? " cursor-not-allowed" : "cursor-pointer"
                }`}
              >
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
