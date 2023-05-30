import { StudentInfoLeft } from "./StudentInfoLeft";
import { StudentInfoTop } from "./StudentInfoTop";

export const StudentInfo = () => {
  return (
    <section
      className="w-sc h-80 flex flex-col bg-cover px-5 pb-"
      style={{ backgroundImage: "url(/lee_cover.jpg)" }}>
      <StudentInfoTop />
      <div className="flex flex-row flex-1 items-center">
        <StudentInfoLeft />
      </div>
    </section>
  );
};
