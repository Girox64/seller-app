import { useQuery } from "react-query";

export default function useProducts({ productId } = {}) {
  const queryKey = productId ? ["products", { productId }] : ["products"];
  const productApiUrl = productId ? `products/${productId}` : "products";

  const queryResult = useQuery(queryKey, async () => {
    const response = await fetch(`http://localhost:3004/${productApiUrl}`);
    return await response.json();
  });

  const resource = productId
    ? { product: queryResult.data || [] }
    : { products: queryResult.data || [] };

  return { ...queryResult, ...resource };
}
