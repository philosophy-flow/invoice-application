import { formatDate, scrollToTop } from "../helpers";

global.scrollTo = jest.fn();

describe("Helper Functions", () => {
  it("(formatDate) should return the date in the correct format given a valid input", () => {
    const dateInput = "2022-03-01";
    expect(formatDate(dateInput)).toBe("01 Mar 2022");
  });

  it("(scrollToTop) should scroll to the top of the page when called", () => {
    scrollToTop();
    expect(global.scrollTo).toHaveBeenCalledWith({
      behavior: "smooth",
      top: 0,
    });
  });
});
