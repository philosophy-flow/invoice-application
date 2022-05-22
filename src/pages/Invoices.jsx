import React, { useContext } from "react";

import InvoiceCard from "../components/InvoiceCard";
import ControlPanel from "../components/ControlPanel";
import NoInvoices from "../components/NoInvoices";

import { PagesContext } from "../App";

export default function Invoices() {
  const { invoices, setActiveInvoice, setFormActive } =
    useContext(PagesContext);

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
