import ProductRoute from ".";
import { product as productFixtures } from "../../../fixtures";
import { render, screen } from "../../../test-utils";

const productId = 123;
const product = productFixtures(productId);

describe("ProductRoute", () => {
  it("renders a progress while loading data", async () => {
    render(<ProductRoute />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders a back button, a title and an image when data loaded", async () => {
    render(<ProductRoute />, {
      path: "/products/:productId",
      initialEntries: [`/products/${productId}`],
    });

    // TODO
    await screen.findByRole("heading", {
      level: 4,
      name: product.name,
    });

    expect(screen.getByRole("img", { name: product.name })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "back" })).toHaveAttribute(
      "href",
      "/products"
    );
  });
});
