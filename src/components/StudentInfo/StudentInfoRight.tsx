export const StudentInfoRight = () => {
  const percentage = 66;
  return (
    <div className="flex-1 flex flex-col h-full gap-3">
      <div className="bg-black_transparent flex-1 rounded-md flex flex-col justify-center items-center ">
        <span className="text-white font-medium text-3xl">Unavailable</span>
        <span className="text-white font-medium text-3xl">-</span>
      </div>
      <div
        className="h-10 rounded-md flex items-center justify-center"
        style={{
          background: `linear-gradient(to right, #BB4240, #BB4240 ${percentage}%, #202026d9 ${percentage}%, #202026d9 100%)`,
        }}>
        <span className="text-white font-medium text-lg">
          level 10 - {percentage}%
        </span>
      </div>
    </div>
  );
};
