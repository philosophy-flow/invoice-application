import React from "react";
import Button from "../Button";

export default function ItemList({ items }) {
  return (
    <section className="border border-red">
      <h3>Item List</h3>
      <Button variant="secondary" label="+ Add New Item" className="w-full" />
    </section>
  );
}
