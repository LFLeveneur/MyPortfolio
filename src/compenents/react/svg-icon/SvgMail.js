import * as React from "react";

const SvgMail = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 4.5a3 3 0 0 0-3 3v.301l9 4.847 9-4.845V7.5a3 3 0 0 0-3-3H6Zm15 5.005-8.645 4.655a.75.75 0 0 1-.71 0L3 9.505V16.5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9.505Z"
      fill="#000"
    />
  </svg>
);

export default SvgMail;