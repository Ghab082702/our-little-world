// 🏠 App.js — The Root of Your App
//
// 📚 LESSON: App.js is the PARENT of all components.
// It holds the most important state: which "section"
// the user is currently viewing.
//
// Think of App.js like a TV remote — it decides what's
// on screen. The components (Entrance, etc.) are the
// channels. They don't control themselves; the remote does.

import React, { useState } from "react";
import Entrance from "./components/Entrance";
import Stats from "./components/Stats";
import Letter from "./components/Letter";
import Stars from "./components/Stars";
import { AnimatePresence } from "framer-motion";
import "./styles/globals.css";
import "./App.css";

const YOUR_NAME = "Ghab";
const PARTNER_NAME = "Yao";

function App() {
  // ── The most important useState in this app ──
  //
  // "currentSection" tracks WHERE we are in the story.
  // It starts as 'entrance' and will change as the
  // user clicks through the sections.
  const [currentSection, setCurrentSection] = useState("entrance");

  // ── Handler functions ──
  // These are functions we'll PASS DOWN as props to children.
  const handleEnter = () => {
    setCurrentSection("stats");
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {currentSection === "entrance" && (
          <Entrance
            key="entrance"
            yourName={YOUR_NAME}
            partnerName={PARTNER_NAME}
            onEnter={handleEnter}
          />
        )}

        {currentSection === "stats" && (
          <Stats
            onBack={() => setCurrentSection("entrance")}
            onNext={() => setCurrentSection("letter")}
          />
        )}

        {currentSection === "letter" && (
          <Letter
            onBack={() => setCurrentSection("stats")}
            onNext={() => setCurrentSection("stars")}
          />
        )}

          {currentSection === "stars" && (
          <Stars
            onBack={() => setCurrentSection("letter")}

          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
