import { VStack } from "@/components/ui";

import AccountWidget from "./widget/account";
import ButtonWidget from "./widget/button";
import FormWidget from "./widget/form";
import type { AccountFormItem } from "./account-form.type";

interface AccountFormBuilderProps {
  form: AccountFormItem[];
}

export default function AccountFormBuilder({ form }: AccountFormBuilderProps) {
  return (
    <VStack style={{ width: "370px" }} gap={14}>
      {form.map((item) => {
        switch (item.context) {
          case "button":
            return (
              <ButtonWidget key={`${item.context}-${item.id}`} {...item} />
            );

          case "account":
            return (
              <AccountWidget key={`${item.context}-${item.id}`} {...item} />
            );

          case "form":
            return <FormWidget key={`${item.context}-${item.id}`} {...item} />;

          default:
            break;
        }
      })}
    </VStack>
  );
}
