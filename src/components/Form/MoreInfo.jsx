import React from "react";
import FormInput from "../FormInput";
import formDetails from "./formDetails";

const { selectOptions } = formDetails;

export default function MoreInfo({ errors, touched }) {
  return (
    <section>
      <div className="md:flex md:justify-between">
        <FormInput
          variant="date"
          name="createdAt"
          label="Invoice Date"
          error={errors.createdAt}
          touched={touched.createdAt}
          className="mb-6 md:w-[48%]"
        />
        <FormInput
          variant="select"
          name="paymentTerms"
          label="Payment Terms"
          options={selectOptions}
          error={errors.paymentTerms}
          touched={touched.paymentTerms}
          className="mb-6 md:w-[48%]"
        />
      </div>
      <FormInput
        variant="text"
        name="description"
        label="Project Description"
        options={selectOptions}
        error={errors.description}
        touched={touched.description}
        className="mb-6"
      />
    </section>
  );
}
