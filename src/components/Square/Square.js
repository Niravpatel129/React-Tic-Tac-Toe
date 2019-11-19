import React, { Component } from "react";
import "./Square.scss";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }

  handleOnClick = () => {
    const squares = this.state.squares.slice();
    this.setState({ value: "X" });
  };

  render() {
    return (
      <div className="squareComponent">
        <button className="square" onClick={this.handleOnClick}>
          {this.state.value}
        </button>
      </div>
    );
  }
}

export default Square;
