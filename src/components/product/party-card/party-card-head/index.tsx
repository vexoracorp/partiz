import s from "./styles.module.scss"

import { Typo } from '@/components/ui';
import { getRemainingDays } from '@/utils/date';

interface Props {
  productImage: string;
  productName: string;
  productPrice: string;
  endDate: Date;
  isSubscribed: boolean;
}

export default function PartyCardHead({ 
  productImage, 
  productName, 
  productPrice, 
  endDate, 
  isSubscribed 
}: Props) {
  const remainingDays = getRemainingDays(endDate);
  
  return (
    <div className={s.container}>
        <div className={s.product_id}>
          <img src={productImage} alt={productName} width={26} height={26}/>
          <Typo.BodyLarge>{productName}</Typo.BodyLarge>
          </div>
          <div className={s.product_info}>
          {isSubscribed ? (
            <Typo.BodyLarge>{remainingDays}일 남음</Typo.BodyLarge>
          ) : (
            <Typo.BodyLarge>{productPrice}원</Typo.BodyLarge>
          )}
        </div>
    </div>
  );
}
