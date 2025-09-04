import * as LucideIcons from "lucide-react";
import React from "react";

import { Button, VStack } from "@/components/ui";

import type { AccountFormItem } from "./account-form.type";

interface AccountFormBuilderProps {
  form: AccountFormItem[];
}

function getIcon(icon: string) {
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons];

  if (!IconComponent) {
    console.error(`Icon "${icon}" not found in LucideIcons`);
    return null;
  }

  return IconComponent
    ? React.createElement(IconComponent as React.ComponentType)
    : null;
}

export default function AccountFormBuilder({ form }: AccountFormBuilderProps) {
  return (
    <VStack>
      {form.map((item) => {
        switch (item.context) {
          case "button":
            return (
              <Button
                key={item.name}
                fullWidth
                size="large"
                leadingIcon={getIcon(item.icon)}
              >
                {item.label}
              </Button>
            );
            break;

          default:
            break;
        }
      })}
    </VStack>
  );
}
