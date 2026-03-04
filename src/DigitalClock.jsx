import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const getSLTimeParts = () => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Colombo",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    return formatter.formatToParts(time);
  };

  const parts = getSLTimeParts();
  const timeString = `${parts[0].value}:${parts[2].value}:${parts[4].value}`;
  const meridian = parts[6].value;

  const dateString = time.toLocaleDateString("en-GB", {
    timeZone: "Asia/Colombo",
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="clock-wrapper">
      <div className="glass-panel">
        <div className="hud-header">
          <span className="location">SYSTEM: COLOMBO_SL</span>
          <span className="status-pulse"></span>
        </div>

        <div className="date-row">{dateString.toUpperCase()}</div>

        <div className="time-row">
          <span className="main-time">{timeString}</span>
          <span className="meridian">{meridian}</span>
        </div>

        <div className="hud-footer">UTC +05:30 | STABLE_CONNECTION</div>
        <div className="glitch-scanline"></div>
      </div>
    </div>
  );
}

export default DigitalClock;
