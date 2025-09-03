import s from "./styles.module.scss";
import PartyCardHead from "./party-card-head";
import PartyCardInfo from "./party-card-info";
import PartyCardButton from "./party-card-button";
import PartyCardMember from "./party-card-member";

interface Props {
  productImage: string;
  productName: string;
  productPrice: string;
  endDate: Date;
  membersLeft: string;
  currentMembers?: number;
  maxMembers?: number;
  isParty: boolean;
  isSubscribed?: boolean;
  onClick?: () => void;
}

export default function PartyCard({ 
  productImage, 
  productName, 
  productPrice, 
  endDate,
  membersLeft, 
  currentMembers = 3,
  maxMembers = 6,
  isParty = false,
  isSubscribed = false,
  onClick
}: Props) {

  return (
    <div className={s.container}>
      <PartyCardHead 
        productImage={productImage}
        productName={productName}
        productPrice={productPrice}
        endDate={endDate}
        isSubscribed={isSubscribed}
      />
      {isParty && (
      <PartyCardMember
        currentMembers={currentMembers}
        maxMembers={maxMembers}
        isParty={isParty}
      />
      )}
      <PartyCardInfo 
        endDate={endDate}
        membersLeft={membersLeft}
        isParty={isParty}
        isSubscribed={isSubscribed}
      />
      <PartyCardButton 
        isParty={isParty}
        isSubscribed={isSubscribed}
        onClick={onClick}
      />
    </div>
  )
}