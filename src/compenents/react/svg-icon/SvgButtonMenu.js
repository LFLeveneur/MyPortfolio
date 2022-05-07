import * as React from "react";

const SvgButtonMenu = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={32} height={32} rx={16} fill="#121316" />
    <path
      d="M8.125 10.375h15.75m-15.75 12h15.75-15.75Zm0-6h15.75-15.75Z"
      stroke="#F6F6F6"
      strokeWidth={2.344}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgButtonMenu;