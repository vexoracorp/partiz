import { useQuery } from "@tanstack/react-query";

import { getSubscriptions } from "@/api";
import type { Subscription } from "@/types/subscription";

export function useSubscriptions() {
  const { data, isLoading, error, refetch, isError } = useQuery<
    Subscription[],
    Error
  >({
    queryKey: ["subscription"],
    queryFn: () => getSubscriptions(),
  });

  return {
    data: data || [],
    isLoading,
    error,
    refetch,
    isError,
  };
}
