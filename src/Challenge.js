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

  // // *Get day name
  // const dayNames = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  // const day = new Date().getDay();
  // const dayName = dayNames[day];
  // console.log(dayName);

  // // *Get month name
  // const monthNames = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // const month = new Date().getMonth();
  // const monthName = monthNames[month];
  // console.log(monthName);

  // // *Get year
  // const year = new Date().getFullYear();

  // // *Get current date
  // const currentDate = new Date();
  // console.log(currentDate);

  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  // const formattedDate = currentDate.toLocaleDateString(undefined, options);
  // console.log(formattedDate);
  // const formattedDate = date.toLocaleDateString(undefined, options)

  //! Get Fake Date
  const date = new Date();
  console.log(date);
  date.setDate(date.getDate() + count)

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
      <p>
        <span>{count === 0 ? "Today is:" : count > 0 ? `${count} days from today is` : `${count} days ago was`}</span> &nbsp;
        <span>{date.toDateString()}</span>
        
      </p>
    </div>
  );
};

export default Challenge;
