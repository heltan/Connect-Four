const React = require('react');
const ReactDOM = require('react-dom');

import BoardRender from './components/boardRender.jsx';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: [], 
        }
        
    }
    


    render() {
       
        return <div>
          
            <table>
                <tbody>
                {this.state.board}
                </tbody>
            </table>
            <BoardRender/>
            
           
        </div>
    }
}
ReactDOM.render(<App/>, document.getElementById("app"));