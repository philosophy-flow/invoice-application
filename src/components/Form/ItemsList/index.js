import React from "react";
import { FieldArray } from "formik";

import Button from "../../Button";
import Item from "./Item";

export default function ItemsList({ items, setFieldValue }) {
  return (
    <section>
      <h3 className="text-[1.125rem] text-[#777F98] mb-6">Item List</h3>
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
