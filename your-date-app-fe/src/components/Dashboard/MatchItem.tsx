import React from "react";

interface MatchItemProps {
  avatar: string;
  name: string;
  time: string;
  message: string;
}

const MatchItem: React.FC<MatchItemProps> = ({
  avatar,
  name,
  time,
  message,
}) => {
  return (
    <li className="match-item">
      <div className="match-avatar">{avatar}</div>
      <div className="match-details">
        <div className="match-header">
          <span className="match-name">{name}</span>
          <span className="match-time">{time}</span>
        </div>
        <p className="match-message">{message}</p>
        <div className="match-actions">
          <button className="match-btn btn-reply">Odpowiedz</button>
          <button className="match-btn btn-profile">Profil</button>
        </div>
      </div>
    </li>
  );
};

export default MatchItem;
