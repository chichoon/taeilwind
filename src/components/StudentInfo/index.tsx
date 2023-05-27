import {
  AccelIcon,
  BriefcaseIcon,
  GlobeIcon,
  LabelIcon,
  MegaphoneIcon,
  PencilIcon,
  TriangleIcon,
  TrophyIcon,
} from "@/assets/svgs";
import Image from "next/image";

export const StudentInfo = () => {
  return (
    <section
      className="w-sc h-72 bg-cover px-5 "
      style={{ backgroundImage: "url(/lee_cover.jpg)" }}>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <div className="relative w-16 h-16 overflow-hidden">
            <LabelIcon className="absolute bottom-0.5 w-16 h-16 fill-lee" />
            <Image
              className="absolute top-3.5 left-3.5 z-10"
              width={35}
              height={35}
              src="/lee.png"
              alt="lee icon"
            />
          </div>
          <div className="mr-5">
            <span className="text-lee mb-2">Lee</span>
            <div className="flex flex-row">
              <TrophyIcon className="w-4 h-4 mr-1.5 fill-white" />
              <span className="text-white  mr-3">0</span>
              <AccelIcon className="w-4 h-4 mr-1.5 fill-white" />
              <span className="text-white">9</span>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-tuteur rounded-sm px-2.5">
              <span className="text-white text-sm">TUTEUR</span>
            </div>
            <h1 className="text-white font-extrabold text-2xl mx-3">
              Jiyoon Choi
            </h1>
            <div className="flex flex-row items-center">
              <span className="text-white">
                jiychoi, 42seoul Translation Maintainer
              </span>
              <TriangleIcon className="fill-lee w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row bg-black_transparent rounded-sm px-2 py-1 mr-1">
            <GlobeIcon className="fill-white w-5 h-5 mx-2" />
            <BriefcaseIcon className="fill-white w-5 h-5 mx-2" />
            <PencilIcon className="fill-white w-5 h-5 mx-2" />
          </div>
          <div className="flex items-center px-1 bg-white rounded-tl-full rounded-bl-full w-14 h-12 mt-[-25px] mr-[-20px] shadow-md">
            <div className="bg-primary w-10 h-10  rounded-full flex items-center justify-center">
              <MegaphoneIcon className="fill-white w-8 h-8 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
