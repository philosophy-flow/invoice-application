import React from "react";
import PlusIcon from "../assets/svg/PlusIcon";
import LeftArrow from "../assets/svg/LeftArrow";
import DownArrow from "../assets/svg/DownArrow";
import TrashIcon from "../assets/svg/TrashIcon";

function Button({
  variant = "primary",
  label = "",
  onClick = () => null,
  type = "button",
  className = "",
}) {
  let style;
  switch (variant) {
    case "primary":
      style = "bg-purple text-white py-4 px-6";
      break;
    case "secondary":
      style = "bg-lightOne text-lightThree py-4 px-6";
      break;
    case "dark":
      style = "bg-darkTwo text-lightFour py-4 px-6";
      break;
    case "danger":
      style = "bg-red text-white py-4 px-6";
      break;
    case "primary-icon":
      style = "bg-purple text-white py-4 pr-6 pl-14";
      break;
    case "back":
      style = "text-darkFour text-sm flex items-center px-0 py-0";
      break;
    case "filter":
      style = "text-darkFour text-sm flex items-center py-4 px-4.5";
      break;
    case "delete-item":
      style = "";
      break;
    default:
      style = "text-darkFour text-sm flex items-center py-4 px-6";
  }

  return (
    <button
      className={`relative rounded-3xl font-bold text-sm ${style} ${className}`}
      onClick={onClick}
      type={type}
    >
      {variant === "back" && <LeftArrow />}
      {variant === "primary-icon" && <PlusIcon />}
      {label}
      {variant === "filter" && <DownArrow />}
      {variant === "delete-item" && <TrashIcon />}
    </button>
  );
}

export default Button;
