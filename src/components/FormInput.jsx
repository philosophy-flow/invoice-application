import React from "react";
import { Field } from "formik";

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
      inputType = <Field id={name} name={name} placeholder={label} />;
      break;
    case "select":
      inputType = (
        <Field
          component={SelectField}
          id={name}
          name={name}
          options={options}
        />
      );
      break;
    case "date":
      inputType = (
        <Field component={DateField} id={name} name={name} options={options} />
      );
      break;
    default:
      return <p>Invalid variant!</p>;
  }

  return (
    <div className="py-3 max-w-xs ">
      <label htmlFor={name}>{label}</label>
      {inputType}
    </div>
  );
}

export default FormInput;
