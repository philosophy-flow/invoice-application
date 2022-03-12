import React from "react";
import PlusIcon from "../assets/svg/PlusIcon";
import LeftArrow from "../assets/svg/LeftArrow";
import DownArrow from "../assets/svg/DownArrow";

function Button({
  variant = "primary",
  label = "Button",
  onClick = () => null,
  type = "button",
  className = "",
}) {
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
    case "back":
      style = "text-darkFour text-sm flex items-center";
      break;
    case "filter":
      style = "text-darkFour text-sm flex items-center";
      break;
    default:
      style = "text-darkFour text-sm flex items-center";
  }

  return (
    <button
      className={`relative py-4 px-6 rounded-3xl font-bold text-sm ${style} ${className}`}
      onClick={onClick}
      type={type}
    >
      {variant === "back" && <LeftArrow />}
      {variant === "primary-icon" && <PlusIcon />}
      {label}
      {variant === "filter" && <DownArrow />}
    </button>
  );
}

export default Button;
