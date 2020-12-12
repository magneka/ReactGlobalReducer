import React, { useContext } from "react";
import Store, { Context } from "./Store";
import SetUserName from "./SetUserName";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Store>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <SetUserName />
      </Store>
    </div>
  );
}
