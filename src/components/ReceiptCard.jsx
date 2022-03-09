import React from "react";

function ReceiptCard({ items = [], total = "0.00" }) {
  return (
    <div className="rounded-lg overflow-hidden">
      <section className="p-6 bg-lightOne text-darkFour w-full sm:table">
        <div className="hidden sm:table-row">
          <p className="table-cell">Item Name</p>
          <p className="table-cell">QTY.</p>
          <p className="table-cell">Price</p>
          <p className="table-cell">Total</p>
        </div>
        {items.map((item) => (
          <div className="flex justify-between items-center mb-6 last:mb-0 sm:table-row">
            <div className="sm:table-cell">
              <h2 className="text-sm font-bold mb-2">{item.name}</h2>
              <p className="text-lightThree text-sm font-bold sm:hidden">
                {item.quantity}
                {" x "}${item.price}
              </p>
            </div>
            <p className="hidden sm:table-cell">Test</p>
            <p className="hidden sm:table-cell">Test2</p>
            <p className="text-sm font-bold sm:table-cell">${item.total}</p>
          </div>
        ))}
      </section>
      <section className="flex justify-between items-center p-6 bg-draftWidget text-white">
        <p className="text-xs font-medium sm:hidden">Grand Total</p>
        <p className="text-xs font-medium hidden sm:block">Amount Due</p>
        <p className="text-lg font-bold">$ {total}</p>
      </section>
    </div>
  );
}

export default ReceiptCard;
