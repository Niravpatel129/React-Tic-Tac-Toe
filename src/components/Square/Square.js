import React, { Component } from "react";
import "./Square.scss";

class Square extends Component {
  render() {
    return (
      <div className="squareComponent">
        <button className="square" onClick={this.props.onClick}>
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default Square;
