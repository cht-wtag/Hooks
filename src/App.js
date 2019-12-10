import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import HookCounterTwo from "./components/HookCounterTwo";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterFour from "./components/HookCounterFour";
// import EffectHook from "./components/EffectHook";
// import HookMouse from "./components/HookMouse";
// import MouseContainer from "./components/MouseContainer";
// import IntervalHookCounter from "./components/IntervalHookCounter";
// import DataFetching from "./components/DataFetching";
// //import ComponentC from "./components/contexts/ComponentC";
// import Counterone from "./components/reducers/Counterone";
// import CounterTwo from "./components/reducers/CounterTwo";
// import CounterThree from "./components/reducers/CounterThree";
// import ComponentE from "./components/contexts/ComponentE";
import ComponentA from "./components/reducers/ComponentA";
//import ComponentB from "./components/reducers/ComponentB";
import ComponentC from "./components/reducers/ComponentC";
import { red } from "ansi-colors";
import DataFetching1 from "./components/reducers/fetchers/DataFetching1";

export const countContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {

  return (
    <div className="App">
      <DataFetching1 />

    </div>

  );
}

export default App;
