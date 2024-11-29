import "./page-title.scss";

export interface IPageTitleProps {
  title: string;
}

const PageTitle: React.FC<IPageTitleProps> = ({ title }) => {
  return (
    <div className="page-title">
      <h2>{title}</h2>
    </div>
  );
};

export default PageTitle;
