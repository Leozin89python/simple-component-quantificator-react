import React, { useState } from "react";

function Counter() {
  const [ counter, setCounter ] = useState(0);

  const handleDecrease = () => {
    return setCounter(counter -1)
  };

  const handleIncrease = () => {
     return setCounter(counter +1)
  };

  return (
    <div>
      <button onClick={handleIncrease}>Incrementar</button>
      <h2>contador:{counter}</h2>
      <button onClick={handleDecrease}>Decrementar</button>
    </div>
  );
}
export default Counter;