import s from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  gap?: number;
}

const MainLayout = ({ children, gap }: Props) => {
  return (
    <div className={s.mainLayout} style={{ gap: gap ? `${gap}px` : undefined }}>
      {children}
    </div>
  );
};

export default MainLayout;
