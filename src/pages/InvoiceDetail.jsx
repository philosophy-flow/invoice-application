import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import StatusCard from "../components/StatusCard";
import DetailCard from "../components/DetailCard";
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
      <div className="mb-11">
        <DetailCard invoice={activeInvoice} />
      </div>

      <div className="absolute left-0 right-0 bottom-0 h-[5.75rem] bg-white shadow-sm px-[6.4%] md:hidden">
        <div className="flex justify-between items-center h-full">
          <Button variant="secondary" label="Edit" />
          <Button variant="danger" label="Delete" />
          <Button variant="primary" label="Mark as Paid" />
        </div>
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
