import { MainComponent, NavBar, StudentInfo, TopBar } from "@/components";

const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <NavBar />
      <main className="flex-1 overflow-y-scroll overflow-x-hidden">
        <TopBar />
        <StudentInfo />
        <MainComponent />
      </main>
    </div>
  );
};

export default Page;
