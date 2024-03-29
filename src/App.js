import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult( Number(inputRef2.current.value) + Number(inputRef1.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult( Number(inputRef2.current.value) - Number(inputRef1.current.value));
    // Add the code for the minus function
  }

  function times(e) {
    // Add the code for the plus function
    e.preventDefault();
    setResult( Number(inputRef2.current.value) * Number(inputRef1.current.value));
  }

  function divide(e) {
    // Add the code for the divide function
    e.preventDefault();
    setResult( Number(inputRef2.current.value) / Number(inputRef1.current.value));
  }

  function resetInput(e) {
    // Add the code for the resetInput function
    e.preventDefault();
    inputRef1.current.value = null;
    inputRef2.current.value = null;
  }

  function resetResult(e) {
    // Add the code for the resetResult function
    e.preventDefault();
    setResult((result) => 0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result /* add the value of the current total */}</p>
        <input
          pattern="[0-9]"
          ref={inputRef1}
          type="number"
          placeholder="Type a number"
        />
        <input
          pattern="[0-9]"
          ref={inputRef2}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
        {/* Add the subtract button */}
        {/* Add the multiply button */}
        {/* Add the divide button */}
        {/* Add the resetInput button */}
        {/* Add the resetResult button */}
      </form>
    </div>
  );
}

export default App;
