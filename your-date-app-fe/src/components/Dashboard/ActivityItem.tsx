import React from "react";

interface ActivityItemProps {
  type: string;
  icon: string;
  time: string;
  content: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  type,
  icon,
  time,
  content,
}) => {
  return (
    <li className="activity-item">
      <div className="activity-header">
        <span className="activity-type">
          <span className="activity-icon">{icon}</span>
          {type}
        </span>
        <span className="activity-time">{time}</span>
      </div>
      <p className="activity-content">{content}</p>
    </li>
  );
};

export default ActivityItem;
