import React from "react";
import StatusWidget from "./StatusWidget";
import { useNavigate } from "react-router-dom";

import { formatDate, formatMoney } from "../util/helpers";

function InvoiceCard({ invoice, setActiveInvoice = () => null }) {
  const { id, clientName, paymentDue, total, status } = invoice;
  const navigate = useNavigate();

  const handleInvoiceSelection = () => {
    setActiveInvoice(invoice);
    navigate(`/invoices/${id}`);
  };

  return (
    <div
      className="relative bg-white p-6 pb-0 mb-4 flex flex-wrap rounded-lg shadow-sm cursor-pointer md:justify-between md:items-center md:pb-6 last:mb-0"
      onClick={() => handleInvoiceSelection()}
    >
      <h2 className="order-1 w-1/2 mb-6 text-sm text-darkFour font-bold md:mr-0 md:mb-0 md:w-1/5">
        <span className="text-lightThree">#</span>
        {id}
      </h2>
      <p className="order-3 w-1/2 text-sm text-lightFour font-medium md:order-2 md:mr-0 md:w-1/5">
        <span className="mr-1">Due</span> {formatDate(paymentDue)}
      </p>
      <p className="order-2 w-1/2 mb-6 text-sm text-lightFour text-right font-medium md:order-3 md:mr-0 md:mb-0 md:w-1/5 md:text-left">
        {clientName}
      </p>
      <p className="order-5 w-1/2 text-sm text-darkFour font-bold relative -top-4 md:static md:order-4 md:mr-0 md:w-1/5 md:text-right">
        <span>$</span>
        {formatMoney(total)}
      </p>
      <span className="order-4 w-1/2 flex justify-end md:order-5 md:w-1/5">
        <StatusWidget status={status} />
      </span>
    </div>
  );
}

export default InvoiceCard;
