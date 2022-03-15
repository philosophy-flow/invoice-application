import React from "react";

export default function StatusWidget({ status = "draft" }) {
  let style;
  let circleStyle;
  switch (status) {
    case "pending":
      style = "text-pendingWidget bg-pendingWidgetBg";
      circleStyle = "bg-pendingWidget";
      break;
    case "paid":
      style = "text-paidWidget bg-paidWidgetBg";
      circleStyle = "bg-paidWidget";
      break;
    default:
      style = "text-draftWidget bg-draftWidgetBg";
      circleStyle = "bg-draftWidget";
      break;
  }

  return (
    <div
      className={`w-26 h-10 rounded-md flex justify-center items-center font-bold text-sm ${style}`}
    >
      <div className={`w-2 h-2 rounded-full mr-2 ${circleStyle}`}></div>
      {status}
    </div>
  );
}
