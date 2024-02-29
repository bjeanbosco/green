import React from "react";
import CalendarCard from "./CalendarCard";

interface CalendarListProps {
  calendarData: {
    title: string;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    imageUrl: string;
    type: string;
  }[];
}

const CalendarList: React.FC<CalendarListProps> = ({ calendarData }) => {
  const currentDate = new Date();

  // Filter out events that have already occurred
  const upcomingEvents = calendarData.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate > currentDate;
  });

  return (
    <div>
      {upcomingEvents.length === 0 ? (
        // Render a message when there are no upcoming events
        <p className="font-bold capitalize">No upcoming events</p>
      ) : (
        upcomingEvents.map((event, index) => (
          <div key={index}>
            <CalendarCard
              date={event.date}
              startTime={event.startTime}
              endTime={event.endTime}
              location={event.location}
              title={event.title}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default CalendarList;
