import { useQuery } from "@tanstack/react-query";

import { getSubscription } from "@/api";
import type { Subscription } from "@/types/subscription";

export function useSubscriptions() {
  const { data, isLoading, error, refetch, isError } = useQuery<
    Subscription[],
    Error
  >({
    queryKey: ["subscription"],
    queryFn: () => getSubscription(),
  });

  return {
    data: data || [],
    isLoading,
    error,
    refetch,
    isError,
  };
}
