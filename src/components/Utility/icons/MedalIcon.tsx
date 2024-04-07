import * as React from "react";
const MedalIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={48} height={48} fill="url(#pattern0_17_658)" />
    <defs>
      <pattern
        id="pattern0_17_658"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_17_658" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_17_658"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default MedalIcon;
