const React = require('react');
const ReactDOM = require('react-dom');
import BoardRender from './components/boardRender.jsx';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPlayer: 'X',
            board: [], 
            played:[],
            column1:[0,0,0,0,0,0],
            column2:[0,0,0,0,0,0],
            column3:[0,0,0,0,0,0],
            column4:[0,0,0,0,0,0],
            column5:[0,0,0,0,0,0],
            column6:[0,0,0,0,0,0],
            column7:[0,0,0,0,0,0]
        }
        this.handlePieces = this.handlePieces.bind(this);
    }
    //this is the onclick func on the column. when clicked we recieve the column to drop the piece
    handlePieces(column) {
        console.log('handle piece', column);
        let columnToCheck = 'column'+column;
        let col = this.state[columnToCheck];
        //now loop backwards to find the last '0' row. we will insert X here
        let index;
        for (let i = col.length-1; i >= 0; i--) {
            if (col[i]=== 0) {
                col[i] = this.state.currentPlayer;
                break;
            }
        }
        //now pass the column back to state, for the board to render again
        console.log('column?', col);
        console.log('current state of columb', this.state[columnToCheck]);
        //now change current player to 'O'
        if (this.state.currentPlayer === 'X') {
            this.setState({currentPlayer:'O'});
        } else {
            this.setState({currentPlayer: 'X'})
        }
    }
    //function to check for a winner
   
    render() {
        return <div>
            Current Player: {this.state.currentPlayer}
            <table>
                <tbody>
                {this.state.board}
                </tbody>
            </table>
            <BoardRender c1={this.state.column1} c2={this.state.column2} c3={this.state.column3}
            c4={this.state.column4} c5={this.state.column5} c6={this.state.column6}
            c7={this.state.column7}
             handlePieces = {this.handlePieces}/>
        </div>
    }
}
ReactDOM.render(<App/>, document.getElementById("app"));