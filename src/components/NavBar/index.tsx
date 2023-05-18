import { FtIcon } from "@/assets/svgs";

export const NavBar = () => {
  return (
    <nav className="flex-col justify-center items-center w-20 h-screen fixed top-0 left-0 bg-slate-800">
      <FtIcon className="fill-white w-16 h-16 p-0 m-0" />
      <button className="w-20 h-20 text-white">jiychoi</button>
    </nav>
  );
};
