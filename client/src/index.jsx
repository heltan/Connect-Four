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
        this.testTie = this.testTie.bind(this);
        this.testVertical = this.testVertical.bind(this);
        this.testHorizontal = this.testHorizontal.bind(this);
        this.testDiagonal = this.testDiagonal.bind(this);
    }
    //test function to test the board for ties
    testTie() {
        let tieColumn = ['O', 'X','O','X','O','X']
        for (let i = 1; i < 8; i++) {
            let column = ("column" + i).toString();
            if (i === 4) {
                this.setState({[column]: ['X','O','X','O','X', 'O']});
            }
            this.setState({[column]: tieColumn});
         }
        
    }
    //test function for vertical win
    testVertical() {
        this.setState({column1: ['X','X','X','X', 0,0]}, this.checkWinner());
        return;  
    }
    //test for horizontal win
    testHorizontal() {
        let arr = [0,0,0,0,0,'X'];
        for (let i = 0; i <= 4; i++) {
            let column = ("column" + i).toString();
            this.setState({[column]:arr});
        } 
    }
    testDiagonal() {
        for (let i = 0; i <= 4; i++) {
            let arr = [0,0,0,0,0,0];
            let column = ("column" + i).toString();
            arr[i] = 'X';
            this.setState({[column]:arr});
        } 
    }
    componentDidMount() {
        //below are the tests. need to click on any column to place a new piece, for below checks to run

        //below is the test for ties. uncomment to use.
        // this.testTie();
        // this.checkWinner();

        //below is test for vertical win.
        //this.testVertical();

        //test for horizontal win
        // this.testHorizontal();
        // this.checkWinner();

        //test for diagonal win
        // this.testDiagonal();
        // this.checkWinner();   
    }
    //this is the onclick func on the column. when clicked we recieve the column to drop the piece
    handlePieces(column) {
        //only run this if the game status is null and nobody won yet
        if (!this.state.gameStatus) {
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
    //function to check for a winner. will only check for each current player
    checkWinner() {
        //first go through all the columns looking for 4 in a row vertically
        let verticalWinner = helpers.checkVertical(this.state.currentPlayer, 
            this.state.column1, this.state.column2,this.state.column3, this.state.column4,
            this.state.column5, this.state.column6, this.state.column7);
            if (verticalWinner) {
                this.setState({gameStatus: 'Winner is Player ' + this.state.currentPlayer});
            }
        //now check for horizontal winner
        let horizontalWinner = helpers.checkHorizontal(this.state.currentPlayer, 
            this.state.column1, this.state.column2,this.state.column3, this.state.column4,
            this.state.column5, this.state.column6, this.state.column7);
            if (horizontalWinner) {
                this.setState({gameStatus: 'Winner is Player ' + this.state.currentPlayer});
            }
            //there can only be a vertical winner for up to column 4 
        let verticalWinnerDown = helpers.checkDiagonalDown(this.state.currentPlayer, this.state.column1, 
            this.state.column2,this.state.column3, this.state.column4,
            this.state.column5, this.state.column6, this.state.column7);
            if (verticalWinnerDown) {
                this.setState({gameStatus: 'Winner is Player ' + this.state.currentPlayer});
            }
            let verticalWinnerUp = helpers.checkDiagonalUp(this.state.currentPlayer, this.state.column1, 
                this.state.column2,this.state.column3, this.state.column4,
                this.state.column5, this.state.column6, this.state.column7);
                if (verticalWinnerUp) {
                    this.setState({gameStatus: 'Winner is Player ' + this.state.currentPlayer});
                }
            let tieCheck = helpers.checkTie(this.state.column1, 
                this.state.column2,this.state.column3, this.state.column4,
                this.state.column5, this.state.column6, this.state.column7);
                if (tieCheck) {
                    this.setState({gameStatus: "TIE!! There is no winner"});
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