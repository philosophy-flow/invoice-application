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
  className = "",
}) {
  let inputType;
  switch (variant) {
    case "text":
    case "disabled":
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
    <div className={className}>
      <label
        htmlFor={name}
        className={`mb-2.5 flex flex-wrap justify-between items-center text-sm text-lightThree font-medium ${
          errorFlag && "text-red"
        }`}
      >
        <span className="mr-1">{label}</span>
        <ErrorMessage name={name} component="span" />
      </label>
      {variant === "disabled" ? (
        <Field
          disabled
          id={name}
          name={name}
          className="w-full bg-white text-sm text-lightFour font-bold py-4"
        />
      ) : (
        <Field
          component={inputType}
          id={name}
          name={name}
          options={options}
          className={`w-full rounded border border-lightTwo text-sm px-5 py-4 font-bold text-darkFour outline-none caret-purple focus:border-purple cursor-pointer ${
            errorFlag && "border-red focus:border-red"
          }`}
        />
      )}
    </div>
  );
}

export default FormInput;
