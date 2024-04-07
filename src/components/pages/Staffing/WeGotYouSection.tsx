import React from "react";

function WeGotYouSection() {
  const WeGotYouData = [
    {
      title: "Short-Term  Contracts",
      desc: "Sure, it’s about finding someone who fits on paper. But staffing firms like ours know it’s much more than that. Even when it’s a short engagement, we are committed to finding the right fit.",
      img: "/icons/CircleBar.svg",
    },
    {
      title: "Long-Term Contracts",
      desc: "Long term contracts are about finding the right culture fit for your team, who’s also got the chops & work ethic to deliver.",
      img: "/icons/CircleBar-2.svg",
    },
    {
      title: "Permanent Hire",
      desc: "As a leading staffing company, we know there’s an art to finding the right person for an organization & team. We take great pride in finding ‘the one’ for any given role, from the C-suite to an entry level position.",
      img: "/icons/CircleBar-3.svg",
    },
  ];
  return (
    <div>
      <div className="container pt-10 pb-10 :pb-[102px]">
        <div className="flex justify-center">
          <h2 className="md-text">Whatever you need... We’ve got you</h2>
        </div>
        <div className="mt-10 md:mt-[103px]">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-24">
            {WeGotYouData.map((data: any, index: number) => {
              return (
                <div className="" key={index}>
                  <div className="">
                    <div className=" flex justify-center">
                      <img src={`${data.img}`} alt={data.title} />
                    </div>
                    <div className=" pt-5">
                      <h3 className=" text-2xl font-medium text-center">
                        {data.title}
                      </h3>
                      <p className=" pt-5 text-center">{data.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeGotYouSection;
