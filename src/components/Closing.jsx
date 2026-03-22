import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "./Closing.css";

const Closing = ({ onBack }) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="closing">
      {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}

      <div className="closing-content">
        <p className="closing-label">two years of us</p>
        <h2 className="closing-title">Here's to More!</h2>
        <p className="closing-message">
          "To more laughs, praying together, having fun, and just being with each other"
        </p>
        <p className="closing-signature">— Ghab</p>
        <div className="closing-badge">Happy Anniversary, my Love!</div>
      </div>

      <button className="closing-back-button" onClick={onBack}>
        ← Back
      </button>
    </div>
  );
};

export default Closing;
