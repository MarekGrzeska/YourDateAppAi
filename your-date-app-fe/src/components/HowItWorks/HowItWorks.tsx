import React from "react";
import Step from "./Step";
import "./HowItWorks.css";

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>Jak działa LoveConnect?</h2>
          <p>Prosta droga do znalezienia idealnego partnera</p>
        </div>

        <div className="steps-container">
          <Step
            number={1}
            icon="✓"
            title="Utwórz profil"
            description="Wypełnij swój profil szczegółowymi informacjami o sobie, swoich zainteresowaniach, wartościach i preferencjach. Dodaj wysokiej jakości zdjęcia, które pokazują Twoją osobowość."
          />

          <Step
            number={2}
            icon="♥"
            title="Przeglądaj dopasowania"
            description="Nasz inteligentny algorytm przedstawi Ci potencjalnych partnerów, którzy najlepiej pasują do Twoich preferencji i stylu życia. Możesz przeglądać profile i wyrażać zainteresowanie."
          />

          <Step
            number={3}
            icon="✉"
            title="Nawiąż kontakt"
            description="Gdy znajdziesz kogoś, kto Cię zainteresuje, możesz wysłać wiadomość i rozpocząć rozmowę. Nasze narzędzia komunikacyjne ułatwią Ci poznanie drugiej osoby."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
