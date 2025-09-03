import { useState } from "react";

import Button from "@/components/ui/button";
import Checkbox from "@/components/ui/checkbox";
import Typo from "@/components/ui/typo";

import "./styles.TermsModal.scss";

export default function TermsModal() {
  const [checkedState, setCheckedState] = useState({
    termsOfService: false,
    privacyPolicy: false,
    internationalTransfer: false,
    marketingConsent: false,
  });

  const allChecked = Object.values(checkedState).every(Boolean);
  const indeterminate =
    Object.values(checkedState).some(Boolean) && !allChecked;

  const handleAllChange = (checked: boolean) => {
    setCheckedState({
      termsOfService: checked,
      privacyPolicy: checked,
      internationalTransfer: checked,
      marketingConsent: checked,
    });
  };

  const handleItemChange = (
    name: keyof typeof checkedState,
    checked: boolean,
  ) => {
    setCheckedState((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <>
      <div className="agreement">
        <Typo.BodyLarge>약관동의</Typo.BodyLarge>
        <Typo.Body>
          파티즈에 오신것을 환영합니다.
          <br />
          서비스를 사용하기 위해 아래의 약관 동의가 필요합니다.
        </Typo.Body>
        <Checkbox
          label="약관 전체 동의"
          checked={allChecked}
          indeterminate={indeterminate}
          onCheckedChange={handleAllChange}
        />
        <div className="check-box">
          <div className="terms">
            <Checkbox
              label="이용약관 동의 (필수)"
              checked={checkedState.termsOfService}
              onCheckedChange={(checked) =>
                handleItemChange("termsOfService", checked)
              }
            />
            <Checkbox
              label="개인정보 수집 및 이용 동의 (필수)"
              checked={checkedState.privacyPolicy}
              onCheckedChange={(checked) =>
                handleItemChange("privacyPolicy", checked)
              }
            />
            <Checkbox
              label="개인정보 국외이전 동의 (필수)"
              checked={checkedState.internationalTransfer}
              onCheckedChange={(checked) =>
                handleItemChange("internationalTransfer", checked)
              }
            />
            <Checkbox
              label="광고성 정보 수신동의"
              checked={checkedState.marketingConsent}
              onCheckedChange={(checked) =>
                handleItemChange("marketingConsent", checked)
              }
            />
          </div>
        </div>
        <Button size="large" fullWidth>
          다음
        </Button>
      </div>
    </>
  );
}
