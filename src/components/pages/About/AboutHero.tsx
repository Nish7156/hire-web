import CustomButton from '@/components/elements/CustomButton'
import React from 'react'

function AboutHero() {
  return (
    <>
      <div className="bg-pink">
      <div className="container">
        <div className="py-[99px]">
          <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <h1 className="text-[60px] leading-[80px] font-semibold">
                Onestep Solution for
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Purus magna quam gravida
                feugiat orci volutpat ullamcorper congue vitae.
              </p>
              <div className="pt-[63px] grid grid-cols-1 md:grid-cols-2">
                <CustomButton >Contact Us</CustomButton>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <div className=" flex justify-center md:justify-end">
                <img
                  src={"/images/hero-img.svg"}
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>   
    </>
  )
}

export default AboutHero