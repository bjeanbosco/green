
import { NewsEventData,CalendarData } from "../../utils/news&eventData";
import React from "react";
import EventCard from "../Atoms/EventCard";
import CalendarList from "../Atoms/CalendarSection";

const EventNewsTab = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 sm:my-4 md:my-16 gap-8">
          {NewsEventData.map((event, index) => (
            <EventCard key={index} date={event.date} description={event.description} imageUrl={event.imageUrl} slug={event.slug} title={event.title} type={event.type} videoUrl={event.videoUrl} />
          ))}
        </div>
      </div>
      <div className="pb-[22px] mt-12 grid grid-rows-1 gap-8">
        <h1 className="text-primary">Upcoming Events Calendar</h1>
        
        <div className="grid md:grid-cols-2 gap-4">
          <CalendarList calendarData={CalendarData} />
        </div>
      </div>
    </div>
  );
};

export default EventNewsTab;

