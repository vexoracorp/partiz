import s from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const AuthLayout = ({ children, style, className }: Props) => {
  return (
    <div className={s.container}>
      <main className={`${s.authLayout} ${className}`} style={{ ...style }}>
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;
