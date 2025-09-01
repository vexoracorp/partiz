import React from "react";

import PartyAvatar from "../party-avatar";

interface Participant {
  /** 참여자 ID */
  id: string;
  /** 참여자 닉네임 */
  nickname: string;
  /** 참가일 */
  joinDate: string;
}

interface PartyData {
  /** 파티 ID */
  id: string;
  /** 파티 제목 */
  title: string;
  /** 가격 */
  price: string;
  /** 로고 이미지 URL */
  logoUrl?: string;
  /** 최대 참여자 수 */
  maxParticipants: number;
  /** 종료일 */
  endDate: string;
  /** 참여자 아바타 정보 */
  participants: Participant[];
}

interface PartyCardProps {
  /** 파티 카드 정보 */
  party: PartyData;
  /** 클릭 핸들러 */
  onClick?: () => void;
  /** 추가 클래스명 */
  className?: string;
}

import { Typo } from "@/components/ui";

import styles from "./styles.module.scss";

const PartyCard: React.FC<PartyCardProps> = ({ party, onClick, className }) => {
  const { title, price, logoUrl, participants, maxParticipants, endDate } =
    party;

  const remainingSpots = maxParticipants - participants.length;
  const isFull = remainingSpots <= 0;

  return (
    <div
      className={`${styles.partyCard} ${className || ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Party Info Section */}
      <div className={styles.partyInfo}>
        <div className={styles.partyInfoLeft}>
          {logoUrl && (
            <img className={styles.logo} src={logoUrl} alt={`${title} 로고`} />
          )}
          <Typo.BodyLarge>{title}</Typo.BodyLarge>
        </div>
        <Typo.BodyLarge>{price}</Typo.BodyLarge>
      </div>

      {/* Avatars Section */}
      <div className={styles.avatars}>
        {Array.from({ length: maxParticipants }).map((_, index) => (
          <PartyAvatar
            key={index}
            size="md"
            disabled={index >= participants.length}
          />
        ))}
      </div>

      {/* Footer Section */}
      <div className={styles.footer}>
        <Typo.Subtext>{endDate}까지(30일)</Typo.Subtext>
        <Typo.Subtext>
          {isFull ? "마감" : `${remainingSpots}자리 남음`}
        </Typo.Subtext>
      </div>
    </div>
  );
};

export default PartyCard;
