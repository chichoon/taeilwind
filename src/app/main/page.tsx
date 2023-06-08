import { NavBar, StudentInfo, TopBar } from "@/components";

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
