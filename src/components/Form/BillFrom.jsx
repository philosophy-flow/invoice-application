import React from "react";
import FormInput from "../FormInput";

export default function FromDetails({ errors, touched }) {
  return (
    <section>
      <h3 className="text-purple text-sm font-bold">Bill From</h3>
      <FormInput
        variant="text"
        name="senderAddress.street"
        label="Street Address"
        error={errors.senderAddress?.street}
        touched={touched.senderAddress?.street}
        className="my-6"
      />
      <div className="flex justify-between flex-wrap md:mb-12">
        <FormInput
          variant="text"
          name="senderAddress.city"
          label="City"
          error={errors.senderAddress?.city}
          touched={touched.senderAddress?.city}
          className="w-[46.5%] md:w-[30%]"
        />
        <FormInput
          variant="text"
          name="senderAddress.zipcode"
          label="Zip Code"
          error={errors.senderAddress?.zipcode}
          touched={touched.senderAddress?.zipcode}
          className="w-[46.5%] md:w-[30%]"
        />
        <FormInput
          variant="text"
          name="senderAddress.country"
          label="Country"
          error={errors.senderAddress?.country}
          touched={touched.senderAddress?.country}
          className="mt-6 mb-10 w-full md:w-[30%] md:m-0"
        />
      </div>
    </section>
  );
}
