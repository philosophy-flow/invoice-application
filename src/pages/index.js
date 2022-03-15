import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Invoices from "./Invoices";
import InvoiceDetail from "./InvoiceDetail";

export default function Pages({ setFormState, invoices = [] }) {
  return (
    <main className="px-[6.4%] pt-[6.375rem] pb-8 md:pt-[8.5rem] xl:px-[25%] xl:pt-[4.5rem]">
      <Router>
        <Routes>
          <Route
            path="/invoices"
            element={
              <Invoices invoices={invoices} setFormState={setFormState} />
            }
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
