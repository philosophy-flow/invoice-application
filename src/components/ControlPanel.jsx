import React from "react";
import Button from "./Button";

export default function ControlPanel({ invoiceCount = 0 }) {
  console.log(invoiceCount);
  return (
    <div className="mb-8 flex justify-between items-center">
      <div>
        <h1 className="text-lg text-darkFour font-bold mb-1">Invoices</h1>
        <p className="text-sm text-lightFour">
          {invoiceCount ? `${invoiceCount} invoices` : "No invoices"}
        </p>
      </div>
      <div className="flex">
        <Button variant="filter" label="Filter" />
        <Button variant="primary-icon" label="New" />
      </div>
    </div>
  );
}
