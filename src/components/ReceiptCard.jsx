import React from "react";
import { formatMoney } from "../util/helpers";

function ReceiptCard({ items = [], total = "0.00" }) {
  return (
    <div className="rounded-lg overflow-hidden">
      <section className="p-6 bg-lightOne text-darkFour w-full">
        <div className="hidden md:flex md:justify-between md:mb-8 text-lightThree">
          <p>Item Name</p>
          <div className="flex justify-between w-[50%]">
            <div className="flex">
              <p className="mr-[5.5rem]">QTY.</p>
              <p>Price</p>
            </div>
            <p>Total</p>
          </div>
        </div>
        {items.map((item) => (
          <div
            key={item.name}
            className="flex justify-between items-center mb-6 last:mb-0"
          >
            <div>
              <h2 className="text-sm font-bold mb-2 md:mb-0">{item.name}</h2>
              <p className="text-lightThree text-sm font-bold md:hidden">
                {item.quantity}
                {" x "}${formatMoney(item.price)}
              </p>
            </div>
            <div className="md:flex md:justify-between md:w-[50%]">
              <div className="hidden md:flex">
                <p className="w-8 text-center text-lightThree text-sm font-bold">
                  {item.quantity}
                </p>
                <p className="ml-[5.5rem] text-lightThree text-sm font-bold w-8">
                  ${formatMoney(item.price)}
                </p>
              </div>
              <p className="text-sm font-bold md:block">
                ${formatMoney(item.total)}
              </p>
            </div>
          </div>
        ))}
      </section>
      <section className="flex justify-between items-center p-6 bg-draftWidget text-white">
        <p className="text-xs font-medium md:hidden">Grand Total</p>
        <p className="text-xs font-medium hidden md:block">Amount Due</p>
        <p className="text-lg font-bold">$ {formatMoney(total)}</p>
      </section>
    </div>
  );
}

export default ReceiptCard;
