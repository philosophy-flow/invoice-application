import React from "react";

import InvoiceCard from "../components/InvoiceCard";
import ControlPanel from "../components/ControlPanel";
import NoInvoices from "../components/NoInvoices";

export default function Invoices({
  invoices = [],
  setFormActive,
  setActiveInvoice,
}) {
  return (
    <>
      <ControlPanel
        invoiceCount={invoices.length}
        setFormActive={setFormActive}
      />
      {invoices.length ? (
        invoices.map((invoice) => (
          <InvoiceCard
            key={invoice.id}
            invoice={invoice}
            setActiveInvoice={setActiveInvoice}
          />
        ))
      ) : (
        <NoInvoices />
      )}
    </>
  );
}
