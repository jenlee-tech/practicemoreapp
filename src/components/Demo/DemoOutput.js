import React from "react";

function DemoOutput(props) {
  console.log("evaluating the demooutput");
  return <p>{props.show ? "This is a paragraph" : ""}</p>;
}

export default React.memo(DemoOutput);
