import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  
useEffect( () => {
    const tick = () => {
    setCount(prev=>prev + 1);
  };
    console.log("hocche");
    const interval = setInterval(tick,1000);
    return () => {
        clearInterval(interval);
    }
},[]) 

  return (
  <div>
      <p>hello</p>
  {count}
  </div>);
}
export default IntervalHookCounter;
