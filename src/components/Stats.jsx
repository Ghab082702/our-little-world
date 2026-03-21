import CountUp from "react-countup";
import "./Stats.css";
import React, { useState, useEffect } from "react";

function Stats({ onBack, onNext }) {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const anniversary = new Date("2024-03-24");

    const calculate = () => {
      const now = new Date();

      const diff = now - anniversary;

      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
      );
      const days = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
      );
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    };

    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="stats">
        <h2 className="stats-title"> Our Time Together </h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-emoji">🌙</span>
            <span className="stat-number">{timeElapsed.years}</span>
            <span className="stat-label">Years</span>
          </div>
          <div className="stat-card">
            <span className="stat-emoji">💌</span>
            <span className="stat-number">{timeElapsed.months}</span>
            <span className="stat-label">Months</span>
          </div>
          <div className="stat-card">
            <span className="stat-emoji">☀️</span>
            <span className="stat-number">{timeElapsed.days}</span>
            <span className="stat-label">Days</span>
          </div>
          <div className="stat-card">
            <span className="stat-emoji">⏰</span>
            <span className="stat-number">{timeElapsed.hours}</span>
            <span className="stat-label">Hours</span>
          </div>
          <div className="stat-card">
            <span className="stat-emoji">🌸</span>
            <span className="stat-number">{timeElapsed.minutes}</span>
            <span className="stat-label">Minutes</span>
          </div>
          <div className="stat-card">
            <span className="stat-emoji">✨</span>
            <span className="stat-number">{timeElapsed.seconds}</span>
            <span className="stat-label">Seconds</span>
          </div>
        </div>
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <button className="front-button" onClick={onNext}>
          Next →
        </button>
      </div>
    </div>
  );
}

export default Stats;
