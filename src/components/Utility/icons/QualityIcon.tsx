import * as React from "react";
const QualityIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={85}
    height={85}
    viewBox="0 0 85 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={42.5} cy={42.5} r={42.5} fill="white" />
    <path
      d="M28.5 42V26M56.5 58V52M28.5 58V50M56.5 44V26M42.5 32V26M42.5 58V40"
      stroke="black"
      strokeWidth={3}
      strokeLinecap="round"
    />
    <path
      d="M28.5 50C30.7091 50 32.5 48.2091 32.5 46C32.5 43.7909 30.7091 42 28.5 42C26.2909 42 24.5 43.7909 24.5 46C24.5 48.2091 26.2909 50 28.5 50Z"
      stroke="black"
      strokeWidth={3}
      strokeLinecap="round"
    />
    <path
      d="M42.5 40C44.7091 40 46.5 38.2091 46.5 36C46.5 33.7909 44.7091 32 42.5 32C40.2909 32 38.5 33.7909 38.5 36C38.5 38.2091 40.2909 40 42.5 40Z"
      stroke="black"
      strokeWidth={3}
      strokeLinecap="round"
    />
    <path
      d="M56.5 52C58.7091 52 60.5 50.2091 60.5 48C60.5 45.7909 58.7091 44 56.5 44C54.2909 44 52.5 45.7909 52.5 48C52.5 50.2091 54.2909 52 56.5 52Z"
      stroke="black"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </svg>
);
export default QualityIcon;
