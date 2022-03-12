import React from "react";
import Button from "./Button";

export default function DeleteInvoice({
  invoiceId = "AB1234",
  modalOpen = false,
  setModalOpen = () => null,
}) {
  if (!modalOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 min-h-screen h-fit bg-modalBg flex justify-center items-center">
      <div className="mx-6 p-8 rounded-lg shadow-sm bg-white">
        <h2 className="text-lg text-darkFour mb-2">Confirm Deletion</h2>
        <p className="text-sm text-lightFour font-medium mb-6">
          Are you sure you want to delete invoice #{invoiceId}? This action
          cannot be undone.
        </p>
        <div className="flex justify-end">
          <Button
            className="mr-2"
            variant="secondary"
            label="Cancel"
            onClick={() => setModalOpen(false)}
          />
          <Button variant="danger" label="Delete" />
        </div>
      </div>
    </div>
  );
}
