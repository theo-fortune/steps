import React, { useState } from "react";

const Challenge = () => {
  const [count, setCount] = useState(0);
  const subtractCount = () => {
    setCount((c) => count - step);
  };
  const addCount = () => {
    setCount((c) => count + step);
  };

  const [step, setStep] = useState(1);
  const subtractStep = () => {
    setStep((s) => step - 1);
  };
  const addStep = () => {
    setStep((s) => step + 1);
  };

  // *Get day name
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date().getDay();
  const dayName = dayNames[day];
  console.log(dayName);

  // *Get month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = new Date().getMonth();
  const monthName = monthNames[month];
  console.log(monthName);

  // *Get date
  const date = new Date().getDate()

  // *Get year
  const year = new Date().getFullYear()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <div className="step">
        <button onClick={subtractStep}>-</button>
        Step: {step}
        <button onClick={addStep}>+</button>
      </div>
      <div className="count">
        <button onClick={subtractCount}>-</button>
        Count: {count}
        <button onClick={addCount}>+</button>
      </div>
      <p>Today is {dayName} {monthName} {date} {year}</p>
    </div>
  );
};

export default Challenge;
