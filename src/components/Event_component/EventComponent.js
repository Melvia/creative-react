import "./event_component.css";
import React from "react";
import { Component } from "react";

class EventComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "black", fontSize: 14, bgColor: 'white' };
    this.handleColor = this.handleColor.bind(this);
    this.handleFontSize = this.handleFontSize.bind(this);
    this.handleBackground = this.handleBackground.bind(this);
  }

  handleColor(e) {
    this.setState({ color: e.target.value });
  }

  handleFontSize(e) {
    console.log("меняем размер");
    this.setState({ fontSize: e.target.value });
  }

  handleBackground() {
    console.log("меняем фон");
    
    this.setState({ bgColor: this.state.bgColor === 'white' ? 'black' : 'white' });
  }

  render() {
    return (
      <main className="index-main" style={{backgroundColor : this.state.bgColor}}>
        <div className="controls">
          <div className="container">
            <div className="color-filters">
              <label style={{ color: this.state.color}}>
                Цвет текста:
                <select
                  className="filter color-setting"
                  name="font-color"
                  value={this.state.color}
                  onChange={this.handleColor}
                >
                    <option value="black">Чёрный</option>
                    <option value="white">Белый</option>
                    <option value="ghostwhite">Светло-серый</option>
                    <option value="pink">Розовый</option>
                    <option value="darkred">Тёмно-красный</option>
                    <option value="darkorange">Оранжевый</option>
                    <option value="saddlebrown">Коричневый</option>
                    <option value="gold">Золотой</option>
                    <option value="greenyellow">Салатовый</option>
                    <option value="forestgreen">Зелёный</option>
                    <option value="aquamarine">Аквамарин</option>
                    <option value="lightskyblue">Небесно-голубой</option>
                    <option value="lightsteelblue">Серо-голубой</option>
                    <option value="darkblue">Тёмно-синий</option>
                    <option value="indigo">Индиго</option>
                    <option value="mediumpurple">Фиолетовый</option>
                    <option value="purple">Пурпурный</option>
                </select>
              </label>
            </div>
            <label style={{ color: this.state.color}}>
              Размер текста (
              <output className="pixels">{this.state.fontSize}</output>px)
              <input
                className="size-setting"
                type="range"
                min="8"
                max="48"
                step="1"
                value={this.state.fontSize}
                onInput={this.handleFontSize}
              />
            </label>
            <button onClick={this.handleBackground}>Сменить фон</button>
          </div>
        </div>
        <article className="longread">
          <div className="container">
            <h1 style={{ color: this.state.color}} >Проверка текста</h1>
            <p
              style={{ color: this.state.color,
                fontSize: this.state.fontSize  + 'px'}}
            >
              Может ли эрудит абстрактно метафизировать критерии утопического
              субъективизма?
            </p>
          </div>
        </article>
      </main>
    );
  }
}

export default EventComponent;
