import { ElementLayout } from "./ElementLayout";

export const MainComponent = () => {
  const btnList = [
    { title: "ALL EVENTS" },
    { title: "EVENT'S MARKS" },
    { title: "FILTERS", isDropdown: true },
  ];
  return (
    <div className="flex-1 grid grid-cols-2 p-5 gap-5 bg-background">
      <ElementLayout title="AGENDA" sideButtonList={btnList}>
        <span>ㅎㅇ</span>
      </ElementLayout>
      <ElementLayout title="EVALUATIONS">
        <span>ㅁㄴㅇ</span>
      </ElementLayout>
      <ElementLayout title="LOGTIME">
        <span>ㅁㄴㅇ</span>
      </ElementLayout>
      <ElementLayout title="EXPERTISES">
        <span>ㅁㄴㅇ</span>
      </ElementLayout>
    </div>
  );
};
