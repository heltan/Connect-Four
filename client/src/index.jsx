const React = require('react');
const ReactDOM = require('react-dom');
import BoardRender from './components/boardRender.jsx';
import helpers from './components/gameLogic.jsx';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPlayer: 'X',
            board: [], 
            played:[],
            gameStatus: null,
            column1:[0,0,0,0,0,0],
            column2:[0,0,0,0,0,0],
            column3:[0,0,0,0,0,0],
            column4:[0,0,0,0,0,0],
            column5:[0,0,0,0,0,0],
            column6:[0,0,0,0,0,0],
            column7:[0,0,0,0,0,0]
        }
        this.handlePieces = this.handlePieces.bind(this);
        this.checkWinner = this.checkWinner.bind(this);
        this.checkVertical = this.checkVertical.bind(this);
        this.loopCol = this.loopCol.bind(this);
    }
    //this is the onclick func on the column. when clicked we recieve the column to drop the piece
    handlePieces(column) {
   
        //only run this if the game status is null and nobody won yet
        if (!this.state.gameStatus) {
            console.log('handle piece', column);
            let columnToCheck = 'column'+column;
            let col = this.state[columnToCheck];
            //now loop backwards to find the last '0' row. we will insert X here
            for (let i = col.length-1; i >= 0; i--) {
                if (col[i]=== 0) {
                    col[i] = this.state.currentPlayer;
                    break;
                }
            }
            //now check for a winner on each click
            this.checkWinner();
            //if no winner, change player
            //now change current player to 'O'
            if (this.state.currentPlayer === 'X') {
                this.setState({currentPlayer:'O'});
            } else {
                this.setState({currentPlayer: 'X'})
            }
        }   
    }
    //checks every column for a vertical winner
    checkVertical() {
        //first loop through every column which is 7
        for (let i = 1; i <= 7; i ++) {
            if (!this.state.gameStatus) {
                let column = "column" + i;
                let col = this.state[column];
                this.loopCol(col);
            }
        }
    
    }
    //function to check for a winner. will only check for each current player
    checkWinner() {
        let player = this.state.currentPlayer;
        //first go through all the columns looking for 4 in a row vertically
        this.checkVertical();
        //now check for horizontal winner
        let horizontalWinner = helpers.checkHorizontal(this.state.currentPlayer, this.state.column1, this.state.column2,this.state.column3, this.state.column4,
            this.state.column5, this.state.column6, this.state.column7);
            if (horizontalWinner) {
                this.setState({gameStatus: 'Winner is Player ' + this.state.currentPlayer});
            }
            

    }
    
    //helper function to loop through 1 given column, and find if winner
    loopCol(column) {
        let winArr = [];
        let player = this.state.currentPlayer;
        for (let i = column.length-1; i >= 0; i --) {
            if (winArr.length === 4) {
                console.log('winner arr is', winArr);
                this.setState({gameStatus: 'Winner is Player ' + player});
                break;
            }
                else if (column[i]=== player) {
                  
                    winArr.push(player);
                } else if (column[i]!== player ) {
                
                    winArr = [];
                }
            
        }
            
    }
   
    render() {
        return <div>
           
            Current Player: {this.state.currentPlayer}
            <br></br>
            <h2>{this.state.gameStatus}</h2>
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