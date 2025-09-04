import { MockUserSubscriptions } from "@/mock/subscription";
import type { Subscription } from "@/types/subscription";

export default function getSubscription(id: string): Subscription {
  return MockUserSubscriptions.find((sub) => sub.id === id)!;
}
