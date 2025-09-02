import { Button, Checkbox, Input, Spacing } from "@/components/ui";
import s from "./styles.module.scss";
import { useState } from "react";

export default function SignupModal() {
    const [isTermsAgreed, setIsTermsAgreed] = useState(false);
    const [isNewsletterAgreed, setIsNewsletterAgreed] = useState(false);

    const handleSignup = () => {
        if (!isTermsAgreed) {
            alert("이용약관 동의는 필수입니다.");
            return;
        }
        
        // 회원가입 로직
        console.log("회원가입 진행");
    };

    return <>
        <img src="/partiz.svg" alt="logo" width="111" height="32" />
        <Spacing size={12} />
        <div className={s.container}>
            <Input placeholder="이메일" label="이메일" size="large" fullWidth required />
            <Input placeholder="아이디" label="아이디" size="large" fullWidth required />
            <Input placeholder="비밀번호" label="비밀번호" size="large" fullWidth required />
            <Input placeholder="비밀번호 확인" label="비밀번호 확인" size="large" fullWidth required />
            <div className={s.checkbox_container}>
                <Checkbox 
                    className={s.checkbox_text}
                    checked={isTermsAgreed}
                    onCheckedChange={setIsTermsAgreed}
                    label={
                        <span>
                            눌러서&nbsp;
                            <a 
                                href="/terms" 
                                className={s.termsLink}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log("이용약관 페이지로 이동");
                                }}
                            >
                                이용약관
                            </a>
                            &nbsp;동의하기
                        </span>
                    } 
                    size="lg" 
                />
                <Checkbox 
                    className={s.checkbox_text} 
                    checked={isNewsletterAgreed}
                    onCheckedChange={setIsNewsletterAgreed}
                    label="파티즈의 각종 소식을 받겠습니다" 
                    size="lg" 
                />
            </div>
            <Button 
                size="large" 
                variant="primary" 
                fullWidth 
                onClick={handleSignup}
            >
                회원가입
            </Button>
        </div>
    </>
}
