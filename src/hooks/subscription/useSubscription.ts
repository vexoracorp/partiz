import { useQuery } from "@tanstack/react-query";

import { getSubscription } from "@/api";
import type { Subscription } from "@/types/subscription";

export function useSubscription(id: string) {
  const { data, isLoading, error, refetch, isError } = useQuery<
    Subscription,
    Error
  >({
    queryKey: ["subscription", id],
    queryFn: () => getSubscription(id),
  });

  return {
    data: data || null,
    isLoading,
    error,
    refetch,
    isError,
  };
}
