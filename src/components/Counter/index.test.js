import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from ".";

const counterValue = () => screen.getByRole("marquee");
const incButton = ({ step } = { step: 1 }) =>
  screen.getByRole("button", { name: `+${step}` });
const decButton = ({ step } = { step: 1 }) =>
  screen.getByRole("button", { name: `-${step}` });

describe("Counter", () => {
  it("renders the counter value and the dec/inc buttons", () => {
    render(<Counter />);

    expect(counterValue()).toHaveTextContent(/^0$/);
    expect(incButton()).toBeInTheDocument();
    expect(decButton()).toBeInTheDocument();
  });

  it("inc/dec properly the counter value", () => {
    render(<Counter />);

    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent(/^1$/);

    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent(/^2$/);

    userEvent.click(decButton());
    expect(counterValue()).toHaveTextContent(/^1$/);

    userEvent.click(decButton());
    expect(counterValue()).toHaveTextContent(/^0$/);

    userEvent.click(decButton());
    expect(counterValue()).toHaveTextContent(/^0$/);

    userEvent.click(incButton());
    expect(counterValue()).toHaveTextContent(/^1$/);
  });

  describe("while startValue = 10", () => {
    it("renders the counter value and the dec/inc buttons", () => {
      render(<Counter startValue={10} />);

      expect(counterValue()).toHaveTextContent(/^10$/);
      expect(incButton()).toBeInTheDocument();
      expect(decButton()).toBeInTheDocument();
    });

    it("inc/dec properly the counter value", () => {
      render(<Counter startValue={10} />);

      userEvent.click(incButton());
      expect(counterValue()).toHaveTextContent(/^11$/);

      userEvent.click(incButton());
      expect(counterValue()).toHaveTextContent(/^12$/);

      userEvent.click(decButton());
      expect(counterValue()).toHaveTextContent(/^11$/);

      userEvent.click(decButton());
      expect(counterValue()).toHaveTextContent(/^10$/);

      userEvent.click(decButton());
      expect(counterValue()).toHaveTextContent(/^10$/);

      userEvent.click(incButton());
      expect(counterValue()).toHaveTextContent(/^11$/);
    });
  });
  describe("while step = 3", () => {
    const step = 3;

    it("renders the counter value and the dec/inc buttons", () => {
      render(<Counter step={step} />);

      expect(counterValue()).toHaveTextContent(/^0$/);
      expect(incButton({ step })).toBeInTheDocument();
      expect(decButton({ step })).toBeInTheDocument();
    });

    it("inc/dec properly the counter value", () => {
      render(<Counter step={step} />);

      userEvent.click(incButton({ step }));
      expect(counterValue()).toHaveTextContent(/^3$/);

      userEvent.click(incButton({ step }));
      expect(counterValue()).toHaveTextContent(/^6$/);

      userEvent.click(decButton({ step }));
      expect(counterValue()).toHaveTextContent(/^3$/);

      userEvent.click(decButton({ step }));
      expect(counterValue()).toHaveTextContent(/^0$/);

      userEvent.click(decButton({ step }));
      expect(counterValue()).toHaveTextContent(/^0$/);

      userEvent.click(incButton({ step }));
      expect(counterValue()).toHaveTextContent(/^3$/);
    });
  });
  describe("while startValue = 10 and step = 3", () => {
    const step = 3;

    it("renders the counter value and the dec/inc buttons", () => {
      render(<Counter startValue={10} step={step} />);

      expect(counterValue()).toHaveTextContent(/^10$/);
      expect(incButton({ step })).toBeInTheDocument();
      expect(decButton({ step })).toBeInTheDocument();
    });

    it("inc/dec properly the counter value", () => {
      render(<Counter startValue={10} step={step} />);

      userEvent.click(incButton({ step }));
      expect(counterValue()).toHaveTextContent(/^13$/);

      userEvent.click(incButton({ step }));
      expect(counterValue()).toHaveTextContent(/^16$/);

      userEvent.click(decButton({ step }));
      expect(counterValue()).toHaveTextContent(/^13$/);

      userEvent.click(decButton({ step }));
      expect(counterValue()).toHaveTextContent(/^10$/);

      userEvent.click(decButton({ step }));
      expect(counterValue()).toHaveTextContent(/^10$/);

      userEvent.click(incButton({ step }));
      expect(counterValue()).toHaveTextContent(/^13$/);
    });
  });
});
