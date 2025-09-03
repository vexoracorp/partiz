import type { Plan, Product } from "@/types/product";
import type { Subscription } from "@/types/subscription";

interface ShoppingCardProps {
  context: "shopping";
  product: Product;
  plan: Plan;
  onClick?: () => void;
}

interface SubscriptionCardProps {
  context: "subscription";
  subscription: Subscription;
  onClick?: () => void;
}

// Export Types
export interface BasePartyCardProductInfo {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface PartyCardMemberInfo {
  current: number;
  max: number;
  left: number;
}

export type CardVariant = "party" | "individual";

export type PartyCardProps = ShoppingCardProps | SubscriptionCardProps;
