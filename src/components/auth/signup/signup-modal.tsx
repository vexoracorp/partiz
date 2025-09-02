import { useState } from "react";

import { Button, Checkbox, Input, Spacing } from "@/components/ui";

import s from "./styles.module.scss";

export default function SignupModal() {
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [isNewsletterAgreed, setIsNewsletterAgreed] = useState(false);

  const handleSignup = () => {
    if (!email.trim()) {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (!userId.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }

    if (!password.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    if (!passwordConfirm.trim()) {
      alert("비밀번호 확인을 입력해주세요.");
      return;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!isTermsAgreed) {
      alert("이용약관 동의는 필수입니다.");
      return;
    }

    // 회원가입 로직
    console.log("회원가입 진행", { email, userId, password });
  };

  return (
    <>
      <img src="/partiz.svg" alt="logo" width="111" height="32" />
      <Spacing size={12} />
      <div className={s.container}>
        <Input
          placeholder="이메일"
          label="이메일"
          size="large"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="아이디"
          label="아이디"
          size="large"
          fullWidth
          required
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          label="비밀번호"
          size="large"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          label="비밀번호 확인"
          size="large"
          fullWidth
          required
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
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
        <Button size="large" variant="primary" fullWidth onClick={handleSignup}>
          회원가입
        </Button>
      </div>
    </>
  );
}
