import React from "react";
import StatusWidget from "./StatusWidget";
import Button from "./Button";

export default function StatusCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm flex justify-between items-center p-6 sm:px-8 sm:py-5">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <p className="text-sm text-lightFour font-medium sm:mr-4">Status</p>
        <StatusWidget status="Pending" />
      </div>
      <div className="hidden sm:block">
        <Button variant="secondary" label="Edit" />
        <Button variant="danger" label="Delete" className="mx-2" />
        <Button variant="primary" label="Mark as Paid" />
      </div>
    </div>
  );
}
