import { StudentInfoLeft } from "./StudentInfoLeft";
import { StudentInfoRight } from "./StudentInfoRight";
import { StudentInfoTop } from "./StudentInfoTop";

export const StudentInfo = () => {
  return (
    <section
      className="w-sc h-80 flex flex-col bg-cover px-5 pb-"
      style={{ backgroundImage: "url(/lee_cover.jpg)" }}>
      <StudentInfoTop />
      <div className="flex flex-row flex-1 py-2.5 gap-3 items-center">
        <StudentInfoLeft />
        <StudentInfoRight />
      </div>
    </section>
  );
};
