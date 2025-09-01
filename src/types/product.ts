import type { Category } from "./category";

export interface Participant {
  id: string;
  name: string;
  joinedAt: Date;
}

export interface Plan {
  id: string;

  name: string;
  description: string;

  price: number;
  discountPrice: number;
  discountRate: number;

  participants: Participant[];
  maxParticipants: number;
  endDate: Date;

  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  serviceName: string;
  image: string;
  bannerImage: string;

  category: Category[];
  gallery: string[];

  popularProduct: boolean;
  mostUsedProduct: boolean;

  plan: Plan[];

  createdAt: Date;
  updatedAt: Date;

  question: {
    description: string;
    images: string[];
  };
}
