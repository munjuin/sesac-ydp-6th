import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Practice3 extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <div>{text}</div>
        <button
          onClick={() => {
            console.log(valid);
          }}
        >
          콘솔 메세지
        </button>
      </div>
    );
  }

  static defaultProps = {
    text: "*기본 text props*",
  };

  static propTypes = {
    text: PropTypes.string,
  };
}
