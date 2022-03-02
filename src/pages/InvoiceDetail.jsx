import React from "react";
import Button from "../components/Button";

function InvoiceDetail({ handleForm }) {
  return (
    <main>
      <div className="fixed bottom-4 right-4">
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
