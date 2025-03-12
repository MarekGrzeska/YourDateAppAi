import React from "react";
import "./LoginForm.css";

const LoginForm: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Witaj ponownie!</h1>
        <p>Zaloguj się, aby kontynuować swoją podróż ku miłości</p>
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Twój adres email"
            required
          />
          <span className="error-message">
            Proszę podać prawidłowy adres email
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Twoje hasło"
            required
          />
          <span className="error-message">
            Hasło musi mieć co najmniej 8 znaków
          </span>
        </div>

        <div className="form-options">
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Zapamiętaj mnie</label>
          </div>

          <a href="#" className="forgot-password">
            Nie pamiętasz hasła?
          </a>
        </div>

        <button type="submit" className="btn btn-primary">
          Zaloguj się
        </button>
      </form>

      <div className="social-login">
        <div className="social-login-text">
          <span>Lub zaloguj się przez</span>
        </div>

        <div className="social-buttons">
          <a href="#" className="social-btn" title="Facebook">
            f
          </a>
          <a href="#" className="social-btn" title="Google">
            G
          </a>
        </div>
      </div>

      <div className="register-link">
        Nie masz jeszcze konta? <a href="#">Zarejestruj się</a>
      </div>
    </div>
  );
};

export default LoginForm;
