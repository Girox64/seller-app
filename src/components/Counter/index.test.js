import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from ".";

const counterValue = () => screen.getByRole("marquee");
const incButton = () => screen.getByRole("button", { name: "+1" });
const decButton = () => screen.getByRole("button", { name: "-1" });

describe("Counter", () => {
  it("renders the counter value and the dec/inc buttons", () => {
    render(<Counter />);

    expect(counterValue()).toHaveTextContent("0");
    expect(incButton()).toBeInTheDocument();
    expect(decButton()).toBeInTheDocument();
  });

  it("inc/dec properly the counter value", () => {
    render(<Counter />);

    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent("1");

    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent("2");

    userEvent.click(decButton());
    expect(counterValue()).toHaveTextContent("1");

    userEvent.click(decButton());
    expect(counterValue()).toHaveTextContent("0");

    userEvent.click(decButton());
    expect(counterValue()).toHaveTextContent("0");

    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent("1");
  });
});
