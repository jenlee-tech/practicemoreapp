import React, { useState } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleClickButton = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>The state has been clicked positive</p>}
      <Button onClick={handleClickButton}>Click Me</Button>
    </div>
  );
}

export default App;
