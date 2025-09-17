import { Button } from "@/components/ui";
import { getDynamicIcon } from "@/utils/lucide";

import type { ButtonProps } from "../../account-form.type";

import { handleButtonAction } from "./action";

export default function ButtonWidget(props: ButtonProps) {
  const { actionTypeId, name, icon, label } = props;

  console.log("actionTypeId", actionTypeId);

  return (
    <Button
      key={name}
      fullWidth
      size="large"
      leadingIcon={getDynamicIcon(icon)}
      onClick={() => handleButtonAction(actionTypeId)}
    >
      {label}
    </Button>
  );
}
