import type { Product } from "@/types/product";

export interface ButtonProps {
  context: "button";
  id: string;
  label: string;
  name: string;
  icon: string;
  actionTypeId: string;
}

export interface AccountProps {
  context: "account";
  id: string;
  product: Product;
  field: { name: string; value: string; icon: string; secure: boolean }[];
  troubleSupportUrl: string;
}

export interface FormProps {
  context: "form";
  id: string;
  product: Product;
  title: string;
  description: string;
  field: { name: string; placeholder: string }[];
  troubleSupportUrl: string;
  actionUrl: string;
}

export type AccountFormItem = ButtonProps | AccountProps | FormProps;
