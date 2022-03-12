import React, { useState } from "react";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleClickButton = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <button onClick={handleClickButton}>Click me</button>
      {showParagraph && <p>The state has been clicked positive</p>}
    </div>
  );
}

export default App;
