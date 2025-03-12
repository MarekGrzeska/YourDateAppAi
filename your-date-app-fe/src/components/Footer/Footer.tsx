import React from "react";
import FooterLinkColumn from "./FooterLinkColumn";
import "./Footer.css";

const Footer: React.FC = () => {
  const mainLinks = [
    { text: "Główna", url: "#" },
    { text: "O nas", url: "#" },
    { text: "Jak działa", url: "#" },
  ];

  const helpLinks = [
    { text: "FAQ", url: "#" },
    { text: "Bezpieczeństwo", url: "#" },
    { text: "Wsparcie", url: "#" },
    { text: "Centrum Pomocy", url: "#" },
    { text: "Zgłoś problem", url: "#" },
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <a href="#" className="footer-logo">
              Love<span>Connect</span>
            </a>
            <p>
              LoveConnect to nowoczesny portal randkowy, który pomaga ludziom
              znaleźć prawdziwą miłość poprzez inteligentne dopasowania i
              przyjazne funkcje.
            </p>

            <div className="social-links">
              <a href="#" className="social-link">
                f
              </a>
              <a href="#" className="social-link">
                ig
              </a>
            </div>
          </div>

          <FooterLinkColumn title="Linki" links={mainLinks} />
          <FooterLinkColumn title="Pomoc" links={helpLinks} />

          <div className="footer-contact">
            <h3 className="footer-title">Kontakt</h3>
            <ul className="contact-info">
              <li>
                <span className="contact-icon">📞</span>
                +48 507 637 692
              </li>
              <li>
                <span className="contact-icon">✉</span>
                kontakt@loveconnect.pl
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} LoveConnect. Wszystkie prawa
            zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
