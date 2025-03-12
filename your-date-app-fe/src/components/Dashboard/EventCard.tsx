import React from "react";

interface EventCardProps {
  date: string;
  title: string;
  description: string;
  location: string;
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  title,
  description,
  location,
}) => {
  return (
    <div className="event-card">
      <div className="event-date">{date}</div>
      <h3 className="event-title">{title}</h3>
      <p className="event-description">{description}</p>
      <div className="event-location">
        <span className="location-icon">📍</span>
        {location}
      </div>
    </div>
  );
};

export default EventCard;
