import Image from "next/image";

import s from "./styles.module.scss";

export default function Index() {
  return (
    <div className={s.container}>
      <Image src={"logo.svg"} alt="Logo" width={32} height={32} />
    </div>
  );
}
