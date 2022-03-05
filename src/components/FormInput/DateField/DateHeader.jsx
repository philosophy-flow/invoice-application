import React from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const icons = {
  left: (
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.342.886L2.114 5.114l4.228 4.228"
        stroke="#9277FF"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  ),
  right: (
    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1l4 4-4 4"
        stroke="#7C5DFA"
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  ),
};

export default function DateHeader({ date, decreaseMonth, increaseMonth }) {
  const activeYear = date.getFullYear();
  const activeMonth = date.getMonth();

  return (
    <div className="bg-white -mb-5 -mt-2 p-5 pb-2 rounded-t flex justify-between items-center text-darkFour font-bold font-sans">
      <button onClick={decreaseMonth}>{icons.left}</button>
      <div>
        <p>
          {months[activeMonth]} {activeYear}
        </p>
      </div>
      <button onClick={increaseMonth}>{icons.right}</button>
    </div>
  );
}
