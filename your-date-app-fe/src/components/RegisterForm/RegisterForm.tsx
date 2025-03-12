import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [interests, setInterests] = useState<string[]>([]);
  const [passwordStrength, setPasswordStrength] = useState({
    strength: 0,
    className: "",
    text: "Siła hasła",
  });

  // Przejście do następnego kroku
  const goToStep = (step: number) => {
    setCurrentStep(step);
  };

  // Obsługa wyboru płci
  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  // Obsługa wyboru zainteresowań
  const handleInterestCardClick = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((item) => item !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  // Sprawdzanie siły hasła
  const checkPasswordStrength = (password: string) => {
    let strength = 0;

    // Podstawowe kryteria siły hasła
    if (password.length >= 8) strength += 1;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[^a-zA-Z0-9]+/)) strength += 1;

    let className = "";
    let text = "Siła hasła";

    if (password.length === 0) {
      className = "";
      text = "Siła hasła";
    } else if (strength <= 2) {
      className = "weak";
      text = "Słabe";
    } else if (strength === 3) {
      className = "medium";
      text = "Średnie";
    } else if (strength === 4) {
      className = "strong";
      text = "Silne";
    } else {
      className = "very-strong";
      text = "Bardzo silne";
    }

    setPasswordStrength({ strength, className, text });
  };

  // Obsługa formularza
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Tutaj dodać logikę wysyłania formularza
    console.log("Formularz wysłany");
    // W prawdziwej aplikacji, tutaj byłby kod do wysłania danych do API
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <h1>Dołącz do LoveConnect</h1>
        <p>Wypełnij poniższy formularz, aby rozpocząć swoją przygodę</p>
      </div>

      <div className="steps-indicator">
        <div className={`step-dot ${currentStep === 1 ? "active" : ""}`}></div>
        <div className={`step-dot ${currentStep === 2 ? "active" : ""}`}></div>
        <div className={`step-dot ${currentStep === 3 ? "active" : ""}`}></div>
        <div className={`step-dot ${currentStep === 4 ? "active" : ""}`}></div>
      </div>

      <form id="register-form" onSubmit={handleSubmit}>
        {/* Krok 1: Podstawowe informacje */}
        <div className={`step-container ${currentStep === 1 ? "active" : ""}`}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Twój adres email"
              required
            />
            <span className="error-message" id="email-error">
              Proszę podać prawidłowy adres email
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Utwórz hasło"
              onChange={(e) => checkPasswordStrength(e.target.value)}
              required
            />
            <div className="password-strength">
              <div className="strength-meter">
                <div
                  id="strength-bar"
                  className={passwordStrength.className}
                ></div>
              </div>
              <span className="strength-text" id="strength-text">
                {passwordStrength.text}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Potwierdź hasło</label>
            <input
              type="password"
              id="confirm-password"
              className="form-control"
              placeholder="Potwierdź hasło"
              required
            />
            <span className="error-message" id="confirm-password-error">
              Hasła nie są zgodne
            </span>
          </div>

          <div className="form-group">
            <label>Data urodzenia</label>
            <input
              type="date"
              id="birthday"
              className="form-control"
              required
            />
            <span className="error-message" id="birthday-error">
              Musisz mieć co najmniej 18 lat
            </span>
          </div>

          <div className="btn-container">
            <div></div> {/* Pusty div dla wyrównania */}
            <button
              type="button"
              className="btn btn-next"
              onClick={() => goToStep(2)}
            >
              Dalej
            </button>
          </div>
        </div>

        {/* Krok 2: Płeć i preferencje */}
        <div className={`step-container ${currentStep === 2 ? "active" : ""}`}>
          <div className="form-group">
            <label htmlFor="name">Imię</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Imię"
              required
            />
            <span className="error-message" id="name-error">
              Imię nie może być puste
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="surname">Nazwisko</label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Nazwisko"
              required
            />
            <span className="error-message" id="surname-error">
              Nazwisko nie może być puste
            </span>
          </div>

          <div className="form-group">
            <label>Płeć</label>
            <div className="gender-options">
              <div
                className={`gender-card ${
                  selectedGender === "male" ? "selected" : ""
                }`}
                onClick={() => handleGenderSelect("male")}
              >
                <div className="gender-icon">♂</div>
                <div className="gender-label">Mężczyzna</div>
              </div>
              <div
                className={`gender-card ${
                  selectedGender === "female" ? "selected" : ""
                }`}
                onClick={() => handleGenderSelect("female")}
              >
                <div className="gender-icon">♀</div>
                <div className="gender-label">Kobieta</div>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="location">Lokalizacja</label>
            <input
              type="text"
              id="location"
              className="form-control"
              placeholder="Twoje miasto"
              required
            />
          </div>

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-prev"
              onClick={() => goToStep(1)}
            >
              Wstecz
            </button>
            <button
              type="button"
              className="btn btn-next"
              onClick={() => goToStep(3)}
            >
              Dalej
            </button>
          </div>
        </div>

        {/* Krok 3: Zainteresowania */}
        <div className={`step-container ${currentStep === 3 ? "active" : ""}`}>
          <div className="form-group">
            <label>Wybierz swoje zainteresowania (min. 3)</label>
            <div className="interest-cards">
              {[
                "sport",
                "muzyka",
                "filmy",
                "książki",
                "podróże",
                "gotowanie",
                "fotografia",
                "sztuka",
                "gry",
                "technologia",
                "natura",
                "zwierzęta",
                "fitness",
                "taniec",
                "moda",
              ].map((interest) => (
                <div
                  key={interest}
                  className={`interest-card ${
                    interests.includes(interest) ? "selected" : ""
                  }`}
                  onClick={() => handleInterestCardClick(interest)}
                >
                  {interest.charAt(0).toUpperCase() + interest.slice(1)}
                </div>
              ))}
            </div>
            <span
              className={`error-message ${interests.length < 3 ? "show" : ""}`}
              id="interests-error"
            >
              Wybierz co najmniej 3 zainteresowania
            </span>
          </div>

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-prev"
              onClick={() => goToStep(2)}
            >
              Wstecz
            </button>
            <button
              type="button"
              className="btn btn-next"
              onClick={() => goToStep(4)}
              disabled={interests.length < 3}
            >
              Dalej
            </button>
          </div>
        </div>

        {/* Krok 4: Podsumowanie i potwierdzenie */}
        <div className={`step-container ${currentStep === 4 ? "active" : ""}`}>
          <div className="form-group">
            <label htmlFor="about">Kilka słów o Tobie</label>
            <textarea
              id="about"
              className="form-control"
              rows={4}
              placeholder="Opisz siebie w kilku słowach..."
            ></textarea>
          </div>

          <div className="terms-checkbox">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              Akceptuję <a href="#">Regulamin</a> oraz{" "}
              <a href="#">Politykę Prywatności</a> serwisu LoveConnect i wyrażam
              zgodę na przetwarzanie moich danych osobowych w celu świadczenia
              usług.
            </label>
          </div>

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-prev"
              onClick={() => goToStep(3)}
            >
              Wstecz
            </button>
            <button type="submit" className="btn btn-submit">
              Utwórz konto
            </button>
          </div>
        </div>
      </form>

      <div className="social-register">
        <div className="social-register-text">
          <span>Lub zarejestruj się przez</span>
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

      <div className="login-link">
        Masz już konto? <a href="#">Zaloguj się</a>
      </div>
    </div>
  );
};

export default RegisterForm;
