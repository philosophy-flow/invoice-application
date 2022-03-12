import React from "react";
import IllustrationEmpty from "../assets/svg/IllustrationEmpty";

export default function NoInvoices() {
  return (
    <>
      <div className="border border-red mx-16 mt-17 mb-10">
        <IllustrationEmpty />
      </div>
      <div className="text-center mx-13">
        <h2 className="text-lg text-darkFour font-bold mb-6">
          There is nothing here
        </h2>
        <p className="text-sm text-lightFour">
          Create an invoice by clicking the <strong>New</strong> button and get
          started
        </p>
      </div>
    </>
  );
}
