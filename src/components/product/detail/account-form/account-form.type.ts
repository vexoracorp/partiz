import type { Product } from "@/types/product";

interface ButtonProps {
  context: "button";
  label: string;
  name: string;
  icon: string;
  actionTypeId: string;
}

export interface AccountProps {
  context: "account";
  product: Product;
  field: { name: string; value: string; icon: string; secure: boolean }[];
  troubleSupportUrl: string;
}

export interface FormProps {
  context: "form";
  product: Product;
  title: string;
  description: string;
  field: { name: string; placeholder: string }[];
  troubleSupportUrl: string;
  actionUrl: string;
}

export type AccountFormItem = ButtonProps | AccountProps | FormProps;
