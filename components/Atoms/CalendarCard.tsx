import { BiTimer } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

interface CalendarCardProps {
    title: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    imageUrl?: string;
    type?: string;
  }
  
  const CalendarCard: React.FC<CalendarCardProps> = ({
    date,
    title,
    endTime,
    startTime,
    location,
  }) => {
    return (
      <div className="w-full my-4 flex hover:shadow-xl shadow-[grey]">
        {/* Left Section: Date */}
        <div className="w-[20%] px-8 py-6 bg-primary flex-col justify-start items-center gap-4 inline-flex">
          <p className="text-center text-[yellow] font-bold">
            {date.substring(0, 3)} {/* Assuming date is a string like "NOV" */}
          </p>
          <h4 className="text-center text-[yellow] font-bold">
            {date.substring(4, 6)} {/* Assuming date is a string like "02" */}
          </h4>
          <p className="text-center text-[yellow] font-bold">
            {date.substring(7)} {/* Assuming date is a string like "2023" */}
          </p>
        </div>
  
        <div className="w-[80%] px-4 bg-green flex-col justify-evenly flex">
          <p className="text-primary flex items-center gap-4 md:text-[1.1vw] font-bold sm:text-[1.05rem] ">
            {" "}
            <MdLocationPin />
            {location}
          </p>
          <p className="text-black font-bold ">{title}</p>
          <p className="text-black flex items-center gap-4">
            <BiTimer />
            {startTime} - {endTime}
          </p>
        </div>
      </div>
    );
  };

  export default CalendarCard;