import React from "react";

import { scrollToTop } from "../util/helpers";
import { sampleData } from "../util/constants";

import Button from "../components/Button";
import InvoiceCard from "../components/InvoiceCard";
import StatusCard from "../components/StatusCard";
import DetailCard from "../components/DetailCard";

function Invoices({ handleForm }) {
  const handleClick = () => {
    scrollToTop();
    handleForm({ active: true, title: "New Invoice" });
  };

  return (
    <>
      <InvoiceCard
        id={sampleData.id}
        paymentDue={sampleData.paymentDue}
        clientName={sampleData.clientName}
        total={sampleData.total}
        status={sampleData.status}
      />
      <br />
      <StatusCard status={sampleData.status} />
      <br />
      <DetailCard invoice={sampleData} />
      <div className="fixed bottom-4 right-4">
        <Button
          variant="primary-icon"
          label="Add Invoice"
          onClick={handleClick}
        />
      </div>
    </>
  );
}

export default Invoices;
