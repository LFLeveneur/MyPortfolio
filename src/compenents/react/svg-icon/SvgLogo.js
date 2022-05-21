/* import * as React from "react";

const SvgLogo = (props) => (
    <svg
    id="svg-logo"
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect id="svg-logo-bg" x={0.5} y={0.5} width={32} height={32} rx={15.5} fill="#121316" />
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
    <rect id="svg-logo-stroke" x={0.5} y={0.5} width={32} height={32} rx={15.5} stroke="#fff" />
  </svg>
);

export default SvgLogo; */


import * as React from "react";

const SvgLogo = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
    <path
      id="svg-logo-bg"
      d="M250 0c138.07 0 250 111.93 250 250S388.07 500 250 500 0 388.07 0 250 111.93 0 250 0Z"
    />
    <path
      id="svg-logo-stroke"
      d="m177.27 198.04-72.72-72.73-47.41 47.42L250 365.58l72.73-72.73 72.73 72.72 47.41-47.41L250 125.32l-72.73 72.72Zm47.41 47.41 25.31 25.32 25.32-25.32L250 220.14l-25.32 25.31ZM79.23 172.73l25.32-25.32L250 292.86l36.36-36.36 25.31 25.31-61.68 61.68L79.23 172.73Zm134.41 61.66-25.31-25.31 61.68-61.67 170.77 170.76-25.32 25.31L250 198.04l-36.36 36.36Z"
    />
  </svg>
);

export default SvgLogo;
