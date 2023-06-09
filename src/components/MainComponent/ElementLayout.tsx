import { TriangleIcon } from "@/assets/svgs";

interface Props {
  title: string;
  children: JSX.Element;
  sideButtonList?: { title: string; isDropdown?: boolean }[];
}

export const ElementLayout = ({ title, children, sideButtonList }: Props) => {
  return (
    <section className="bg-white py-6 px-8">
      <div className="flex flex-row justify-between items-center mb-5">
        <h3 className="text-text-dark text-xs font-extrabold">{title}</h3>
        {sideButtonList && (
          <div className="flex flex-row gap-1">
            {sideButtonList.map((btnProp) => (
              <button
                key={`${title}-${btnProp.title}`}
                className="border border-primary px-2.5 py-1 flex flex-row items-center">
                <span className="text-primary text-xs">{btnProp.title}</span>
                {btnProp.isDropdown && (
                  <TriangleIcon className="fill-primary w-3 h-3" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="h-[200px] overflow-y-scroll">{children}</div>
    </section>
  );
};
