import React from "react";

const plusIcon = (
  <div className="absolute top-1.5 left-1.5 bg-white p-3 rounded-full">
    <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
        fill="#7C5DFA"
        fill-rule="nonzero"
      />
    </svg>
  </div>
);

function Button({ variant = "primary", label = "Button", onClick }) {
  let style;
  switch (variant) {
    case "primary":
      style = "bg-purple text-white";
      break;
    case "secondary":
      style = "bg-lightOne text-lightThree";
      break;
    case "dark":
      style = "bg-darkTwo text-lightFour";
      break;
    case "danger":
      style = "bg-red text-white";
      break;
    case "primary-icon":
      style = "bg-purple text-white pl-14";
      break;
    default:
      style = "";
  }

  return (
    <button
      className={`relative py-4 px-6 rounded-3xl font-bold text-sm ${style}`}
      onClick={onClick}
    >
      {variant === "primary-icon" && plusIcon}
      {label}
    </button>
  );
}

export default Button;
