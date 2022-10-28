import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState();
  const [optConvert, setOptConvert] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSelectOption = (event) => {
    setOptConvert(event.target.value);
  };

  const handleConvert = () => {
    if (optConvert === "fahrenheit") {
      setResult((value - 32) * (5 / 9));
    } else {
      setResult(value - 273.15);
    }
  };

  return (
    <div className="App">
      <label>
        <input type="number" name="name" onChange={handleChange} />
      </label>
      <div>
        <select onChange={handleSelectOption}>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>
        <button onClick={handleConvert}>Convert</button>
      </div>
      <p>Result: {result} celsius</p>
    </div>
  );
}

export default App;
