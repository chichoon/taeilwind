import { AgendaLayout } from "./AgendaLayout";
import { ElementLayout } from "./ElementLayout";

export const MainComponent = () => {
  const agendaButtonList = [
    { title: "ALL EVENTS" },
    { title: "EVENT'S MARKS" },
    { title: "FILTERS", isDropdown: true },
  ];

  const evaluationButtonList = [
    { title: "HIDE", isDropdown: true },
    { title: "FEEDBACK LOGS" },
    { title: "MANAGE SLOTS" },
  ];
  return (
    <div className="flex-1 grid grid-cols-2 p-5 gap-5 bg-background">
      <ElementLayout title="AGENDA" sideButtonList={agendaButtonList}>
        <>
          <AgendaLayout
            date={12}
            month="June"
            eventName="Wallet Market (JUNE 2ND🌱)"
            time="15:00"
            duration="about an hour"
            place="새롬관 1층 오픈라운지"
            isRegistered
          />
          <AgendaLayout
            date={12}
            month="June"
            eventName="Wallet Market (JUNE 2ND🌱)"
            time="15:00"
            duration="about an hour"
            place="새롬관 1층 오픈라운지"
          />
        </>
      </ElementLayout>
      <ElementLayout title="EVALUATIONS" sideButtonList={evaluationButtonList}>
        <></>
      </ElementLayout>
      <ElementLayout title="LOGTIME">
        <></>
      </ElementLayout>
      <ElementLayout title="EXPERTISES">
        <></>
      </ElementLayout>
    </div>
  );
};
