import React from "react";
import { useState } from "react";
const SeasonDisplay = () => {
  const [counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={incCounter}>Increase</button>
    </div>
  );
};

export default SeasonDisplay;
