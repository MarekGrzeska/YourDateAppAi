import React from "react";

interface SuggestedMatchProps {
  avatar: string;
  name: string;
  details: string;
}

const SuggestedMatch: React.FC<SuggestedMatchProps> = ({
  avatar,
  name,
  details,
}) => {
  return (
    <div className="suggested-item">
      <div className="suggested-avatar">{avatar}</div>
      <div className="suggested-info">
        <h3 className="suggested-name">{name}</h3>
        <p className="suggested-details">{details}</p>
      </div>
      <button className="suggested-action">Profil</button>
    </div>
  );
};

export default SuggestedMatch;
