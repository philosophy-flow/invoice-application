import React from "react";
import { Formik, Form as FormikForm } from "formik";

import formDetails from "./formDetails";
import FormInput from "../FormInput";
import Button from "../Button";

const { validationSchema, initialValues } = formDetails;

export default function Form({ open, title }) {
  // temporary background color
  let style =
    "bg-lightRed min-h-screen overflow-scroll absolute top-0 -left-full transition-all duration-300 w-full sm:rounded-r-xl sm:w-1/2 sm:-left-1/2 xl:w-1/3 xl:-left-1/3";

  const handleSubmit = (vals) => {
    const formValues = {
      ...vals,
      invoiceDate: vals.toDetails.invoiceDate.toLocaleDateString(),
    };
    console.log(formValues);
  };

  return (
    <div className={open ? style + " translate-x-full" : style}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(vals) => handleSubmit(vals)}
      >
        <FormikForm className="m-5">
          <h1 className="mt-6 text-lightOne text-lg">{title}</h1>
          <h2>BILL FROM</h2>
          <FormInput
            variant="text"
            name="fromDetails.address"
            label="Street Address"
          />
          <FormInput variant="text" name="fromDetails.city" label="City" />
          <FormInput
            variant="text"
            name="fromDetails.zipcode"
            label="Zip Code"
          />
          <FormInput
            variant="text"
            name="fromDetails.country"
            label="Country"
          />
          <h2>BILL TO</h2>
          <FormInput
            variant="text"
            name="toDetails.name"
            label="Client's Name"
          />
          <FormInput
            variant="text"
            name="toDetails.email"
            label="Client's Email"
          />
          <FormInput
            variant="text"
            name="toDetails.address"
            label="Street Address"
          />
          <FormInput variant="text" name="toDetails.city" label="City" />
          <FormInput variant="text" name="toDetails.zipcode" label="Zip Code" />
          <FormInput variant="text" name="toDetails.country" label="Country" />
          <FormInput
            variant="date"
            name="toDetails.invoiceDate"
            label="Invoice Date"
          />
          <FormInput
            variant="select"
            name="toDetails.paymentTerms"
            label="Payment Terms"
            options={formDetails.selectOptions}
          />
          <FormInput
            variant="text"
            name="toDetails.projectDescription"
            label="Project Description"
            options={formDetails.selectOptions}
          />

          <Button type="submit" variant="secondary" label="Submit" />
        </FormikForm>
      </Formik>
    </div>
  );
}
