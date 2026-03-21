import React from "react";
import "./Letter.css";
import { TypeAnimation } from "react-type-animation";

const Letter = ({ onNext, onBack }) => {
  return (
    <div className="letter">
      <h2 className="letter-title">A Letter to You</h2>
      <div className="letter-paper">
        <TypeAnimation
          sequence={[
            500,
            "My dearest love, lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          ]}
          speed={60}
          cursor={true}
          className="letter-text"
        />
      </div>
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>
      <button className="front-button" onClick={onNext}>
        Next →
      </button>
    </div>
  );
};

export default Letter;
