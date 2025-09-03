import { useQuery } from "@tanstack/react-query";

import { getProductParty } from "@/api";

export default function useProductParty(id: string, partyId: string) {
  const {
    data: product,
    isLoading,
    error,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["product", id, partyId],
    queryFn: () => getProductParty(id, partyId),
  });

  return {
    data: product,
    isLoading,
    error,
    refetch,
    isError,
  };
}
