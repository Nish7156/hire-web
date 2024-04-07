import CustomButton from "@/components/elements/CustomButton";
import { Menus } from "@/components/lib/constant";
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
                <CustomButton>sales@hirree.com</CustomButton>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-3">
                <CustomButton>hr@hirree.com</CustomButton>
              </div>
            </div>
            <div className="hidden md:block border-0 md:border-r-[1px] flex-1 ">
              <div className=" flex py-4 justify-center items-center content-center">
                <ul>
                  {Menus.map((data: any, index: number) => {
                    return (
                      <li className="mb-4" key={index}>
                        <a href="">{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex-1">
              <div className=" ml-0 mt-4 md:mt-0 md:ml-[62px] flex py-4 justify-center items-center content-center">
                <div className="">
                  <p>
                    Address : Lorem ipsum dolor sit amet consectetur. Ultricies
                    curabitur tempus turpis{" "}
                  </p>
                  <p className="mt-2">Phone : 3463536572xxx</p>
                </div>
              </div>
            </div>
            <div className=" md:hidden border-0 md:border-r-[1px] flex-1 ">
              <div className=" flex py-4 md:justify-center items-center content-center">
                <ul>
                  {Menus.map((data: any, index: number) => {
                    return (
                      <li className="mb-4" key={index}>
                        <a href="">{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.445 20.4526H16.8953V14.8825C16.8953 13.5543 16.8675 11.8474 15.039 11.8474C13.188 11.8474 12.906 13.2881 12.906 14.7843V20.4519H9.35175V8.99897H12.7657V10.5612H12.8115C13.2885 9.65895 14.4487 8.71023 16.1798 8.71023C19.7805 8.71023 20.4487 11.0809 20.4487 14.1633V20.4519L20.445 20.4526ZM5.33625 7.43377C5.06496 7.43387 4.79631 7.38045 4.54569 7.27656C4.29508 7.17268 4.06742 7.02037 3.87576 6.82837C3.6841 6.63637 3.53221 6.40844 3.42878 6.15765C3.32534 5.90685 3.27241 5.63812 3.273 5.36683C3.27344 4.95851 3.39496 4.55948 3.62217 4.22021C3.84939 3.88094 4.1721 3.61666 4.54951 3.46077C4.92692 3.30489 5.34208 3.26441 5.74249 3.34445C6.14291 3.4245 6.5106 3.62147 6.79907 3.91046C7.08755 4.19945 7.28385 4.56748 7.36317 4.96803C7.44249 5.36858 7.40126 5.78365 7.24468 6.16076C7.08811 6.53788 6.82323 6.8601 6.48354 7.08669C6.14384 7.31328 5.74459 7.43406 5.33625 7.43377ZM7.11675 20.4526H3.555V8.99972H7.11675V20.4526ZM22.227 0H1.77C0.79275 0 0 0.773226 0 1.7302V22.2698C0 23.2268 0.79275 24 1.77 24H22.2233C23.199 24 24 23.2268 24 22.2698V1.7302C24 0.773226 23.199 0 22.2233 0H22.227Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.445 20.4526H16.8953V14.8825C16.8953 13.5543 16.8675 11.8474 15.039 11.8474C13.188 11.8474 12.906 13.2881 12.906 14.7843V20.4519H9.35175V8.99897H12.7657V10.5612H12.8115C13.2885 9.65895 14.4487 8.71023 16.1798 8.71023C19.7805 8.71023 20.4487 11.0809 20.4487 14.1633V20.4519L20.445 20.4526ZM5.33625 7.43377C5.06496 7.43387 4.79631 7.38045 4.54569 7.27656C4.29508 7.17268 4.06742 7.02037 3.87576 6.82837C3.6841 6.63637 3.53221 6.40844 3.42878 6.15765C3.32534 5.90685 3.27241 5.63812 3.273 5.36683C3.27344 4.95851 3.39496 4.55948 3.62217 4.22021C3.84939 3.88094 4.1721 3.61666 4.54951 3.46077C4.92692 3.30489 5.34208 3.26441 5.74249 3.34445C6.14291 3.4245 6.5106 3.62147 6.79907 3.91046C7.08755 4.19945 7.28385 4.56748 7.36317 4.96803C7.44249 5.36858 7.40126 5.78365 7.24468 6.16076C7.08811 6.53788 6.82323 6.8601 6.48354 7.08669C6.14384 7.31328 5.74459 7.43406 5.33625 7.43377ZM7.11675 20.4526H3.555V8.99972H7.11675V20.4526ZM22.227 0H1.77C0.79275 0 0 0.773226 0 1.7302V22.2698C0 23.2268 0.79275 24 1.77 24H22.2233C23.199 24 24 23.2268 24 22.2698V1.7302C24 0.773226 23.199 0 22.2233 0H22.227Z"
                      fill="black"
                    />
                  </svg>
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
