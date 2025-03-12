import React from "react";

interface StepProps {
  number: number;
  icon: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, icon, title, description }) => {
  return (
    <div className="step-item">
      <div className="step-number">{number}</div>
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Step;
