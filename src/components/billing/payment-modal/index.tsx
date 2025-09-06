import { PartyPopper, MessageCircleQuestion, X, TicketPercent } from "lucide-react";
import { useState } from "react";

import {
  Button,
  FlexAlign,
  FlexJustify,
  HStack,
  Input,
  Checkbox,
  Typo,
  VStack,
} from "@/components/ui";
import type { Plan, Product } from "@/types/product";
import { validatePromotionCode, type PromotionCode } from "@/mock/promotion";

import styles from "./styles.module.scss";

interface PaymentModalProps {
  product: Product;
  plan: Plan;
  onClose?: () => void;
}

export default function PaymentModal({
  product,
  plan,
  onClose,
}: PaymentModalProps) {
  const [pointsToUse, setPointsToUse] = useState(0);

  const [promotionCode, setPromotionCode] = useState("");
  const [appliedPromotion, setAppliedPromotion] = useState<PromotionCode | null>(null);

  // 계산 관련 상수들
  const userPoints = 500; // 보유 포인트
  const originalPrice = 32000; // 원가
  const participationDays = 31; // 참여일수
  const savingsAmount =
    originalPrice - ((plan?.price || 0) * participationDays) / 30; // 절약 금액 (대략 계산)
  
  const promotionDiscount = appliedPromotion?.discount || 0;
  const finalAmount = Math.max(0, (plan?.price || 0) - pointsToUse - promotionDiscount); // 최종 결제 금액

  const handleUseAllPoints = () => {
    setPointsToUse(Math.min(userPoints, plan?.price || 0));
  };

  const handleApplyPromotion = () => {
    const validPromotion = validatePromotionCode(promotionCode);
    
    if (validPromotion) {
      setAppliedPromotion(validPromotion);
      setPromotionCode("");
    } else {
      alert("유효하지 않은 프로모션 코드입니다.");
    }
  };

  const handleRemovePromotion = () => {
    setAppliedPromotion(null);
  };

  const handlePayment = () => {
    alert("파티 참가가 완료되었습니다!");
    onClose?.();
  };

  return (
    <VStack gap={24}>
      {/* 제품 헤더 */}
      <HStack gap={20} align={FlexAlign.Center}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
        <VStack gap={4}>
          <Typo.BodyLarge className={styles.productName}>
            {product.name}
          </Typo.BodyLarge>
          <Typo.Body className={styles.productSubtitle}>{plan.name}</Typo.Body>
        </VStack>
      </HStack>

      {/* 포인트 사용 섹션 */}
      <VStack gap={10} fullWidth>
        <HStack justify={FlexJustify.Between} fullWidth>
          <Typo.Body className={styles.sectionTitle}>포인트 사용</Typo.Body>
          <HStack gap={6}>
            <Typo.Body className={styles.pointsLabel}>보유 포인트</Typo.Body>
            <Typo.Body className={styles.pointsValue}>
              {userPoints.toLocaleString()}P
            </Typo.Body>
          </HStack>
        </HStack>

        <HStack gap={10} fullWidth>
          <Input
            placeholder="0P"
            value={
              isFocused
                ? pointsToUse > 0
                  ? pointsToUse.toString()
                  : ""
                : pointsToUse > 0
                ? `${pointsToUse}P`
                : ""
            }
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              const numValue = parseInt(value) || 0;
              setPointsToUse(Math.min(numValue, userPoints, plan?.price || 0));
            }}
            size="medium"
            fullWidth
          />
          <Button variant="primary" size="medium" onClick={handleUseAllPoints}>
            전액 사용
          </Button>
        </HStack>
      </VStack>
      {/* 쿠폰 입력 섹션 */}
      <VStack gap={10} fullWidth>
        <Typo.Body className={styles.sectionTitle}>프로모션 코드</Typo.Body>

        {appliedPromotion ? (
          <VStack fullWidth className={styles.appliedPromotionContainer}>
            <HStack justify={FlexJustify.Between} align={FlexAlign.Center} fullWidth>
              <HStack gap={8} align={FlexAlign.Center} >
                <TicketPercent size={19} />
                <Typo>
                  {appliedPromotion.code}
                </Typo>
              </HStack>
              <VStack align={FlexAlign.End}>
                <HStack gap={6} align={FlexAlign.Center}>
                <Typo className={styles.promotionDiscount}>{appliedPromotion.discount.toLocaleString()}원 할인</Typo>
                <X size={19} onClick={handleRemovePromotion} color="#7D7D7D" />
                </HStack> 
              </VStack>
            </HStack>
          </VStack>
        ) : (
          <HStack gap={10} fullWidth>
            <Input
              placeholder="코드를 입력하세요"
              value={promotionCode}
              onChange={(e) => setPromotionCode(e.target.value)}
              size="medium"
              fullWidth
            />
            <Button variant="primary" size="medium" onClick={handleApplyPromotion}>
              적용
            </Button>
          </HStack>
        )}
      </VStack>
      {/* 구분선 */}
      <div className={styles.divider} />

      {/* 계산 요약 */}
      <VStack gap={20} fullWidth>

        <HStack fullWidth gap={8} align={FlexAlign.Center}>
          <Checkbox
            label="자동결제 활성화"
            size="lg"
          />
          <MessageCircleQuestion className={styles.questionIcon} size={16} color="#7D7D7D"/>
        </HStack>
        <HStack justify={FlexJustify.Between} fullWidth>
          <Typo.BodyLarge className={styles.summaryLabel}>
            참여일수
          </Typo.BodyLarge>
          <Typo.BodyLarge className={styles.summaryValue}>
            {participationDays}일
          </Typo.BodyLarge>
        </HStack>

        <VStack gap={14} fullWidth>
          <HStack justify={FlexJustify.Between} fullWidth>
            <Typo.BodyLarge className={styles.summaryLabel}>
              원가
            </Typo.BodyLarge>
            <Typo.BodyLarge
              className={`${styles.summaryValue} ${styles.originalPrice}`}
            >
              {originalPrice.toLocaleString()}원
            </Typo.BodyLarge>
          </HStack>

          <HStack justify={FlexJustify.Between} fullWidth>
            <Typo.BodyLarge className={styles.summaryLabel}>
              총 결제 금액
            </Typo.BodyLarge>
            <VStack align={FlexAlign.End} gap={0}>
              <Typo.Display className={styles.finalAmount}>
                {finalAmount.toLocaleString()}원
              </Typo.Display>
              <Typo.Caption className={styles.vatNote}>(VAT 포함)</Typo.Caption>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
      <VStack gap={10} fullWidth>
        {/* 절약 금액 배너 */}
        <div className={styles.savingsBanner}>
          <PartyPopper className={styles.partyIcon} />
          <Typo.Body className={styles.savingsText}>
            파티즈로 {Math.round(savingsAmount).toLocaleString()}원 아꼈어요
          </Typo.Body>
        </div>
        {/* 결제하기 버튼 */}
        <Button
          variant="primary"
          size="large"
          fullWidth
          onClick={handlePayment}
        >
          결제하기
        </Button>
      </VStack>
    </VStack>
  );
}
