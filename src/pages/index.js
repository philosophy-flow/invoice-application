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
    <main className="px-6 pt-[6.375rem] pb-8 lg:pt-16 lg:px-[25%]">
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
