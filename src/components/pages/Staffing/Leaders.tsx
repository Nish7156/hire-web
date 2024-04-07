import QualityIcon from "@/components/Utility/icons/QualityIcon";
import React from "react";

function Leaders() {
  return (
    <div className="">
      <div className="container ">
        <div className="md:pt-[104px] md:pb-[90px] pt-10 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className=" col-span-1 mb-6 md:mb-0">
              <div className="flex justify-center items-center pt-40">
                <h2 className="md-text">Why we’re leaders in recruitment?</h2>
              </div>
            </div>
            <div className=" col-span-2">
              <div className="flex gap-6 flex-wrap md:flex-nowrap">
                <div className="flex justify-between flex-col gap-6 mt-0 md:mt-24">
                  <div className=" rounded-xl leader-card-gradiant p-7">
                    <div className="flex  items-center flex-col">
                      <QualityIcon />
                      <h1>Quality</h1>
                      <p className="text-center">
                        Strict quality benchmarks ensure we connect only the
                        best talent.
                      </p>
                    </div>
                  </div>
                  <div className=" rounded-xl leader-card-gradiant p-7">
                    <div className="flex  items-center flex-col">
                      <QualityIcon />
                      <h1>Quality</h1>
                      <p className="text-center">
                        Strict quality benchmarks ensure we connect only the
                        best talent.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between flex-col gap-6 mb-0 md:mb-24">
                  <div className=" rounded-xl leader-card-gradiant p-7">
                    <div className="flex  items-center flex-col">
                      <QualityIcon />
                      <h1>Quality</h1>
                      <p className="text-center">
                        Strict quality benchmarks ensure we connect only the
                        best talent.
                      </p>
                    </div>
                  </div>
                  <div className=" rounded-xl leader-card-gradiant p-7">
                    <div className="flex  items-center flex-col">
                      <QualityIcon />
                      <h1>Quality</h1>
                      <p className="text-center">
                        Strict quality benchmarks ensure we connect only the
                        best talent.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between flex-col gap-6 mt-0 md:mt-24">
                  <div className=" rounded-xl leader-card-gradiant p-7">
                    <div className="flex  items-center flex-col">
                      <QualityIcon />
                      <h1>Quality</h1>
                      <p className="text-center">
                        Strict quality benchmarks ensure we connect only the
                        best talent.
                      </p>
                    </div>
                  </div>
                  <div className=" rounded-xl leader-card-gradiant p-7">
                    <div className="flex  items-center flex-col">
                      <QualityIcon />
                      <h1>Quality</h1>
                      <p className="text-center">
                        Strict quality benchmarks ensure we connect only the
                        best talent.
                      </p>
                    </div>
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

export default Leaders;
