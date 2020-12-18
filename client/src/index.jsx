const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [],
           
            
        }
        this.squaresRender = this.squaresRender.bind(this);
    }
    
    //below renders the squares based on the board state
    squaresRender() {
        //make a table
        console.log('rendering squares');
        let boardElement = [];
        
        for (let i = 0; i < 6; i ++) {
            //now push 7 tr into
            boardElement.push(<tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr>)
      
            
        };
  
            this.setState({board: boardElement});
            console.log('board element', boardElement);

    }
    componentDidMount() {
        this.squaresRender();
    }

    render() {
       
        return <div>
            test test test
            <table>
                <tbody>
                {this.state.board}
                </tbody>
            </table>
            
           
        </div>
    }
}
ReactDOM.render(<App/>, document.getElementById("app"));