import React from "react";

import { scrollToTop } from "../helpers";

import Button from "../components/Button";
import InvoiceCard from "../components/InvoiceCard";
import StatusCard from "../components/StatusCard";
import DetailCard from "../components/DetailCard";

const sampleData = {
  id: "RT3080",
  createdAt: "2021-08-18",
  paymentDue: "2021-08-19",
  description: "Re-branding",
  paymentTerms: 1,
  clientName: "Jensen Huang",
  clientEmail: "jensenh@mail.com",
  status: "Paid",
  senderAddress: {
    street: "19 Union Terrace",
    city: "London",
    postCode: "E1 3EZ",
    country: "United Kingdom",
  },
  clientAddress: {
    street: "106 Kendell Street",
    city: "Sharrington",
    postCode: "NR24 5WQ",
    country: "United Kingdom",
  },
  items: [
    {
      name: "Brand Guidelines",
      quantity: 1,
      price: "1800.90",
      total: "1800.90",
    },
  ],
  total: "1800.90",
};

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
