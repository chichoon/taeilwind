import { FtIcon } from "@/assets/svgs";

export const NavBar = () => {
  return (
    <nav className="pt-3 flex flex-col  items-center w-20 h-screen bg-secondary">
      <FtIcon className="fill-white w-10 h-10 p-0 m-0" />
      <button className="w-20 h-20 text-white">jiychoi</button>
    </nav>
  );
};
