import React, { useState } from "react";

function HookCounterFour() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, 
        value: Math.floor(Math.random() * 10) + 1 
      }
    ]);
  };
  const printIt= (obj, index) =>
  {
    return(<li key={index}>{obj.value} {obj.id}</li>);
  }
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(printIt)}
      </ul>
    </div>
  );
}
export default HookCounterFour;
