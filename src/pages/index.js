import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Invoices from "./Invoices";
import InvoiceDetail from "./InvoiceDetail";

export default function Pages() {
  return (
    <main className="relative px-[6.4%] pt-[6.375rem] pb-[6.5rem] md:pt-[8.5rem] xl:px-[25%] xl:pt-[4.5rem]">
      <Router>
        <Routes>
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/invoices/:invoiceId" element={<InvoiceDetail />} />
          <Route path="*" element={<Navigate to="/invoices" />} />
        </Routes>
      </Router>
    </main>
  );
}
