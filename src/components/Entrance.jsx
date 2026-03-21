// 🌸 Entrance.jsx — The Landing Screen
//
// 📚 LESSON: This component teaches you TWO things:
//   1. useState  — how to track a value that can change
//   2. Props     — how a parent passes data DOWN to a child
//
// You'll see both explained with comments as you read!

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Entrance.css';

// ─────────────────────────────────────────────
// 🧩 FloatingPetal — A small "dumb" component
//
// It receives props (style) from its parent and
// just renders a petal at a given position.
// It has NO state of its own — it only displays
// what it's told via props.
// ─────────────────────────────────────────────
function FloatingPetal({ style }) {
  //                     ↑↑↑↑↑
  // "style" is a PROP — data passed in from the parent.
  // Think of props like arguments to a function.
  // The parent decides where the petal goes; this
  // component just draws it.

  return (
    <motion.div
      className="petal"
      style={style}
      animate={{
        y: [0, -18, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: style.animDuration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      🌸
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// 🏠 Entrance — The main landing section
//
// This is a "smart" component — it HAS state.
// It uses useState to decide whether to show
// the entrance or move on to the story.
// ─────────────────────────────────────────────
function Entrance({ onEnter, partnerName, yourName }) {
  //                ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
  // These are PROPS from the parent (App.js).
  // - onEnter: a function to call when the button is clicked
  // - partnerName / yourName: strings to display

  // ── useState ──
  // useState(false) means: "start with the value false"
  // isHovered: the current value (true or false)
  // setIsHovered: the function to CHANGE that value
  //
  // Rule: NEVER change state directly (isHovered = true ❌)
  //       ALWAYS use the setter (setIsHovered(true) ✅)
  const [isHovered, setIsHovered] = useState(false);

  // Petal data — positions & sizes for our floating petals
  const petals = [
    { top: '10%', left: '5%',  fontSize: '1.5rem', animDuration: 3.2 },
    { top: '20%', right: '8%', fontSize: '1.2rem', animDuration: 2.8 },
    { top: '60%', left: '3%',  fontSize: '1.8rem', animDuration: 3.5 },
    { top: '75%', right: '6%', fontSize: '1.3rem', animDuration: 2.5 },
    { top: '40%', left: '12%', fontSize: '1rem',   animDuration: 4.0 },
    { top: '50%', right: '15%',fontSize: '1.6rem', animDuration: 3.0 },
    { top: '85%', left: '20%', fontSize: '1.1rem', animDuration: 2.7 },
    { top: '15%', left: '45%', fontSize: '1.4rem', animDuration: 3.8 },
  ];

  return (
    <motion.section
      className="entrance"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* Render each petal by passing its style as a PROP */}
      {petals.map((style, index) => (
        // 🔑 "key" is required when rendering a list in React
        // It helps React track which item is which
        <FloatingPetal key={index} style={style} />
        //                          ↑↑↑↑↑↑↑↑↑↑↑
        // We pass "style" as a prop to FloatingPetal
        // FloatingPetal receives it as { style } in its arguments
      ))}

      <div className="entrance-content">
        {/* Decorative line */}
        <motion.div
          className="divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <motion.p
          className="entrance-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          a love story
        </motion.p>

        <motion.h1
          className="entrance-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {yourName} <span className="ampersand">&</span> {partnerName}
        </motion.h1>
        {/*            ↑↑↑↑↑↑↑↑ ↑↑↑↑↑↑↑↑↑↑↑↑↑
          * These are PROPS from App.js!
          * We just display whatever the parent gave us.
        */}

        <motion.p
          className="entrance-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Two beautiful years 
        </motion.p>

        <motion.div
          className="divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        />

        {/* ── Button using isHovered state ── */}
        <motion.button
          className={`enter-button ${isHovered ? 'hovered' : ''}`}
          //                         ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
          // We conditionally add a CSS class based on state.
          // This is called a "ternary operator":
          //   condition ? "value if true" : "value if false"

          onMouseEnter={() => setIsHovered(true)}
          //                   ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
          // When mouse enters: set isHovered to TRUE

          onMouseLeave={() => setIsHovered(false)}
          // When mouse leaves: set isHovered back to FALSE

          onClick={onEnter}
          //        ↑↑↑↑↑↑↑
          // This calls the function our PARENT gave us via props.
          // We don't know what it does — the parent decides!
          // This is how children "talk back up" to parents.

          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          whileTap={{ scale: 0.97 }}
        >
          Open Our Story
          <span className="button-arrow"> →</span>
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Entrance;
