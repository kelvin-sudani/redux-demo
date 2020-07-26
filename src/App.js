import React from "react";
import Details from "./components/Details";
import DetailsFN from "./components/DetailsFN";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Details />
      <DetailsFN />
    </div>
  );
}
