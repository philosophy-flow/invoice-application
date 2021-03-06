import React, { useState } from "react";
import { Formik, Form as FormikForm } from "formik";

import Button from "../Button";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import MoreInfo from "./MoreInfo";
import ItemsList from "./ItemsList";
import FormControl from "./FormControl";

import formDetails from "./formDetails";
import {
  generateId,
  generateFutureDate,
  formCloseStyles,
  formatDateString,
} from "../../util/helpers";

let { validationSchema, initialValues } = formDetails;

export default function Form({
  active = false,
  activeInvoice,
  setActiveInvoiceId,
  setFormActive,
  setInvoices,
}) {
  const [invoiceStatus, setInvoiceStatus] = useState("");

  let style =
    "bg-white fixed top-17.5 bottom-0 -left-full z-9 transition-all duration-300 w-full px-[6.4%] pt-8 md:top-20 md:rounded-r-xl md:w-4/5 md:-left-[80%] xl:w-1/2 xl:-left-1/2 xl:top-0 xl:pl-[9.9375rem]";

  const isNewInvoice = Object.keys(activeInvoice).length === 0;

  const title = isNewInvoice ? (
    "New Invoice"
  ) : (
    <>
      Edit <span className="text-lightFour">#</span>
      {activeInvoice.id}
    </>
  );

  const dynamicInitialValues = isNewInvoice
    ? initialValues
    : {
        ...activeInvoice,
        createdAt: new Date(activeInvoice.createdAt),
      };

  const handleClose = () => {
    setFormActive(false);
    formCloseStyles();
  };

  const handleSubmit = (vals, status) => {
    const parsedItems = vals.items.map((item) => ({
      ...item,
      quantity: parseFloat(item.quantity),
      price: parseFloat(item.price),
      total: parseFloat(item.total),
    }));
    vals.items = parsedItems;

    let grandTotal = 0;
    parsedItems.forEach((item) => {
      grandTotal += item.total;
    });

    const formValues = {
      ...vals,
      id: vals.id || generateId(),
      status,
      paymentDue: formatDateString(
        generateFutureDate(
          vals.createdAt,
          vals.paymentTerms
        ).toLocaleDateString()
      ),
      createdAt: formatDateString(vals.createdAt.toLocaleDateString("en-US")),
      total: grandTotal,
    };

    if (isNewInvoice) {
      setInvoices((prevInvoices) => [...prevInvoices, formValues]);
    } else {
      setInvoices((prevInvoices) =>
        prevInvoices.map((invoice) =>
          invoice.id === formValues.id ? formValues : invoice
        )
      );
      setActiveInvoiceId(formValues.id);
    }

    handleClose();
  };

  return (
    <>
      <div
        id="overlay"
        className={`fixed top-0 left-0 right-0 min-h-screen h-full bg-white md:bg-modalBg ${
          active ? "block" : "hidden"
        }`}
        onClick={handleClose}
      />
      <div className={active ? style + " translate-x-full" : style}>
        {active && (
          <Formik
            initialValues={dynamicInitialValues}
            validationSchema={validationSchema}
            onSubmit={(vals) => handleSubmit(vals, invoiceStatus)}
          >
            {({ errors, setFieldValue, touched, values }) => (
              <FormikForm aria-label="form" className=" flex flex-col h-full">
                <header>
                  <Button
                    variant="back"
                    label="Go back"
                    className="mb-6 md:hidden"
                    onClick={handleClose}
                  />
                  <h2 className="text-darkFour text-[1.5rem] font-bold mb-6">
                    {title}
                  </h2>
                </header>

                <div className="overflow-scroll flex-1 scrollbar-hide pb-[11rem]">
                  <BillFrom errors={errors} touched={touched} />
                  <BillTo errors={errors} touched={touched} />
                  <MoreInfo errors={errors} touched={touched} />
                  <ItemsList
                    errors={errors}
                    touched={touched}
                    items={values.items}
                    setFieldValue={setFieldValue}
                  />
                </div>

                <FormControl
                  handleClose={handleClose}
                  isNewInvoice={isNewInvoice}
                  setInvoiceStatus={setInvoiceStatus}
                  status={activeInvoice.status}
                />
              </FormikForm>
            )}
          </Formik>
        )}
      </div>
    </>
  );
}
