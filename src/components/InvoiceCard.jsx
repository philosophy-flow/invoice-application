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
    <div className="relative bg-white p-6 pb-0 flex flex-wrap rounded-lg shadow-sm sm:justify-between sm:items-center sm:pb-6">
      <h2 className="order-1 w-1/2 mb-6 text-sm text-darkFour font-bold sm:w-fit sm:mr-7 sm:mb-0">
        <span className="text-lightThree">#</span>
        {id}
      </h2>
      <p className="order-3 w-1/2 text-sm text-lightFour font-medium sm:w-fit sm:order-2 sm:mr-9">
        <span className="mr-1">Due</span> {formatDate(paymentDue)}
      </p>
      <p className="order-2 w-1/2 mb-6 text-sm text-lightFour text-right font-medium sm:w-fit sm:order-3 sm:mr-12 sm:mb-0">
        {clientName}
      </p>
      <p className="order-5 w-1/2 text-sm text-darkFour font-bold relative -top-4 sm:w-fit sm:static sm:order-4 sm:mr-10">
        <span>$</span>
        {total}
      </p>
      <span className="order-4 w-1/2 flex justify-end sm:w-fit sm:order-5">
        <StatusWidget status={status} />
      </span>
    </div>
  );
}

export default InvoiceCard;
