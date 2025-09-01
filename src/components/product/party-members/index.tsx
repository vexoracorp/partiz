import { PartyAvatar } from "@/components/product";
import { HStack, Typo, VStack } from "@/components/ui";
import type { Participant, Plan } from "@/types/product";

import styles from "./styles.module.scss";

interface PartyMembersProps {
  plan: Plan;
}

export default function PartyMembers({ plan }: PartyMembersProps) {
  const renderMember = (
    participant: Participant | undefined,
    index: number,
  ) => (
    <div
      key={participant?.id || `empty_${index}`}
      className={styles.memberItem}
    >
      <PartyAvatar size="lg" disabled={!participant} />
      <div className={styles.memberInfo}>
        <Typo.Body>{participant?.name || ""}</Typo.Body>
        <Typo.Caption className={styles.memberInfoCaption}>
          {participant
            ? `${participant.joinedAt.toLocaleDateString("ko-KR").replace(/\. /g, ".")} 참여`
            : "모집 대기중"}
        </Typo.Caption>
      </div>
    </div>
  );

  return (
    <VStack className={styles.container}>
      <Typo.Body className={styles.title}>파티 참여자</Typo.Body>
      <HStack className={styles.list}>
        {Array.from({ length: plan.maxParticipants }, (_, index) =>
          renderMember(plan.participants[index], index),
        )}
      </HStack>
    </VStack>
  );
}
