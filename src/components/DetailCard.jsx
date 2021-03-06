import React from "react";
import ReceiptCard from "./ReceiptCard";

import { formatDate } from "../util/helpers";

export default function DetailCard({ invoice }) {
  const {
    id = "",
    description = "",
    senderAddress = "",
    createdAt = "",
    paymentDue = "",
    clientName = "",
    clientAddress = "",
    clientEmail = "",
    items = [],
    total = 0,
  } = invoice;

  return (
    <div className="bg-white rounded-lg p-6 text-lightFour text-sm font-medium shadow-sm">
      <section className="mb-7.5 md:flex justify-between md:mb-5">
        <div className="mb-7.5">
          <h1 className="text-darkFour font-bold mb-1">
            <span className="text-lightFour">#</span>
            {id}
          </h1>
          <p>{description}</p>
        </div>
        <div className="text-xs">
          <p>{senderAddress.street}</p>
          <p>{senderAddress.city}</p>
          <p>{senderAddress.postCode}</p>
          <p>{senderAddress.country}</p>
        </div>
      </section>

      <section className="flex flex-wrap mb-10 md:justify-between">
        <div className="mb-8 w-1/2 md:w-fit">
          <div className="mb-8">
            <label>Invoice Date</label>
            <h2 className="text-md text-darkFour font-bold mt-3">
              {formatDate(createdAt)}
            </h2>
          </div>
          <div>
            <label>Payment Due</label>
            <h2 className="text-md text-darkFour font-bold mt-3">
              {formatDate(paymentDue)}
            </h2>
          </div>
        </div>

        <div className="w-1/2 md:w-fit">
          <label>Bill To</label>
          <h2 className="text-md text-darkFour font-bold mt-3 mb-2">
            {clientName}
          </h2>
          <div className="text-xs">
            <p>{clientAddress.street}</p>
            <p>{clientAddress.city}</p>
            <p>{clientAddress.postCode}</p>
            <p>{clientAddress.country}</p>
          </div>
        </div>
        <div className="md:mr-18">
          <label>Sent to</label>
          <h2 className="text-md text-darkFour font-bold mt-3">
            {clientEmail}
          </h2>
        </div>
      </section>

      <ReceiptCard items={items} total={total} />
    </div>
  );
}
