//@ts-nocheck
"use client";
import RightArrow from "@/components/Utility/icons/RightArrow";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
function IndustriesSlider() {
  function SampleNextArrow(props: {
    className?: any;
    style?: any;
    onClick?: any;
  }) {
    const { className, style, onClick } = props;
    return (
      <div
        className={
          " w-[48px] h-[48px] rounded-full bg-white  cursor-pointer absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2"
        }
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <div className=" justify-center flex items-center h-full">
          <RightArrow />
        </div>
      </div>
    );
  }

  const SliderData = [
    {
      title: "B2B Commerce",
      img: "/images/slider-1.svg",
      icon: "/images/slider-1-icon.svg",
    },
    {
      title: "Real Estate",
      img: "/images/slider-2.svg",
      icon: "/images/slider-2-icon.svg",
    },
    {
      title: "Healthcare",
      img: "/images/slider-3.svg",
      icon: "/images/slider-3-icon.svg",
    },
    {
      title: "Marketing",
      img: "/images/slider-4.svg",
      icon: "/images/slider-4-icon.svg",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-pink">
      <div className=" container md:max-w-full py-[88px]">
        <div className="flex justify-center">
          <h2 className="md-text">Industries we serve</h2>
        </div>
        <div className="flex justify-center ">
          <p className=" md:max-w-[503px] mt-3  text-center ">
            Lorem ipsum dolor sit amet consectetur. Tristique velit dolor et non
            euismod fringilla congue ornare sapien.{" "}
          </p>
        </div>
        <div className=" pt-10 md:pt-[88px]">
          <Slider {...settings}>
            {SliderData.map((data: any, index: number) => {
              return (
                <div className="slider-card w-[296px]" key={index}>
                  <div className=" relative md:mr-4 md:h-[257px]">
                    <img
                      src={`${data.img}`}
                      alt=""
                      className="w-full  rounded-xl"
                      style={{borderRadius:'25px'}}
                    />
                    <div className=" bg-border-100 slider-bottom-card rounded-b-xl  absolute right-0 left-0 bottom-[-10px] rounded-br-xl rounded-bl-xl  py-[18px] px-6">
                      <div className=" flex items-center">
                        <div className="w-[45px] h-[45px] bg-white rounded-full relative mr-6">
                          <Image
                            height={30}
                            width={30}
                            src={`${data.icon}`}
                            alt="icon"
                            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          />
                        </div>
                        <p className="text-lg font-medium">{data.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default IndustriesSlider;
