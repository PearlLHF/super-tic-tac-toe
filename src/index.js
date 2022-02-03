import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
    return (
        <button className='square' onClick={function () { console.log(props.board); }}>
            {props.board}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square board={this.props.value} value={i} />;
    }

    render() {
        return (
            <div className='board' >
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

class SuperBoard extends React.Component {
    renderBoard(i) {
        return <Board value={i} />;
    }

    render() {
        return (
            <div>
                <div className="super-board-row">
                    {this.renderBoard(0)}
                    {this.renderBoard(1)}
                    {this.renderBoard(2)}
                </div>
                <div className="super-board-row">
                    {this.renderBoard(3)}
                    {this.renderBoard(4)}
                    {this.renderBoard(5)}
                </div>
                <div className="super-board-row">
                    {this.renderBoard(6)}
                    {this.renderBoard(7)}
                    {this.renderBoard(8)}
                </div>
            </div>
        );
    }
}

// function calculateWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }
//     return null;
// }

class Game extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         history: [{
    //             squares: Array(9).fill(null),
    //         }],
    //         stepNumber: 0,
    //         xIsNext: true,
    //     };
    // }

    // handleClick(i) {
    //     const history = this.state.history.slice(0, this.state.stepNumber + 1);
    //     const current = history[history.length - 1];
    //     const squares = current.squares.slice();
    //     if (calculateWinner(squares) || squares[i]) {
    //         return;
    //     }
    //     squares[i] = this.state.xIsNext ? 'X' : 'O';
    //     console.log(squares[i])
    //     this.setState({
    //         history: history.concat([{
    //             squares: squares,
    //         }]),
    //         stepNumber: this.state.stepNumber + 1,
    //         xIsNext: !this.state.xIsNext,
    //     });
    // }

    // jumpTo(step) {
    //     this.setState({
    //         stepNumber: step,
    //         xIsNext: (step % 2) === 0,
    //     });
    // }

    render() {
        // const history = this.state.history;
        // const current = history[this.state.stepNumber];
        // const winner = calculateWinner(current.squares);

        // const moves = history.map((step, move) => {
        //     const desc = move ?
        //         'Go to move #' + move :
        //         'Go to game start';
        //     return (
        //         <li key={move}>
        //             <button onClick={() => this.jumpTo(move)}>{desc}</button>
        //         </li>
        //     );
        // });

        // let status;
        // if (winner) {
        //     status = 'Winner: ' + winner;
        // }
        // else {
        //     status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        // }

        return (
            <div className="game">
                <div className="game-board">
                    <SuperBoard
                    // squares={current.squares}
                    // onClick={(i) => this.handleClick(i)}
                    />
                </div>
                {/* <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div> */}
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
