import React from "react";
import FormInput from "../FormInput";

export default function BillTo({ errors, touched }) {
  return (
    <section>
      <h3 className="text-purple text-sm font-bold">Bill To</h3>
      <FormInput
        variant="text"
        name="clientName"
        label="Client's Name"
        error={errors.clientName}
        touched={touched.clientName}
        className="my-6"
      />
      <FormInput
        variant="text"
        name="clientEmail"
        label="Client's Email"
        error={errors.clientEmail}
        touched={touched.clientEmail}
        className="my-6"
      />
      <FormInput
        variant="text"
        name="clientAddress.street"
        label="Street Address"
        error={errors.clientAddress?.street}
        touched={touched.clientAddress?.street}
        className="my-6"
      />
      <div className="flex justify-between flex-wrap md:mb-12">
        <FormInput
          variant="text"
          name="clientAddress.city"
          label="City"
          error={errors.clientAddress?.city}
          touched={touched.clientAddress?.city}
          className="w-[46.5%] md:w-[30%]"
        />
        <FormInput
          variant="text"
          name="clientAddress.zipcode"
          label="Zip Code"
          error={errors.clientAddress?.zipcode}
          touched={touched.clientAddress?.zipcode}
          className="w-[46.5%] md:w-[30%]"
        />
        <FormInput
          variant="text"
          name="clientAddress.country"
          label="Country"
          error={errors.clientAddress?.country}
          touched={touched.clientAddress?.country}
          className="mt-6 mb-10 w-full md:w-[30%] md:m-0"
        />
      </div>
    </section>
  );
}
