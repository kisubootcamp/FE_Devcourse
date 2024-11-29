interface IHeaderProps {
  onRoleBackClick: () => void;
  logoTitle: string;
}

interface IDashboardCardProps {
  index: number;
  value: string;
  onDeleteBtnClick: (number) => void;
}

interface IDashboardProps {
  pictureArr: string[];
  onDeleteBtnClick: (number) => void;
}
