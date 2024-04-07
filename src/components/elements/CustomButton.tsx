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
      } py-[13px] px-[47px] w-full font-medium text-lg`}
    >
      {children}
    </button>
  );
}
