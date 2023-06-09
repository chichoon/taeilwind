import { CalendarIcon, ClockIcon, PlaceIcon } from "@/assets/svgs";

interface Props {
  date: number;
  month: string;
  eventName: string;
  time: string;
  duration: string;
  place: string;
  isRegistered?: boolean;
}

export const AgendaLayout = ({
  date,
  month,
  eventName,
  time,
  duration,
  place,
  isRegistered,
}: Props) => {
  return (
    <div className="flex flex-row items-center border border-primary">
      <div className="flex flex-col items-center justify-center bg-primary px-6 py-2">
        <span className="text-white text-3xl">{date}</span>
        <span className="text-white text-base mt-[-8px]">{month}</span>
      </div>
      <div className="flex flex-col px-4 py-2 relative">
        <div className="flex flex-row items-center mb-1">
          <span className="font-bold text-primary mr-1.5 text-sm">Event</span>
          <span className="text-xs">{eventName}</span>
        </div>
        <div className="flex flex-row items-center">
          <CalendarIcon className="w-4 h-4 mr-1 stroke-primary" />
          <span className="text-primary text-sm mr-4">{time}</span>
          <ClockIcon className="w-4 h-4 mr-1 fill-primary" />
          <span className="text-primary text-sm mr-4">{duration}</span>
          <PlaceIcon className="w-4 h-4 mr-1 fill-primary" />
          <span className="text-primary text-sm mr-4">{place}</span>
        </div>
      </div>
      {isRegistered && (
        <span className="absolute top-1 right-2 text-primary text-sm">
          REGISTERED
        </span>
      )}
    </div>
  );
};
