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
            "Happy Anniversary Hon! We've gone through so much and grew a lot these past two years, we've had our fair share of moments down to the happy, grateful, sad, quiet, angry, and peaceful days.",
            1000,
            "Happy Anniversary Hon! We've gone through so much and grew a lot these past two years, we've had our fair share of moments down to the happy, grateful, sad, quiet, angry, and peaceful days.\n\nThere are also times na we argued and hurt each other. But despite that we did not give up and remained strong and continued to love each other harder.",
            1000,
            "Happy Anniversary Hon! We've gone through so much and grew a lot these past two years, we've had our fair share of moments down to the happy, grateful, sad, quiet, angry, and peaceful days.\n\nThere are also times na we argued and hurt each other. But despite that we did not give up and remained strong and continued to love each other harder.\n\nI am thankful to have you hon and I am proud to have you not only as my partner but also as my bestfriend and copilot as we navigate this terrain we call life.",
            1000,
            "Happy Anniversary Hon! We've gone through so much and grew a lot these past two years, we've had our fair share of moments down to the happy, grateful, sad, quiet, angry, and peaceful days.\n\nThere are also times na we argued and hurt each other. But despite that we did not give up and remained strong and continued to love each other harder.\n\nI am thankful to have you hon and I am proud to have you not only as my partner but also as my bestfriend and copilot as we navigate this terrain we call life.\n\nPlease take comfort in knowing that our love will grow stronger with age and I will continue to provide and give the world to you each day and in any way I can.\n\nI love you so much and I'm proud of what you've become and how you overcame each obstacle and all your silent battles. Just remember na I'm always here for you, mahal na mahal kita my baby, my future wife. Happy anniversary. 💕",
          ]}
          speed={70}
          cursor={true}
          className="letter-text"
          style={{ whiteSpace: "pre-line" }}
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
