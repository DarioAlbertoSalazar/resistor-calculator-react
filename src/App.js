import "./App.css";

import { useState } from "react";

import { CalculateOhmValue } from "./utils/calculator";

function App() {
  const [bandaA, setBandaA] = useState("black");
  const [bandaB, setBandaB] = useState("black");
  const [bandaC, setBandaC] = useState("black");
  const [bandaD, setBandaD] = useState("black");

  const calculateBackgroundColor = (bandaValue) => {
    const colorOption = colorValue.find((color) => color.label === bandaValue);
    return colorOption ? colorOption.label : "transparent";
  };

  const result = CalculateOhmValue(bandaA, bandaB, bandaC, bandaD);

  return (
    <div className="App">
      <Select options={options} value={bandaA} onChange={(v) => setBandaA(v)} />
      <Select options={options} value={bandaB} onChange={(v) => setBandaB(v)} />
      <Select options={options} value={bandaC} onChange={(v) => setBandaC(v)} />
      <Select options={options} value={bandaD} onChange={(v) => setBandaD(v)} />
      <h1>
        {result.result} Ohms {result.tolerance}%
      </h1>

      <div className='resistance'>
        <div
          className="banda bandaA"
          style={{ backgroundColor: calculateBackgroundColor(bandaA) }}
        ></div>
        <div
          className="banda bandaB"
          style={{ backgroundColor: calculateBackgroundColor(bandaB) }}
        ></div>
        <div
          className="banda bandaC"
          style={{ backgroundColor: calculateBackgroundColor(bandaC) }}
        ></div>
        <div
          className="banda bandaD"
          style={{ backgroundColor: calculateBackgroundColor(bandaD) }}
        ></div>
      </div>
    </div>
  );
}

export default App;

const options = [
  { label: "pink", value: "pink" },
  { label: "silver", value: "silver" },
  { label: "gold", value: "gold" },
  { label: "black", value: "black" },
  { label: "brown", value: "brown" },
  { label: "red", value: "red" },
  { label: "orange", value: "orange" },
  { label: "yellow", value: "yellow" },
  { label: "green", value: "green" },
  { label: "blue", value: "blue" },
  { label: "violet", value: "violet" },
  { label: "gray", value: "gray" },
  { label: "white", value: "white" },
];

const colorValue = [
  { label: "pink", value: -3 },
  { label: "silver", value: -2 },
  { label: "gold", value: -1 },
  { label: "black", value: 0 },
  { label: "brown", value: 1 },
  { label: "red", value: 2 },
  { label: "orange", value: 3 },
  { label: "yellow", value: 4 },
  { label: "green", value: 5 },
  { label: "blue", value: 6 },
  { label: "violet", value: 7 },
  { label: "gray", value: 8 },
  { label: "white", value: 9 },
];

function Select({ value, onChange, options }) {
  const changeOption = (e) => {
    onChange(e.target.value);
  };
  return (
    <select value={value} onChange={changeOption}>
      {options.map((option, i) => {
        const colorOption = colorValue.find(
          (color) => color.label === option.label
        );

        const colorValueToShow = colorOption ? colorOption.value : "";

        return (
          <option key={i} value={option.value}>
            {option.label} {colorValueToShow}
          </option>
        );
      })}
    </select>
  );
}
