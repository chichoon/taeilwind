import { NavBar } from "@/components";
import { StudentInfo } from "@/components/StudentInfo";
import { TopBar } from "@/components/TopBar.tsx";

const Page = () => {
  return (
    <main className="w-screen h-screen flex flex-row">
      <NavBar />
      <div className="flex-1">
        <TopBar />
        <StudentInfo />
      </div>
    </main>
  );
};

export default Page;
