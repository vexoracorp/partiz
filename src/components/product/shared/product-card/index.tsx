import { ChevronRight } from "lucide-react";

import { HStack, Typo, VStack } from "@/components/ui";
import { getRemainingDays } from "@/utils/date";

import s from "./style.module.scss";

interface Props {
  id: string;
  name: string;
  image: string;
  endDate: Date;
  price: number;
}

export default function ProductCard({
  id,
  name,
  image,
  endDate,
  price,
}: Props) {
  return (
    <a href={`/product/${id}`} style={{ textDecoration: "none" }}>
      <HStack className={s.container}>
        <HStack gap={16}>
          <img src={image} alt={name} className={s.image} />
          <VStack>
            <Typo.BodyLarge>
              {price.toLocaleString()}원 ({getRemainingDays(endDate)}일)
            </Typo.BodyLarge>
            <Typo.Subtext className={s.endDate}>{name}</Typo.Subtext>
          </VStack>
        </HStack>
        <ChevronRight className={s.icon} />
      </HStack>
    </a>
  );
}
