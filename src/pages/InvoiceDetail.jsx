import React from "react";

function InvoiceDetail({ handleForm }) {
  return (
    <div className="min-h-screen bg-lightTwo">
      <button
        className="bg-purple  p-3 rounded-full absolute bottom-4 right-4"
        onClick={() => handleForm({ active: true, title: "Edit Invoice" })}
      >
        Edit Invoice
      </button>
    </div>
  );
}

export default InvoiceDetail;
