import { useQuery } from "@tanstack/react-query";

import { getProducts } from "@/api";

export default function useProducts() {
  const {
    data: products,
    isLoading,
    error,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  return {
    products: products || [],
    isLoading,
    error,
    refetch,
    isError,
  };
}
