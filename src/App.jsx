import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import pngImage from "./report-01.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img src={pngImage} alt="pcr-medical-report" />
    </div>
  );
}

export default App;
