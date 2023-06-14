import Header from ".";
import { render, screen } from "../../../test-utils";

describe("Header", () => {
  it("renders a clickable logo", () => {
    const title = "TEST TITLE";

    render(<Header title={title} />);

    expect(
      screen.getByRole("heading", { name: title, level: 1 })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: title })).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("renders welcome caption", () => {
    const caption = "Welcome";

    render(<Header caption={caption} />);

    expect(screen.getByText(caption)).toBeInTheDocument();
  });
});
