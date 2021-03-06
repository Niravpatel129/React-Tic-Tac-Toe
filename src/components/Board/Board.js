import React, { Component } from "react";
import "./Board.scss";

import Square from "../Square/Square";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isNext: true,
      winner: null
    };
  }

  handleClick(i) {
    // slice is better because it dosen't add a reference but makes a copy
    const squares = this.state.squares.slice();
    squares[i] = this.state.isNext ? "X" : "O";
    if (!this.calculateWinner(this.state.squares)) {
      this.state.squares[i] ||
        this.setState({
          squares: squares,
          isNext: !this.state.isNext
        });
    }
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const a = lines[i][0];
      const b = lines[i][1];
      const c = lines[i][2];

      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status = "Next player: " + (this.state.isNext ? "X" : "O");
    if (winner) {
      status = "Winner: " + winner + " - Refresh to play again";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
