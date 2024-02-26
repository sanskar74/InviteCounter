import React, { useState, useEffect } from "react";
import "./styles.css";

function InviteCounter() {
  // Initialize state with value from localStorage or 0
  const [count, setCount] = useState(
    () => Number(localStorage.getItem("count")) || 0
  );

  // Use useEffect to update localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h2>Invites: {count}</h2>
      <div className="button-container">
        <button className="counter-button increment" onClick={increment}>
          Plus
        </button>
        <button className="counter-button decrement" onClick={decrement}>
          Minus
        </button>
        <button className="counter-button reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default InviteCounter;
