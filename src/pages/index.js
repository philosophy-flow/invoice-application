import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Invoices from "./Invoices";
import InvoiceDetail from "./InvoiceDetail";

export default function Pages({ setFormState }) {
  return (
    <main className="border border-red px-6 py-8">
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
    </main>
  );
}
