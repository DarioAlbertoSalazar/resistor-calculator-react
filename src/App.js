import "./App.css";
import Select from "./components/Select";
import { useState, useEffect } from "react";
import { CalculateOhmValue } from "./utils/calculator";

function App() {
  const [bandA, setBandA] = useState("black");
  const [bandB, setBandB] = useState("black");
  const [bandC, setBandC] = useState("black");
  const [bandD, setBandD] = useState("black");
  const [colors, setColors] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    getColors();
  }, []);

  const getColors = async () => {
    const response = await fetch("http://localhost:5002");
    const responseColors = await response.json();
    setColors(responseColors);
    setOptions(
      Object.keys(responseColors).map((color) => ({
        label: color,
        value: responseColors[color].value,
      }))
    );
  };

  const result = CalculateOhmValue(bandA, bandB, bandC, bandD, colors);

  return (
    <div className="App">
      <h1>4 Band Resistor Color Code Calculator</h1>
      <Select options={options} value={bandA} onChange={(v) => setBandA(v)} />
      <Select options={options} value={bandB} onChange={(v) => setBandB(v)} />
      <Select options={options} value={bandC} onChange={(v) => setBandC(v)} />
      <Select options={options} value={bandD} onChange={(v) => setBandD(v)} />
      <h1>
        {result.result} Ohms {result.tolerance}%
      </h1>

      <div className="resistance">
        <div className="banda bandaA" style={{ backgroundColor: bandA }}></div>
        <div className="banda bandaB" style={{ backgroundColor: bandB }}></div>
        <div className="banda bandaC" style={{ backgroundColor: bandC }}></div>
        <div className="banda bandaD" style={{ backgroundColor: bandD }}></div>
      </div>
    </div>
  );
}

export default App;
