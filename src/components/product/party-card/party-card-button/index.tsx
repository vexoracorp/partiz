import { Button } from "@/components/ui";

interface Props {
  isParty: boolean;
  isSubscribed: boolean;
  onClick?: () => void;
}

export default function PartyCardButton({ isParty, isSubscribed, onClick }: Props) {
  if (isSubscribed) {
    return (
      <Button size="medium" variant="tertiary" fullWidth onClick={onClick}>구독관리</Button>
    );
  }
  
  return (
    <Button size="medium" variant="primary" fullWidth onClick={onClick}>
      {isParty ? "파티 참가하기" : "구독하기"}
    </Button>
  );
}