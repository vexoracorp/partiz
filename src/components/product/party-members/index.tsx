import { PartyAvatar } from "@/components/product";
import { HStack, Typo, VStack } from "@/components/ui";

import styles from "./styles.module.scss";

interface PartyMember {
  id: string;
  name: string;
  joinDate: string;
  isActive: boolean;
}

interface PartyMembersProps {
  members: PartyMember[];
}

export default function PartyMembers({ members }: PartyMembersProps) {
  return (
    <VStack className={styles.container}>
      <Typo.Body className={styles.title}>파티 참여자</Typo.Body>
      <HStack className={styles.list}>
        {members.map((member) => (
          <div key={member.id} className={styles.memberItem}>
            <PartyAvatar size="lg" disabled={!member.isActive} />
            <div className={styles.memberInfo}>
              <Typo.Body>{member.name}</Typo.Body>
              <Typo.Caption className={styles.memberInfoCaption}>
                {member.isActive ? member.joinDate : "모집 대기중"}
              </Typo.Caption>
            </div>
          </div>
        ))}
      </HStack>
    </VStack>
  );
}
