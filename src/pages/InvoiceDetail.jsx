import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import DeleteInvoice from "../components/DeleteInvoice";

import { sampleData } from "../util/constants";

function InvoiceDetail({ handleForm }) {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => navigate("/invoices");

  return (
    <>
      <div>
        <Button variant="back" label="Go Back" onClick={handleBack} />
      </div>
      <div className="fixed bottom-4 left-4">
        <Button
          variant="primary"
          label="Edit Invoice"
          onClick={() => handleForm({ active: true, title: "Edit Invoice" })}
        />
      </div>
      <div className="fixed bottom-4 right-4">
        <Button
          variant="danger"
          label="Delete Invoice"
          onClick={() => setModalOpen(true)}
        />
      </div>
      <DeleteInvoice
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        invoiceId={sampleData.id}
      />
    </>
  );
}

export default InvoiceDetail;
