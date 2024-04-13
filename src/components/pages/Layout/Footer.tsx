import FacebookIcon from "@/components/Utility/icons/FacebookIcon";
import LinkdenIcon from "@/components/Utility/icons/LinkdenIcon";
import CustomButton from "@/components/elements/CustomButton";
import { Menus } from "@/components/lib/constant";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className=" border-0 md:border-t-[1px] ">
        <div className="container py-6 md:py-[62px] border-b-[1px]">
          <div className=" flex justify-between flex-col md:flex-row">
            <div className=" max-w-[520px] border-0 md:border-r-[1px]">
              <div className="">
                <h3 className=" font-bold text-[40px] md:text-[64px] leading-[50px] md:leading-[80px]">
                  Ready to work with us ?
                </h3>
              </div>
              <div className=" mt-6 grid grid-cols-1 md:grid-cols-2">
                <CustomButton outline>sales@hirree.com</CustomButton>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
                <CustomButton outline>hr@hirree.com</CustomButton>
              </div>
            </div>
            <div className="border-0 md:border-r-[1px] flex-1 mt-5 md:mt-0 ">
              <div className=" flex py-4 md:justify-center items-center content-center">
                <ul>
                  {Menus.map((data: any, index: number) => {
                    return (
                      <Link href={`${data.link}`} key={index}>
                        <li
                          className={`mb-4 text-xl text-textLight-200 font-normal cursor-pointer  hover:text-black`}
                        >
                          <p>{data.title}</p>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className=" ml-0 md:ml-[62px] flex pb-4 justify-center items-center content-center">
                <div className="">
                  <p className=" text-textLight-200 text-lg">
                    Address : Lorem ipsum dolor sit amet consectetur. Ultricies
                    curabitur tempus turpis{" "}
                  </p>
                  <p className="mt-2 text-lg text-textLight-200">
                    Phone : 3463536572xxx
                  </p>
                </div>
              </div>
            </div>
            {/* <div className=" md:hidden border-0 md:border-r-[1px] flex-1 ">
              <div className=" flex py-4 md:justify-center items-center content-center">
                <ul>
                  {Menus.map((data: any, index: number) => {
                    return (
                      <Link href={`${data.link}`} key={index}>
                        <li
                          className={`mb-4 text-xl text-textLight-200 font-normal cursor-pointer  hover:text-black`}
                        >
                          <p>{data.title}</p>
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container">
          <div className="flex py-[30px] justify-between flex-col md:flex-row items-center">
            <div className="">
              <p>©Copyright 2023.All Rights Reserved</p>
            </div>
            <div className=" mt-4 md:m-0">
              <div className=" flex gap-4">
                <div className="">
                  <Link href={"/"}>
                    <LinkdenIcon />
                  </Link>
                </div>
                <div className="">
                  <Link href={"/"}>
                    <FacebookIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
