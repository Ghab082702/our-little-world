import CountUp from "react-countup";
import "./Stats.css";
import React, { useState, useEffect } from "react";

function Stats() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0, 
    days: 0,
    hours: 0, 
    minutes: 0, 
    seconds: 0,
  });

  return (
    <div>
      <h1> Two years in Numbers</h1>
    </div>
  );
}

export default Stats;
