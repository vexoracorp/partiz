import { Eye, EyeOff, MessageCircleQuestion } from "lucide-react";

import { FlexAlign, FlexJustify, HStack, Typo, VStack } from "@/components/ui";
import { useFieldVisibility } from "@/hooks/useFieldVisibility";
import { getDynamicIcon } from "@/utils/lucide";

import type { AccountProps } from "../../account-form.type";

import s from "./style.module.scss";

export default function AccountWidget(props: AccountProps) {
  const { toggleFieldVisibility, getDisplayValue, isFieldVisible } =
    useFieldVisibility();

  return (
    <div className={s.container}>
      <div className={s.header}>
        <img
          src={props.product.image}
          alt={props.product.name}
          className={s.image}
        />
        <Typo.BodyLarge>{props.product.name} 계정 정보</Typo.BodyLarge>
      </div>
      <div className={s.fields}>
        {props.field.map((field) => (
          <HStack
            key={field.name}
            className={s.field}
            fullWidth
            justify={FlexJustify.Between}
          >
            <HStack fullWidth gap={12} align={FlexAlign.Center}>
              {getDynamicIcon(field.icon)}
              <VStack>
                <Typo.Caption className={s.name}>{field.name}</Typo.Caption>
                <Typo.Body
                  className={
                    field.secure && !isFieldVisible(field.name)
                      ? s.hiddenValue
                      : ""
                  }
                >
                  {getDisplayValue(field)}
                </Typo.Body>
              </VStack>
            </HStack>
            {field.secure && (
              <button
                type="button"
                className={s.eyeButton}
                onClick={() => toggleFieldVisibility(field.name)}
                aria-label={
                  isFieldVisible(field.name) ? "값 숨기기" : "값 보기"
                }
              >
                {isFieldVisible(field.name) ? (
                  <EyeOff className={s.eye} />
                ) : (
                  <Eye className={s.eye} />
                )}
              </button>
            )}
          </HStack>
        ))}
      </div>
      <div>
        <a className={s.troubleSupportUrl} href={props.troubleSupportUrl}>
          <MessageCircleQuestion />{" "}
          <Typo.Subtext>로그인에 문제가 발생하나요?</Typo.Subtext>
        </a>
      </div>
    </div>
  );
}
