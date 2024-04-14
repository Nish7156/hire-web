import React from "react";

const SideCard = ({ title, desc }: any) => {
  return (
    <div>
      <div className="md:max-w-[260px] w-full cursor-default max-h-[248px] rounded overflow-hidden relative shadow-lg bg-border-100 py-4 text-black hover:bg-gradient-to-r hover:from-[#1AD9DF] hover:to-[#A824FE] hover:text-white ">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-base">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
