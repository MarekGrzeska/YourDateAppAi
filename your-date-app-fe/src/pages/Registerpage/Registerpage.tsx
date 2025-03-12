import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import "./Registerpage.css";

const RegisterPage: React.FC = () => {
  return (
    <div className="register-page">
      <main className="register-section">
        <RegisterForm />
      </main>
    </div>
  );
};

export default RegisterPage;
