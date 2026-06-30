import { useState, useRef } from "react";
import "./App.css";
import HarlequinPattern from "./HarlequinPattern";

function App() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    function plus(e) {
      e.preventDefault();
      const inputVal = inputRef.current.value;
      const newResult = result + Number(inputVal);
      setResult(newResult);
    }

    function minus(e) { 
      e.preventDefault();
      const inputVal = inputRef.current.value;
      const newResult = result - Number(inputVal);
      setResult(newResult); 
    }
 
    function times(e) { 
      e.preventDefault();
      const inputVal = inputRef.current.value;
      const newResult = result * Number(inputVal);
      setResult(newResult); 
    }
  
    function divide(e) { 
      e.preventDefault();
      const inputVal = Number(inputRef.current.value);

      if (inputVal === 0) {
        alert("Cannot divide by zero");
        return;
      }

      setResult(result / inputVal);
    }
 
    function resetInput(e) { 
      e.preventDefault()
      inputRef.current.value = ""
    }; 
  
    function resetResult(e) { 
      e.preventDefault();
      setResult((0));
    }
 
  return (
    <div className="App">
      {/* Background pattern. Keep exactly ONE variant uncommented. */}

      {/* Default look */}
      <HarlequinPattern />

      {/* Larger, sparser pattern */}
      {/* <HarlequinPattern cols={12} rows={12} scale={2} cellSize="10vmin" /> */}

      {/* Dense, small symbols */}
      {/* <HarlequinPattern cols={40} rows={40} scale={1} cellSize="4vmin" /> */}

      {/* Custom symbols and colors */}
      {/* <HarlequinPattern symbols={['(', ')', '^', 'π', '∞']} shapeColor="#90cdf4" background="#1a202c" /> */}

      {/* Shape: "square" or "diamond" */}
      {/* <HarlequinPattern shape="square" scale={1} /> */}
      {/* <HarlequinPattern shape="diamond" /> */}

      <form>
        <p ref={resultRef} className="result">{result}</p>
        <input
          pattern="[0-9]*" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        <div className="buttons">
          <button onClick={plus}>add</button>
          <button onClick={minus}>minus</button>
          <button onClick={times}>times</button>
          <button onClick={divide}>divide</button>
          <button onClick={resetInput} className="reset">Reset Input</button>
          <button onClick={resetResult} className="reset">Reset Result</button>
        </div>
      </form> 
    </div> 
  ); 
} 
 
export default App;