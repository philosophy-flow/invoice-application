import React from "react";

export default function Filter({
  selectedInvoiceTypes,
  setSelectedInvoiceTypes,
}) {
  const handleOnChange = (event) => {
    const invoiceType = event.target.value;
    selectedInvoiceTypes.includes(invoiceType)
      ? setSelectedInvoiceTypes((prev) =>
          prev.filter((type) => type !== invoiceType)
        )
      : setSelectedInvoiceTypes((prev) => [...prev, invoiceType]);
  };

  return (
    <form onChange={handleOnChange}>
      <div className="absolute top-[120%] left-1/2 -translate-x-1/2 bg-white p-6 text-sm z-10 font-bold w-[140px] rounded-lg shadow-lg w-[11.25rem]">
        <div
          role="group"
          aria-labelledby="checkbox-group"
          className="flex flex-col"
        >
          <label className="pb-4 cursor-pointer">
            <input type="checkbox" name="selected" value="draft" />
            <span className="pl-3.5">Draft</span>
          </label>
          <label className="pb-4 cursor-pointer">
            <input type="checkbox" name="selected" value="pending" />
            <span className="pl-3.5">Pending</span>
          </label>
          <label className="cursor-pointer">
            <input type="checkbox" name="selected" value="paid" />
            <span className="pl-3.5">Paid</span>
          </label>
        </div>
      </div>
    </form>
  );
}
