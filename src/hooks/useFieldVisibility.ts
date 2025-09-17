import { useState } from "react";

export function useFieldVisibility() {
  const [visibleFields, setVisibleFields] = useState<Record<string, boolean>>(
    {},
  );

  const toggleFieldVisibility = (fieldName: string) => {
    setVisibleFields((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const getDisplayValue = (field: {
    secure?: boolean;
    value: string;
    name: string;
  }) => {
    if (field.secure && !visibleFields[field.name]) {
      return "•".repeat(field.value.length);
    }
    return field.value;
  };

  const isFieldVisible = (fieldName: string) => {
    return visibleFields[fieldName] || false;
  };

  return {
    visibleFields,
    toggleFieldVisibility,
    getDisplayValue,
    isFieldVisible,
  };
}
