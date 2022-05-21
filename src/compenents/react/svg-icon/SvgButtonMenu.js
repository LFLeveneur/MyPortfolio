/* import * as React from "react";

const SvgButtonMenu = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={32} height={32} rx={16} fill="#181A1D" />
    <path
      d="M6 9a1.5 1.5 0 0 1 1.5-1.5h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 6 9ZM6 16a1.5 1.5 0 0 1 1.5-1.5h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 6 16ZM7.5 21.5a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3h-17Z"
      fill="#F6F6F6"
    />
  </svg>
);

export default SvgButtonMenu; */

import * as React from "react";

const SvgButtonMenu = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
    <g>
      <path
        id="svg-menu-bg"
        d="M250 0c138.07 0 250 111.93 250 250S388.07 500 250 500 0 388.07 0 250 111.93 0 250 0Z"
      />
      <path
        id="svg-menu-stroke"
        d="M93.75 140.62c0-12.94 10.49-23.44 23.44-23.44h265.62c12.94 0 23.44 10.49 23.44 23.44s-10.49 23.44-23.44 23.44H117.19c-12.94 0-23.44-10.49-23.44-23.44ZM93.75 250c0-12.94 10.49-23.44 23.44-23.44h265.62c12.94 0 23.44 10.49 23.44 23.44s-10.49 23.44-23.44 23.44H117.19c-12.94 0-23.44-10.49-23.44-23.44ZM117.19 335.94c-12.94 0-23.44 10.49-23.44 23.44s10.49 23.44 23.44 23.44h265.62c12.94 0 23.44-10.49 23.44-23.44s-10.49-23.44-23.44-23.44H117.19Z"
      />
    </g>
  </svg>
);

export default SvgButtonMenu;