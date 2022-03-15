import React from "react";
import StatusWidget from "./StatusWidget";

import { formatDate } from "../util/helpers";

function InvoiceCard({
  id = "",
  clientName = "",
  paymentDue = "",
  total = "",
  status = "Draft",
}) {
  return (
    <div className="relative bg-white p-6 pb-0 mb-4 flex flex-wrap rounded-lg shadow-sm md:justify-between md:items-center md:pb-6">
      <h2 className="order-1 w-1/2 mb-6 text-sm text-darkFour font-bold md:w-fit md:mr-7 md:mb-0">
        <span className="text-lightThree">#</span>
        {id}
      </h2>
      <p className="order-3 w-1/2 text-sm text-lightFour font-medium md:w-fit md:order-2 md:mr-9">
        <span className="mr-1">Due</span> {formatDate(paymentDue)}
      </p>
      <p className="order-2 w-1/2 mb-6 text-sm text-lightFour text-right font-medium md:w-fit md:order-3 md:mr-12 md:mb-0">
        {clientName}
      </p>
      <p className="order-5 w-1/2 text-sm text-darkFour font-bold relative -top-4 md:w-fit md:static md:order-4 md:mr-10">
        <span>$</span>
        {total}
      </p>
      <span className="order-4 w-1/2 flex justify-end md:w-fit md:order-5">
        <StatusWidget status={status} />
      </span>
    </div>
  );
}

export default InvoiceCard;
