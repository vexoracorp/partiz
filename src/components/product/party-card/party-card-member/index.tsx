import PartyAvatar from "../../party-avatar";
import s from "./styles.module.scss";

interface Props {
  currentMembers: number;
  maxMembers: number;
  isParty: boolean;
}

export default function PartyCardMember({ currentMembers, maxMembers, isParty }: Props) {
    const renderPartyAvatars = () => {
    const avatars = [];
    
    // 현재 참여한 멤버들의 아바타
    for (let i = 0; i < currentMembers; i++) {
      avatars.push(
        <PartyAvatar
          key={`member-${i}`} 
          size="md" 
        />
      );
    }
    
    // 빈 자리들 (비활성화된 아바타)
    for (let i = currentMembers; i < maxMembers; i++) {
      avatars.push(
        <PartyAvatar 
          key={`empty-${i}`} 
          size="md" 
          disabled 
        />
      );
    }
    
    return avatars;
  };
  
  return (
    <div className={s.container}>
    {isParty && (
          <div className={s.member}>
          {renderPartyAvatars()}
        </div>
        )}
    </div>
  );
}