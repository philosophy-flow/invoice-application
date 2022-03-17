import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import StatusCard from "../components/StatusCard";
import DeleteInvoice from "../components/DeleteInvoice";

import { sampleData } from "../util/constants";

function InvoiceDetail({ handleForm, activeInvoice }) {
  const { id, status } = activeInvoice;
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate("/invoices");
    }
  }, [id, navigate]);

  const handleBack = () => navigate("/invoices");

  return (
    <>
      <Button variant="back" label="Go Back" onClick={handleBack} />
      <div className="mt-8 mb-4">
        <StatusCard status={status} />
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
