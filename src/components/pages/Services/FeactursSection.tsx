import IdeaIcon from "@/components/Utility/icons/IdeaIcon";
import React from "react";

function FeactursSection() {
  return (
    <div className="bg-pink">
      <div className="container">
        <div className="pt-[75px] pb-[81px]">
          <div className="grid grid-cols-2 gap-4">
            <div className=" content-center max-w-[431px]">
              <h2 className=" text-[40px]">Product Design</h2>
              <p className="normal-text pt-[32px]">
                Successful product is the one that users turn to again and
                again. That’s why user-centered design is at the heart of every
                product we do. We deliver logical UX and beautiful UI for both
                mobile and web.
              </p>
            </div>
            <div className="">
              <img src="/images/service-1.svg" alt="" />
            </div>
          </div>
          <div className="mt-6">
            <div className="grid grid-cols-3 gap-6">
                <div className="">
                    <IdeaIcon/>
                    <h2>Design Sprint</h2>
                    <div className="h-1 w-full bg-border"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeactursSection;
