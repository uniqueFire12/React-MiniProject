// import Random from "./random";
import "./App.css";
import { useState } from "react";
function App() {
  let [counter, setCounter] = useState(12);

  let addValue = () => {
    if(counter < 30)
      setCounter(counter + 1);
  }

  let removeValue = () => {
    if(counter > 0)
      setCounter(counter - 1);
  }

  return (
    <>
      <div className="card">
        <h1>React App</h1>
        <h2>Counter value: {counter}</h2>

        <button
        onClick={addValue}
        >Add value</button>

        <button
        onClick={removeValue}
        >Remove value</button>

        <h3>Final Value: {counter}</h3>
      </div>
      
    </> 
  );
}

export default App;
