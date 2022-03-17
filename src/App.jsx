import React, { useState } from "react";

import Pages from "./pages";
import Form from "./components/Form";
import Header from "./components/Header";

import { sampleData } from "./util/constants";

export default function App() {
  const [formState, setFormState] = useState({ active: false, title: "" });
  const [invoices, setInvoices] = useState(sampleData);
  const [activeInvoice, setActiveInvoice] = useState({});

  return (
    <div className="min-h-screen h-fit bg-lightOne">
      <Header />
      <Pages
        setFormState={setFormState}
        invoices={invoices}
        activeInvoice={activeInvoice}
        setActiveInvoice={setActiveInvoice}
      />
      <Form
        open={formState.active}
        title={formState.title}
        setFormState={setFormState}
      />
    </div>
  );
}
