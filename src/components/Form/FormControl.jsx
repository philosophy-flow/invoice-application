import React from "react";
import Button from "../Button";

export default function FormControl({ handleClose, setInvoiceStatus }) {
  return (
    <section className="fixed left-0 right-0 bottom-0 h-[5.75rem] md:static">
      {/* Div for shadow */}
      <div className="absolute left-0 right-0 bottom-[5.75rem] h-16 bg-gradient-to-b from-gradientBgStart to-gradientBgEnd pointer-events-none" />
      <div className="bg-white px-[6.4%] flex justify-between items-center h-full md:px-0">
        <Button
          variant="secondary"
          label="Discard"
          className="px-4 py-4"
          onClick={handleClose}
        />
        <Button
          type="submit"
          variant="dark"
          label="Save as Draft"
          className="px-4 py-4"
          onClick={() => setInvoiceStatus("draft")}
        />
        <Button
          type="submit"
          variant="primary"
          label="Save & Send"
          className="px-4 py-4"
          onClick={() => setInvoiceStatus("pending")}
        />
      </div>
    </section>
  );
}
