import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Invoices from "./pages/Invoices";
import InvoiceDetail from "./pages/InvoiceDetail";
import Form from "./Form";

function App() {
  const [formState, setFormState] = useState({ active: false, title: "" });

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/invoices"
            element={<Invoices handleForm={setFormState} />}
          />
          <Route
            path="/invoices/:invoiceId"
            element={<InvoiceDetail handleForm={setFormState} />}
          />
          <Route path="*" element={<Navigate to="/invoices" />} />
        </Routes>
      </Router>
      <Form open={formState.active} title={formState.title} />
    </>
  );
}

export default App;
