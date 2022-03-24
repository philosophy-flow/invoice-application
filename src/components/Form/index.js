import React from "react";
import { Formik, Form as FormikForm } from "formik";

import formDetails from "./formDetails";
import FormInput from "../FormInput";
import Button from "../Button";

import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import MoreInfo from "./MoreInfo";

import { generateId } from "../../util/helpers";

const { validationSchema, initialValues } = formDetails;

export default function Form({ active = false, activeInvoice, setFormActive }) {
  let style =
    "bg-white fixed top-17.5 bottom-0 -left-full z-9 transition-all duration-300 w-full overflow-scroll md:top-20 md:rounded-r-xl md:w-4/5 md:-left-[80%] xl:w-1/2 xl:-left-1/2 xl:top-0 xl:pl-[9.9375rem]";

  const title =
    Object.keys(activeInvoice).length === 0 ? (
      "New Invoice"
    ) : (
      <>
        Edit <span className="text-lightFour">#</span>
        {activeInvoice.id}
      </>
    );

  const handleFormClose = () => {
    document.body.style.overflow = "scroll";
    setFormActive(false);
  };

  const handleSubmit = (vals) => {
    const formValues = {
      // add status here
      ...vals,
      id: generateId(),
      invoiceDate: vals.createdAt.toLocaleDateString(),
    };
    console.log(formValues);
  };

  return (
    <>
      <div
        id="overlay"
        className={`fixed top-0 left-0 right-0 min-h-screen h-full bg-modalBg ${
          active ? "block" : "hidden"
        }`}
        onClick={handleFormClose}
      />
      <div className={active ? style + " translate-x-full" : style}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(vals) => handleSubmit(vals)}
        >
          {active &&
            (({ errors, touched }) => (
              <FormikForm className="mx-[6.4%] my-8" aria-label="form">
                <Button
                  variant="back"
                  label="Go back"
                  className="mb-6 md:hidden"
                  onClick={handleFormClose}
                />
                <h2 className="text-darkFour text-[1.5rem] font-bold mb-6">
                  {title}
                </h2>
                <BillFrom errors={errors} touched={touched} />
                <BillTo errors={errors} touched={touched} />
                <MoreInfo errors={errors} touched={touched} />
                <Button type="submit" variant="secondary" label="Submit" />
              </FormikForm>
            ))}
        </Formik>
      </div>
    </>
  );
}
