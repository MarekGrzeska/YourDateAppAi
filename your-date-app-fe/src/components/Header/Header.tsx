import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <a href="#" className="logo">
            <div className="logo-icon">L</div>
            Love<span>Connect</span>
          </a>

          <div className={`nav-right ${mobileMenuOpen ? "active" : ""}`}>
            <ul className="menu">
              <li>
                <Link to="/">Głowna</Link>
              </li>
              <li>
                <a href="#">O nas</a>
              </li>
              <li>
                <a href="#">Jak działa</a>
              </li>
              <li>
                <a href="#">Kontakt</a>
              </li>
            </ul>

            <div className="auth-buttons">
              <button
                className="btn btn-login"
                onClick={() => navigate("/login")}
              >
                Logowanie
              </button>
              <button
                className="btn btn-register"
                onClick={() => navigate("/register")}
              >
                Rejestracja
              </button>
            </div>
          </div>

          <div className="mobile-toggle" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? "✕" : "≡"}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
