import React from "react";
import { Formik, Form as FormikForm } from "formik";

import FormInput from "./components/FormInput";
import Button from "./components/Button";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Form({ open, title }) {
  // temporary background color
  let style =
    "bg-lightRed absolute inset-y-0 -left-full transition-all duration-300 w-full sm:rounded-r-xl sm:w-1/2 sm:-left-1/2 xl:w-1/3 xl:-left-1/3";

  const handleSubmit = (vals) => {
    const formValues = { ...vals, date: vals.date.toLocaleDateString() };
    console.log(formValues);
  };

  return (
    <div className={open ? style + " translate-x-full" : style}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          flavor: "",
          date: "",
        }}
        onSubmit={(vals) => handleSubmit(vals)}
      >
        <FormikForm className="m-5">
          <h1 className="mt-6 text-lightOne text-lg">{title}</h1>
          <FormInput variant="text" name="firstName" label="Robert" />
          <FormInput variant="select" name="flavor" options={options} />
          <FormInput variant="date" name="date" />
          <Button type="submit" variant="secondary" label="Submit" />
        </FormikForm>
      </Formik>
    </div>
  );
}
