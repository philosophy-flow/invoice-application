import React from "react";
import IllustrationEmpty from "../assets/svg/IllustrationEmpty";

export default function NoInvoices() {
  return (
    <div className="w-60 m-auto">
      <div className="pt-17 mb-10">
        <IllustrationEmpty />
      </div>
      <div className="text-center">
        <h2 className="text-lg text-darkFour font-bold mb-6">
          There is nothing here
        </h2>
        <p className="px-2 text-sm text-lightFour">
          Create an invoice by clicking the <strong>New</strong> button and get
          started
        </p>
      </div>
    </div>
  );
}
