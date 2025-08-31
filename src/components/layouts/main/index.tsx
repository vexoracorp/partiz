import s from "./style.module.scss";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return <div className={s.mainLayout}>{children}</div>;
};

export default MainLayout;