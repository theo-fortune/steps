import React, { useState } from "react";

const Challenge = () => {
  const [count, setCount] = useState(1);
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
        Step: {step}<button onClick={addStep}>+</button>
      </div>
      <div className="count">
        <button onClick={subtractCount}>-</button>
        Count: {count}
        <button onClick={addCount}>+</button>
      </div>
    </div>
  );
};

export default Challenge;
