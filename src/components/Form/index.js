import React from "react";
import { Formik, Form as FormikForm } from "formik";

import formDetails from "./formDetails";
import FormInput from "../FormInput";
import Button from "../Button";

const { validationSchema, initialValues } = formDetails;

export default function Form({ open, title }) {
  // temporary background color
  let style =
    "bg-lightRed min-h-screen h-full overflow-scroll absolute top-0 -left-full transition-all duration-300 w-full sm:rounded-r-xl sm:w-1/2 sm:-left-1/2 xl:w-1/3 xl:-left-1/3";

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
        {({ errors, touched }) => (
          <FormikForm className="m-5">
            <FormInput
              variant="text"
              name="fromDetails.address"
              label="Street Address"
              error={errors.fromDetails?.address}
              touched={touched.fromDetails?.address}
            />

            <FormInput
              variant="text"
              name="toDetails.name"
              label="Client's Name"
              error={errors.toDetails?.name}
              touched={touched.toDetails?.name}
            />

            <Button type="submit" variant="secondary" label="Submit" />
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}
