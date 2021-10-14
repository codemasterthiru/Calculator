import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { Calculator } from "./Calculator";

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
