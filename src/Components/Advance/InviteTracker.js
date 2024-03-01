import React, { useState, useEffect } from "react";
import "./InviteTracker.css";

function InviteTracker() {
  const [dailyCount, setDailyCount] = useState(
    () => Number(localStorage.getItem("dailyCount")) || 0
  );
  const [weeklyCount, setWeeklyCount] = useState(
    () => Number(localStorage.getItem("weeklyCount")) || 0
  );
  const [monthlyCount, setMonthlyCount] = useState(
    () => Number(localStorage.getItem("monthlyCount")) || 0
  );

  useEffect(() => {
    localStorage.setItem("dailyCount", dailyCount);
    localStorage.setItem("weeklyCount", weeklyCount);
    localStorage.setItem("monthlyCount", monthlyCount);
  }, [dailyCount, weeklyCount, monthlyCount]);

  const incrementDaily = () => {
    setDailyCount(dailyCount + 1);
    setWeeklyCount(weeklyCount + 1);
    setMonthlyCount(monthlyCount + 1);
  };

  const incrementTen = () => {
    setDailyCount(dailyCount + 10);
    setWeeklyCount(weeklyCount + 10);
    setMonthlyCount(monthlyCount + 10);
  };
  const incrementTwenty = () => {
    setDailyCount(dailyCount + 25);
    setWeeklyCount(weeklyCount + 25);
    setMonthlyCount(monthlyCount + 25);
  };
  const decrementTen = () => {
    setDailyCount(dailyCount - 10);
    setWeeklyCount(weeklyCount - 10);
    setMonthlyCount(monthlyCount - 10);
  };
  const resetDaily = () => {
    setDailyCount(0);
  };

  const resetWeekly = () => {
    setWeeklyCount(0);
  };

  const resetMonthly = () => {
    setMonthlyCount(0);
  };

  return (
    <div className="InviteTracker">
      <h2>LinkedIn Invite Tracker</h2>
      <div className="button-container">
        <h3>Daily Count: {dailyCount}</h3>
        <button className="counter-button increment" onClick={incrementDaily}>
          Send Invite
        </button>
        <button className="counter-button reset" onClick={resetDaily}>
          Rset Daily
        </button>
      </div>
      <div className="button-container">
        <h3>Weekly Count: {weeklyCount}</h3>
        <button className="counter-button reset" onClick={resetWeekly}>
          Rset Weekly
        </button>
      </div>
      <div className="button-container">
        <h3>Monthly Count: {monthlyCount}</h3>
        <button className="counter-button reset" onClick={resetMonthly}>
          Rset Monthly
        </button>
      </div>
      <div className="Addbutton-container">
        <button className="counter-button increment " onClick={incrementTen}>
          +10
        </button>
        <button className="counter-button increment " onClick={incrementTwenty}>
          +25
        </button>
        <button className="counter-button reset " onClick={decrementTen}>
          -10
        </button>
      </div>
    </div>
  );
}

export default InviteTracker;
