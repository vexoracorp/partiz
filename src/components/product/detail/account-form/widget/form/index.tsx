import { Eye, EyeOff, MessageCircleQuestion } from "lucide-react";

import {
  Button,
  FlexAlign,
  FlexJustify,
  HStack,
  Input,
  Typo,
  VStack,
} from "@/components/ui";
import { useFieldVisibility } from "@/hooks/useFieldVisibility";
import { getDynamicIcon } from "@/utils/lucide";

import type { FormProps } from "../../account-form.type";

import s from "./style.module.scss";

export default function FormWidget(props: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <img
          src={props.product.image}
          alt={props.product.name}
          className={s.image}
        />
        <Typo.BodyLarge>{props.title}</Typo.BodyLarge>
      </div>
      <Typo.Body className={s.description}>{props.description}</Typo.Body>
      <form className={s.fields} onSubmit={handleSubmit}>
        {props.field.map((field) => (
          <Input
            key={field.name}
            size="large"
            placeholder={field.placeholder}
            fullWidth
          />
        ))}
        <Button size="large" fullWidth>
          제출하기
        </Button>
      </form>
      <div>
        <a className={s.troubleSupportUrl} href={props.troubleSupportUrl}>
          <MessageCircleQuestion />{" "}
          <Typo.Subtext>제출하면 어떻게 되는건가요?</Typo.Subtext>
        </a>
      </div>
    </div>
  );
}
