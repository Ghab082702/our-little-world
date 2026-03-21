// 🏠 App.js — The Root of Your App
//
// 📚 LESSON: App.js is the PARENT of all components.
// It holds the most important state: which "section"
// the user is currently viewing.
//
// Think of App.js like a TV remote — it decides what's
// on screen. The components (Entrance, etc.) are the
// channels. They don't control themselves; the remote does.

import React, { useState } from 'react';
import Entrance from './components/Entrance';
import { AnimatePresence } from 'framer-motion';
import './styles/globals.css';
import './App.css';

// ─────────────────────────────────────────────
// ✏️  CUSTOMIZE THIS — put your names here!
// ─────────────────────────────────────────────
const YOUR_NAME = 'Your Name';
const PARTNER_NAME = 'Partner';
// ─────────────────────────────────────────────

function App() {
  // ── The most important useState in this app ──
  //
  // "currentSection" tracks WHERE we are in the story.
  // It starts as 'entrance' and will change as the
  // user clicks through the sections.
  const [currentSection, setCurrentSection] = useState('entrance');

  // ── Handler functions ──
  // These are functions we'll PASS DOWN as props to children.
  const handleEnter = () => {
    setCurrentSection('stats');
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">

        {currentSection === 'entrance' && (
          <Entrance
            key="entrance"
            yourName={YOUR_NAME}
            partnerName={PARTNER_NAME}
            onEnter={handleEnter}
          />
        )}

        {/* Placeholder — we'll replace this with the real Stats section next! */}
        {currentSection === 'stats' && (
          <div key="coming-soon" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '1rem',
            fontFamily: 'var(--font-display)',
            color: 'var(--color-text)',
            fontSize: '1.5rem',
          }}>
            <p>🌸 Next section coming soon!</p>
            <button
              onClick={() => setCurrentSection('entrance')}
              style={{
                background: 'none',
                border: '1px solid var(--color-rose-dark)',
                color: 'var(--color-rose-dark)',
                padding: '0.6rem 1.5rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                letterSpacing: '0.1em',
              }}
            >
              ← Go back
            </button>
          </div>
        )}

      </AnimatePresence>
    </div>
  );
}

export default App;
