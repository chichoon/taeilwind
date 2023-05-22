import { FtIcon } from "@/assets/svgs";

export const NavBar = () => {
  return (
    <nav className="flex-col justify-center items-center w-20 h-screen bg-slate-800">
      <FtIcon className="fill-white w-14 h-14 p-0 m-0" />
      <button className="w-20 h-20 text-white">jiychoi</button>
    </nav>
  );
};
