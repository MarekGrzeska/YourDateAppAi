import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Znajdź swoją <span className="highlight">drugą połówkę</span> już
              dziś
            </h1>
            <p>
              LoveConnect to nowoczesny portal randkowy, który wykorzystuje
              zaawansowane algorytmy, aby połączyć Cię z osobami o podobnych
              zainteresowaniach, wartościach i celach. Dołącz do nas i
              rozpocznij swoją podróż ku miłości!
            </p>
            <a href="#" className="btn btn-register">
              Rozpocznij za darmo
            </a>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">2M+</div>
                <div className="stat-text">Użytkowników</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">150K+</div>
                <div className="stat-text">Par</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-text">Zadowolonych</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
