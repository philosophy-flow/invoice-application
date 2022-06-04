import React from "react";

const DownArrow = ({ filterActive }) => (
  <svg
    width="11"
    height="7"
    xmlns="http://www.w3.org/2000/svg"
    className={`ml-3 transition-all ${filterActive && "rotate-180"}`}
  >
    <path
      d="M1 1l4.228 4.228L9.456 1"
      stroke="#7C5DFA"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);
export default DownArrow;
