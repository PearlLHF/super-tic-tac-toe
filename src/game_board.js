import React from 'react';
import Board from './components'
import './index.css';

class SuperBoard extends React.Component {
    renderBoard(i) {
        return <Board
            value={this.props.boards[i]}
            squares={this.props.squares[i]}
            onClick={(j) => this.props.onClick(i, j)}
        />;
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

export default SuperBoard;
