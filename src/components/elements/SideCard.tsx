import React from "react";

const SideCard = () => {
  return (
    <div className="md:max-w-[260px] w-full cursor-default max-h-[248px] rounded overflow-hidden shadow-lg bg-border-100 py-4 text-black hover:bg-gradient-to-r hover:from-[#1AD9DF] hover:to-[#A824FE] hover:text-white ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Brief</div>
        <p className="text-base">
          We work with you to create a tailored brief to meet your senior talent
          requirements, ensuring a perfect match for your team.
        </p>
      </div>
    </div>
  );
};

export default SideCard;
