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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.953 10.375c0-.647.525-1.172 1.172-1.172h15.75a1.172 1.172 0 0 1 0 2.344H8.125a1.172 1.172 0 0 1-1.172-1.172Zm0 6c0-.647.525-1.172 1.172-1.172h15.75a1.172 1.172 0 0 1 0 2.344H8.125a1.172 1.172 0 0 1-1.172-1.172Zm0 6c0-.647.525-1.172 1.172-1.172h15.75a1.172 1.172 0 0 1 0 2.344H8.125a1.172 1.172 0 0 1-1.172-1.172Z"
      fill="#F6F6F6"
    />
  </svg>
);

export default SvgButtonMenu;