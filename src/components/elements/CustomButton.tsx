"use client";
import React from "react";

export default function CustomButton({ children, outline }: any) {
  function handleClick(params: any) {
    console.log("Hii");
  }
  return (
    <button
      onClick={handleClick}
      className={`${
        outline ? "outline-btn" : "custom-buttom"
      } py-[11px] px-[40px] w-full font-medium text-lg`}
    >
      <p className="btn-text"> {children}</p>
    </button>
  );
}
