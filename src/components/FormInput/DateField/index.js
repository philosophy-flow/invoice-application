import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateField.css";

import DateHeader from "./DateHeader";
import CalendarIcon from "../../../assets/svg/CalendarIcon";

export default function DateField({ field = {}, form = {} }) {
  return (
    <div className="relative">
      <DatePicker
        renderCustomHeader={DateHeader}
        formatWeekDay={() => null}
        dayClassName={(date) => "text-md font-bold text-darkFour"}
        showPopperArrow={false}
        selected={field.value}
        onChange={(date) => {
          form.setFieldValue(field.name, date);
        }}
        dateFormat="d MMM yyyy"
        onChangeRaw={(e) => e.preventDefault()}
        className="w-full my-0.5 px-5 py-4 text-sm font-bold text-darkFour caret-purple rounded border border-lightTwo outline-none focus:border-purple cursor-pointer"
      />
      <CalendarIcon />
    </div>
  );
}
