import React from "react";
import StatusWidget from "./StatusWidget";

import { formatDate } from "../helpers";

function InvoiceCard({
  id = "",
  clientName = "",
  paymentDue = "",
  total = "",
  status = "Draft",
}) {
  return (
    <div className="relative bg-white p-6 pb-0 flex flex-wrap rounded-lg shadow-sm">
      <h2 className="order-1 w-1/2 mb-6 text-sm text-darkFour font-bold">
        <span className="text-lightThree">#</span>
        {id}
      </h2>
      <p className="order-3 w-1/2 text-sm text-lightFour font-medium">
        <span className="mr-1">Due</span> {formatDate(paymentDue)}
      </p>
      <p className="order-2 w-1/2 mb-6 text-sm text-lightFour text-right font-medium">
        {clientName}
      </p>
      <p className="order-5 w-1/2 text-md text-darkFour font-bold relative -top-4">
        <span>$</span>
        {total}
      </p>
      <span className="order-4 w-1/2 flex justify-end">
        <StatusWidget status={status} />
      </span>
    </div>
  );
}

export default InvoiceCard;
