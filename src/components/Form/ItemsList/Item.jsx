import React, { useEffect } from "react";
import FormInput from "../../FormInput";
import Button from "../../Button";

export default function Item({ arrayHelpers, index, item, setFieldValue }) {
  useEffect(() => {
    const total = (item.price * item.quantity).toFixed(2);
    setFieldValue(`items[${index}].total`, total);
  }, [item.price, item.quantity, index, setFieldValue]);

  return (
    <div className="mb-12 flex flex-wrap items-center justify-between">
      <FormInput
        label="Item Name"
        name={`items[${index}].name`}
        className="w-full mb-6"
      />
      <FormInput
        label="Qty."
        name={`items[${index}].quantity`}
        className="w-[20%] mr-4"
      />
      <FormInput
        label="Price"
        name={`items[${index}].price`}
        className="w-[31%] mr-4"
      />
      <FormInput
        label="Total"
        name={`items[${index}].total`}
        variant="disabled"
        className="w-[31%]"
      />
      <Button
        variant="delete-item"
        className="mt-5"
        onClick={() => {
          arrayHelpers.remove(index);
        }}
      />
    </div>
  );
}
