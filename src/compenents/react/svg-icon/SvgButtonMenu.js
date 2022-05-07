import * as React from "react";

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

export default SvgButtonMenu;