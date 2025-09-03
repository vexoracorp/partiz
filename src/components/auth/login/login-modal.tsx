import { Button, Spacing, Typo } from "@/components/ui";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import s from "./styles.module.scss";
import { useState } from "react";

export default function LoginModal() {
 const [isKorea, setIsKorea] = useState(true);//한유찬이 로그인 누를때마다 알잘딱 나라 보내준다고함.
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
          className={s.google_button}
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
        {isKorea && (<><Button
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
        <Button
          size="large"
          variant="secondary"
          fullWidth
          className={s.naver_button}
          leadingIcon={
            <img
              src="/naver.svg"
              alt="naver"
              style={{ width: "20px", height: "20px" }}
            />
          }
          onClick={() => console.log("naver login")}
        >
          네이버로 시작하기
        </Button>
        </>)}
        
        </div>
        <Spacing size={8} />
        <Link to="/auth/login/number" className={s.number_container}>
            <Typo.BodyLarge>전화번호로 시작하기</Typo.BodyLarge> <ChevronRight size={21} />
        </Link>
      </>
  );
}
