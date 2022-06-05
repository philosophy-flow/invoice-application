import React, { useContext, useState } from "react";

import InvoiceCard from "../components/InvoiceCard";
import ControlPanel from "../components/ControlPanel";
import NoInvoices from "../components/NoInvoices";

import { PagesContext } from "../App";

export default function Invoices() {
  const [selectedInvoiceTypes, setSelectedInvoiceTypes] = useState([]);
  const { invoices, setActiveInvoiceId, setFormActive } =
    useContext(PagesContext);

  const selectedInvoices =
    selectedInvoiceTypes.length > 0
      ? invoices.filter((invoice) =>
          selectedInvoiceTypes.includes(invoice.status)
        )
      : invoices;

  return (
    <>
      <ControlPanel
        invoiceCount={invoices.length}
        setFormActive={setFormActive}
        selectedInvoiceTypes={selectedInvoiceTypes}
        setSelectedInvoiceTypes={setSelectedInvoiceTypes}
      />
      {selectedInvoices.length ? (
        selectedInvoices.map((invoice) => (
          <InvoiceCard
            key={invoice.id}
            invoice={invoice}
            setActiveInvoiceId={setActiveInvoiceId}
          />
        ))
      ) : (
        <NoInvoices invoicesExist={invoices.length > 0} />
      )}
    </>
  );
}
