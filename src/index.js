import React from 'react';
import ReactDOM from 'react-dom';
import SuperBoard from './game_board'
import './index.css';

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        let squares = [];
        for (let index = 0; index < 9; index++) {
            squares[index] = Array(9).fill(null);
        }
        this.state = {
            history: [{
                stepPos: [-1, -1],
                squares: squares,
                boards: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    handleClick(i, j) {
        console.log(i, j)
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const boards = current.boards.slice();
        const squares_0_i = current.squares.slice(0, i);
        let squares_i = current.squares[i].slice();
        const squares_i_9 = current.squares.slice(i + 1, 9);

        // Move validation
        if (squares_i[j]) {
            return;
        };

        const currSqrIdx = current.stepPos[1];
        if (this.state.stepNumber && currSqrIdx !== i && boards[currSqrIdx] == null) {
            return;
        }

        // Make the move
        squares_i[j] = this.state.xIsNext ? 'X' : 'O';
        boards[i] = calculateWinner(squares_i);
        if (boards[i]) {
            squares_i = Array(9).fill(boards[i])
        }

        this.setState({
            history: history.concat([{
                stepPos: [i, j],
                squares: [...squares_0_i, squares_i, ...squares_i_9],
                boards: boards,
            }]),
            stepNumber: this.state.stepNumber + 1,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(move) {
        this.setState({
            stepNumber: move,
            xIsNext: (move % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.boards);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status = (winner) ?
            'Winner: ' + winner :
            'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
            <div className="game">
                <div className="game-board">
                    <SuperBoard
                        squares={current.squares}
                        boards={current.boards}
                        onClick={(i, j) => this.handleClick(i, j)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
