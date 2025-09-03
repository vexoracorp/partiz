import { Button, Spacing } from "@/components/ui";

import s from "./styles.module.scss";

export default function LoginModal() {

  return (
    <>
      <div className={s.container}>
        <img src="/partiz.svg" alt="logo" width="111" height="32" />
        <Spacing size={12} />
        <div className={s.login_container}>
        </div>
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
        </div>
      </>
  );
}
