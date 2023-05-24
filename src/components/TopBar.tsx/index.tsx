import Image from "next/image";

import { BellIcon, SearchIcon } from "@/assets/svgs";

export const TopBar = () => {
  return (
    <section className="p-3 pl-6 pr-6 flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <SearchIcon className="w-5 h-5 mr-4 fill-secondary" />
        <input type="text" className="border-none" placeholder="search..." />
      </div>
      <div className="flex flex-row items-center">
        <div className="relative w-6 h-6 mr-5">
          <BellIcon className="w-6 h-6 fill-secondary" />
          <div className="absolute w-5 h-5 rounded-xl flex justify-center items-center bg-lee bottom-4 left-3">
            <span className="text-white text-sm">4</span>
          </div>
        </div>
        <h2 className="font-extrabold text-text-normal">jiychoi</h2>
        <Image
          className="w-10 h-10 ml-5 rounded-full object-cover"
          width={30}
          height={30}
          src="/profile.gif"
          alt="profile"
        />
      </div>
    </section>
  );
};
