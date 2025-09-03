import PartyAvatar from "../../party-avatar";
import s from "./styles.module.scss";

interface Props {
  currentMembers: number;
  maxMembers: number;
  isParty: boolean;
}

export default function PartyCardMember({ currentMembers, maxMembers, isParty }: Props) {
    
  return (
    <div className={s.container}>
          <div className={s.member}>
          {Array.from({ length: maxMembers }, (_, i) => (
            <PartyAvatar
              key={i}
              size="md"
              disabled={i >= currentMembers}
            />
          ))}
        </div>
    </div>
  );
}