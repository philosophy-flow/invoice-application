import React from "react";
import Button from "../components/Button";

function Invoices({ handleForm }) {
  return (
    <main className={"min-h-screen bg-lightTwo"}>
      <div className="absolute bottom-4 right-4">
        <Button
          variant="primary-icon"
          label="Add Invoice"
          onClick={() => handleForm({ active: true, title: "New Invoice" })}
        />
      </div>
    </main>
  );
}

export default Invoices;
