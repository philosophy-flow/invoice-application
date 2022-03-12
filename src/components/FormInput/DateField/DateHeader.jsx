import React from "react";
import CalendarLeftArrow from "../../../assets/svg/CalendarLeftArrow";
import CalendarRightArrow from "../../../assets/svg/CalendarRightArrow";
import { months } from "../../../util/constants";

const icons = {
  left: <CalendarLeftArrow />,
  right: <CalendarRightArrow />,
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
