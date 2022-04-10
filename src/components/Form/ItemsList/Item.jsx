import React, { useEffect } from "react";
import FormInput from "../../FormInput";
import Button from "../../Button";

export default function Item({
  arrayHelpers,
  errors,
  index,
  item,
  setFieldValue,
  touched,
}) {
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
        error={errors.items?.[index]?.name}
        touched={touched.items?.[index]?.name}
      />
      <FormInput
        label="Qty."
        name={`items[${index}].quantity`}
        className="w-[20%] mr-4"
        error={errors.items?.[index]?.quantity}
        touched={touched.items?.[index]?.quantity}
      />
      <FormInput
        label="Price"
        name={`items[${index}].price`}
        className="w-[31%] mr-4"
        error={errors.items?.[index]?.price}
        touched={touched.items?.[index]?.price}
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
