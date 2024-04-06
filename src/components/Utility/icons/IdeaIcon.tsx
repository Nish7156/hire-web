import * as React from "react";
const IdeaIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={48} height={48} fill="url(#pattern0_18_2180)" />
    <defs>
      <pattern
        id="pattern0_18_2180"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_18_2180" transform="scale(0.0111111)" />
      </pattern>
      <image
        id="image0_18_2180"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default IdeaIcon;
