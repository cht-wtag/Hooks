import React, { useState, useEffect } from "react";

function EffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    //runs after every render
    console.log("use effect updating titile");
    document.title = `you clicked ${count} times`;
  },[count]);
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}> Count{count} </button>
    </div>
  );
}
export default EffectHook;
