import QualityIcon from "@/components/Utility/icons/QualityIcon";
import { Commitment } from "@/components/lib/data/Commitments";
import Image from "next/image";
import React from "react";

function Leaders() {
  return (
    <div className="">
      <div className="container ">
        <div className="md:pt-[104px] md:pb-[90px] pt-10 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className=" col-span-1 mb-6 md:mb-0">
              <div className="flex justify-center items-center md:pt-40">
                <h2 className="md-text">Why we’re leaders in recruitment?</h2>
              </div>
              <div className="gradiant-bg mt-5 md:mt-10 w-[100px] h-2 rounded-3xl"></div>
            </div>
            <div className=" col-span-2">
              <div className="flex gap-6 flex-wrap md:flex-nowrap">
                <div className="flex justify-between flex-col gap-6 mt-0 md:mt-24">
                  {Commitment.slice(0, 2).map((data: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className=" rounded-3xl leader-card-gradiant p-7  border-cyan-400 border-solid shadow-xl border-[0.5px]"
                      >
                        <div className="flex  items-center flex-col">
                          <img
                            src={`${data.image}`}
                            alt={data.title}
                            className=" w-[54px] h-[54px] md:w-[85px md:h-[85px]]"
                          />
                          <h1 className="text-[24px] font-semibold">
                            {data.title}
                          </h1>
                          <p className="text-center">{data.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between flex-col gap-6 mb-0 md:mb-24">
                  {Commitment.slice(2, 4).map((data: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className=" rounded-3xl leader-card-gradiant p-7  border-cyan-400 border-solid shadow-xl border-[0.5px]"
                      >
                        <div className="flex  items-center flex-col">
                          <img
                            src={`${data.image}`}
                            alt={data.title}
                            className=" w-[54px] h-[54px] md:w-[85px md:h-[85px]]"
                          />
                          <h1 className="text-[24px] font-semibold">
                            {data.title}
                          </h1>
                          <p className="text-center">{data.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between flex-col gap-6 mt-0 md:mt-24">
                  {Commitment.slice(4, 6).map((data: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className=" rounded-3xl leader-card-gradiant p-7  border-cyan-400 border-solid shadow-xl border-[0.5px]"
                      >
                        <div className="flex  items-center flex-col">
                          <img
                            src={`${data.image}`}
                            alt={data.title}
                            className=" w-[54px] h-[54px] md:w-[85px md:h-[85px]]"
                          />
                          <h1 className="text-[24px] font-semibold">
                            {data.title}
                          </h1>
                          <p className="text-center">{data.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaders;
