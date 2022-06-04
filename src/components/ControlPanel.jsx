import React, { useState } from "react";
import Button from "./Button";
import Filter from "./Filter";
import { formOpenStyles } from "../util/helpers";

export default function ControlPanel({
  invoiceCount = 0,
  setFormActive,
  selectedInvoiceTypes,
  setSelectedInvoiceTypes,
}) {
  const [filterOpen, setFilterOpen] = useState(false);

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
    setFormActive(true);
    formOpenStyles();
  };

  return (
    <div className="mb-8 flex justify-between items-center md:mb-14 xl:mb-16">
      <div>
        <h1 className="text-lg text-darkFour font-bold mb-1">Invoices</h1>
        <p className="text-sm text-lightFour">{countText}</p>
      </div>
      <div className="flex">
        <div className="relative">
          <Button
            variant="filter"
            label="Filter"
            onClick={() => setFilterOpen((prevState) => !prevState)}
            filterActive={filterOpen}
          />
          {filterOpen && (
            <Filter
              selectedInvoiceTypes={selectedInvoiceTypes}
              setSelectedInvoiceTypes={setSelectedInvoiceTypes}
            />
          )}
        </div>
        <Button variant="primary-icon" label="New" onClick={handleFormOpen} />
      </div>
    </div>
  );
}
