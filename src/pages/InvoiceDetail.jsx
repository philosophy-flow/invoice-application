import React from "react";
import Button from "../components/Button";

function InvoiceDetail({ handleForm }) {
  return (
    <main className="min-h-screen bg-lightTwo">
      <div className="absolute bottom-4 right-4">
        <Button
          variant="primary"
          label="Edit Invoice"
          onClick={() => handleForm({ active: true, title: "Edit Invoice" })}
        />
      </div>
    </main>
  );
}

export default InvoiceDetail;
