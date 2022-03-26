import React from "react";
import Button from "../Button";

export default function FormControl({ handleClose, handleSubmit, values }) {
  return (
    <section>
      {/* Div for shadow */}
      <div className="absolute left-0 right-0 bottom-[5.75rem] h-16 bg-gradient-to-b from-gradientBgStart to-gradientBgEnd" />

      <div className="absolute left-0 right-0 bottom-0 h-[5.75rem] bg-white px-[6.4%]">
        <div className="flex justify-between items-center h-full">
          <Button
            variant="secondary"
            label="Discard"
            className="px-4 py-4"
            onClick={handleClose}
          />
          <Button
            variant="dark"
            label="Save as Draft"
            className="px-4 py-4"
            onClick={() => handleSubmit(values, "draft")}
          />
          <Button
            variant="primary"
            label="Save & Send"
            className="px-4 py-4"
            onClick={() => handleSubmit(values, "pending")}
          />
        </div>
      </div>
    </section>
  );
}
