import React, { createContext, useState, useEffect } from "react";

import Pages from "./pages";
import Form from "./components/Form";
import Header from "./components/Header";

export const PagesContext = createContext();

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

  const contextValue = {
    invoices,
    activeInvoice,
    setActiveInvoice,
    setFormActive,
  };

  return (
    <div className="bg-lightOne min-h-screen">
      <Header />
      <PagesContext.Provider value={contextValue}>
        <Pages />
      </PagesContext.Provider>
      <Form
        active={formActive}
        activeInvoice={activeInvoice}
        setActiveInvoice={setActiveInvoice}
        setFormActive={setFormActive}
        setInvoices={setInvoices}
      />
    </div>
  );
}
