import React from "react";
import Button from "./Button";

export default function ControlPanel({ invoiceCount = 0, setFormState }) {
  let countText;
  switch (invoiceCount) {
    case 0:
      countText = "No invoices";
      break;
    case 1:
      countText = "1 invoice";
      break;
    default:
      countText = `${invoiceCount} invoices`;
  }

  const handleFormOpen = () => {
    setFormState({ active: true, title: "New Invoice" });
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="mb-8 flex justify-between items-center md:mb-14 xl:mb-16">
      <div>
        <h1 className="text-lg text-darkFour font-bold mb-1">Invoices</h1>
        <p className="text-sm text-lightFour">{countText}</p>
      </div>
      <div className="flex">
        <Button variant="filter" label="Filter" />
        <Button variant="primary-icon" label="New" onClick={handleFormOpen} />
      </div>
    </div>
  );
}
