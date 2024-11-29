import DashboardCard from "./DashboardCard";

export default function Dashboard({
  pictureArr,
  onDeleteBtnClick,
}: IDashboardProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {pictureArr.map((value, index) => (
        <DashboardCard
          key={index}
          value={value}
          index={index}
          onDeleteBtnClick={onDeleteBtnClick}
        />
      ))}
    </div>
  );
}
