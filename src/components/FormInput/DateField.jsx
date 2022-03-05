import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateField({ field = {}, form = {} }) {
  return (
    <div className="relative">
      <DatePicker
        selected={field.value}
        onChange={(date) => {
          form.setFieldValue(field.name, date);
        }}
        dateFormat="d MMM yyyy"
        onChangeRaw={(e) => e.preventDefault()}
        className="w-full my-0.5 px-5 py-4 text-sm font-bold text-darkFour caret-purple rounded border border-lightTwo outline-none focus:border-purple"
      />
      <svg
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-4.5 right-5"
      >
        <path
          d="M14 2h-.667V.667A.667.667 0 0012.667 0H12a.667.667 0 00-.667.667V2H4.667V.667A.667.667 0 004 0h-.667a.667.667 0 00-.666.667V2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm.667 12c0 .367-.3.667-.667.667H2A.668.668 0 011.333 14V6.693h13.334V14z"
          fill="#7C5DFA"
          fillRule="nonzero"
          opacity=".5"
        />
      </svg>
    </div>
  );
}

export default DateField;
