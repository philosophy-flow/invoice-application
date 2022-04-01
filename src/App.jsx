import React, { useState } from "react";

import Pages from "./pages";
import Form from "./components/Form";
import Header from "./components/Header";

import { sampleData } from "./util/constants";

export default function App() {
  const [formActive, setFormActive] = useState(false);
  const [invoices, setInvoices] = useState(sampleData);
  const [activeInvoice, setActiveInvoice] = useState({});

  return (
    <div className="min-h-screen bg-lightOne">
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
      />
    </div>
  );
}
