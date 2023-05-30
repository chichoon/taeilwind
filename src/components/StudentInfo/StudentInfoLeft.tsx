export const StudentInfoLeft = () => {
  const data = [
    { title: "Wallet", data: "425 A" },
    { title: "Evaluation points", data: 5 },
    { title: "Cursus", data: ["42Cursus", "C Piscine"] },
    { title: "Grade", data: "Member" },
  ];
  return (
    <ul className="bg-black_transparent rounded-sm w-[400px] ml-4 px-3 flex flex-col justify-center items-center min-h-[234px]">
      {data.map((d) => (
        <li key={d.title} className="w-[143px] flex flex-row items-center py-2">
          <h3 className="flex-1 text-lee">{d.title}</h3>
          {d.data instanceof Array ? (
            <select>
              {d.data.map((v) => (
                <option key={`${d.data}-${v}`}>{v}</option>
              ))}
            </select>
          ) : (
            <span className="text-white">{d.data}</span>
          )}
        </li>
      ))}
    </ul>
  );
};
