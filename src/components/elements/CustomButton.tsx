"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function CustomButton({
  children,
  outline,
  isContact,
  onClick,
}: any) {
  const router = useRouter();

  function handleClick(params: any) {
    isContact ? router.push("/contact-us") : onClick;
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
