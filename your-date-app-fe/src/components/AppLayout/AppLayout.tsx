import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import React from "react";
import "./AppLayout.css";

const AppLayout: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
