import * as React from "react";

const SvgLogo = () => (
    <svg
    id="svg-logo"
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect id="svg-logo-bg" x={0.5} y={0.5} width={31} height={31} rx={15.5} fill="#121316" />
    <path
      d="M27.636 20.363 25.31 22.69l-9.31-9.308-2.326 2.326-2.328-2.327L16 8.727l11.636 11.636Z"
      stroke="#fff"
      strokeMiterlimit={10}
    />
    <path
      d="m18.327 15.709 2.327 2.327L16 22.69 4.364 11.055 6.69 8.727 16 18.036l2.327-2.327Z"
      stroke="#fff"
      strokeMiterlimit={10}
    />
    <rect id="svg-logo-stroke" x={0.5} y={0.5} width={31} height={31} rx={15.5} stroke="#fff" />
  </svg>
);

export default SvgLogo;