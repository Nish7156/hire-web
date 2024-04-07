import * as React from "react";
const BrainIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={48} height={48} fill="url(#pattern0_17_655)" />
    <defs>
      <pattern
        id="pattern0_17_655"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_17_655" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_17_655"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default BrainIcon;
