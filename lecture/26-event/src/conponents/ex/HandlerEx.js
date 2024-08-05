import React, { Component } from "react";

export default class HandlerEx extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hello World",
      font: "검정색",
      color: "black",
      visible: "사라저라",
      display: "block",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button
          onClick={() => {
            this.setState({ title: "Goodbye World" });
          }}
        >
          클릭
        </button>

        <h1 style={{ color: this.state.color }}>{this.state.font} 글씨</h1>
        <button
          onClick={() => {
            this.setState({ font: "빨간색", color: "red" });
          }}
        >
          빨간색
        </button>

        <button
          onClick={() => {
            this.setState({ font: "파란색", color: "blue" });
          }}
        >
          파란색
        </button>

        <h1 style={{ display: this.state.display }}>안녕하세요</h1>
        <button
          onclick={() => {
            this.setState({ visible: "나타나라", display: "none" });
          }}
        >
          {this.state.visible}
        </button>
      </div>
    );
  }
}
