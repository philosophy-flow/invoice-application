import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import StatusCard from "../components/StatusCard";
import DetailCard from "../components/DetailCard";
import DeleteInvoice from "../components/DeleteInvoice";

import { PagesContext } from "../App";
import { formOpenStyles } from "../util/helpers";

function InvoiceDetail() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const { setFormActive, activeInvoice, setActiveInvoice } =
    useContext(PagesContext);
  const { id, status } = activeInvoice;

  useEffect(() => {
    if (!id) {
      navigate("/invoices");
    }
  }, [id, navigate, setActiveInvoice]);

  const handleBack = () => {
    setActiveInvoice({});
    navigate("/invoices");
  };

  const handleFormOpen = () => {
    setFormActive(true);
    formOpenStyles();
  };

  return (
    <>
      <Button variant="back" label="Go Back" onClick={handleBack} />
      <div className="mt-8 mb-4">
        <StatusCard status={status} />
      </div>
      <div className="mb-11">
        <DetailCard invoice={activeInvoice} />
      </div>
      <div className="-mb-[6.5rem] -mx-[7%] h-[5.75rem] bg-white shadow-sm px-[6.4%] md:hidden">
        <div className="flex justify-between items-center h-full">
          <Button variant="secondary" label="Edit" onClick={handleFormOpen} />
          <Button variant="danger" label="Delete" />
          <Button variant="primary" label="Mark as Paid" />
        </div>
      </div>
      <DeleteInvoice
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        invoiceId={id}
      />
    </>
  );
}

export default InvoiceDetail;
