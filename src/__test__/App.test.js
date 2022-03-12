import { screen, render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should not display the form initially", () => {
    render(<App />);
    const form = screen.queryByRole("form");
    expect(form).not.toBeInTheDocument();
  });
});
