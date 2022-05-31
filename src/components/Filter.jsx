import React from "react";

export default function Filter() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white p-6 text-sm z-50 font-bold border-2 border-red">
      <p className="pb-4">Draft</p>
      <p className="pb-4">Pending</p>
      <p>Paid</p>
    </div>
  );
}
