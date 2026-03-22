import React, { useState } from "react";
import starsData from "../data/starsData.js";
import "./Stars.css";

function Stars({ onBack }) {
  const [foundIds, setFoundIds] = useState([]);
  const [selectedObject, setSelectedObject] = useState(null);

  const decorativeStars = [
    { id: "d1", emoji: "✨", top: "10%", left: "15%", size: "1rem" },
    { id: "d2", emoji: "⭐", top: "25%", left: "80%", size: "0.7rem" },
    { id: "d3", emoji: "💫", top: "70%", left: "60%", size: "1.2rem" },
    { id: "d4", emoji: "🌟", top: "15%", left: "45%", size: "0.8rem" },
    { id: "d5", emoji: "✨", top: "50%", left: "25%", size: "1.3rem" },
    { id: "d6", emoji: "⭐", top: "80%", left: "75%", size: "0.6rem" },
    { id: "d7", emoji: "💫", top: "35%", left: "90%", size: "1rem" },
    { id: "d8", emoji: "🌟", top: "90%", left: "10%", size: "0.9rem" },
    { id: "d9", emoji: "✨", top: "5%", left: "60%", size: "1.1rem" },
    { id: "d10", emoji: "⭐", top: "45%", left: "70%", size: "0.8rem" },
    { id: "d11", emoji: "💫", top: "60%", left: "5%", size: "1.4rem" },
    { id: "d12", emoji: "🌟", top: "20%", left: "30%", size: "0.7rem" },
    { id: "d13", emoji: "✨", top: "85%", left: "45%", size: "1rem" },
    { id: "d14", emoji: "⭐", top: "40%", left: "55%", size: "0.9rem" },
    { id: "d15", emoji: "💫", top: "75%", left: "88%", size: "1.2rem" },
  ];

  const handleFind = (object) => {
    if (!foundIds.includes(object.id)) {
      setFoundIds([...foundIds, object.id]);
    }
    setSelectedObject(object);
  };

  const handleClose = () => {
    setSelectedObject(null);
  };

  return (
    <div className="stars">
      <h2 className="stars-title">Find Our Memories</h2>
      <p className="stars-subtitle">
        Found {foundIds.length} of {starsData.length} memories
      </p>
      <div className="stars-scene">
        {decorativeStars.map((star) => (
          <div
            key={star.id}
            className="stars-decorative"
            style={{ top: star.top, left: star.left, fontSize: star.size }}
          >
            {star.emoji}
          </div>
        ))}
        {starsData.map((object) => (
          <div
            key={object.id}
            className={`stars-object ${foundIds.includes(object.id) ? "found" : ""}`}
            style={{ top: object.top, left: object.left }}
            onClick={() => handleFind(object)}
          >
            {object.emoji}
          </div>
        ))}

        {selectedObject && (
          <div className="memory-card">
            <img
              src={selectedObject.image}
              alt={selectedObject.name}
              className="memory-image"
            />
            <p className="memory-text">{selectedObject.memory}</p>
            <button className="memory-close" onClick={handleClose}>
              ✕ Close
            </button>
          </div>
        )}
      </div>
      <button className="stars-back-button" onClick={onBack}>
        ← Back
      </button>
    </div>
  );
}

export default Stars;
