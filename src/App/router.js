import { createBrowserRouter } from "react-router-dom";

import { ProductRoute } from "../ds/molecules";
import { ErrorPage, HomePage, OrdersPage, ProductsPage } from "../ds/pages";
import { Layout } from "../ds/templates";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
        children: [
          {
            path: ":productId",
            element: <ProductRoute />,
          },
        ],
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
    ],
  },
]);
