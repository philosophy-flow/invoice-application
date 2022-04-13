import React, { useState, useEffect } from "react";

import Pages from "./pages";
import Form from "./components/Form";
import Header from "./components/Header";

export default function App() {
  const [formActive, setFormActive] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [activeInvoice, setActiveInvoice] = useState({});

  useEffect(() => {
    (async () => {
      const response = await fetch("sampleInvoices.json");
      const sampleInvoices = await response.json();
      setInvoices(sampleInvoices);
    })();
  }, []);

  return (
    <div className="bg-lightOne min-h-screen">
      <Header />
      <Pages
        setFormActive={setFormActive}
        invoices={invoices}
        activeInvoice={activeInvoice}
        setActiveInvoice={setActiveInvoice}
      />
      <Form
        active={formActive}
        activeInvoice={activeInvoice}
        setFormActive={setFormActive}
        setInvoices={setInvoices}
      />
    </div>
  );
}
