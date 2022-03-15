import React from "react";

import InvoiceCard from "../components/InvoiceCard";
import ControlPanel from "../components/ControlPanel";
import NoInvoices from "../components/NoInvoices";

export default function Invoices({ invoices = [], setFormState }) {
  const invoicesJSX = invoices.map((invoice) => (
    <InvoiceCard
      key={invoice.id}
      id={invoice.id}
      paymentDue={invoice.paymentDue}
      clientName={invoice.clientName}
      total={invoice.total}
      status={invoice.status}
    />
  ));

  return (
    <>
      <ControlPanel
        invoiceCount={invoices.length}
        setFormState={setFormState}
      />
      {invoices.length ? invoicesJSX : <NoInvoices />}
    </>
  );
}
