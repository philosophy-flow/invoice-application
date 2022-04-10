import React from "react";
import { FieldArray, ErrorMessage } from "formik";

import Button from "../../Button";
import Item from "./Item";

export default function ItemsList({ errors, items, setFieldValue, touched }) {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[1.125rem] text-[#777F98] ">Item List</h3>
        {typeof errors.items === "string" && (
          <ErrorMessage
            name="items"
            component="span"
            className="text-sm text-red font-medium"
          />
        )}
      </div>
      <FieldArray name="items">
        {(arrayHelpers) => (
          <>
            {items.map((item, index) => (
              <Item
                key={index}
                index={index}
                item={item}
                setFieldValue={setFieldValue}
                arrayHelpers={arrayHelpers}
                errors={errors}
                touched={touched}
              />
            ))}
            <Button
              variant="secondary"
              label="+ Add New Item"
              className="w-full"
              onClick={() => {
                arrayHelpers.push({
                  name: "",
                  quantity: "",
                  price: "",
                  total: "",
                });
              }}
            />
          </>
        )}
      </FieldArray>
    </section>
  );
}
