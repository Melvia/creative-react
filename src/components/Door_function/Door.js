import "./Door.css";
import gingerbread from "./../images/Gingerbread-Man.svg";
import React from "react";
import { Component } from "react";

function DoorFunction(props) {
  return (
    <main>
      <h1 className="title">Дверь для адвент-календаря</h1>
      <h2>
        {props.currentDate % 2 === 0
          ? "Сегодня четный день"
          : "Сегодня нечетный день"}{" "}
      </h2>
      <article className="present">
        <div className="present__pane">
          <h2 className="present__date">{props.currentDate}</h2>
        </div>
        <div className="present__content">
          {" "}
          <img src={gingerbread}></img>
        </div>
      </article>
    </main>
  );
}

export default DoorFunction;
