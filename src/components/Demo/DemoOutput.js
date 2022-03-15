import React from "react";

export default function DemoOutput(props) {
  console.log("evaluating the demooutput");
  return <p>{props.show ? "This is a paragraph" : ""}</p>;
}
