import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DoorClass from "./components/Door_Class/Door";

import DoorFunction from "./components/Door_Class/Door";

ReactDOM.render(
  <React.StrictMode>
    <>
      <DoorClass currentDate={new Date().getDate()} />
      <DoorFunction currentDate={8} />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
