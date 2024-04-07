"use client";
import CustomButton from "@/components/elements/CustomButton";
import React, { useEffect, useState } from "react";

function AboutHero() {
  const [textIndex, setTextIndex] = useState(0);
  const words = ["Marketing", "Staffing", "Product Design"];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const changeText = () => {
      setIsVisible(false); // Set isVisible to false to trigger exit animation
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % words.length); // Cycle through words
        setIsVisible(true); // Set isVisible to true to trigger enter animation
      }, 100); // Adjust the delay as needed
    };

    // Initial display after 1 second, then change every 3 seconds
    setTimeout(changeText, 0);
    const interval = setInterval(changeText, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <>
      <div className="bg-pink">
        <div className="container">
          <div className="py-12 md:py-[99px]">
            <div className=" flex justify-between md:flex-row flex-col">
              <div className=" md:max-w-[590px]">
                <h1 className="heading-text font-semibold">
                  Onestep Solution for{" "}
                  <span
                    className={`text-animation heading-text gradiant-text-2 ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {words[textIndex]}
                  </span>
                </h1>
                <p className=" md:max-w-[459px] text-lg font-normal text-light">
                  Lorem ipsum dolor sit amet consectetur. Purus magna quam
                  gravida feugiat orci volutpat ullamcorper congue vitae.
                </p>
                <div className="pt-[63px] grid grid-cols-1 md:grid-cols-2">
                  <CustomButton>Contact Us</CustomButton>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <div className=" flex justify-center md:justify-end">
                  <img src={"/images/hero-img.svg"} alt="Hero" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
