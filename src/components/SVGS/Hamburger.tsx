import React from "react";

type Props = {};

const Hamburger = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 7V5H3.023V7H21ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z"
        fill="#707070"
      />
    </svg>
  );
};

export default Hamburger;
