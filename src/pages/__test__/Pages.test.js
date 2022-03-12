import { screen, render } from "@testing-library/react";
import Pages from "../index";

describe("Pages", () => {
  it("render Invoices page on initial load", () => {
    render(<Pages />);

    const invoicesHeader = screen.getByRole("heading", {
      level: 1,
      name: "Invoices",
    });
    expect(invoicesHeader).toBeInTheDocument();
  });
});
