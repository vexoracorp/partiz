import { Button, Typo } from "@/components/ui";
import { PartyAvatar } from "@/components/product";
import s from "./styles.module.scss";

interface Props {
  productImage: string;
  productName: string;
  productPrice: string;
  daysLeft: string;
  membersLeft: string;
  currentMembers?: number; // 현재 참여한 멤버 수
  maxMembers?: number; // 최대 멤버 수
  isParty: boolean;
}

export default function PartyCard({ 
  productImage, 
  productName, 
  productPrice, 
  daysLeft, 
  membersLeft, 
  currentMembers = 3,
  maxMembers = 6,
  isParty = false
}: Props) {
  
  // 파티 아바타들을 렌더링하는 함수
  const renderPartyAvatars = () => {
    const avatars = [];
    
    // 현재 참여한 멤버들의 아바타
    for (let i = 0; i < currentMembers; i++) {
      avatars.push(
        <PartyAvatar 
          key={`member-${i}`} 
          size="sm" 
        />
      );
    }
    
    // 빈 자리들 (비활성화된 아바타)
    for (let i = currentMembers; i < maxMembers; i++) {
      avatars.push(
        <PartyAvatar 
          key={`empty-${i}`} 
          size="sm" 
          disabled 
        />
      );
    }
    
    return avatars;
  };

  return (
    <div className={s.container}>
      <div className={s.header}></div>
        <div className={s.product_id}>
          <img src={productImage} alt={productName} width={26} height={26}/>
          <Typo.BodyLarge>{productName}</Typo.BodyLarge>
          <Typo.BodyLarge>{productPrice}원</Typo.BodyLarge>
        </div>
        {isParty && (
          <div className={s.member}>
          {renderPartyAvatars()}
        </div>
        )}
        <div className={s.subscription}>
          <Typo.Subtext>{daysLeft}</Typo.Subtext>
          {isParty ? (
            <Typo.Subtext>{membersLeft}자리 남음</Typo.Subtext>
          ) : (
            <Typo.Subtext>{membersLeft}명 참여중</Typo.Subtext>
          )}
        </div>
        <Button size="large" variant="primary" fullWidth>파티 참여하기</Button>
    </div>
  )
}