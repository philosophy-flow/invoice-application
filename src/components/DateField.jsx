import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateField({ field = {}, form = {} }) {
  return (
    <DatePicker
      selected={field.value}
      onChange={(date) => {
        form.setFieldValue(field.name, date);
      }}
    />
  );
}

export default DateField;
