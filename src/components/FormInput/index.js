import React from "react";
import { Field, ErrorMessage } from "formik";

import SelectField from "./SelectField";
import DateField from "./DateField";

function FormInput({
  variant = "text",
  label = "Input",
  name = "input",
  options = [],
}) {
  let inputType;
  switch (variant) {
    case "text":
      inputType = "";
      break;
    case "select":
      inputType = SelectField;
      break;
    case "date":
      inputType = DateField;
      break;
    default:
      return <p>Invalid variant!</p>;
  }

  return (
    <div className="py-3 max-w-xs ">
      <label
        htmlFor={name}
        className="block text-sm text-lightThree font-medium"
      >
        {label}
      </label>
      <Field
        component={inputType}
        id={name}
        name={name}
        options={options}
        className="w-60 my-0.5 rounded border border-lightTwo text-sm px-5 py-4 font-bold text-darkFour outline-none caret-purple focus:border-purple"
      />
      <ErrorMessage
        name={name}
        component="p"
        className="mt-0.5 text-sm font-medium text-lightThree"
      />
    </div>
  );
}

export default FormInput;
