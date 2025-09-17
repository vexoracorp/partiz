import * as LucideIcons from "lucide-react";
import React from "react";

export function getDynamicIcon(icon: string) {
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons];

  if (!IconComponent) {
    console.error(`Icon "${icon}" not found in LucideIcons`);
    return null;
  }

  return IconComponent
    ? React.createElement(IconComponent as React.ComponentType)
    : null;
}
