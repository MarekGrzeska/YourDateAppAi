import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Loginpage.css";

const Loginpage: React.FC = () => {
  return (
    <div className="login-page">
      <main className="login-section">
        <LoginForm />
      </main>
    </div>
  );
};

export default Loginpage;
