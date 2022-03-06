import React from "react";
import { Field, ErrorMessage } from "formik";

import SelectField from "./SelectField";
import DateField from "./DateField";

function FormInput({
  variant = "text",
  label = "Input",
  name = "input",
  options = [],
  error = false,
  touched = false,
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

  const errorFlag = error && touched;

  return (
    <div className="w-60 py-3 max-w-xs">
      <label
        htmlFor={name}
        className={`flex justify-between items-center text-sm text-lightThree font-medium ${
          errorFlag && "text-red"
        }`}
      >
        <span>{label}</span>
        <ErrorMessage name={name} component="span" />
      </label>
      <Field
        component={inputType}
        id={name}
        name={name}
        options={options}
        className={`w-full my-0.5 rounded border border-lightTwo text-sm px-5 py-4 font-bold text-darkFour outline-none caret-purple focus:border-purple cursor-pointer ${
          errorFlag && "border-red focus:border-red"
        }`}
      />
    </div>
  );
}

export default FormInput;
