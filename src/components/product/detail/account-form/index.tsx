import { Button, VStack } from "@/components/ui";
import { getDynamicIcon } from "@/utils/lucide";

import AccountWidget from "./widget/account";
import type { AccountFormItem } from "./account-form.type";

interface AccountFormBuilderProps {
  form: AccountFormItem[];
}

export default function AccountFormBuilder({ form }: AccountFormBuilderProps) {
  return (
    <VStack style={{ width: "370px" }}>
      {form.map((item) => {
        switch (item.context) {
          case "button":
            return (
              <Button
                key={item.name}
                fullWidth
                size="large"
                leadingIcon={getDynamicIcon(item.icon)}
              >
                {item.label}
              </Button>
            );
            break;

          case "account":
            return <AccountWidget {...item} />;
          default:
            break;
        }
      })}
    </VStack>
  );
}
