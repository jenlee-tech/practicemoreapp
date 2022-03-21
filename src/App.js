import React, { useState, useCallback } from "react";
import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const handleClickButton = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  //useCallBack needs a dependency.  When useCallback is used, the same function is used in memory and not re-evaluated everytime the state changes (this includes variables too - unless you place a dependency which will recreate the function) - it is similiar to the memo method where the prop is not re-evaluated. (primitive reference concept and closures)

  console.log("re-evaluating the entire function");

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={handleClickButton}>Toggle Paragraph</Button>

      <DemoOutput show={showParagraph}></DemoOutput>
    </div>
  );
}

export default App;
