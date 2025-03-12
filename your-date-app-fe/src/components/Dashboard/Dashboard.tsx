import React, { useState } from "react";
import MatchItem from "./MatchItem";
import ActivityItem from "./ActivityItem";
import EventCard from "./EventCard";
import SuggestedMatch from "./SuggestedMatch";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  // State dla mobile sidebar toggle
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  // Toggle sidebar dla mobile
  const toggleSidebar = (): void => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div className="dashboard-layout">
      <header className="header">
        <div className="logo-container">
          <button
            className="mobile-toggle"
            aria-label="Menu toggle"
            onClick={toggleSidebar}
          >
            ☰
          </button>
          <a href="#" className="logo">
            <div className="logo-icon">L</div>
            Love<span>Connect</span>
          </a>
        </div>

        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Szukaj profili, dopasowań..."
          />
        </div>

        <div className="header-controls">
          <div className="notification-bell">
            <span style={{ fontSize: "1.25rem" }}>🔔</span>
            <span className="notification-count">3</span>
          </div>
          <div className="user-profile">
            <div className="user-avatar">J</div>
            <span className="user-name">Jan Kowalski</span>
          </div>
        </div>
      </header>

      <div
        className={`backdrop ${sidebarActive ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>

      <aside className={`sidebar ${sidebarActive ? "active" : ""}`}>
        <div className="nav-section">
          <h3 className="nav-heading">Menu główne</h3>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link active">
                <span className="nav-icon">📊</span>
                <span className="nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">👤</span>
                <span className="nav-text">Mój profil</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">❤️</span>
                <span className="nav-text">Dopasowania</span>
                <span className="nav-badge">12</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">✉️</span>
                <span className="nav-text">Wiadomości</span>
                <span className="nav-badge">5</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">🔍</span>
                <span className="nav-text">Odkrywaj</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-section">
          <h3 className="nav-heading">Społeczność</h3>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">📅</span>
                <span className="nav-text">Wydarzenia</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <span className="nav-icon">👥</span>
                <span className="nav-text">Grupy</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="premium-card">
          <h3 className="premium-title">Przejdź na Premium</h3>
          <p className="premium-description">
            Zyskaj dostęp do wszystkich funkcji i zwiększ szanse na znalezienie
            idealnego partnera!
          </p>
          <button className="premium-button">Wypróbuj teraz</button>
        </div>
      </aside>

      <main className="main-content">
        <div className="page-header">
          <div className="page-title-section">
            <h1 className="page-title">Dashboard</h1>
            <p className="page-subtitle">
              Witaj, Jan! Masz 3 nowe dopasowania i 5 nieprzeczytanych
              wiadomości.
            </p>
          </div>
          <div className="action-buttons">
            <button className="btn btn-outline">Edytuj profil</button>
            <button className="btn btn-primary">Przeglądaj dopasowania</button>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon primary">👁️</div>
            <div className="stat-details">
              <div className="stat-value primary">27</div>
              <div className="stat-label">Wyświetleń profilu</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon secondary">❤️</div>
            <div className="stat-details">
              <div className="stat-value primary">12</div>
              <div className="stat-label">Aktywnych dopasowań</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon accent">👍</div>
            <div className="stat-details">
              <div className="stat-value primary">8</div>
              <div className="stat-label">Nowych lajków</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon success">✉️</div>
            <div className="stat-details">
              <div className="stat-value primary">5</div>
              <div className="stat-label">Nieprzeczytanych wiadomości</div>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="card recent-matches">
            <div className="card-header">
              <h2 className="card-title">Ostatnie dopasowania</h2>
              <div className="card-actions">
                <button className="card-action">⋮</button>
              </div>
            </div>
            <div className="card-body">
              <ul className="match-list">
                <MatchItem
                  avatar="A"
                  name="Anna Nowak"
                  time="12 min temu"
                  message="Cześć! Widzę, że też lubisz podróże i fotografię. Masz jakieś ulubione miejsca, które odwiedziłeś?"
                />
                <MatchItem
                  avatar="M"
                  name="Monika Wiśniewska"
                  time="2 godz temu"
                  message="Hej! Widzę, że mamy wspólne zainteresowania. Też lubię książki fantasy i sztukę nowoczesną."
                />
                <MatchItem
                  avatar="K"
                  name="Karolina Zielińska"
                  time="1 dzień temu"
                  message="Dzięki za polecenie tej książki! Właśnie zaczęłam czytać i jest naprawdę wciągająca."
                />
              </ul>
            </div>
            <div className="card-footer">
              <a href="#" className="view-all">
                Zobacz wszystkie
                <span className="view-all-icon">→</span>
              </a>
            </div>
          </div>

          <div className="card activity-feed">
            <div className="card-header">
              <h2 className="card-title">Ostatnia aktywność</h2>
            </div>
            <div className="card-body">
              <ul className="activity-list">
                <ActivityItem
                  type="Nowe dopasowanie"
                  icon="❤️"
                  time="15 min temu"
                  content="Masz nowe dopasowanie z Anna Nowak. Wyślij wiadomość, aby rozpocząć rozmowę!"
                />
                <ActivityItem
                  type="Otrzymany like"
                  icon="👍"
                  time="2 godz temu"
                  content="Karolina Zielińska polubiła Twój profil."
                />
                <ActivityItem
                  type="Wyświetlenie profilu"
                  icon="👁️"
                  time="5 godz temu"
                  content="Twój profil został wyświetlony 12 razy w ciągu ostatnich 5 godzin."
                />
                <ActivityItem
                  type="Nowa wiadomość"
                  icon="✉️"
                  time="1 dzień temu"
                  content="Otrzymałeś nową wiadomość od Monika Wiśniewska."
                />
                <ActivityItem
                  type="Wydarzenie"
                  icon="📅"
                  time="2 dni temu"
                  content="Nowe wydarzenie w Twojej okolicy: 'Speed Dating w Warszawie'."
                />
              </ul>
            </div>
          </div>

          <div className="card upcoming-events">
            <div className="card-header">
              <h2 className="card-title">Nadchodzące wydarzenia</h2>
              <div className="card-actions">
                <button className="card-action">⋮</button>
              </div>
            </div>
            <div className="card-body">
              <div className="events-wrapper">
                <EventCard
                  date="25 marca, 19:00"
                  title="Speed Dating w Warszawie"
                  description="Poznaj ciekawych ludzi podczas Speed Dating w kawiarni 'Pod Palmami'."
                  location="Warszawa, ul. Nowy Świat 22"
                />
                <EventCard
                  date="28 marca, 20:00"
                  title="Wieczór karaoke"
                  description="Pokaż swoje umiejętności wokalne i poznaj nowych ludzi."
                  location="Warszawa, ul. Mazowiecka 12"
                />
              </div>
            </div>
            <div className="card-footer">
              <a href="#" className="view-all">
                Zobacz wszystkie
                <span className="view-all-icon">→</span>
              </a>
            </div>
          </div>

          <div className="card suggested-matches">
            <div className="card-header">
              <h2 className="card-title">Sugerowane dopasowania</h2>
            </div>
            <div className="card-body">
              <div className="suggested-list">
                <SuggestedMatch
                  avatar="P"
                  name="Paulina Dąbrowska"
                  details="Wspólne zainteresowania: Podróże, Muzyka"
                />
                <SuggestedMatch
                  avatar="O"
                  name="Olga Kamińska"
                  details="Wspólne zainteresowania: Sport, Książki"
                />
                <SuggestedMatch
                  avatar="W"
                  name="Weronika Adamska"
                  details="Wspólne zainteresowania: Sztuka, Gotowanie"
                />
              </div>
            </div>
            <div className="card-footer">
              <a href="#" className="view-all">
                Zobacz więcej
                <span className="view-all-icon">→</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
