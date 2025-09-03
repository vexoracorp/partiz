import { MockUserSubscriptions } from "@/mock/subscription";
import type { Subscription } from "@/types/subscription";

export default function getSubscriptions(): Subscription[] {
  return MockUserSubscriptions;
}
