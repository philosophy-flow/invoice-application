import React from "react";

function Invoices({ handleForm }) {
  return (
    <div className="min-h-screen bg-lightTwo">
      <button
        className="bg-purple  p-3 rounded-full absolute bottom-4 right-4"
        onClick={() => handleForm({ active: true, title: "New Invoice" })}
      >
        Add Invoice
      </button>
    </div>
  );
}

export default Invoices;
