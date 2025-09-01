import React from "react";

import styles from "./styles.module.scss";

interface PartyAvatarProps {
  /** 아바타 크기 */
  size?: "sm" | "md" | "lg";
  /** 추가 클래스명 */
  className?: string;

  disabled?: boolean;
}

const PartyAvatar: React.FC<PartyAvatarProps> = ({
  size = "md",
  className,
  disabled,
}) => {
  const sizeClass = styles[`avatar--${size}`];

  return (
    <div
      className={`${styles.avatar} ${sizeClass} ${className || ""}`}
      data-disabled={disabled}
    >
      <div className={styles.avatarInner}>
        <div className={styles.avatarCircle}>
          <div className={styles.avatarPupil} />
        </div>
        <div className={styles.avatarCircle}>
          <div className={styles.avatarPupil} />
        </div>
      </div>
    </div>
  );
};

export default PartyAvatar;
