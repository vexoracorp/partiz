import { useQuery } from "@tanstack/react-query";

import { getProduct } from "@/api";

export default function useProduct(id: string) {
  const {
    data: product,
    isLoading,
    error,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(id),
  });

  return {
    product: product || null,
    isLoading,
    error,
    refetch,
    isError,
  };
}
