import React from "react";

import { Typo } from "@/components/ui";
import type { Plan } from "@/types/product";
import { getPartyEndDateText } from "@/utils/date";

import PartyAvatar from "../party-avatar";

import styles from "./styles.module.scss";

interface PartyCardProps {
  party: Plan;
  productImage: string;
  onClick?: () => void;
  className?: string;
}

const PartyCard: React.FC<PartyCardProps> = ({
  party,
  productImage,
  onClick,
  className,
}) => {
  const { name, price, participants, maxParticipants, endDate } = party;

  const remainingSpots = maxParticipants - participants.length;
  const isFull = remainingSpots <= 0;

  return (
    <div
      className={`${styles.partyCard} ${className || ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className={styles.partyInfo}>
        <div className={styles.partyInfoLeft}>
          {productImage && (
            <img
              className={styles.logo}
              src={productImage}
              alt={`${name} 로고`}
            />
          )}
          <Typo.BodyLarge>{name}</Typo.BodyLarge>
        </div>
        <Typo.BodyLarge>{price.toLocaleString()}원</Typo.BodyLarge>
      </div>

      <div className={styles.avatars}>
        {Array.from({ length: maxParticipants }).map((_, index) => (
          <PartyAvatar
            key={index}
            size="md"
            disabled={index >= participants.length}
          />
        ))}
      </div>

      <div className={styles.footer}>
        <Typo.Subtext>{getPartyEndDateText(endDate)}</Typo.Subtext>
        <Typo.Subtext>
          {isFull ? "마감" : `${remainingSpots}자리 남음`}
        </Typo.Subtext>
      </div>
    </div>
  );
};

export default PartyCard;
