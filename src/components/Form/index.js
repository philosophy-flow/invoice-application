import React, { useEffect } from "react";
import { Formik, Form as FormikForm } from "formik";

import formDetails from "./formDetails";
import FormInput from "../FormInput";
import Button from "../Button";

const { validationSchema, initialValues } = formDetails;

export default function Form({ open = false, title = "Form", setFormState }) {
  useEffect(() => {
    document.getElementById("overlay").addEventListener("click", () => {
      setFormState({ open: false, title: "" });
    });
  }, [setFormState]);

  let style =
    "bg-white fixed top-17.5 bottom-0 -left-full z-9 transition-all duration-300 w-full overflow-scroll md:top-20 md:rounded-r-xl md:w-4/5 md:-left-[80%] xl:w-1/2 xl:-left-1/2 xl:top-0 xl:pl-[9.9375rem]";

  const handleSubmit = (vals) => {
    const formValues = {
      ...vals,
      invoiceDate: vals.toDetails.invoiceDate.toLocaleDateString(),
    };
    console.log(formValues);
  };

  return (
    <>
      <div
        id="overlay"
        className={`fixed top-0 left-0 right-0 min-h-screen h-full bg-modalBg ${
          open ? "block" : "hidden"
        }`}
      ></div>
      <div className={open ? style + " translate-x-full" : style}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(vals) => handleSubmit(vals)}
        >
          {open &&
            (({ errors, touched }) => (
              <FormikForm className="m-5" aria-label="form">
                <h2>{title}</h2>
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
            ))}
        </Formik>
      </div>
    </>
  );
}
