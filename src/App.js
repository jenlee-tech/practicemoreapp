import React, { useState, useCallback } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleClickButton = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []); //useCallBack needs a dependency.  When useCallback is used, the same function is used in memory and not re-evaluated everytime the state changes - it is similiar to the memo method where the prop is not re-evaluated.

  console.log("re-evaluating the entire function");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={handleClickButton}>Click Me</Button>
      <DemoOutput show={false}></DemoOutput>
    </div>
  );
}

export default App;
