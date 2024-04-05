'use client'
import React from "react";

export default function CustomButton({children}:any) {
  function handleClick(params:any) {
    console.log("Hii");
    
  }
  return (
    <button onClick={handleClick} className="custom-buttom py-[13px] px-[47px] w-full font-medium text-lg">
      {children}
    </button>
  );
}
