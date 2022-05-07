import * as React from "react";

const SvgButtonMenu = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 5a1.5 1.5 0 0 1 1.5-1.5h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 2 5ZM2 12a1.5 1.5 0 0 1 1.5-1.5h17a1.5 1.5 0 0 1 0 3h-17A1.5 1.5 0 0 1 2 12ZM3.5 17.5a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3h-17Z"
      fill="#F6F6F6"
    />
  </svg>
);

export default SvgButtonMenu;