import { useState } from "react";

import { Button, Input, Spacing } from "@/components/ui";

import s from "./styles.module.scss";

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim()) {
      alert("아이디 또는 이메일을 입력해주세요.");
      return;
    }

    if (!password.trim()) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    // 로그인 로직
    console.log("로그인 진행", { email, password });
  };

  return (
    <>
      <div className={s.container}>
        <img src="/partiz.svg" alt="logo" width="111" height="32" />
        <Spacing size={12} />
        <div className={s.input_container}>
          <Input
            placeholder="아이디 또는 이메일"
            size="large"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Spacing size={12} />
          <Input
            type="password"
            placeholder="비밀번호를 입력해주세요."
            size="large"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Spacing size={12} />
          <Button
            size="large"
            variant="primary"
            fullWidth
            onClick={handleLogin}
          >
            로그인
          </Button>
        </div>
        <div className={s.divider} />
        <Button
          size="large"
          variant="secondary"
          fullWidth
          leadingIcon={
            <img
              src="/google.svg"
              alt="google"
              style={{ width: "20px", height: "20px" }}
            />
          }
          onClick={() => console.log("google login")}
        >
          구글로 시작하기
        </Button>
        <Button
          size="large"
          variant="secondary"
          fullWidth
          className={s.kakao_button}
          leadingIcon={
            <img
              src="/kakao.svg"
              alt="kakao"
              style={{ width: "20px", height: "20px" }}
            />
          }
          onClick={() => console.log("kakao login")}
        >
          카카오톡으로 시작하기
        </Button>
        <div className={s.text_container}>
          <span className={s.text}>아직 계정이 없으신가요?</span>
          <a href="/auth/signup" className={s.signup_text}>
            회원가입
          </a>
        </div>
      </div>
    </>
  );
}
