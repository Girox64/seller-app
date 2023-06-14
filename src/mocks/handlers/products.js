import { rest } from "msw";
import { product } from "../../fixtures";

const api = (route) => `http://localhost:3004${route}`;

export default [
  rest.get(api("/products/:productId"), (req, res, ctx) => {
    const { productId } = req.params;
    return res(ctx.status(200), ctx.json(product(productId)));
  }),
];
